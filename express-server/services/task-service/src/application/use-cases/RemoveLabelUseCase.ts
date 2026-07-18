import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { Task } from '../../domain/entities/Task';
import { NotFoundError } from '@boardpilot/errors';

export class RemoveLabelUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(taskId: string, label: string, userId: string): Promise<Task> {
    const task = await this.taskRepository.findById(taskId);
    if (!task) {
      throw new NotFoundError('Task', taskId);
    }

    const updatedLabels = task.labels.filter((l) => l !== label);

    const updatedTask = await this.taskRepository.update(taskId, {
      labels: updatedLabels,
      updatedBy: userId,
    });

    return updatedTask;
  }
}
