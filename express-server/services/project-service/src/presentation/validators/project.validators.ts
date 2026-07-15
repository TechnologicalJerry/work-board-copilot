import { z } from 'zod';

// ─── Project Validators ──────────────────────────────────────────────────────

export const createProjectSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be at most 100 characters'),
  description: z.string().max(1000).optional(),
  workspaceId: z.string().uuid('workspaceId must be a valid UUID'),
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  key: z.string().min(2).max(10).optional(),
  type: z.enum(['SCRUM', 'KANBAN', 'SCRUMBAN']).optional(),
  status: z.enum(['PLANNING', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'ARCHIVED']).optional(),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'color must be a valid hex color in #RRGGBB format')
    .optional(),
  icon: z.string().max(255).optional(),
  visibility: z.enum(['PRIVATE', 'PUBLIC', 'INTERNAL']).optional(),
  leadId: z.string().uuid().optional(),
  startDate: z.coerce.date().optional(),
  targetDate: z.coerce.date().optional(),
  settings: z.record(z.unknown()).optional(),
});

export type CreateProjectDto = z.infer<typeof createProjectSchema>;

export const updateProjectSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  description: z.string().max(1000).nullish(),
  status: z.enum(['PLANNING', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'ARCHIVED']).optional(),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'color must be a valid hex color in #RRGGBB format')
    .nullish(),
  icon: z.string().max(255).nullish(),
  type: z.enum(['SCRUM', 'KANBAN', 'SCRUMBAN']).optional(),
  visibility: z.enum(['PRIVATE', 'PUBLIC', 'INTERNAL']).optional(),
  leadId: z.string().uuid().nullish(),
  startDate: z.coerce.date().nullish(),
  targetDate: z.coerce.date().nullish(),
  settings: z.record(z.unknown()).optional(),
});

export type UpdateProjectDto = z.infer<typeof updateProjectSchema>;

export const listProjectsSchema = z.object({
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  workspaceId: z.string().uuid().optional(),
  status: z.enum(['PLANNING', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'ARCHIVED']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type ListProjectsQuery = z.infer<typeof listProjectsSchema>;

export const projectIdParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
});

// ─── Member Validators ───────────────────────────────────────────────────────

export const addMemberSchema = z.object({
  userId: z.string().uuid('userId must be a valid UUID'),
  role: z.enum(['MANAGER', 'LEAD', 'MEMBER', 'VIEWER']).default('MEMBER'),
});

export type AddMemberDto = z.infer<typeof addMemberSchema>;

export const updateMemberRoleSchema = z.object({
  role: z.enum(['MANAGER', 'LEAD', 'MEMBER', 'VIEWER']),
});

export type UpdateMemberRoleDto = z.infer<typeof updateMemberRoleSchema>;

export const memberParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
  userId: z.string().min(1, 'userId param is required'),
});

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// ─── Label Validators ────────────────────────────────────────────────────────

export const createLabelSchema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'color must be a valid hex color in #RRGGBB format'),
  description: z.string().max(255).optional(),
});

export type CreateLabelDto = z.infer<typeof createLabelSchema>;

export const updateLabelSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'color must be a valid hex color in #RRGGBB format')
    .optional(),
  description: z.string().max(255).nullish(),
});

export type UpdateLabelDto = z.infer<typeof updateLabelSchema>;

export const labelParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
  labelId: z.string().min(1, 'labelId param is required'),
});

// ─── Milestone Validators ────────────────────────────────────────────────────

export const createMilestoneSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().max(500).optional(),
  dueDate: z.string().datetime({ message: 'dueDate must be a valid ISO 8601 datetime string' }),
  status: z.enum(['UPCOMING', 'IN_PROGRESS', 'COMPLETED', 'OVERDUE']).optional(),
});

export type CreateMilestoneDto = z.infer<typeof createMilestoneSchema>;

export const updateMilestoneSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).nullish(),
  dueDate: z
    .string()
    .datetime({ message: 'dueDate must be a valid ISO 8601 datetime string' })
    .nullish(),
  status: z.enum(['UPCOMING', 'IN_PROGRESS', 'COMPLETED', 'OVERDUE']).optional(),
});

export type UpdateMilestoneDto = z.infer<typeof updateMilestoneSchema>;

export const milestoneParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
  mId: z.string().min(1, 'mId param is required'),
});
