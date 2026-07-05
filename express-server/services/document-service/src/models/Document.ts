import mongoose, { Document as MongooseDocument, Schema, Model } from 'mongoose';

export interface IDocumentVersion {
  version: number;
  contentSnapshot: unknown;
  savedBy: string;
  savedAt: Date;
  changeDescription?: string;
}

export interface ICollaborator {
  userId: string;
  permission: 'view' | 'comment' | 'edit';
}

export interface IDocument {
  organizationId: string;
  workspaceId: string;
  projectId?: string;
  title: string;
  slug: string;
  content?: unknown; // Tiptap JSON
  contentText?: string;
  contentHtml?: string;
  type: 'wiki' | 'spec' | 'runbook' | 'meeting_notes' | 'template' | 'general';
  status: 'draft' | 'published' | 'archived';
  visibility: 'public' | 'private' | 'team';
  icon?: string;
  coverImageUrl?: string;
  authorId: string;
  parentId?: mongoose.Types.ObjectId;
  templateId?: mongoose.Types.ObjectId;
  tags: string[];
  version: number;
  lastEditedBy?: string;
  lastEditedAt?: Date;
  versions: IDocumentVersion[];
  collaborators: ICollaborator[];
  viewCount: number;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type DocumentDocument = IDocument & MongooseDocument;

const documentSchema = new Schema<IDocument>(
  {
    organizationId: { type: String, required: true, index: true },
    workspaceId: { type: String, required: true, index: true },
    projectId: { type: String, index: true },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: Schema.Types.Mixed },
    contentText: String,
    contentHtml: String,
    type: {
      type: String,
      enum: ['wiki', 'spec', 'runbook', 'meeting_notes', 'template', 'general'],
      default: 'general',
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    visibility: {
      type: String,
      enum: ['public', 'private', 'team'],
      default: 'private',
    },
    icon: String,
    coverImageUrl: String,
    authorId: { type: String, required: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'Document' },
    templateId: { type: Schema.Types.ObjectId, ref: 'Document' },
    tags: [String],
    version: { type: Number, default: 1 },
    lastEditedBy: String,
    lastEditedAt: Date,
    versions: [
      {
        version: Number,
        contentSnapshot: Schema.Types.Mixed,
        savedBy: String,
        savedAt: Date,
        changeDescription: String,
      },
    ],
    collaborators: [
      {
        userId: String,
        permission: {
          type: String,
          enum: ['view', 'comment', 'edit'],
        },
      },
    ],
    viewCount: { type: Number, default: 0 },
    deletedAt: Date,
  },
  { timestamps: true }
);

documentSchema.index({ organizationId: 1, slug: 1 }, { unique: true });
documentSchema.index({ workspaceId: 1 });
documentSchema.index({ authorId: 1 });
documentSchema.index({ contentText: 'text', title: 'text' });

export const DocumentModel: Model<IDocument> = mongoose.model<IDocument>('Document', documentSchema);
