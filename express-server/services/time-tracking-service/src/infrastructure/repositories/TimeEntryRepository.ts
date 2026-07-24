import prisma from '../database/prisma';
import { TimeEntry, TimeEntryStatus } from '../../domain/entities/TimeEntry';

export interface TimeEntryFilters {
  userId?: string;
  taskId?: string;
  projectId?: string;
  organizationId?: string;
  status?: TimeEntryStatus;
  startFrom?: Date;
  startTo?: Date;
}

export interface PaginatedTimeEntries {
  data: TimeEntry[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class TimeEntryRepository {
  async findById(id: string): Promise<TimeEntry | null> {
    return prisma.timeEntry.findFirst({
      where: { id, deletedAt: null },
    }) as Promise<TimeEntry | null>;
  }

  async findAll(
    filters: TimeEntryFilters,
    page: number,
    limit: number,
  ): Promise<PaginatedTimeEntries> {
    const where = {
      deletedAt: null,
      ...(filters.userId && { userId: filters.userId }),
      ...(filters.taskId && { taskId: filters.taskId }),
      ...(filters.projectId && { projectId: filters.projectId }),
      ...(filters.organizationId && { organizationId: filters.organizationId }),
      ...(filters.status && { status: filters.status }),
      ...(filters.startFrom || filters.startTo
        ? {
            startTime: {
              ...(filters.startFrom && { gte: filters.startFrom }),
              ...(filters.startTo && { lte: filters.startTo }),
            },
          }
        : {}),
    };

    const [data, total] = await Promise.all([
      prisma.timeEntry.findMany({
        where,
        orderBy: { startTime: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.timeEntry.count({ where }),
    ]);

    return {
      data: data as TimeEntry[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findRunning(userId: string): Promise<TimeEntry | null> {
    return prisma.timeEntry.findFirst({
      where: { userId, status: 'RUNNING', deletedAt: null },
    }) as Promise<TimeEntry | null>;
  }

  async findByUserAndDateRange(
    userId: string,
    startFrom: Date,
    startTo: Date,
  ): Promise<TimeEntry[]> {
    return prisma.timeEntry.findMany({
      where: {
        userId,
        deletedAt: null,
        status: { not: 'RUNNING' },
        startTime: { gte: startFrom, lte: startTo },
      },
      orderBy: { startTime: 'asc' },
    }) as Promise<TimeEntry[]>;
  }

  async findByProjectAndDateRange(
    projectId: string,
    startFrom: Date,
    startTo: Date,
  ): Promise<TimeEntry[]> {
    return prisma.timeEntry.findMany({
      where: {
        projectId,
        deletedAt: null,
        status: { not: 'RUNNING' },
        startTime: { gte: startFrom, lte: startTo },
      },
      orderBy: { startTime: 'asc' },
    }) as Promise<TimeEntry[]>;
  }

  async create(
    data: Omit<TimeEntry, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<TimeEntry> {
    return prisma.timeEntry.create({ data }) as Promise<TimeEntry>;
  }

  async update(id: string, data: Partial<TimeEntry>): Promise<TimeEntry> {
    return prisma.timeEntry.update({
      where: { id },
      data,
    }) as Promise<TimeEntry>;
  }

  async softDelete(id: string): Promise<void> {
    await prisma.timeEntry.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async getTotalDuration(filters: {
    projectId?: string;
    userId?: string;
    organizationId?: string;
    startFrom?: Date;
    startTo?: Date;
  }): Promise<number> {
    const result = await prisma.timeEntry.aggregate({
      where: {
        deletedAt: null,
        status: { not: 'RUNNING' },
        ...(filters.projectId && { projectId: filters.projectId }),
        ...(filters.userId && { userId: filters.userId }),
        ...(filters.organizationId && { organizationId: filters.organizationId }),
        ...(filters.startFrom || filters.startTo
          ? {
              startTime: {
                ...(filters.startFrom && { gte: filters.startFrom }),
                ...(filters.startTo && { lte: filters.startTo }),
              },
            }
          : {}),
      },
      _sum: { duration: true },
    });
    return result._sum.duration ?? 0;
  }
}
