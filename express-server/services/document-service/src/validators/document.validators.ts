import { z } from 'zod';

export const createDocumentSchema = z.object({
  organizationId: z.string().min(1),
  workspaceId: z.string().min(1),
  projectId: z.string().optional(),
  title: z.string().min(1).max(500),
  content: z.unknown().optional(),
  contentText: z.string().optional(),
  contentHtml: z.string().optional(),
  type: z.enum(['wiki', 'spec', 'runbook', 'meeting_notes', 'template', 'general']).optional().default('general'),
  visibility: z.enum(['public', 'private', 'team']).optional().default('private'),
  icon: z.string().optional(),
  parentId: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
});

export const updateDocumentSchema = z.object({
  title: z.string().min(1).max(500).optional(),
  content: z.unknown().optional(),
  contentText: z.string().optional(),
  contentHtml: z.string().optional(),
  visibility: z.enum(['public', 'private', 'team']).optional(),
  icon: z.string().optional(),
  tags: z.array(z.string()).optional(),
  changeDescription: z.string().max(200).optional(),
});

export const addCollaboratorSchema = z.object({
  userId: z.string().min(1),
  permission: z.enum(['view', 'comment', 'edit']),
});

export const restoreVersionSchema = z.object({
  version: z.number().int().min(1),
});

export const listDocumentsQuerySchema = z.object({
  workspaceId: z.string().optional(),
  projectId: z.string().optional(),
  authorId: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const createFromTemplateSchema = z.object({
  organizationId: z.string().min(1),
  workspaceId: z.string().min(1),
  projectId: z.string().optional(),
  title: z.string().min(1).max(500),
  visibility: z.enum(['public', 'private', 'team']).optional().default('private'),
  parentId: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
});

export const idParamSchema = z.object({ id: z.string().min(1) });
export const collaboratorParamSchema = z.object({ id: z.string().min(1), userId: z.string().min(1) });

export type CreateDocumentDto = z.infer<typeof createDocumentSchema>;
export type UpdateDocumentDto = z.infer<typeof updateDocumentSchema>;
export type AddCollaboratorDto = z.infer<typeof addCollaboratorSchema>;
