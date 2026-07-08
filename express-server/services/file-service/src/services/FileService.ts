import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import * as S3Service from '../infrastructure/storage/S3Service';
import * as ImageProcessor from '../infrastructure/ImageProcessor';
import * as FileRepository from '../repositories/FileRepository';
import { FileStatus } from '../generated/prisma-client';
import { config } from '../config';
import { NotFoundError, ForbiddenError, BadRequestError } from '@boardpilot/errors';
import { buildPaginatedResult } from '@boardpilot/common';
import logger from '@boardpilot/logger';

const ALLOWED_MIME_TYPES = new Set([
  // Images
  'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml',
  // Documents
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  // Text
  'text/plain', 'text/csv', 'text/markdown',
  // Archives
  'application/zip', 'application/x-tar', 'application/gzip',
  // Video
  'video/mp4', 'video/webm', 'video/ogg',
  // Audio
  'audio/mpeg', 'audio/wav', 'audio/ogg',
]);

function buildS3Key(orgId: string, fileName: string): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const uniqueId = uuidv4();
  const ext = path.extname(fileName);
  const safeName = path.basename(fileName, ext).replace(/[^a-zA-Z0-9-_]/g, '_');
  return `${orgId}/${year}/${month}/${uniqueId}-${safeName}${ext}`;
}

export interface UploadFileOptions {
  organizationId: string;
  entityId?: string;
  entityType?: string;
}

export async function upload(
  file: Express.Multer.File,
  dto: UploadFileOptions,
  userId: string
): Promise<FileRepository.FileRecord> {
  // Validate MIME type
  if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
    throw new BadRequestError(`File type '${file.mimetype}' is not allowed`);
  }

  // Validate size (100MB max)
  if (file.size > config.MAX_FILE_SIZE_BYTES) {
    throw new BadRequestError(`File size exceeds maximum allowed size of ${config.MAX_FILE_SIZE_MB}MB`);
  }

  const s3Key = buildS3Key(dto.organizationId, file.originalname);
  const url = await S3Service.uploadFile(s3Key, file.buffer, file.mimetype);

  let thumbnailKey: string | undefined;
  let width: number | undefined;
  let height: number | undefined;

  if (ImageProcessor.isImage(file.mimetype) && file.mimetype !== 'image/svg+xml') {
    try {
      const dims = await ImageProcessor.getDimensions(file.buffer);
      width = dims.width;
      height = dims.height;

      const thumbBuffer = await ImageProcessor.generateThumbnail(file.buffer, file.mimetype);
      thumbnailKey = s3Key.replace(/(\.[^.]+)$/, '_thumb.webp');
      await S3Service.uploadFile(thumbnailKey, thumbBuffer, 'image/webp');
    } catch (err) {
      logger.warn({ err }, 'Failed to generate thumbnail, continuing without it');
    }
  }

  const record = await FileRepository.create({
    organizationId: dto.organizationId,
    entityId: dto.entityId,
    entityType: dto.entityType,
    uploadedBy: userId,
    originalName: file.originalname,
    mimeType: file.mimetype,
    size: file.size,
    s3Key,
    s3Bucket: config.AWS_S3_BUCKET,
    thumbnailKey,
    width,
    height,
    url,
    status: FileStatus.READY,
  });

  logger.info({ fileId: record.id, s3Key, userId }, 'File uploaded');
  return record;
}

export async function getPresignedUploadUrl(dto: {
  organizationId: string;
  originalName: string;
  mimeType: string;
  size: number;
  entityId?: string;
  entityType?: string;
}): Promise<{ uploadUrl: string; fileId: string; s3Key: string }> {
  if (!ALLOWED_MIME_TYPES.has(dto.mimeType)) {
    throw new BadRequestError(`File type '${dto.mimeType}' is not allowed`);
  }

  if (dto.size > config.MAX_FILE_SIZE_BYTES) {
    throw new BadRequestError(`File size exceeds maximum allowed size of ${config.MAX_FILE_SIZE_MB}MB`);
  }

  const s3Key = buildS3Key(dto.organizationId, dto.originalName);
  const uploadUrl = await S3Service.getPresignedUploadUrl(s3Key, dto.mimeType, config.MAX_FILE_SIZE_MB);

  // Create a placeholder record with UPLOADING status
  const record = await FileRepository.create({
    organizationId: dto.organizationId,
    entityId: dto.entityId,
    entityType: dto.entityType,
    uploadedBy: 'presigned', // Will be updated when upload completes
    originalName: dto.originalName,
    mimeType: dto.mimeType,
    size: dto.size,
    s3Key,
    s3Bucket: config.AWS_S3_BUCKET,
    status: FileStatus.UPLOADING,
  });

  return { uploadUrl, fileId: record.id, s3Key };
}

export async function getDownloadUrl(
  fileId: string,
  userId: string
): Promise<{ downloadUrl: string; fileName: string }> {
  const file = await FileRepository.findById(fileId);
  if (!file || file.deletedAt) throw new NotFoundError('File', fileId);

  const downloadUrl = await S3Service.getPresignedDownloadUrl(file.s3Key, file.originalName, 3600);
  return { downloadUrl, fileName: file.originalName };
}

export async function deleteFile(fileId: string, userId: string): Promise<void> {
  const file = await FileRepository.findById(fileId);
  if (!file || file.deletedAt) throw new NotFoundError('File', fileId);

  await FileRepository.softDelete(fileId);
  // The S3 key is marked for deletion; actual deletion can be handled async (e.g., lifecycle rules or a cleanup job)
  logger.info({ fileId, s3Key: file.s3Key, userId }, 'File soft-deleted');
}

export async function getForEntity(entityId: string, entityType: string): Promise<FileRepository.FileRecord[]> {
  return FileRepository.findByEntity(entityId, entityType);
}

export async function list(
  filters: FileRepository.FileFilters,
  page: number,
  limit: number
) {
  const { data, total } = await FileRepository.findAll(filters, page, limit);
  return buildPaginatedResult(data as unknown as FileRepository.FileRecord[], total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}
