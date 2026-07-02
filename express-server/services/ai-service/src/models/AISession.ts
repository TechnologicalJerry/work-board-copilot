import mongoose, { Document, Schema, Model } from 'mongoose';

export type SessionType =
  | 'chat'
  | 'sprint_planning'
  | 'task_breakdown'
  | 'standup'
  | 'release_notes'
  | 'bug_analysis'
  | 'meeting_notes';

export type MessageRole = 'user' | 'assistant' | 'system';
export type SessionStatus = 'active' | 'completed' | 'failed';

export interface IMessage {
  role: MessageRole;
  content: string;
  createdAt: Date;
}

export interface IAISession {
  userId: string;
  organizationId: string;
  sessionType: SessionType;
  title?: string;
  messages: IMessage[];
  context?: Record<string, unknown>;
  result?: Record<string, unknown>;
  tokensUsed: number;
  model: string;
  status: SessionStatus;
  createdAt: Date;
  updatedAt: Date;
}

// `IAISession.model` (the OpenAI model name, e.g. "gpt-4") collides with
// Mongoose's own `Document.model()` method, so that member is omitted from
// the base `Document` type here in favor of the `IAISession` field.
export interface IAISessionDocument extends IAISession, Omit<Document, 'model'> {
  _id: mongoose.Types.ObjectId;
}

const messageSchema = new Schema<IMessage>(
  {
    role: {
      type: String,
      enum: ['user', 'assistant', 'system'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: true }
);

const aiSessionSchema = new Schema<IAISessionDocument>(
  {
    userId: { type: String, required: true, index: true },
    organizationId: { type: String, required: true, index: true },
    sessionType: {
      type: String,
      enum: [
        'chat',
        'sprint_planning',
        'task_breakdown',
        'standup',
        'release_notes',
        'bug_analysis',
        'meeting_notes',
      ],
      required: true,
    },
    title: { type: String, trim: true },
    messages: { type: [messageSchema], default: [] },
    context: { type: Schema.Types.Mixed },
    result: { type: Schema.Types.Mixed },
    tokensUsed: { type: Number, default: 0 },
    model: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'completed', 'failed'],
      default: 'active',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Compound indexes for efficient querying
aiSessionSchema.index({ userId: 1, createdAt: -1 });
aiSessionSchema.index({ organizationId: 1, sessionType: 1 });
aiSessionSchema.index({ userId: 1, status: 1 });

// TTL index: sessions expire based on retention policy (default 90 days)
// The actual expiry is set by AI_SESSION_RETENTION_DAYS env
const retentionDays = parseInt(process.env.AI_SESSION_RETENTION_DAYS ?? '90', 10);
aiSessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: retentionDays * 24 * 60 * 60 });

export const AISession: Model<IAISessionDocument> = mongoose.model<IAISessionDocument>(
  'AISession',
  aiSessionSchema
);
