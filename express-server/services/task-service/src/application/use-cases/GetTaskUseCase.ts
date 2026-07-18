import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { Task } from '../../domain/entities/Task';
import { NotFoundError } from '@boardpilot/errors';

export class GetTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string): Promise<Task> {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new NotFoundError('Task', id);
    }
    return task;
  }
}
