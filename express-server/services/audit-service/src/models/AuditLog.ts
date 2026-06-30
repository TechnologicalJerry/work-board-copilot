import mongoose, { Document, Schema } from 'mongoose';

export interface IAuditChange {
  field: string;
  oldValue?: unknown;
  newValue?: unknown;
}

export interface IAuditLog extends Document {
  _id: mongoose.Types.ObjectId;
  organizationId: string;
  workspaceId?: string;
  projectId?: string;
  userId?: string;
  userEmail?: string;
  userRole?: string;
  action: string;
  entityId?: string;
  entityType?: string;
  entityName?: string;
  changes: IAuditChange[];
  ip?: string;
  userAgent?: string;
  requestId?: string;
  correlationId?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'security' | 'data' | 'access' | 'system';
  metadata?: unknown;
  createdAt: Date;
}

const auditChangeSchema = new Schema<IAuditChange>(
  {
    field: String,
    oldValue: Schema.Types.Mixed,
    newValue: Schema.Types.Mixed,
  },
  { _id: false }
);

const auditLogSchema = new Schema<IAuditLog>(
  {
    organizationId: { type: String, required: true, index: true },
    workspaceId: String,
    projectId: String,
    userId: { type: String, index: true },
    userEmail: String,
    userRole: String,
    action: { type: String, required: true, index: true },
    entityId: String,
    entityType: String,
    entityName: String,
    changes: [auditChangeSchema],
    ip: String,
    userAgent: String,
    requestId: String,
    correlationId: String,
    severity: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'low',
      index: true,
    },
    category: {
      type: String,
      enum: ['security', 'data', 'access', 'system'],
      index: true,
    },
    metadata: Schema.Types.Mixed,
    createdAt: { type: Date, default: Date.now, immutable: true, index: true },
  },
  {
    _id: true,
    timestamps: false,
    versionKey: false,
  }
);

auditLogSchema.index({ organizationId: 1, createdAt: -1 });
auditLogSchema.index({ organizationId: 1, category: 1 });
auditLogSchema.index({ organizationId: 1, userId: 1, createdAt: -1 });
auditLogSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 }); // 90 days TTL

export const AuditLog = mongoose.model<IAuditLog>('AuditLog', auditLogSchema);
