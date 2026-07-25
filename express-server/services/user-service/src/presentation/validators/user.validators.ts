import { z } from 'zod';

export const updateProfileSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  displayName: z.string().max(150).nullish(),
  bio: z.string().max(500).nullish(),
  phone: z.string().max(30).nullish(),
  timezone: z.string().max(100).optional(),
  locale: z.string().max(10).optional(),
  dateFormat: z.string().max(20).optional(),
  timeFormat: z.string().max(20).optional(),
  weekStartsOn: z.number().int().min(0).max(6).optional(),
  theme: z.string().max(20).optional(),
  jobTitle: z.string().max(150).nullish(),
  department: z.string().max(150).nullish(),
  skills: z.array(z.string().max(100)).optional(),
  linkedinUrl: z.string().url().nullish(),
  githubUrl: z.string().url().nullish(),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

export const updateAvatarSchema = z.object({
  avatarUrl: z.string().url('avatarUrl must be a valid URL'),
});

export type UpdateAvatarInput = z.infer<typeof updateAvatarSchema>;

export const searchUsersSchema = z.object({
  q: z.string().min(1, 'Search query must not be empty'),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type SearchUsersInput = z.infer<typeof searchUsersSchema>;

export const userIdParamSchema = z.object({
  id: z.string().min(1, 'id param is required'),
});

export const activityQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(30),
});
