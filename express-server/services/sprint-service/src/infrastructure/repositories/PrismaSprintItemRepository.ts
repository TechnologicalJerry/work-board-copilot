import { prisma } from '../database/prisma';
import {
  ISprintItemRepository,
  SprintItemEntity,
  AddSprintItemData,
} from '../../domain/repositories/ISprintItemRepository';
import { ConflictError } from '@boardpilot/errors';

export class PrismaSprintItemRepository implements ISprintItemRepository {
  async findAll(sprintId: string): Promise<SprintItemEntity[]> {
    const items = await prisma.sprintItem.findMany({
      where: { sprintId },
      orderBy: { addedAt: 'asc' },
    });
    return items.map(this.mapToEntity);
  }

  async findByTaskId(sprintId: string, taskId: string): Promise<SprintItemEntity | null> {
    const item = await prisma.sprintItem.findUnique({
      where: { sprintId_taskId: { sprintId, taskId } },
    });
    if (!item) return null;
    return this.mapToEntity(item);
  }

  async add(data: AddSprintItemData): Promise<SprintItemEntity> {
    // Guard against duplicate: the unique constraint on [sprintId, taskId] will
    // throw a Prisma P2002 error, but we surface a readable ConflictError first.
    const existing = await this.findByTaskId(data.sprintId, data.taskId);
    if (existing) {
      throw new ConflictError('Task is already in this sprint', {
        sprintId: data.sprintId,
        taskId: data.taskId,
      });
    }

    const item = await prisma.sprintItem.create({
      data: {
        sprintId: data.sprintId,
        taskId: data.taskId,
        storyPoints: data.storyPoints,
        addedBy: data.addedBy,
      },
    });

    return this.mapToEntity(item);
  }

  async remove(sprintId: string, taskId: string): Promise<void> {
    await prisma.sprintItem.delete({
      where: { sprintId_taskId: { sprintId, taskId } },
    });
  }

  async countByStatus(sprintId: string): Promise<{
    total: number;
    completed: number;
    remaining: number;
  }> {
    const [total, completed] = await Promise.all([
      prisma.sprintItem.count({ where: { sprintId } }),
      prisma.sprintItem.count({ where: { sprintId, completedAt: { not: null } } }),
    ]);

    return { total, completed, remaining: total - completed };
  }

  async markCompleted(sprintId: string, taskId: string): Promise<SprintItemEntity> {
    const item = await prisma.sprintItem.update({
      where: { sprintId_taskId: { sprintId, taskId } },
      data: { completedAt: new Date() },
    });
    return this.mapToEntity(item);
  }

  async getStatsForSprint(sprintId: string): Promise<{
    total: number;
    completed: number;
    totalPoints: number;
    completedPoints: number;
  }> {
    const items = await prisma.sprintItem.findMany({
      where: { sprintId },
      select: { storyPoints: true, completedAt: true },
    });

    let total = 0;
    let completed = 0;
    let totalPoints = 0;
    let completedPoints = 0;

    for (const item of items) {
      total++;
      totalPoints += item.storyPoints ?? 0;

      if (item.completedAt !== null) {
        completed++;
        completedPoints += item.storyPoints ?? 0;
      }
    }

    return { total, completed, totalPoints, completedPoints };
  }

  private mapToEntity(raw: {
    id: string;
    sprintId: string;
    taskId: string;
    storyPoints?: number | null;
    addedBy: string;
    addedAt: Date;
    removedAt?: Date | null;
    completedAt?: Date | null;
  }): SprintItemEntity {
    return {
      id: raw.id,
      sprintId: raw.sprintId,
      taskId: raw.taskId,
      storyPoints: raw.storyPoints,
      addedBy: raw.addedBy,
      addedAt: raw.addedAt,
      removedAt: raw.removedAt,
      completedAt: raw.completedAt,
    };
  }
}
