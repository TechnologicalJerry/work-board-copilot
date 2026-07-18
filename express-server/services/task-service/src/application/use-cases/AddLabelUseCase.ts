import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { Task } from '../../domain/entities/Task';
import { NotFoundError } from '@boardpilot/errors';

export class AddLabelUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(taskId: string, label: string, userId: string): Promise<Task> {
    const task = await this.taskRepository.findById(taskId);
    if (!task) {
      throw new NotFoundError('Task', taskId);
    }

    if (task.labels.includes(label)) {
      // Already has label — return as-is
      return task;
    }

    const updatedTask = await this.taskRepository.update(taskId, {
      labels: { push: label },
      updatedBy: userId,
    });

    return updatedTask;
  }
}
