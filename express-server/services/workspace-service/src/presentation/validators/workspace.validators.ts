import { z } from 'zod';

export const createWorkspaceSchema = z.object({
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  iconUrl: z.string().url().optional(),
  color: z.string().max(20).optional(),
  visibility: z.enum(['PUBLIC', 'PRIVATE']).default('PRIVATE'),
  settings: z.record(z.unknown()).optional(),
});

export type CreateWorkspaceInput = z.infer<typeof createWorkspaceSchema>;

export const updateWorkspaceSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).nullish(),
  iconUrl: z.string().url().nullish(),
  color: z.string().max(20).nullish(),
  visibility: z.enum(['PUBLIC', 'PRIVATE']).optional(),
  settings: z.record(z.unknown()).optional(),
});

export type UpdateWorkspaceInput = z.infer<typeof updateWorkspaceSchema>;

export const listWorkspacesQuerySchema = z.object({
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  isArchived: z
    .string()
    .transform((v) => v === 'true')
    .optional(),
  visibility: z.enum(['PUBLIC', 'PRIVATE']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type ListWorkspacesQuery = z.infer<typeof listWorkspacesQuerySchema>;

export const addMemberSchema = z.object({
  userId: z.string().min(1, 'userId is required'),
  role: z.enum(['OWNER', 'ADMIN', 'MEMBER', 'VIEWER']).default('MEMBER'),
});

export type AddMemberInput = z.infer<typeof addMemberSchema>;

export const workspaceIdParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
});

export const workspaceMemberParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
  userId: z.string().min(1, 'userId param is required'),
});
