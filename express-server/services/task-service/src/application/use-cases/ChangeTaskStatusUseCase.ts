import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { TaskHistoryRepository } from '../../infrastructure/repositories/TaskHistoryRepository';
import { publishTaskStatusChanged } from '../../infrastructure/events/TaskEventPublisher';
import { Task, TaskStatus } from '../../domain/entities/Task';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';

export interface ChangeTaskStatusInput {
  taskId: string;
  status: TaskStatus;
  userId: string;
}

// Valid transitions: from -> allowed next statuses
const STATUS_TRANSITIONS: Record<TaskStatus, TaskStatus[]> = {
  BACKLOG: ['TODO', 'IN_PROGRESS', 'CANCELLED'],
  TODO: ['IN_PROGRESS', 'BACKLOG', 'CANCELLED'],
  IN_PROGRESS: ['IN_REVIEW', 'TODO', 'DONE', 'BLOCKED', 'CANCELLED'],
  IN_REVIEW: ['DONE', 'IN_PROGRESS', 'BLOCKED', 'CANCELLED'],
  DONE: ['TODO', 'IN_PROGRESS'],
  CANCELLED: ['BACKLOG', 'TODO'],
  BLOCKED: ['TODO', 'IN_PROGRESS', 'CANCELLED'],
};

export class ChangeTaskStatusUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskHistoryRepository: TaskHistoryRepository
  ) {}

  async execute(input: ChangeTaskStatusInput): Promise<Task> {
    const task = await this.taskRepository.findById(input.taskId);
    if (!task) {
      throw new NotFoundError('Task', input.taskId);
    }

    const oldStatus = task.status;

    if (oldStatus === input.status) {
      return task;
    }

    const allowed = STATUS_TRANSITIONS[oldStatus] ?? [];
    if (!allowed.includes(input.status)) {
      throw new BadRequestError(
        `Invalid status transition from '${oldStatus}' to '${input.status}'. Allowed: ${allowed.join(', ')}`
      );
    }

    const updateData: Record<string, unknown> = {
      status: input.status,
      updatedBy: input.userId,
    };

    if (input.status === 'DONE') {
      updateData['completedAt'] = new Date();
    } else if (oldStatus === 'DONE') {
      updateData['completedAt'] = null;
    }

    const updatedTask = await this.taskRepository.update(input.taskId, updateData as never);

    await this.taskHistoryRepository.create(
      input.taskId,
      input.userId,
      'status',
      oldStatus,
      input.status
    );

    void publishTaskStatusChanged(updatedTask, oldStatus, input.status);

    return updatedTask;
  }
}
