import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { ISprintItemRepository } from '../../domain/repositories/ISprintItemRepository';
import { SprintEntity } from '../../domain/entities/Sprint';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';
import { SprintEventPublisher } from '../../infrastructure/events/SprintEventPublisher';

export interface CompleteSprintDTO {
  sprintId: string;
  completedBy: string;
}

export interface CompletedSprintResult {
  sprint: SprintEntity;
  stats: {
    total: number;
    completed: number;
    totalPoints: number;
    completedPoints: number;
  };
}

export class CompleteSprintUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly itemRepository: ISprintItemRepository,
    private readonly eventPublisher: SprintEventPublisher
  ) {}

  async execute(dto: CompleteSprintDTO): Promise<CompletedSprintResult> {
    const sprint = await this.sprintRepository.findById(dto.sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', dto.sprintId);
    }

    if (sprint.status !== 'ACTIVE') {
      throw new BadRequestError(
        `Sprint cannot be completed: current status is "${sprint.status}". Only ACTIVE sprints can be completed.`
      );
    }

    const stats = await this.itemRepository.getStatsForSprint(dto.sprintId);

    const now = new Date();
    const completed = await this.sprintRepository.update(dto.sprintId, {
      status: 'COMPLETED',
      completedAt: now,
      velocityPoints: stats.completedPoints,
      updatedBy: dto.completedBy,
    });

    void this.eventPublisher.publishSprintCompleted(completed, stats);

    return { sprint: completed, stats };
  }
}
