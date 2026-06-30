import { AuditLog, IAuditLog, IAuditChange } from '../models/AuditLog';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import logger from '@boardpilot/logger';

export interface CreateAuditLogDto {
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
  changes?: IAuditChange[];
  ip?: string;
  userAgent?: string;
  requestId?: string;
  correlationId?: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  category?: 'security' | 'data' | 'access' | 'system';
  metadata?: unknown;
}

export interface AuditFilters {
  organizationId: string;
  userId?: string;
  entityType?: string;
  entityId?: string;
  action?: string;
  severity?: string;
  category?: string;
  search?: string;
  fromDate?: string;
  toDate?: string;
}

export async function create(dto: CreateAuditLogDto): Promise<IAuditLog> {
  // Immutable — no update or delete allowed
  const log = await AuditLog.create({
    organizationId: dto.organizationId,
    workspaceId: dto.workspaceId,
    projectId: dto.projectId,
    userId: dto.userId,
    userEmail: dto.userEmail,
    userRole: dto.userRole,
    action: dto.action,
    entityId: dto.entityId,
    entityType: dto.entityType,
    entityName: dto.entityName,
    changes: dto.changes ?? [],
    ip: dto.ip,
    userAgent: dto.userAgent,
    requestId: dto.requestId,
    correlationId: dto.correlationId,
    severity: dto.severity ?? 'low',
    category: dto.category ?? 'data',
    metadata: dto.metadata,
  });

  logger.info({ logId: log._id.toString(), action: dto.action, entityType: dto.entityType }, 'Audit log created');
  return log;
}

function buildFilter(filters: AuditFilters): Record<string, unknown> {
  const query: Record<string, unknown> = { organizationId: filters.organizationId };

  if (filters.userId) query.userId = filters.userId;
  if (filters.entityType) query.entityType = filters.entityType;
  if (filters.entityId) query.entityId = filters.entityId;
  if (filters.action) query.action = { $regex: filters.action, $options: 'i' };
  if (filters.severity) query.severity = filters.severity;
  if (filters.category) query.category = filters.category;

  if (filters.fromDate || filters.toDate) {
    const dateQuery: Record<string, Date> = {};
    if (filters.fromDate) dateQuery.$gte = new Date(filters.fromDate);
    if (filters.toDate) dateQuery.$lte = new Date(filters.toDate);
    query.createdAt = dateQuery;
  }

  return query;
}

export async function findAll(filters: AuditFilters, page: number, limit: number) {
  const query = buildFilter(filters);
  const skip = calculateSkip(page, limit);

  const [data, total] = await Promise.all([
    AuditLog.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    AuditLog.countDocuments(query),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}

export async function findByEntity(
  entityType: string,
  entityId: string,
  page: number,
  limit: number
) {
  const filter = { entityType, entityId };
  const skip = calculateSkip(page, limit);

  const [data, total] = await Promise.all([
    AuditLog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    AuditLog.countDocuments(filter),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}

export async function findByUser(userId: string, orgId: string, page: number, limit: number) {
  const filter = { userId, organizationId: orgId };
  const skip = calculateSkip(page, limit);

  const [data, total] = await Promise.all([
    AuditLog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    AuditLog.countDocuments(filter),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}

export async function exportToCsv(filters: AuditFilters): Promise<string> {
  const query = buildFilter(filters);
  const logs = await AuditLog.find(query).sort({ createdAt: -1 }).limit(10000).lean();

  const headers = [
    'id', 'organizationId', 'userId', 'userEmail', 'action', 'entityType',
    'entityId', 'entityName', 'severity', 'category', 'ip', 'requestId', 'createdAt',
  ];

  const escape = (v: unknown): string => {
    const str = v == null ? '' : String(v);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const rows = logs.map((log) =>
    headers.map((h) => escape((log as Record<string, unknown>)[h])).join(',')
  );

  return [headers.join(','), ...rows].join('\n');
}

export async function getStats(
  orgId: string,
  days: number
): Promise<{ totalLogs: number; byCategory: Record<string, number>; bySeverity: Record<string, number> }> {
  const since = new Date();
  since.setDate(since.getDate() - days);

  const [total, byCategory, bySeverity] = await Promise.all([
    AuditLog.countDocuments({ organizationId: orgId, createdAt: { $gte: since } }),
    AuditLog.aggregate([
      { $match: { organizationId: orgId, createdAt: { $gte: since } } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
    ]),
    AuditLog.aggregate([
      { $match: { organizationId: orgId, createdAt: { $gte: since } } },
      { $group: { _id: '$severity', count: { $sum: 1 } } },
    ]),
  ]);

  return {
    totalLogs: total,
    byCategory: Object.fromEntries(byCategory.map((r: any) => [r._id ?? 'unknown', r.count])),
    bySeverity: Object.fromEntries(bySeverity.map((r: any) => [r._id ?? 'unknown', r.count])),
  };
}
