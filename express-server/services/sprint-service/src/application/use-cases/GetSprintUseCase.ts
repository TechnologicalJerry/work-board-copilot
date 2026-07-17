import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { ISprintItemRepository, SprintItemEntity } from '../../domain/repositories/ISprintItemRepository';
import { SprintEntity } from '../../domain/entities/Sprint';
import { NotFoundError } from '@boardpilot/errors';

export interface SprintWithItems extends SprintEntity {
  items: SprintItemEntity[];
}

export class GetSprintUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly itemRepository: ISprintItemRepository
  ) {}

  async execute(sprintId: string): Promise<SprintWithItems> {
    const sprint = await this.sprintRepository.findById(sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', sprintId);
    }

    const items = await this.itemRepository.findAll(sprintId);

    return { ...sprint, items };
  }
}
