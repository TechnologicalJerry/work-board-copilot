import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { TaskStatus } from '../../domain/entities/Task';

export interface BulkUpdateStatusInput {
  taskIds: string[];
  status: TaskStatus;
  userId: string;
}

export interface BulkUpdateStatusResult {
  updated: number;
}

export class BulkUpdateStatusUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(input: BulkUpdateStatusInput): Promise<BulkUpdateStatusResult> {
    const result = await this.taskRepository.bulkUpdateStatus(input.taskIds, input.status);
    return { updated: result.count };
  }
}
