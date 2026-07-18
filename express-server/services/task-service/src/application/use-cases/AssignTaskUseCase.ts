import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { TaskHistoryRepository } from '../../infrastructure/repositories/TaskHistoryRepository';
import { publishTaskAssigned } from '../../infrastructure/events/TaskEventPublisher';
import { Task } from '../../domain/entities/Task';
import { NotFoundError } from '@boardpilot/errors';

export interface AssignTaskInput {
  taskId: string;
  assigneeId: string | null;
  requesterId: string;
}

export class AssignTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskHistoryRepository: TaskHistoryRepository
  ) {}

  async execute(input: AssignTaskInput): Promise<Task> {
    const task = await this.taskRepository.findById(input.taskId);
    if (!task) {
      throw new NotFoundError('Task', input.taskId);
    }

    const updatedTask = await this.taskRepository.update(input.taskId, {
      assigneeId: input.assigneeId,
      updatedBy: input.requesterId,
    });

    await this.taskHistoryRepository.create(
      input.taskId,
      input.requesterId,
      'assigneeId',
      task.assigneeId ?? null,
      input.assigneeId ?? null
    );

    void publishTaskAssigned(updatedTask, input.assigneeId);

    return updatedTask;
  }
}
