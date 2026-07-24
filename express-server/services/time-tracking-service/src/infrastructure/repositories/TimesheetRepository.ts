import prisma from '../database/prisma';
import { Timesheet, TimesheetStatus } from '../../domain/entities/Timesheet';

export interface TimesheetFilters {
  userId?: string;
  organizationId?: string;
  projectId?: string;
  status?: TimesheetStatus;
  periodStart?: Date;
  periodEnd?: Date;
}

export interface PaginatedTimesheets {
  data: Timesheet[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class TimesheetRepository {
  async findById(id: string): Promise<Timesheet | null> {
    return prisma.timesheet.findUnique({
      where: { id },
    }) as Promise<Timesheet | null>;
  }

  async findAll(
    filters: TimesheetFilters,
    page: number,
    limit: number,
  ): Promise<PaginatedTimesheets> {
    const where = {
      ...(filters.userId && { userId: filters.userId }),
      ...(filters.organizationId && { organizationId: filters.organizationId }),
      ...(filters.projectId && { projectId: filters.projectId }),
      ...(filters.status && { status: filters.status }),
      ...(filters.periodStart && { periodStart: { gte: filters.periodStart } }),
      ...(filters.periodEnd && { periodEnd: { lte: filters.periodEnd } }),
    };

    const [data, total] = await Promise.all([
      prisma.timesheet.findMany({
        where,
        orderBy: { periodStart: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.timesheet.count({ where }),
    ]);

    return {
      data: data as Timesheet[],
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findByPeriod(
    userId: string,
    periodStart: Date,
    periodEnd: Date,
  ): Promise<Timesheet | null> {
    return prisma.timesheet.findUnique({
      where: {
        userId_periodStart_periodEnd: {
          userId,
          periodStart,
          periodEnd,
        },
      },
    }) as Promise<Timesheet | null>;
  }

  async create(
    data: Omit<Timesheet, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Timesheet> {
    return prisma.timesheet.create({ data }) as Promise<Timesheet>;
  }

  async update(id: string, data: Partial<Timesheet>): Promise<Timesheet> {
    return prisma.timesheet.update({
      where: { id },
      data,
    }) as Promise<Timesheet>;
  }
}
