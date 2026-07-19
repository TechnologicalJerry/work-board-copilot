import prisma from '../database/prisma';
import { TaskHistory } from '../../domain/entities/Task';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { PaginatedResult } from '@boardpilot/types';

export class TaskHistoryRepository {
  async create(
    taskId: string,
    userId: string,
    field: string,
    oldValue: string | null,
    newValue: string | null
  ): Promise<TaskHistory> {
    const record = await prisma.taskActivity.create({
      data: {
        taskId,
        userId,
        action: 'updated',
        field,
        oldValue,
        newValue,
      },
    });

    return {
      id: record.id,
      taskId: record.taskId,
      userId: record.userId,
      field: record.field ?? field,
      oldValue: record.oldValue ?? null,
      newValue: record.newValue ?? null,
      createdAt: record.createdAt,
    };
  }

  async createCreatedEntry(taskId: string, userId: string): Promise<TaskHistory> {
    const record = await prisma.taskActivity.create({
      data: {
        taskId,
        userId,
        action: 'created',
        field: 'task',
        oldValue: null,
        newValue: 'created',
      },
    });

    return {
      id: record.id,
      taskId: record.taskId,
      userId: record.userId,
      field: 'task',
      oldValue: null,
      newValue: 'created',
      createdAt: record.createdAt,
    };
  }

  async findByTask(
    taskId: string,
    page: number,
    limit: number
  ): Promise<PaginatedResult<TaskHistory>> {
    const skip = calculateSkip(page, limit);

    const [records, total] = await Promise.all([
      prisma.taskActivity.findMany({
        where: { taskId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.taskActivity.count({ where: { taskId } }),
    ]);

    const data: TaskHistory[] = records.map((r) => ({
      id: r.id,
      taskId: r.taskId,
      userId: r.userId,
      field: r.field ?? r.action,
      oldValue: r.oldValue ?? null,
      newValue: r.newValue ?? null,
      createdAt: r.createdAt,
    }));

    return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
  }
}
