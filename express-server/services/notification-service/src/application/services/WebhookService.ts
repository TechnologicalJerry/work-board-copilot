import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';
import { buildPaginatedResult } from '@boardpilot/common';
import { PrismaClient } from '../../generated/prisma-client';
import { WebhookChannel } from '../../channels/WebhookChannel';

export interface CreateWebhookInput {
  organizationId: string;
  url: string;
  events: string[];
  createdBy: string;
}

export interface UpdateWebhookInput {
  url?: string;
  events?: string[];
  isActive?: boolean;
}

export class WebhookService {
  private readonly webhookChannel = new WebhookChannel();

  constructor(private readonly prisma: PrismaClient) {}

  async list(organizationId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [webhooks, total] = await Promise.all([
      this.prisma.webhookEndpoint.findMany({
        where: { organizationId, deletedAt: null },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          organizationId: true,
          url: true,
          events: true,
          isActive: true,
          lastCalledAt: true,
          failureCount: true,
          createdBy: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      this.prisma.webhookEndpoint.count({ where: { organizationId, deletedAt: null } }),
    ]);
    return buildPaginatedResult(webhooks, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
  }

  async create(input: CreateWebhookInput) {
    const secret = crypto.randomBytes(32).toString('hex');
    return this.prisma.webhookEndpoint.create({
      data: {
        id: uuidv4(),
        ...input,
        secret,
      },
      select: {
        id: true,
        organizationId: true,
        url: true,
        events: true,
        isActive: true,
        secret: true,
        createdBy: true,
        createdAt: true,
      },
    });
  }

  async update(webhookId: string, organizationId: string, input: UpdateWebhookInput) {
    const existing = await this.prisma.webhookEndpoint.findFirst({
      where: { id: webhookId, organizationId, deletedAt: null },
    });
    if (!existing) throw new NotFoundError('WebhookEndpoint', webhookId);

    return this.prisma.webhookEndpoint.update({
      where: { id: webhookId },
      data: input,
    });
  }

  async delete(webhookId: string, organizationId: string): Promise<void> {
    const existing = await this.prisma.webhookEndpoint.findFirst({
      where: { id: webhookId, organizationId, deletedAt: null },
    });
    if (!existing) throw new NotFoundError('WebhookEndpoint', webhookId);

    await this.prisma.webhookEndpoint.update({
      where: { id: webhookId },
      data: { deletedAt: new Date() },
    });
  }

  async test(webhookId: string, organizationId: string) {
    const webhook = await this.prisma.webhookEndpoint.findFirst({
      where: { id: webhookId, organizationId, deletedAt: null },
    });
    if (!webhook) throw new NotFoundError('WebhookEndpoint', webhookId);
    if (!webhook.isActive) throw new BadRequestError('Webhook is not active');

    const payload = {
      eventType: 'webhook.test',
      data: { message: 'This is a test webhook delivery', webhookId },
      timestamp: new Date().toISOString(),
      deliveryId: uuidv4(),
    };

    const result = await this.webhookChannel.deliver(webhook.url, webhook.secret, payload);

    await this.prisma.webhookDelivery.create({
      data: {
        id: uuidv4(),
        webhookId,
        eventType: 'webhook.test',
        payload: payload as object,
        statusCode: result.statusCode,
        response: result.response,
        success: result.success,
        duration: result.duration,
      },
    });

    return result;
  }

  async getDeliveries(webhookId: string, organizationId: string, page: number, limit: number) {
    const webhook = await this.prisma.webhookEndpoint.findFirst({
      where: { id: webhookId, organizationId, deletedAt: null },
    });
    if (!webhook) throw new NotFoundError('WebhookEndpoint', webhookId);

    const skip = (page - 1) * limit;
    const [deliveries, total] = await Promise.all([
      this.prisma.webhookDelivery.findMany({
        where: { webhookId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.webhookDelivery.count({ where: { webhookId } }),
    ]);

    return buildPaginatedResult(deliveries, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
  }
}
