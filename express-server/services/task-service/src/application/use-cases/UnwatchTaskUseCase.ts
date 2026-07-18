import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { NotFoundError } from '@boardpilot/errors';

export class UnwatchTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(taskId: string, userId: string): Promise<void> {
    const task = await this.taskRepository.findById(taskId);
    if (!task) {
      throw new NotFoundError('Task', taskId);
    }

    await this.taskRepository.deleteWatcher(taskId, userId);
  }
}
