import { z } from 'zod';

export const createAuditLogSchema = z.object({
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  projectId: z.string().optional(),
  userId: z.string().optional(),
  userEmail: z.string().optional(),
  userRole: z.string().optional(),
  action: z.string().min(1),
  entityId: z.string().optional(),
  entityType: z.string().optional(),
  entityName: z.string().optional(),
  changes: z.array(
    z.object({
      field: z.string(),
      oldValue: z.unknown().optional(),
      newValue: z.unknown().optional(),
    })
  ).optional().default([]),
  ip: z.string().optional(),
  userAgent: z.string().optional(),
  requestId: z.string().optional(),
  correlationId: z.string().optional(),
  severity: z.enum(['low', 'medium', 'high', 'critical']).optional().default('low'),
  category: z.enum(['security', 'data', 'access', 'system']).optional().default('data'),
  metadata: z.unknown().optional(),
});

export const listAuditLogsQuerySchema = z.object({
  organizationId: z.string().optional(),
  userId: z.string().optional(),
  entityType: z.string().optional(),
  entityId: z.string().optional(),
  action: z.string().optional(),
  severity: z.enum(['low', 'medium', 'high', 'critical']).optional(),
  category: z.enum(['security', 'data', 'access', 'system']).optional(),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const entityQuerySchema = z.object({
  entityType: z.string().min(1),
  entityId: z.string().min(1),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const userAuditQuerySchema = z.object({
  userId: z.string().min(1),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const statsQuerySchema = z.object({
  days: z.coerce.number().min(1).max(365).optional().default(30),
});

export const exportQuerySchema = z.object({
  organizationId: z.string().optional(),
  userId: z.string().optional(),
  entityType: z.string().optional(),
  severity: z.enum(['low', 'medium', 'high', 'critical']).optional(),
  category: z.enum(['security', 'data', 'access', 'system']).optional(),
  fromDate: z.string().optional(),
  toDate: z.string().optional(),
});

export type CreateAuditLogDto = z.infer<typeof createAuditLogSchema>;
