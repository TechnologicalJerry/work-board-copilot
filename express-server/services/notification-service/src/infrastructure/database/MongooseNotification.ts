import mongoose, { Document, Schema, Model } from 'mongoose';

export type DeliveryChannel = 'email' | 'sms' | 'push' | 'slack' | 'teams' | 'webhook' | 'in_app';
export type DeliveryStatus = 'pending' | 'sent' | 'failed';

export interface IDeliveryRecord {
  channel: DeliveryChannel;
  status: DeliveryStatus;
  sentAt?: Date;
  errorMessage?: string;
  retryCount: number;
}

export interface IInAppNotification {
  userId: string;
  organizationId: string;
  type: string;
  title: string;
  body: string;
  data?: Record<string, unknown>;
  isRead: boolean;
  readAt?: Date;
  channels: DeliveryChannel[];
  deliveries: IDeliveryRecord[];
  expiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IInAppNotificationDocument extends IInAppNotification, Document {
  _id: mongoose.Types.ObjectId;
}

const DeliveryRecordSchema = new Schema<IDeliveryRecord>(
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

const MongooseNotificationSchema = new Schema<IInAppNotificationDocument>(
  {
    userId: { type: String, required: true, index: true },
    organizationId: { type: String, required: true, index: true },
    type: { type: String, required: true, index: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    data: { type: Schema.Types.Mixed, default: {} },
    isRead: { type: Boolean, default: false, index: true },
    readAt: { type: Date },
    channels: [
      {
        type: String,
        enum: ['email', 'sms', 'push', 'slack', 'teams', 'webhook', 'in_app'],
      },
    ],
    deliveries: { type: [DeliveryRecordSchema], default: [] },
    expiresAt: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'notifications',
  }
);

// Compound indexes for efficient querying
MongooseNotificationSchema.index({ userId: 1, isRead: 1, createdAt: -1 });
MongooseNotificationSchema.index({ userId: 1, organizationId: 1, createdAt: -1 });
MongooseNotificationSchema.index({ userId: 1, type: 1, createdAt: -1 });

// TTL index — documents expire at the date stored in expiresAt
MongooseNotificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const MongooseNotificationModel: Model<IInAppNotificationDocument> =
  mongoose.models['Notification'] as Model<IInAppNotificationDocument> ||
  mongoose.model<IInAppNotificationDocument>('Notification', MongooseNotificationSchema);
