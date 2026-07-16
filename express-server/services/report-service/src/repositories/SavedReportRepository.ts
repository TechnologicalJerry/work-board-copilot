import prisma from '../infrastructure/database/prisma';
import { calculateSkip, buildPaginatedResult } from '@boardpilot/common';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';
import { Prisma, ReportType } from '../generated/prisma-client';

export interface CreateSavedReportDto {
  organizationId: string;
  projectId?: string;
  name: string;
  type: string;
  config: Record<string, unknown>;
  isShared?: boolean;
}

export async function create(dto: CreateSavedReportDto, userId: string) {
  return prisma.savedReport.create({
    data: {
      ...dto,
      type: dto.type as ReportType,
      config: dto.config as Prisma.InputJsonValue,
      isShared: dto.isShared ?? false,
      createdBy: userId,
    },
  });
}

export async function findAll(
  organizationId: string,
  projectId: string | undefined,
  page: number,
  limit: number
) {
  const where = {
    organizationId,
    ...(projectId && { projectId }),
    deletedAt: null,
  };

  const skip = calculateSkip(page, limit);
  const [data, total] = await Promise.all([
    prisma.savedReport.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' } }),
    prisma.savedReport.count({ where }),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}

export async function findById(id: string) {
  return prisma.savedReport.findUnique({ where: { id } });
}

export async function update(id: string, userId: string, dto: Partial<CreateSavedReportDto>) {
  const report = await prisma.savedReport.findUnique({ where: { id } });
  if (!report || report.deletedAt) throw new NotFoundError('SavedReport', id);
  if (report.createdBy !== userId) throw new ForbiddenError('Access denied');

  const { type, config, ...rest } = dto;
  return prisma.savedReport.update({
    where: { id },
    data: {
      ...rest,
      ...(type !== undefined ? { type: type as ReportType } : {}),
      ...(config !== undefined ? { config: config as Prisma.InputJsonValue } : {}),
    },
  });
}

export async function softDelete(id: string, userId: string): Promise<void> {
  const report = await prisma.savedReport.findUnique({ where: { id } });
  if (!report || report.deletedAt) throw new NotFoundError('SavedReport', id);
  if (report.createdBy !== userId) throw new ForbiddenError('Access denied');

  await prisma.savedReport.update({ where: { id }, data: { deletedAt: new Date() } });
}
