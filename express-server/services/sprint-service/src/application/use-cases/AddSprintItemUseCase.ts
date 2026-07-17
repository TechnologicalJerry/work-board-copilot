import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { ISprintItemRepository, SprintItemEntity } from '../../domain/repositories/ISprintItemRepository';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';
import { SprintEventPublisher } from '../../infrastructure/events/SprintEventPublisher';

export interface AddSprintItemDTO {
  sprintId: string;
  taskId: string;
  storyPoints?: number;
  addedBy: string;
}

export class AddSprintItemUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly itemRepository: ISprintItemRepository,
    private readonly eventPublisher: SprintEventPublisher
  ) {}

  async execute(dto: AddSprintItemDTO): Promise<SprintItemEntity> {
    const sprint = await this.sprintRepository.findById(dto.sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', dto.sprintId);
    }

    if (sprint.status === 'COMPLETED' || sprint.status === 'CANCELLED') {
      throw new BadRequestError(
        `Cannot add items to a sprint with status "${sprint.status}".`
      );
    }

    const item = await this.itemRepository.add({
      sprintId: dto.sprintId,
      taskId: dto.taskId,
      storyPoints: dto.storyPoints ?? null,
      addedBy: dto.addedBy,
    });

    void this.eventPublisher.publishItemAdded(dto.sprintId, dto.taskId, dto.addedBy);

    return item;
  }
}
