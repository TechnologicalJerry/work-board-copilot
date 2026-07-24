import { z } from 'zod';

export const createTimeEntrySchema = z.object({
  taskId: z.string().uuid().optional(),
  projectId: z.string().uuid(),
  organizationId: z.string().uuid(),
  description: z.string().max(500).optional(),
  isBillable: z.boolean().default(true),
  hourlyRate: z.number().positive().optional(),
  tags: z.array(z.string()).default([]),
  startTime: z.string().datetime().optional(),
});

export const updateTimeEntrySchema = z.object({
  description: z.string().max(500).optional(),
  isBillable: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  startTime: z.string().datetime().optional(),
  endTime: z.string().datetime().optional(),
});

export const createTimesheetSchema = z.object({
  organizationId: z.string().uuid(),
  projectId: z.string().uuid().optional(),
  periodStart: z.string().datetime(),
  periodEnd: z.string().datetime(),
  notes: z.string().max(1000).optional(),
});

export const listTimeEntriesSchema = z.object({
  projectId: z.string().uuid().optional(),
  taskId: z.string().uuid().optional(),
  organizationId: z.string().uuid().optional(),
  status: z
    .enum(['RUNNING', 'STOPPED', 'SUBMITTED', 'APPROVED', 'REJECTED'])
    .optional(),
  startFrom: z.string().datetime().optional(),
  startTo: z.string().datetime().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const listTimesheetsSchema = z.object({
  organizationId: z.string().uuid().optional(),
  projectId: z.string().uuid().optional(),
  status: z.enum(['DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED']).optional(),
  periodStart: z.string().datetime().optional(),
  periodEnd: z.string().datetime().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const idParamSchema = z.object({
  id: z.string().uuid(),
});

export const userIdParamSchema = z.object({
  userId: z.string().uuid(),
});

export const projectIdParamSchema = z.object({
  projectId: z.string().uuid(),
});

export const reportQuerySchema = z.object({
  startFrom: z.string().datetime(),
  startTo: z.string().datetime(),
  organizationId: z.string().uuid().optional(),
});
