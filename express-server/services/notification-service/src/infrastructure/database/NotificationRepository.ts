import { NotificationModel, INotificationDocument } from '../../domain/entities/Notification';
import {
  INotificationRepository,
  CreateNotificationInput,
  ListNotificationsOptions,
  ListNotificationsResult,
} from '../../domain/repositories/INotificationRepository';
import { config } from '../../config';

export class MongoNotificationRepository implements INotificationRepository {
  async create(input: CreateNotificationInput): Promise<INotificationDocument> {
    const ttlDays = config.NOTIFICATION_TTL_DAYS;
    const expiresAt = input.expiresAt ?? new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);

    const deliveries = input.channels.map((channel) => ({
      channel,
      status: 'pending' as const,
      retryCount: 0,
    }));

    const notification = new NotificationModel({
      ...input,
      data: input.data ?? {},
      isRead: false,
      deliveries,
      expiresAt,
    });

    return notification.save();
  }

  async findById(id: string): Promise<INotificationDocument | null> {
    return NotificationModel.findById(id).exec();
  }

  async markAsRead(id: string, userId: string): Promise<INotificationDocument | null> {
    return NotificationModel.findOneAndUpdate(
      { _id: id, userId },
      { isRead: true, readAt: new Date() },
      { new: true }
    ).exec();
  }

  async markAllAsRead(userId: string, organizationId: string): Promise<number> {
    const result = await NotificationModel.updateMany(
      { userId, organizationId, isRead: false },
      { isRead: true, readAt: new Date() }
    ).exec();
    return result.modifiedCount;
  }

  async softDelete(id: string, userId: string): Promise<boolean> {
    const result = await NotificationModel.deleteOne({ _id: id, userId }).exec();
    return result.deletedCount === 1;
  }

  async list(options: ListNotificationsOptions): Promise<ListNotificationsResult> {
    const { userId, organizationId, isRead, page, limit } = options;
    const filter: Record<string, unknown> = { userId, organizationId };

    if (isRead !== undefined) {
      filter['isRead'] = isRead;
    }

    const skip = (page - 1) * limit;

    const [notifications, total] = await Promise.all([
      NotificationModel.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .exec(),
      NotificationModel.countDocuments(filter).exec(),
    ]);

    return { notifications, total };
  }

  async getUnreadCount(userId: string, organizationId: string): Promise<number> {
    return NotificationModel.countDocuments({ userId, organizationId, isRead: false }).exec();
  }

  async updateDeliveryStatus(
    notificationId: string,
    channel: string,
    status: string,
    errorMessage?: string
  ): Promise<void> {
    const update: Record<string, unknown> = {
      'deliveries.$.status': status,
    };

    if (status === 'sent') {
      update['deliveries.$.sentAt'] = new Date();
    }

    if (errorMessage) {
      update['deliveries.$.errorMessage'] = errorMessage;
      update['deliveries.$.retryCount'] = { $inc: 1 };
    }

    await NotificationModel.updateOne(
      { _id: notificationId, 'deliveries.channel': channel },
      { $set: update }
    ).exec();
  }
}
