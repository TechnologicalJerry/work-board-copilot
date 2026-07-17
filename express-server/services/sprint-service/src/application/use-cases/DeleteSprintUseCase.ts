import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';

export interface DeleteSprintDTO {
  sprintId: string;
  deletedBy: string;
}

export class DeleteSprintUseCase {
  constructor(private readonly sprintRepository: ISprintRepository) {}

  async execute(dto: DeleteSprintDTO): Promise<void> {
    const sprint = await this.sprintRepository.findById(dto.sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', dto.sprintId);
    }

    if (sprint.status === 'ACTIVE') {
      throw new BadRequestError(
        'An active sprint cannot be deleted. Complete or cancel it first.'
      );
    }

    await this.sprintRepository.delete(dto.sprintId);
  }
}
