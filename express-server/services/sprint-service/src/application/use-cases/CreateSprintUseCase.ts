import { ISprintRepository, CreateSprintData } from '../../domain/repositories/ISprintRepository';
import { SprintEntity } from '../../domain/entities/Sprint';
import { BadRequestError } from '@boardpilot/errors';
import { SprintEventPublisher } from '../../infrastructure/events/SprintEventPublisher';

export interface CreateSprintDTO {
  projectId: string;
  name: string;
  goal?: string;
  startDate?: Date;
  endDate?: Date;
  capacity?: number;
  notes?: string;
  startImmediately?: boolean;
  createdBy: string;
}

export class CreateSprintUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly eventPublisher: SprintEventPublisher
  ) {}

  async execute(dto: CreateSprintDTO): Promise<SprintEntity> {
    // If starting immediately, ensure no other active sprint exists for this project
    if (dto.startImmediately) {
      const activeSprint = await this.sprintRepository.findActiveSprint(dto.projectId);
      if (activeSprint) {
        throw new BadRequestError(
          `Project already has an active sprint: "${activeSprint.name}". Complete it before starting a new one.`
        );
      }
    }

    const data: CreateSprintData = {
      projectId: dto.projectId,
      name: dto.name,
      goal: dto.goal ?? null,
      startDate: dto.startDate ?? null,
      endDate: dto.endDate ?? null,
      capacity: dto.capacity ?? null,
      notes: dto.notes ?? null,
      createdBy: dto.createdBy,
      updatedBy: dto.createdBy,
    };

    let sprint = await this.sprintRepository.create(data);

    if (dto.startImmediately) {
      sprint = await this.sprintRepository.update(sprint.id, {
        status: 'ACTIVE',
        startedAt: new Date(),
        startDate: sprint.startDate ?? new Date(),
        updatedBy: dto.createdBy,
      });

      void this.eventPublisher.publishSprintStarted(sprint);
    }

    return sprint;
  }
}
