import { NotFoundError } from '@boardpilot/errors';
import { IMilestoneRepository } from '../../../domain/repositories/IMilestoneRepository';

export interface DeleteMilestoneInput {
  milestoneId: string;
  projectId: string;
}

export class DeleteMilestoneUseCase {
  constructor(private readonly milestoneRepository: IMilestoneRepository) {}

  async execute(input: DeleteMilestoneInput): Promise<void> {
    const milestone = await this.milestoneRepository.findById(input.milestoneId);
    if (!milestone || milestone.projectId !== input.projectId) {
      throw new NotFoundError('Milestone', input.milestoneId);
    }

    await this.milestoneRepository.delete(input.milestoneId);
  }
}
