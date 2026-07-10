import { INotificationDocument, NotificationChannel } from '../entities/Notification';

export interface CreateNotificationInput {
  userId: string;
  organizationId: string;
  type: string;
  title: string;
  body: string;
  data?: Record<string, unknown>;
  channels: NotificationChannel[];
  expiresAt?: Date;
}

export interface ListNotificationsOptions {
  userId: string;
  organizationId: string;
  isRead?: boolean;
  page: number;
  limit: number;
}

export interface ListNotificationsResult {
  notifications: INotificationDocument[];
  total: number;
}

export interface INotificationRepository {
  create(input: CreateNotificationInput): Promise<INotificationDocument>;
  findById(id: string): Promise<INotificationDocument | null>;
  markAsRead(id: string, userId: string): Promise<INotificationDocument | null>;
  markAllAsRead(userId: string, organizationId: string): Promise<number>;
  softDelete(id: string, userId: string): Promise<boolean>;
  list(options: ListNotificationsOptions): Promise<ListNotificationsResult>;
  getUnreadCount(userId: string, organizationId: string): Promise<number>;
  updateDeliveryStatus(
    notificationId: string,
    channel: string,
    status: string,
    errorMessage?: string
  ): Promise<void>;
}
