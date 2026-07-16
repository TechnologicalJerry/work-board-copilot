import { z } from 'zod';

export const globalSearchQuerySchema = z.object({
  q: z.string().min(1, 'Search query is required').max(200),
  type: z.enum(['task', 'project', 'global']).optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const taskSearchQuerySchema = z.object({
  q: z.string().max(200).optional().default(''),
  status: z.string().optional().transform((v) => (v ? v.split(',') : undefined)),
  priority: z.string().optional().transform((v) => (v ? v.split(',') : undefined)),
  assigneeId: z.string().optional(),
  projectId: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const suggestQuerySchema = z.object({
  q: z.string().min(1).max(100),
  type: z.enum(['task', 'project', 'global']).optional().default('global'),
});

export const createSavedFilterSchema = z.object({
  name: z.string().min(1).max(100),
  query: z.record(z.unknown()),
  type: z.enum(['task', 'project', 'global']),
  isDefault: z.boolean().optional().default(false),
});

export const updateSavedFilterSchema = createSavedFilterSchema.partial();

export const paginationQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const idParamSchema = z.object({
  id: z.string().min(1),
});

export type GlobalSearchQuery = z.infer<typeof globalSearchQuerySchema>;
export type TaskSearchQuery = z.infer<typeof taskSearchQuerySchema>;
export type CreateSavedFilterDto = z.infer<typeof createSavedFilterSchema>;
