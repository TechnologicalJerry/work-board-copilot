import { z } from 'zod';

export const burndownQuerySchema = z.object({
  sprintId: z.string().min(1, 'sprintId is required'),
});

export const velocityQuerySchema = z.object({
  projectId: z.string().min(1, 'projectId is required'),
  limit: z.coerce.number().min(1).max(20).optional().default(10),
});

export const workloadQuerySchema = z.object({
  projectId: z.string().min(1, 'projectId is required'),
});

export const cycleTimeQuerySchema = z.object({
  projectId: z.string().min(1, 'projectId is required'),
  days: z.coerce.number().min(1).max(365).optional().default(30),
});

export const dashboardQuerySchema = z.object({
  projectId: z.string().min(1, 'projectId is required'),
});

export const createSavedReportSchema = z.object({
  organizationId: z.string().min(1),
  projectId: z.string().optional(),
  name: z.string().min(1).max(200),
  type: z.enum(['BURNDOWN', 'BURNUP', 'VELOCITY', 'CUMULATIVE_FLOW', 'CYCLE_TIME', 'LEAD_TIME', 'WORKLOAD', 'PRODUCTIVITY', 'CUSTOM']),
  config: z.record(z.unknown()),
  isShared: z.boolean().optional().default(false),
});

export const updateSavedReportSchema = createSavedReportSchema.partial();

export const listReportsQuerySchema = z.object({
  projectId: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const idParamSchema = z.object({ id: z.string().min(1) });

export type CreateSavedReportDto = z.infer<typeof createSavedReportSchema>;
