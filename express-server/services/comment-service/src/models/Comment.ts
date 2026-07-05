import mongoose, { Document as MongoDoc, Schema, Model } from 'mongoose';

export interface IMention {
  userId: string;
  displayName: string;
  offset: number;
}

export interface IReaction {
  emoji: string;
  userIds: string[];
  count: number;
}

export interface IEditHistory {
  content: string;
  editedAt: Date;
}

export interface IComment {
  entityId: string;
  entityType: 'task' | 'document' | 'epic' | 'project';
  projectId: string;
  organizationId: string;
  authorId: string;
  parentId?: mongoose.Types.ObjectId | null;
  content: string;
  contentHtml: string;
  mentions: IMention[];
  reactions: IReaction[];
  isEdited: boolean;
  editedAt?: Date;
  editHistory: IEditHistory[];
  isResolved: boolean;
  resolvedBy?: string;
  resolvedAt?: Date;
  isPinned: boolean;
  replyCount: number;
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type CommentDocument = IComment & MongoDoc;

const mentionSchema = new Schema<IMention>(
  {
    userId: { type: String, required: true },
    displayName: { type: String, required: true },
    offset: { type: Number, required: true },
  },
  { _id: false }
);

const reactionSchema = new Schema<IReaction>(
  {
    emoji: { type: String, required: true },
    userIds: [String],
    count: { type: Number, default: 0 },
  },
  { _id: false }
);

const editHistorySchema = new Schema<IEditHistory>(
  {
    content: { type: String, required: true },
    editedAt: { type: Date, required: true },
  },
  { _id: false }
);

const commentSchema = new Schema<IComment>(
  {
    entityId: { type: String, required: true, index: true },
    entityType: {
      type: String,
      enum: ['task', 'document', 'epic', 'project'],
      required: true,
      index: true,
    },
    projectId: { type: String, required: true, index: true },
    organizationId: { type: String, required: true, index: true },
    authorId: { type: String, required: true, index: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'Comment', default: null, index: true },
    content: { type: String, required: true },
    contentHtml: { type: String, required: true },
    mentions: [mentionSchema],
    reactions: [reactionSchema],
    isEdited: { type: Boolean, default: false },
    editedAt: Date,
    editHistory: [editHistorySchema],
    isResolved: { type: Boolean, default: false },
    resolvedBy: String,
    resolvedAt: Date,
    isPinned: { type: Boolean, default: false },
    replyCount: { type: Number, default: 0 },
    deletedAt: Date,
  },
  { timestamps: true }
);

commentSchema.index({ entityId: 1, entityType: 1, createdAt: 1 });
commentSchema.index({ parentId: 1, createdAt: 1 });
commentSchema.index({ organizationId: 1, authorId: 1 });

export const CommentModel: Model<IComment> = mongoose.model<IComment>('Comment', commentSchema);
