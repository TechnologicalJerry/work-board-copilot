import { z } from 'zod';

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(1).max(100).optional(),
  lastName: z.string().min(1).max(100).optional(),
  displayName: z.string().max(150).nullish(),
  bio: z.string().max(1000).nullish(),
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

export type UpdateProfileInput = z.infer<typeof UpdateProfileSchema>;

export const UpdatePreferencesSchema = z.object({
  notificationPrefs: z.object({}).passthrough().optional(),
});

export type UpdatePreferencesInput = z.infer<typeof UpdatePreferencesSchema>;

export const SearchUsersSchema = z.object({
  q: z.string().min(1),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export type SearchUsersInput = z.infer<typeof SearchUsersSchema>;
