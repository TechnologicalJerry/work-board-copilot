import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { publishTaskDeleted } from '../../infrastructure/events/TaskEventPublisher';
import { NotFoundError } from '@boardpilot/errors';

export class DeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string, deletedBy: string): Promise<void> {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new NotFoundError('Task', id);
    }

    await this.taskRepository.softDelete(id);

    void publishTaskDeleted(id, task.projectId, task.organizationId, deletedBy);
  }
}
