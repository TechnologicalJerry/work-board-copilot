import { z } from 'zod';

const taskStatusEnum = z.enum([
  'BACKLOG',
  'TODO',
  'IN_PROGRESS',
  'IN_REVIEW',
  'DONE',
  'CANCELLED',
  'BLOCKED',
]);

const priorityEnum = z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'NONE']);

const taskTypeEnum = z.enum(['TASK', 'BUG', 'STORY', 'EPIC', 'SUBTASK']);

export const createTaskSchema = z.object({
  organizationId: z.string().uuid(),
  projectId: z.string().uuid(),
  sprintId: z.string().uuid().optional(),
  boardId: z.string().uuid().optional(),
  parentId: z.string().uuid().optional(),
  title: z.string().min(1).max(500),
  description: z.string().max(10000).optional(),
  status: taskStatusEnum.optional(),
  priority: priorityEnum.optional(),
  type: taskTypeEnum.optional(),
  assigneeId: z.string().uuid().optional(),
  storyPoints: z.number().int().min(0).max(100).optional(),
  dueDate: z.string().datetime().optional(),
  startDate: z.string().datetime().optional(),
  labels: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  position: z.number().optional(),
});

export const updateTaskSchema = createTaskSchema
  .partial()
  .omit({ organizationId: true, projectId: true })
  .extend({
    assigneeId: z.string().uuid().nullable().optional(),
    description: z.string().max(10000).nullable().optional(),
    sprintId: z.string().uuid().nullable().optional(),
    boardId: z.string().uuid().nullable().optional(),
    parentId: z.string().uuid().nullable().optional(),
    dueDate: z.string().datetime().nullable().optional(),
    startDate: z.string().datetime().nullable().optional(),
    storyPoints: z.number().int().min(0).max(100).nullable().optional(),
    estimatedHours: z.number().min(0).nullable().optional(),
    actualHours: z.number().min(0).nullable().optional(),
  });

export const listTasksSchema = z.object({
  organizationId: z.string().uuid(),
  projectId: z.string().uuid().optional(),
  sprintId: z.string().uuid().optional(),
  boardId: z.string().uuid().optional(),
  assigneeId: z.string().uuid().optional(),
  status: z.string().optional(), // comma-separated
  priority: z.string().optional(), // comma-separated
  type: z.string().optional(), // comma-separated
  search: z.string().optional(),
  parentId: z.string().uuid().optional().nullable(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const taskIdParamSchema = z.object({
  id: z.string().uuid(),
});

export const changeStatusSchema = z.object({
  status: taskStatusEnum,
});

export const assignSchema = z.object({
  assigneeId: z.string().uuid().nullable(),
});

export const bulkStatusSchema = z.object({
  taskIds: z.array(z.string().uuid()).min(1).max(100),
  status: taskStatusEnum,
});

export const statsQuerySchema = z.object({
  projectId: z.string().uuid(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type ListTasksQuery = z.infer<typeof listTasksSchema>;
export type ChangeStatusInput = z.infer<typeof changeStatusSchema>;
export type AssignInput = z.infer<typeof assignSchema>;
export type BulkStatusInput = z.infer<typeof bulkStatusSchema>;
