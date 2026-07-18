import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { TaskHistoryRepository } from '../../infrastructure/repositories/TaskHistoryRepository';
import {
  publishTaskUpdated,
  publishTaskStatusChanged,
  publishTaskAssigned,
} from '../../infrastructure/events/TaskEventPublisher';
import { Task, TaskStatus, Priority, TaskType } from '../../domain/entities/Task';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';
import { Prisma } from '../../generated/prisma-client';

export interface UpdateTaskInput {
  sprintId?: string | null;
  boardId?: string | null;
  parentId?: string | null;
  title?: string;
  description?: string | null;
  status?: TaskStatus;
  priority?: Priority;
  type?: TaskType;
  assigneeId?: string | null;
  storyPoints?: number | null;
  dueDate?: string | null;
  startDate?: string | null;
  labels?: string[];
  tags?: string[];
  position?: number;
  estimatedHours?: number | null;
  actualHours?: number | null;
  updatedBy: string;
}

function toStr(val: unknown): string | null {
  if (val === null || val === undefined) return null;
  if (Array.isArray(val)) return JSON.stringify(val);
  return String(val);
}

export class UpdateTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskHistoryRepository: TaskHistoryRepository
  ) {}

  async execute(id: string, input: UpdateTaskInput): Promise<Task> {
    const existing = await this.taskRepository.findById(id);
    if (!existing) {
      throw new NotFoundError('Task', id);
    }
    if (existing.deletedAt) {
      throw new BadRequestError('Cannot update a deleted task');
    }

    const changes: Record<string, { old: unknown; new: unknown }> = {};
    const updateData: Prisma.TaskUncheckedUpdateInput = {
      updatedBy: input.updatedBy,
    };

    // Helper to track and apply a scalar change
    const apply = (field: string, dbField: string, oldVal: unknown, newVal: unknown) => {
      if (newVal === undefined) return;
      if (toStr(oldVal) !== toStr(newVal)) {
        changes[field] = { old: oldVal, new: newVal };
      }
      (updateData as Record<string, unknown>)[dbField] = newVal;
    };

    if (input.title !== undefined) apply('title', 'title', existing.title, input.title);
    if (input.description !== undefined) apply('description', 'description', existing.description, input.description);
    if (input.status !== undefined) apply('status', 'status', existing.status, input.status);
    if (input.priority !== undefined) apply('priority', 'priority', existing.priority, input.priority);
    if (input.type !== undefined) apply('type', 'type', existing.type, input.type);
    if (input.assigneeId !== undefined) apply('assigneeId', 'assigneeId', existing.assigneeId, input.assigneeId);
    if (input.storyPoints !== undefined) apply('storyPoints', 'storyPoints', existing.storyPoints, input.storyPoints);
    if (input.position !== undefined) apply('position', 'position', existing.position, input.position);
    if (input.sprintId !== undefined) apply('sprintId', 'sprintId', existing.sprintId, input.sprintId);
    if (input.boardId !== undefined) apply('boardId', 'boardColumnId', existing.boardId, input.boardId);
    if (input.parentId !== undefined) apply('parentId', 'parentId', existing.parentId, input.parentId);
    if (input.labels !== undefined) apply('labels', 'labels', existing.labels, input.labels);
    if (input.tags !== undefined) apply('tags', 'tags', existing.tags, input.tags);
    if (input.estimatedHours !== undefined) apply('estimatedHours', 'estimatedHours', existing.estimatedHours, input.estimatedHours);
    if (input.actualHours !== undefined) apply('actualHours', 'actualHours', existing.actualHours, input.actualHours);

    // Handle date fields — convert string → Date | null
    if (input.dueDate !== undefined) {
      const newDate = input.dueDate ? new Date(input.dueDate) : null;
      if (toStr(existing.dueDate) !== toStr(newDate)) {
        changes['dueDate'] = { old: existing.dueDate, new: newDate };
      }
      updateData.dueDate = newDate;
    }
    if (input.startDate !== undefined) {
      const newDate = input.startDate ? new Date(input.startDate) : null;
      if (toStr(existing.startDate) !== toStr(newDate)) {
        changes['startDate'] = { old: existing.startDate, new: newDate };
      }
      updateData.startDate = newDate;
    }

    // Manage completedAt automatically based on status transition
    if (input.status === 'DONE' && existing.status !== 'DONE') {
      updateData.completedAt = new Date();
    } else if (input.status && input.status !== 'DONE' && existing.status === 'DONE') {
      updateData.completedAt = null;
    }

    const updatedTask = await this.taskRepository.update(id, updateData);

    // Record history entries for each changed field
    if (Object.keys(changes).length > 0) {
      await Promise.all(
        Object.entries(changes).map(([field, { old: oldVal, new: newVal }]) =>
          this.taskHistoryRepository.create(
            id,
            input.updatedBy,
            field,
            toStr(oldVal),
            toStr(newVal)
          )
        )
      );

      void publishTaskUpdated(updatedTask, changes);
    }

    if ('status' in changes && input.status) {
      void publishTaskStatusChanged(updatedTask, existing.status, input.status);
    }

    if ('assigneeId' in changes) {
      void publishTaskAssigned(updatedTask, input.assigneeId ?? null);
    }

    return updatedTask;
  }
}
