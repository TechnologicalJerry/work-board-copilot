import { z } from 'zod';

export const createSprintSchema = z.object({
  projectId: z.string().uuid('projectId must be a valid UUID'),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  goal: z.string().max(500).optional(),
  startDate: z.string().datetime({ message: 'startDate must be an ISO datetime string' }).optional(),
  endDate: z.string().datetime({ message: 'endDate must be an ISO datetime string' }).optional(),
  capacity: z.number().int().min(0).max(10000).optional(),
  notes: z.string().max(2000).optional(),
  startImmediately: z.boolean().optional().default(false),
});

export const updateSprintSchema = z
  .object({
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(100, 'Name must be at most 100 characters')
      .optional(),
    goal: z.string().max(500).nullable().optional(),
    startDate: z
      .string()
      .datetime({ message: 'startDate must be an ISO datetime string' })
      .nullable()
      .optional(),
    endDate: z
      .string()
      .datetime({ message: 'endDate must be an ISO datetime string' })
      .nullable()
      .optional(),
    capacity: z.number().int().min(0).max(10000).nullable().optional(),
    notes: z.string().max(2000).nullable().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export const addSprintItemSchema = z.object({
  taskId: z.string().uuid('taskId must be a valid UUID'),
  storyPoints: z.number().int().min(0).max(1000).optional(),
});

export const listSprintsQuerySchema = z.object({
  projectId: z.string().uuid('projectId must be a valid UUID'),
  status: z.enum(['PLANNED', 'ACTIVE', 'COMPLETED', 'CANCELLED']).optional(),
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
  sortBy: z.enum(['createdAt', 'startDate', 'endDate', 'name']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

export const velocityQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(20).optional(),
});

export type CreateSprintInput = z.infer<typeof createSprintSchema>;
export type UpdateSprintInput = z.infer<typeof updateSprintSchema>;
export type AddSprintItemInput = z.infer<typeof addSprintItemSchema>;
export type ListSprintsQueryInput = z.infer<typeof listSprintsQuerySchema>;
export type VelocityQueryInput = z.infer<typeof velocityQuerySchema>;
