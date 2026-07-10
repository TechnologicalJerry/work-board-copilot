import { v4 as uuidv4 } from 'uuid';
import { NotFoundError } from '@boardpilot/errors';
import { buildPaginatedResult } from '@boardpilot/common';
import { PaginatedResult } from '@boardpilot/types';
import logger from '@boardpilot/logger';
import { INotificationRepository } from '../../domain/repositories/INotificationRepository';
import { INotificationDocument, NotificationChannel } from '../../domain/entities/Notification';
import { CacheService } from '../../infrastructure/cache/RedisClient';
import { getPrismaClient } from '../../infrastructure/database/PrismaClient';
import { EmailChannel, getEmailChannel } from '../../channels/EmailChannel';
import { SlackChannel, TeamsChannel } from '../../channels/SlackChannel';
import { WebhookChannel } from '../../channels/WebhookChannel';
import Handlebars from 'handlebars';

const UNREAD_COUNT_TTL = 60; // seconds

export interface NotificationTrigger {
  userId: string;
  organizationId: string;
  type: string;
  title: string;
  body: string;
  data?: Record<string, unknown>;
  channels?: NotificationChannel[];
  userEmail?: string;
  slackChannelId?: string;
  teamsWebhookUrl?: string;
}

export class NotificationService {
  private readonly cache = new CacheService('notification');
  private readonly prisma = getPrismaClient();
  private readonly emailChannel: EmailChannel = getEmailChannel();
  private readonly slackChannel = new SlackChannel();
  private readonly teamsChannel = new TeamsChannel();
  private readonly webhookChannel = new WebhookChannel();

  constructor(private readonly notificationRepo: INotificationRepository) {}

  async trigger(input: NotificationTrigger): Promise<INotificationDocument> {
    const channels = input.channels ?? ['in_app'];

    const notification = await this.notificationRepo.create({
      userId: input.userId,
      organizationId: input.organizationId,
      type: input.type,
      title: input.title,
      body: input.body,
      data: input.data ?? {},
      channels,
    });

    // Invalidate unread cache
    await this.cache.del(`unread:${input.userId}:${input.organizationId}`);

    // Dispatch to each channel asynchronously
    const dispatchPromises = channels.map((channel) =>
      this.dispatchChannel(channel, notification, input)
    );
    await Promise.allSettled(dispatchPromises);

    return notification;
  }

  private async dispatchChannel(
    channel: NotificationChannel,
    notification: INotificationDocument,
    input: NotificationTrigger
  ): Promise<void> {
    try {
      const notificationId = (notification._id as object).toString();

      if (channel === 'email' && input.userEmail) {
        // Try to find template
        const template = await this.prisma.notificationTemplate.findFirst({
          where: { type: input.type, channel: 'email', isActive: true },
        });

        let subject = input.title;
        let text = input.body;
        let html: string | undefined;

        if (template) {
          const vars = { ...input.data, title: input.title, body: input.body };
          if (template.subject) subject = Handlebars.compile(template.subject)(vars);
          text = Handlebars.compile(template.bodyText)(vars);
          if (template.bodyHtml) html = Handlebars.compile(template.bodyHtml)(vars);
        }

        await this.emailChannel.send({ to: input.userEmail, subject, text, html });
        await this.notificationRepo.updateDeliveryStatus(notificationId, 'email', 'sent');
      } else if (channel === 'slack' && input.slackChannelId) {
        await this.slackChannel.send({
          channel: input.slackChannelId,
          text: `*${input.title}*\n${input.body}`,
        });
        await this.notificationRepo.updateDeliveryStatus(notificationId, 'slack', 'sent');
      } else if (channel === 'teams' && input.teamsWebhookUrl) {
        await this.teamsChannel.send(input.teamsWebhookUrl, input.title, input.body);
        await this.notificationRepo.updateDeliveryStatus(notificationId, 'teams', 'sent');
      }
      // in_app: just persisted to MongoDB — nothing more needed
    } catch (error) {
      const notificationId = (notification._id as object).toString();
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      await this.notificationRepo.updateDeliveryStatus(notificationId, channel, 'failed', errorMsg);
      logger.warn({ channel, error }, 'Channel delivery failed');
    }
  }

  async list(
    userId: string,
    organizationId: string,
    page: number,
    limit: number,
    isRead?: boolean
  ): Promise<PaginatedResult<INotificationDocument>> {
    const { notifications, total } = await this.notificationRepo.list({
      userId,
      organizationId,
      isRead,
      page,
      limit,
    });
    return buildPaginatedResult(notifications, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
  }

  async markAsRead(notificationId: string, userId: string, organizationId: string): Promise<INotificationDocument> {
    const notification = await this.notificationRepo.markAsRead(notificationId, userId);
    if (!notification) {
      throw new NotFoundError('Notification', notificationId);
    }
    await this.cache.del(`unread:${userId}:${organizationId}`);
    return notification;
  }

  async markAllAsRead(userId: string, organizationId: string): Promise<number> {
    const count = await this.notificationRepo.markAllAsRead(userId, organizationId);
    await this.cache.del(`unread:${userId}:${organizationId}`);
    return count;
  }

  async dismiss(notificationId: string, userId: string, organizationId: string): Promise<void> {
    const deleted = await this.notificationRepo.softDelete(notificationId, userId);
    if (!deleted) {
      throw new NotFoundError('Notification', notificationId);
    }
    await this.cache.del(`unread:${userId}:${organizationId}`);
  }

  async getUnreadCount(userId: string, organizationId: string): Promise<number> {
    return this.cache.getOrSet(
      `unread:${userId}:${organizationId}`,
      () => this.notificationRepo.getUnreadCount(userId, organizationId),
      UNREAD_COUNT_TTL
    );
  }

  async deliverWebhooks(eventType: string, organizationId: string, payload: unknown): Promise<void> {
    const webhooks = await this.prisma.webhookEndpoint.findMany({
      where: {
        organizationId,
        isActive: true,
        deletedAt: null,
        events: { has: eventType },
      },
    });

    await Promise.allSettled(
      webhooks.map((wh) => this.deliverSingleWebhook(wh.id, wh.url, wh.secret, eventType, payload))
    );
  }

  private async deliverSingleWebhook(
    webhookId: string,
    url: string,
    secret: string,
    eventType: string,
    data: unknown,
    retryCount = 0
  ): Promise<void> {
    const deliveryId = uuidv4();
    const webhookPayload = {
      eventType,
      data,
      timestamp: new Date().toISOString(),
      deliveryId,
    };

    const result = await this.webhookChannel.deliver(url, secret, webhookPayload);

    await this.prisma.webhookDelivery.create({
      data: {
        webhookId,
        eventType,
        payload: webhookPayload as object,
        statusCode: result.statusCode,
        response: result.response,
        success: result.success,
        duration: result.duration,
        retryCount,
      },
    });

    if (!result.success) {
      await this.prisma.webhookEndpoint.update({
        where: { id: webhookId },
        data: {
          failureCount: { increment: 1 },
          lastCalledAt: new Date(),
        },
      });

      if (retryCount < 3) {
        const delay = Math.pow(2, retryCount) * 5000;
        setTimeout(() => {
          void this.deliverSingleWebhook(webhookId, url, secret, eventType, data, retryCount + 1);
        }, delay);
      }
    } else {
      await this.prisma.webhookEndpoint.update({
        where: { id: webhookId },
        data: { lastCalledAt: new Date(), failureCount: 0 },
      });
    }
  }
}
