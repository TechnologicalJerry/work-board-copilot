import { Prisma } from '../../generated/prisma-client';
import prisma from '../database/prisma';
import { Task, TaskFilters, TaskStats } from '../../domain/entities/Task';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { PaginatedResult } from '@boardpilot/types';

type PrismaTask = Prisma.TaskGetPayload<{
  include: { subtasks: true; activity: true };
}>;

function mapToTask(record: PrismaTask): Task {
  return {
    id: record.id,
    organizationId: record.organizationId,
    projectId: record.projectId,
    sprintId: record.sprintId ?? null,
    boardId: record.boardColumnId ?? null,
    parentId: record.parentId ?? null,
    title: record.title,
    description: record.description ?? null,
    status: record.status as Task['status'],
    priority: record.priority as Task['priority'],
    type: record.type as Task['type'],
    assigneeId: record.assigneeId ?? null,
    reporterId: record.reporterId,
    storyPoints: record.storyPoints ?? null,
    dueDate: record.dueDate ?? null,
    startDate: record.startDate ?? null,
    completedAt: record.completedAt ?? null,
    position: record.position,
    labels: record.labels,
    tags: record.tags,
    customFields: (record.customFields as Record<string, unknown>) ?? {},
    attachmentCount: record.attachmentCount ?? 0,
    commentCount: record.commentCount ?? 0,
    subtaskCount: record.subtaskCount ?? 0,
    completedSubtaskCount: record.completedSubtaskCount ?? 0,
    estimatedHours: record.estimatedHours ?? null,
    actualHours: record.actualHours ?? null,
    createdBy: record.createdBy,
    updatedBy: record.updatedBy ?? null,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
    deletedAt: record.deletedAt ?? null,
    subtasks: record.subtasks?.map((s) => mapToTask(s as PrismaTask)) ?? [],
    watchers: [],
  };
}

export class TaskRepository {
  async findById(id: string): Promise<Task | null> {
    const task = await prisma.task.findFirst({
      where: { id, deletedAt: null },
      include: {
        subtasks: {
          where: { deletedAt: null },
          orderBy: { position: 'asc' },
        },
        activity: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!task) return null;
    return mapToTask(task as PrismaTask);
  }

  async findAll(
    filters: TaskFilters,
    page: number,
    limit: number
  ): Promise<PaginatedResult<Task>> {
    const where: Prisma.TaskWhereInput = {
      deletedAt: null,
      organizationId: filters.organizationId,
    };

    if (filters.projectId) where.projectId = filters.projectId;
    if (filters.sprintId) where.sprintId = filters.sprintId;
    if (filters.boardId !== undefined) where.boardColumnId = filters.boardId;
    if (filters.assigneeId) where.assigneeId = filters.assigneeId;

    if (filters.status && filters.status.length > 0) {
      where.status = { in: filters.status };
    }

    if (filters.priority && filters.priority.length > 0) {
      where.priority = { in: filters.priority };
    }

    if (filters.type && filters.type.length > 0) {
      where.type = { in: filters.type };
    }

    if (filters.labels && filters.labels.length > 0) {
      where.labels = { hasSome: filters.labels };
    }

    if (filters.parentId !== undefined) {
      where.parentId = filters.parentId;
    }

    if (filters.search) {
      where.title = { contains: filters.search, mode: 'insensitive' };
    }

    const skip = calculateSkip(page, limit);

    const [records, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ position: 'asc' }, { createdAt: 'desc' }],
        include: {
          subtasks: {
            where: { deletedAt: null },
            select: {
              id: true,
              title: true,
              status: true,
              position: true,
              type: true,
              priority: true,
              assigneeId: true,
              createdAt: true,
              updatedAt: true,
            },
          },
          activity: false,
        },
      }),
      prisma.task.count({ where }),
    ]);

    const data = records.map((r) => mapToTask(r as unknown as PrismaTask));
    return buildPaginatedResult(data, total, { page, limit, sortBy: 'position', sortOrder: 'asc' });
  }

  async create(data: Prisma.TaskUncheckedCreateInput): Promise<Task> {
    const task = await prisma.task.create({
      data,
      include: {
        subtasks: true,
        activity: true,
      },
    });
    return mapToTask(task as PrismaTask);
  }

  async update(id: string, data: Prisma.TaskUncheckedUpdateInput): Promise<Task> {
    const task = await prisma.task.update({
      where: { id },
      data,
      include: {
        subtasks: {
          where: { deletedAt: null },
        },
        activity: {
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });
    return mapToTask(task as PrismaTask);
  }

  async softDelete(id: string): Promise<void> {
    await prisma.task.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  async updatePosition(id: string, position: number): Promise<Task> {
    const task = await prisma.task.update({
      where: { id },
      data: { position },
      include: { subtasks: true, activity: true },
    });
    return mapToTask(task as PrismaTask);
  }

  async bulkUpdateStatus(
    ids: string[],
    status: string
  ): Promise<{ count: number }> {
    const result = await prisma.task.updateMany({
      where: { id: { in: ids }, deletedAt: null },
      data: {
        status,
        ...(status === 'DONE' ? { completedAt: new Date() } : {}),
      },
    });
    return { count: result.count };
  }

  async countByProject(projectId: string): Promise<TaskStats> {
    const rows = await prisma.task.groupBy({
      by: ['status'],
      where: { projectId, deletedAt: null },
      _count: { status: true },
    });

    const byStatus: Record<string, number> = {};
    let total = 0;

    for (const row of rows) {
      byStatus[row.status] = row._count.status;
      total += row._count.status;
    }

    return { total, byStatus };
  }

  async findSubtasks(parentId: string): Promise<Task[]> {
    const records = await prisma.task.findMany({
      where: { parentId, deletedAt: null },
      orderBy: { position: 'asc' },
      include: { subtasks: true, activity: true },
    });
    return records.map((r) => mapToTask(r as PrismaTask));
  }

  async createWatcher(taskId: string, userId: string): Promise<void> {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
      select: { watcherIds: true },
    });
    if (task && !task.watcherIds.includes(userId)) {
      await prisma.task.update({
        where: { id: taskId },
        data: { watcherIds: { push: userId } },
      });
    }
  }

  async deleteWatcher(taskId: string, userId: string): Promise<void> {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
      select: { watcherIds: true },
    });
    if (task) {
      await prisma.task.update({
        where: { id: taskId },
        data: { watcherIds: task.watcherIds.filter((id) => id !== userId) },
      });
    }
  }
}
