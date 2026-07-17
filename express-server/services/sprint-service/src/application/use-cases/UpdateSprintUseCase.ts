import { ISprintRepository, UpdateSprintData } from '../../domain/repositories/ISprintRepository';
import { SprintEntity } from '../../domain/entities/Sprint';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';

export interface UpdateSprintDTO {
  sprintId: string;
  name?: string;
  goal?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  capacity?: number | null;
  notes?: string | null;
  updatedBy: string;
}

export class UpdateSprintUseCase {
  constructor(private readonly sprintRepository: ISprintRepository) {}

  async execute(dto: UpdateSprintDTO): Promise<SprintEntity> {
    const sprint = await this.sprintRepository.findById(dto.sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', dto.sprintId);
    }

    if (sprint.status === 'COMPLETED' || sprint.status === 'CANCELLED') {
      throw new BadRequestError(
        `Sprint cannot be updated: status is "${sprint.status}". Only PLANNED or ACTIVE sprints can be updated.`
      );
    }

    const updateData: UpdateSprintData = {
      updatedBy: dto.updatedBy,
      ...(dto.name !== undefined && { name: dto.name }),
      ...(dto.goal !== undefined && { goal: dto.goal }),
      ...(dto.startDate !== undefined && { startDate: dto.startDate }),
      ...(dto.endDate !== undefined && { endDate: dto.endDate }),
      ...(dto.capacity !== undefined && { capacity: dto.capacity }),
      ...(dto.notes !== undefined && { notes: dto.notes }),
    };

    return this.sprintRepository.update(dto.sprintId, updateData);
  }
}
