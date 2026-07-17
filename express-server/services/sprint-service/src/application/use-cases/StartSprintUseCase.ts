import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { SprintEntity } from '../../domain/entities/Sprint';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';
import { SprintEventPublisher } from '../../infrastructure/events/SprintEventPublisher';

export interface StartSprintDTO {
  sprintId: string;
  startedBy: string;
  startDate?: Date;
  endDate?: Date;
}

export class StartSprintUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly eventPublisher: SprintEventPublisher
  ) {}

  async execute(dto: StartSprintDTO): Promise<SprintEntity> {
    const sprint = await this.sprintRepository.findById(dto.sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', dto.sprintId);
    }

    if (sprint.status !== 'PLANNED') {
      throw new BadRequestError(
        `Sprint cannot be started: current status is "${sprint.status}". Only PLANNED sprints can be started.`
      );
    }

    // Ensure no other active sprint exists for this project
    const activeSprint = await this.sprintRepository.findActiveSprint(sprint.projectId);
    if (activeSprint) {
      throw new BadRequestError(
        `Project already has an active sprint: "${activeSprint.name}". Complete it before starting a new one.`
      );
    }

    const now = new Date();
    const updated = await this.sprintRepository.update(dto.sprintId, {
      status: 'ACTIVE',
      startedAt: now,
      startDate: dto.startDate ?? sprint.startDate ?? now,
      ...(dto.endDate && { endDate: dto.endDate }),
      updatedBy: dto.startedBy,
    });

    void this.eventPublisher.publishSprintStarted(updated);

    return updated;
  }
}
