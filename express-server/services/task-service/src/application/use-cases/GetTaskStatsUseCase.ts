import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { TaskStats } from '../../domain/entities/Task';

export class GetTaskStatsUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(projectId: string): Promise<TaskStats> {
    return this.taskRepository.countByProject(projectId);
  }
}
