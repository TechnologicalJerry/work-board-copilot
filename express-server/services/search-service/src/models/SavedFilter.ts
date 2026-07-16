import mongoose, { Document as MongoDoc, Schema, Model } from 'mongoose';

export interface ISavedFilter {
  userId: string;
  organizationId: string;
  name: string;
  query: Record<string, unknown>;
  type: 'task' | 'project' | 'global';
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type SavedFilterDocument = ISavedFilter & MongoDoc;

const savedFilterSchema = new Schema<ISavedFilter>(
  {
    userId: { type: String, required: true, index: true },
    organizationId: { type: String, required: true, index: true },
    name: { type: String, required: true },
    query: { type: Schema.Types.Mixed, required: true },
    type: {
      type: String,
      enum: ['task', 'project', 'global'],
      default: 'task',
    },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

savedFilterSchema.index({ userId: 1, organizationId: 1 });
savedFilterSchema.index({ userId: 1, type: 1 });

export const SavedFilterModel: Model<ISavedFilter> = mongoose.model<ISavedFilter>(
  'SavedFilter',
  savedFilterSchema
);
