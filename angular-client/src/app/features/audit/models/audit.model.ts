export type AuditSeverity = 'low' | 'medium' | 'high' | 'critical';
export type AuditCategory = 'security' | 'data' | 'access' | 'system';

export interface AuditChange {
  field: string;
  oldValue?: unknown;
  newValue?: unknown;
}

export interface AuditLogItem {
  id: string;
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
  changes?: AuditChange[];
  ip?: string;
  userAgent?: string;
  severity: AuditSeverity;
  category: AuditCategory;
  createdAt?: string;
}

export interface AuditStats {
  totalEvents: number;
  severityBreakdown: Record<AuditSeverity, number>;
}
