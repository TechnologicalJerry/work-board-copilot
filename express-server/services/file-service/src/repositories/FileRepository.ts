import prisma from '../infrastructure/database/prisma';
import { Prisma, FileStatus } from '../generated/prisma-client';
import { calculateSkip } from '@boardpilot/common';

export interface FileRecord {
  id: string;
  organizationId: string;
  entityId?: string | null;
  entityType?: string | null;
  uploadedBy: string;
  originalName: string;
  mimeType: string;
  size: number;
  s3Key: string;
  s3Bucket: string;
  thumbnailKey?: string | null;
  width?: number | null;
  height?: number | null;
  status: FileStatus;
  url?: string | null;
  deletedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateFileInput {
  organizationId: string;
  entityId?: string;
  entityType?: string;
  uploadedBy: string;
  originalName: string;
  mimeType: string;
  size: number;
  s3Key: string;
  s3Bucket: string;
  thumbnailKey?: string;
  width?: number;
  height?: number;
  status?: FileStatus;
  url?: string;
}

export interface FileFilters {
  organizationId?: string;
  entityId?: string;
  entityType?: string;
  uploadedBy?: string;
  status?: FileStatus;
}

export async function create(data: CreateFileInput): Promise<FileRecord> {
  return prisma.file.create({
    data: {
      organizationId: data.organizationId,
      entityId: data.entityId,
      entityType: data.entityType,
      uploaderId: data.uploadedBy,
      originalName: data.originalName,
      storedName: data.originalName,
      mimeType: data.mimeType,
      size: data.size,
      key: data.s3Key,
      bucket: data.s3Bucket,
      thumbnailKey: data.thumbnailKey,
      width: data.width,
      height: data.height,
      url: data.url ?? '',
      status: data.status ?? FileStatus.READY,
    },
  }) as unknown as FileRecord;
}

export async function findById(id: string): Promise<FileRecord | null> {
  return prisma.file.findUnique({ where: { id } }) as unknown as FileRecord | null;
}

export async function findAll(filters: FileFilters, page: number, limit: number) {
  const where: Prisma.FileWhereInput = {
    ...(filters.organizationId && { organizationId: filters.organizationId }),
    ...(filters.entityId && { entityId: filters.entityId }),
    ...(filters.entityType && { entityType: filters.entityType }),
    ...(filters.uploadedBy && { uploadedBy: filters.uploadedBy }),
    ...(filters.status && { status: filters.status }),
    deletedAt: null,
  };

  const skip = calculateSkip(page, limit);
  const [data, total] = await Promise.all([
    prisma.file.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
    prisma.file.count({ where }),
  ]);

  return { data, total };
}

export async function update(id: string, data: Partial<CreateFileInput>): Promise<FileRecord> {
  return prisma.file.update({ where: { id }, data }) as unknown as FileRecord;
}

export async function softDelete(id: string): Promise<FileRecord> {
  return prisma.file.update({
    where: { id },
    data: { deletedAt: new Date(), status: FileStatus.DELETED },
  }) as unknown as FileRecord;
}

export async function findByEntity(entityId: string, entityType: string): Promise<FileRecord[]> {
  return prisma.file.findMany({
    where: { entityId, entityType, deletedAt: null },
    orderBy: { createdAt: 'desc' },
  }) as unknown as FileRecord[];
}
