import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { TaskHistoryRepository } from '../../infrastructure/repositories/TaskHistoryRepository';
import { publishTaskCreated, publishTaskAssigned } from '../../infrastructure/events/TaskEventPublisher';
import { Task, TaskStatus, Priority, TaskType } from '../../domain/entities/Task';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';

export interface CreateTaskInput {
  organizationId: string;
  projectId: string;
  sprintId?: string;
  boardId?: string;
  parentId?: string;
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: Priority;
  type?: TaskType;
  assigneeId?: string;
  reporterId: string;
  storyPoints?: number;
  dueDate?: string;
  startDate?: string;
  labels?: string[];
  tags?: string[];
  position?: number;
  createdBy: string;
}

export class CreateTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskHistoryRepository: TaskHistoryRepository
  ) {}

  async execute(input: CreateTaskInput): Promise<Task> {
    // If parentId is provided, validate the parent task
    if (input.parentId) {
      const parent = await this.taskRepository.findById(input.parentId);
      if (!parent) {
        throw new NotFoundError('Task', input.parentId);
      }
      if (parent.projectId !== input.projectId) {
        throw new BadRequestError('Parent task must belong to the same project');
      }
      if (input.type && input.type !== 'SUBTASK') {
        throw new BadRequestError('Tasks with a parentId must have type SUBTASK');
      }
      input.type = 'SUBTASK';
    }

    // Generate a simple sequential-style key using timestamp
    const taskKey = `TASK-${Date.now()}`;

    const task = await this.taskRepository.create({
      organizationId: input.organizationId,
      projectId: input.projectId,
      workspaceId: input.organizationId,
      key: taskKey,
      sprintId: input.sprintId,
      boardColumnId: input.boardId,
      parentId: input.parentId,
      title: input.title,
      description: input.description,
      status: input.status ?? 'TODO',
      priority: (input.priority as never) ?? 'MEDIUM',
      type: (input.type as never) ?? 'TASK',
      assigneeId: input.assigneeId,
      reporterId: input.reporterId,
      storyPoints: input.storyPoints,
      dueDate: input.dueDate ? new Date(input.dueDate) : undefined,
      startDate: input.startDate ? new Date(input.startDate) : undefined,
      labels: input.labels ?? [],
      tags: input.tags ?? [],
      position: input.position ?? 0,
      createdBy: input.createdBy,
      updatedBy: input.createdBy,
    });

    // Record creation in history
    await this.taskHistoryRepository.createCreatedEntry(task.id, input.createdBy);

    // Publish events (fire-and-forget, errors logged internally)
    void publishTaskCreated(task);
    if (input.assigneeId) {
      void publishTaskAssigned(task, input.assigneeId);
    }

    return task;
  }
}
