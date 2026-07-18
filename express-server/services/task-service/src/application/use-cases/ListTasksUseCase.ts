import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { Task, TaskFilters } from '../../domain/entities/Task';
import { PaginatedResult } from '@boardpilot/types';

export class ListTasksUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    filters: TaskFilters,
    page: number,
    limit: number
  ): Promise<PaginatedResult<Task>> {
    return this.taskRepository.findAll(filters, page, limit);
  }
}
