import { z } from 'zod';

export const uploadFileSchema = z.object({
  organizationId: z.string().min(1, 'organizationId is required'),
  entityId: z.string().optional(),
  entityType: z.string().optional(),
});

export const presignedUploadSchema = z.object({
  organizationId: z.string().min(1),
  entityId: z.string().optional(),
  entityType: z.string().optional(),
  originalName: z.string().min(1),
  mimeType: z.string().min(1),
  size: z.number().int().positive().max(100 * 1024 * 1024, 'File size exceeds 100MB limit'),
});

export const fileIdParamSchema = z.object({
  id: z.string().min(1),
});

export const listFilesQuerySchema = z.object({
  entityId: z.string().optional(),
  entityType: z.string().optional(),
  uploadedBy: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type UploadFileDto = z.infer<typeof uploadFileSchema>;
export type PresignedUploadDto = z.infer<typeof presignedUploadSchema>;
