import { PrismaClient } from '../../generated/prisma-client';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { Milestone, CreateMilestoneInput, UpdateMilestoneInput } from '../../domain/entities/Milestone';
import { IMilestoneRepository } from '../../domain/repositories/IMilestoneRepository';

export class PrismaMilestoneRepository implements IMilestoneRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateMilestoneInput): Promise<Milestone> {
    const milestone = await this.prisma.milestone.create({
      data: {
        projectId: input.projectId,
        name: input.name,
        description: input.description,
        dueDate: input.dueDate,
        status: input.status ?? 'UPCOMING',
        createdBy: input.createdBy,
      },
    });
    return this.mapMilestone(milestone);
  }

  async findById(id: string): Promise<Milestone | null> {
    const milestone = await this.prisma.milestone.findUnique({
      where: { id },
    });
    return milestone ? this.mapMilestone(milestone) : null;
  }

  async findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<Milestone>> {
    const skip = calculateSkip(options.page, options.limit);

    const [data, total] = await Promise.all([
      this.prisma.milestone.findMany({
        where: { projectId },
        skip,
        take: options.limit,
        orderBy: { [options.sortBy ?? 'createdAt']: options.sortOrder ?? 'asc' },
      }),
      this.prisma.milestone.count({ where: { projectId } }),
    ]);

    return buildPaginatedResult(data.map((m) => this.mapMilestone(m)), total, options);
  }

  async update(id: string, input: UpdateMilestoneInput): Promise<Milestone> {
    const milestone = await this.prisma.milestone.update({
      where: { id },
      data: {
        ...(input.name !== undefined && { name: input.name }),
        ...(input.description !== undefined && { description: input.description }),
        ...(input.dueDate !== undefined && { dueDate: input.dueDate }),
        ...(input.status !== undefined && { status: input.status }),
      },
    });
    return this.mapMilestone(milestone);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.milestone.delete({ where: { id } });
  }

  async countByProject(projectId: string): Promise<number> {
    return this.prisma.milestone.count({ where: { projectId } });
  }

  async countCompletedByProject(projectId: string): Promise<number> {
    return this.prisma.milestone.count({
      where: { projectId, status: 'COMPLETED' },
    });
  }

  async findUpcoming(
    projectId: string,
    limit: number
  ): Promise<Array<{ id: string; name: string; dueDate: Date | null; status: string }>> {
    return this.prisma.milestone.findMany({
      where: {
        projectId,
        status: { notIn: ['COMPLETED'] },
        dueDate: { not: null },
      },
      orderBy: { dueDate: 'asc' },
      take: limit,
      select: { id: true, name: true, dueDate: true, status: true },
    });
  }

  private mapMilestone(raw: {
    id: string;
    projectId: string;
    name: string;
    description: string | null;
    dueDate: Date | null;
    status: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  }): Milestone {
    return {
      id: raw.id,
      projectId: raw.projectId,
      name: raw.name,
      description: raw.description,
      dueDate: raw.dueDate,
      status: raw.status as Milestone['status'],
      createdBy: raw.createdBy,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
