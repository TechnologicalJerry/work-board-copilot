import { TaskHistoryRepository } from '../../infrastructure/repositories/TaskHistoryRepository';
import { TaskHistory } from '../../domain/entities/Task';
import { PaginatedResult } from '@boardpilot/types';

export class GetTaskHistoryUseCase {
  constructor(private readonly taskHistoryRepository: TaskHistoryRepository) {}

  async execute(
    taskId: string,
    page: number,
    limit: number
  ): Promise<PaginatedResult<TaskHistory>> {
    return this.taskHistoryRepository.findByTask(taskId, page, limit);
  }
}
