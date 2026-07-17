import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { ISprintItemRepository } from '../../domain/repositories/ISprintItemRepository';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';

export interface RemoveSprintItemDTO {
  sprintId: string;
  taskId: string;
  removedBy: string;
}

export class RemoveSprintItemUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly itemRepository: ISprintItemRepository
  ) {}

  async execute(dto: RemoveSprintItemDTO): Promise<void> {
    const sprint = await this.sprintRepository.findById(dto.sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', dto.sprintId);
    }

    if (sprint.status === 'COMPLETED' || sprint.status === 'CANCELLED') {
      throw new BadRequestError(
        `Cannot remove items from a sprint with status "${sprint.status}".`
      );
    }

    const item = await this.itemRepository.findByTaskId(dto.sprintId, dto.taskId);
    if (!item) {
      throw new NotFoundError('SprintItem', `${dto.sprintId}/${dto.taskId}`);
    }

    await this.itemRepository.remove(dto.sprintId, dto.taskId);
  }
}
