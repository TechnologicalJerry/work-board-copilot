import { prisma } from '../database/prisma';
import {
  ISprintRepository,
  CreateSprintData,
  UpdateSprintData,
  SprintFilters,
} from '../../domain/repositories/ISprintRepository';
import { SprintEntity, SprintStatus } from '../../domain/entities/Sprint';
import { PaginationOptions } from '@boardpilot/types';

export class PrismaSprintRepository implements ISprintRepository {
  async findById(id: string): Promise<SprintEntity | null> {
    const sprint = await prisma.sprint.findFirst({
      where: { id },
      include: { items: true },
    });

    if (!sprint) return null;
    return this.mapToEntity(sprint);
  }

  async findAll(
    projectId: string,
    filters: SprintFilters,
    pagination: PaginationOptions
  ): Promise<{ sprints: SprintEntity[]; total: number }> {
    const { page, limit, sortBy = 'createdAt', sortOrder = 'desc' } = pagination;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = { projectId };

    if (filters.status) {
      where.status = filters.status;
    }

    const [data, total] = await Promise.all([
      prisma.sprint.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: { items: true },
      }),
      prisma.sprint.count({ where }),
    ]);

    return {
      sprints: data.map((s) => this.mapToEntity(s)),
      total,
    };
  }

  async findActiveSprint(projectId: string): Promise<SprintEntity | null> {
    const sprint = await prisma.sprint.findFirst({
      where: { projectId, status: 'ACTIVE' },
      include: { items: true },
    });

    if (!sprint) return null;
    return this.mapToEntity(sprint);
  }

  async create(data: CreateSprintData): Promise<SprintEntity> {
    const sprint = await prisma.sprint.create({
      data: {
        projectId: data.projectId,
        name: data.name,
        goal: data.goal,
        startDate: data.startDate,
        endDate: data.endDate,
        capacity: data.capacity,
        notes: data.notes,
        createdBy: data.createdBy,
        updatedBy: data.updatedBy,
        status: 'PLANNED',
      },
      include: { items: true },
    });

    return this.mapToEntity(sprint);
  }

  async update(id: string, data: UpdateSprintData): Promise<SprintEntity> {
    const sprint = await prisma.sprint.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.goal !== undefined && { goal: data.goal }),
        ...(data.startDate !== undefined && { startDate: data.startDate }),
        ...(data.endDate !== undefined && { endDate: data.endDate }),
        ...(data.capacity !== undefined && { capacity: data.capacity }),
        ...(data.velocityPoints !== undefined && { velocityPoints: data.velocityPoints }),
        ...(data.notes !== undefined && { notes: data.notes }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.startedAt !== undefined && { startedAt: data.startedAt }),
        ...(data.completedAt !== undefined && { completedAt: data.completedAt }),
        updatedBy: data.updatedBy,
      },
      include: { items: true },
    });

    return this.mapToEntity(sprint);
  }

  async delete(id: string): Promise<void> {
    await prisma.sprint.delete({ where: { id } });
  }

  async getBurndownData(sprintId: string): Promise<SprintEntity | null> {
    const sprint = await prisma.sprint.findUnique({
      where: { id: sprintId },
      include: {
        items: {
          select: {
            id: true,
            sprintId: true,
            taskId: true,
            storyPoints: true,
            addedBy: true,
            addedAt: true,
            removedAt: true,
            completedAt: true,
          },
        },
      },
    });

    if (!sprint) return null;
    return this.mapToEntity(sprint);
  }

  private mapToEntity(raw: {
    id: string;
    projectId: string;
    name: string;
    goal?: string | null;
    status: SprintStatus;
    startDate?: Date | null;
    endDate?: Date | null;
    startedAt?: Date | null;
    completedAt?: Date | null;
    capacity?: number | null;
    velocityPoints?: number | null;
    notes?: string | null;
    createdBy: string;
    updatedBy: string;
    createdAt: Date;
    updatedAt: Date;
    items?: unknown[];
  }): SprintEntity {
    return {
      id: raw.id,
      projectId: raw.projectId,
      name: raw.name,
      goal: raw.goal,
      status: raw.status,
      startDate: raw.startDate,
      endDate: raw.endDate,
      startedAt: raw.startedAt,
      completedAt: raw.completedAt,
      capacity: raw.capacity,
      velocityPoints: raw.velocityPoints,
      notes: raw.notes,
      createdBy: raw.createdBy,
      updatedBy: raw.updatedBy,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
