import { z } from 'zod';

export const uuidSchema = z.string().uuid('Invalid UUID format');

export const isoDateSchema = z.string().datetime({ message: 'Invalid ISO date format' });

export const emailSchema = z
  .string()
  .email('Invalid email address')
  .toLowerCase()
  .trim();

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must not exceed 128 characters')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    'Password must contain uppercase, lowercase, number and special character'
  );

export const phoneSchema = z
  .string()
  .regex(/^\+[1-9]\d{1,14}$/, 'Invalid phone number (E.164 format required)');

export const urlSchema = z.string().url('Invalid URL');

export const slugSchema = z
  .string()
  .min(1)
  .max(255)
  .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers and hyphens');

export const colorSchema = z
  .string()
  .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Invalid hex color');

export const timezoneSchema = z.string().min(1).max(100);

export const dateRangeSchema = z
  .object({
    from: isoDateSchema,
    to: isoDateSchema,
  })
  .refine((data) => new Date(data.from) <= new Date(data.to), {
    message: 'Start date must be before or equal to end date',
  });
