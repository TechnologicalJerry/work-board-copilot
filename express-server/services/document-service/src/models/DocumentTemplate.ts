import mongoose, { Document as MongoDoc, Schema, Model } from 'mongoose';

export interface IDocumentTemplate {
  title: string;
  content: unknown;
  type: 'wiki' | 'spec' | 'runbook' | 'meeting_notes' | 'general';
  organizationId?: string;
  isGlobal: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export type DocumentTemplateDocument = IDocumentTemplate & MongoDoc;

const documentTemplateSchema = new Schema<IDocumentTemplate>(
  {
    title: { type: String, required: true },
    content: { type: Schema.Types.Mixed },
    type: {
      type: String,
      enum: ['wiki', 'spec', 'runbook', 'meeting_notes', 'general'],
      default: 'general',
    },
    organizationId: { type: String, index: true },
    isGlobal: { type: Boolean, default: false, index: true },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

documentTemplateSchema.index({ organizationId: 1, type: 1 });
documentTemplateSchema.index({ isGlobal: 1 });

export const DocumentTemplateModel: Model<IDocumentTemplate> = mongoose.model<IDocumentTemplate>(
  'DocumentTemplate',
  documentTemplateSchema
);
