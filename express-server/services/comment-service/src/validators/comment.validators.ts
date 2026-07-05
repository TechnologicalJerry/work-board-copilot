import { z } from 'zod';

export const createCommentSchema = z.object({
  entityId: z.string().min(1, 'entityId is required'),
  entityType: z.enum(['task', 'document', 'epic', 'project']),
  projectId: z.string().min(1, 'projectId is required'),
  organizationId: z.string().min(1, 'organizationId is required'),
  parentId: z.string().optional().nullable(),
  content: z.string().min(1, 'Content cannot be empty').max(10000),
});

export const updateCommentSchema = z.object({
  content: z.string().min(1, 'Content cannot be empty').max(10000),
});

export const addReactionSchema = z.object({
  emoji: z.string().min(1).max(10),
});

export const listCommentsQuerySchema = z.object({
  entityId: z.string().min(1),
  entityType: z.enum(['task', 'document', 'epic', 'project']),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const listRepliesQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const commentIdParamSchema = z.object({
  id: z.string().min(1),
});

export type CreateCommentDto = z.infer<typeof createCommentSchema>;
export type UpdateCommentDto = z.infer<typeof updateCommentSchema>;
export type AddReactionDto = z.infer<typeof addReactionSchema>;
