import mongoose, { Document, Schema } from 'mongoose';

export type NotificationChannel = 'email' | 'sms' | 'push' | 'slack' | 'teams' | 'webhook' | 'in_app';
export type DeliveryStatus = 'pending' | 'sent' | 'failed';

export interface IDelivery {
  channel: NotificationChannel;
  status: DeliveryStatus;
  sentAt?: Date;
  errorMessage?: string;
  retryCount: number;
}

export interface INotification {
  userId: string;
  organizationId: string;
  type: string;
  title: string;
  body: string;
  data: Record<string, unknown>;
  isRead: boolean;
  readAt?: Date;
  channels: NotificationChannel[];
  deliveries: IDelivery[];
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
}

export interface INotificationDocument extends INotification, Document {}

const DeliverySchema = new Schema<IDelivery>(
  {
    channel: {
      type: String,
      enum: ['email', 'sms', 'push', 'slack', 'teams', 'webhook', 'in_app'],
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'sent', 'failed'],
      default: 'pending',
    },
    sentAt: { type: Date },
    errorMessage: { type: String },
    retryCount: { type: Number, default: 0 },
  },
  { _id: false }
);

const NotificationSchema = new Schema<INotificationDocument>(
  {
    userId: { type: String, required: true, index: true },
    organizationId: { type: String, required: true, index: true },
    type: { type: String, required: true, index: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    data: { type: Schema.Types.Mixed, default: {} },
    isRead: { type: Boolean, default: false, index: true },
    readAt: { type: Date },
    channels: [{ type: String, enum: ['email', 'sms', 'push', 'slack', 'teams', 'webhook', 'in_app'] }],
    deliveries: [DeliverySchema],
    expiresAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

NotificationSchema.index({ userId: 1, isRead: 1, createdAt: -1 });
NotificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const NotificationModel = mongoose.model<INotificationDocument>('Notification', NotificationSchema);
