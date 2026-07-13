import { z } from 'zod';

export const createOrgSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().max(500).optional(),
  domain: z.string().max(255).optional(),
  website: z.string().url().optional(),
  industry: z.string().max(100).optional(),
  size: z.enum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']).optional(),
  country: z.string().max(100).optional(),
  timezone: z.string().max(100).optional(),
  plan: z.enum(['FREE', 'STARTER', 'PROFESSIONAL', 'ENTERPRISE']).optional(),
});

export type CreateOrgInput = z.infer<typeof createOrgSchema>;

export const updateOrgSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  description: z.string().max(500).nullish(),
  domain: z.string().max(255).nullish(),
  logoUrl: z.string().url().nullish(),
  website: z.string().url().nullish(),
  industry: z.string().max(100).nullish(),
  size: z.enum(['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']).nullish(),
  country: z.string().max(100).nullish(),
  timezone: z.string().max(100).optional(),
  settings: z.record(z.unknown()).optional(),
});

export type UpdateOrgInput = z.infer<typeof updateOrgSchema>;

export const inviteMemberSchema = z.object({
  userId: z.string().min(1, 'userId is required'),
  role: z.enum(['OWNER', 'ADMIN', 'MEMBER', 'BILLING_ADMIN', 'VIEWER']).default('MEMBER'),
});

export type InviteMemberInput = z.infer<typeof inviteMemberSchema>;

export const updateMemberRoleSchema = z.object({
  role: z.enum(['OWNER', 'ADMIN', 'MEMBER', 'BILLING_ADMIN', 'VIEWER']),
});

export type UpdateMemberRoleInput = z.infer<typeof updateMemberRoleSchema>;

export const orgIdParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
});

export const orgMemberParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
  userId: z.string().min(1, 'userId param is required'),
});

export const listMembersQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});
