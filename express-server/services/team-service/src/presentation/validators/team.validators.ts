import { z } from 'zod';

export const createTeamSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be at most 100 characters'),
  description: z.string().max(500).optional(),
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  departmentId: z.string().uuid('departmentId must be a valid UUID').optional(),
  leadId: z.string().uuid('leadId must be a valid UUID').optional(),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'color must be a valid hex color (#RRGGBB)')
    .optional(),
  icon: z.string().max(255).optional(),
  isPrivate: z.boolean().optional(),
  capacity: z.number().int().min(0).max(1000).optional(),
  workspaceId: z.string().uuid().optional(),
});

export const updateTeamSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters')
    .optional(),
  description: z.string().max(500).optional(),
  leadId: z.string().uuid('leadId must be a valid UUID').optional(),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'color must be a valid hex color (#RRGGBB)')
    .optional(),
  icon: z.string().max(255).optional(),
  isPrivate: z.boolean().optional(),
  capacity: z.number().int().min(0).max(1000).optional(),
});

export const addMemberSchema = z.object({
  userId: z.string().uuid('userId must be a valid UUID'),
  role: z.enum(['LEAD', 'MEMBER', 'VIEWER']).default('MEMBER'),
  capacity: z.number().int().min(0).max(100).optional(),
});

export const updateMemberSchema = z.object({
  role: z.enum(['LEAD', 'MEMBER', 'VIEWER']).optional(),
  capacity: z.number().int().min(0).max(100).optional(),
});

export const createDeptSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be at most 100 characters'),
  description: z.string().max(500).optional(),
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  parentId: z.string().uuid('parentId must be a valid UUID').optional(),
  headId: z.string().uuid('headId must be a valid UUID').optional(),
});

export const updateDeptSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters')
    .optional(),
  description: z.string().max(500).optional(),
  headId: z.string().uuid('headId must be a valid UUID').optional(),
});

export const listQuerySchema = z.object({
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  departmentId: z.string().uuid().optional(),
  workspaceId: z.string().uuid().optional(),
  search: z.string().max(200).optional(),
  isPrivate: z
    .string()
    .transform((v) => v === 'true')
    .optional(),
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});

export const listDeptQuerySchema = z.object({
  organizationId: z.string().uuid('organizationId must be a valid UUID'),
  search: z.string().max(200).optional(),
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().min(1).max(100).optional(),
});

export type CreateTeamInput = z.infer<typeof createTeamSchema>;
export type UpdateTeamInput = z.infer<typeof updateTeamSchema>;
export type AddMemberInput = z.infer<typeof addMemberSchema>;
export type UpdateMemberInput = z.infer<typeof updateMemberSchema>;
export type CreateDeptInput = z.infer<typeof createDeptSchema>;
export type UpdateDeptInput = z.infer<typeof updateDeptSchema>;
export type ListQueryInput = z.infer<typeof listQuerySchema>;
export type ListDeptQueryInput = z.infer<typeof listDeptQuerySchema>;
