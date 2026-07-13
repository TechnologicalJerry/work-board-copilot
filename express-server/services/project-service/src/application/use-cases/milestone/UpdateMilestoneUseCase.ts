import { NotFoundError } from '@boardpilot/errors';
import { Milestone, MilestoneStatus } from '../../../domain/entities/Milestone';
import { IMilestoneRepository } from '../../../domain/repositories/IMilestoneRepository';

export interface UpdateMilestoneInput {
  milestoneId: string;
  projectId: string;
  name?: string;
  description?: string | null;
  dueDate?: Date | null;
  status?: MilestoneStatus;
}

export class UpdateMilestoneUseCase {
  constructor(private readonly milestoneRepository: IMilestoneRepository) {}

  async execute(input: UpdateMilestoneInput): Promise<Milestone> {
    const milestone = await this.milestoneRepository.findById(input.milestoneId);
    if (!milestone || milestone.projectId !== input.projectId) {
      throw new NotFoundError('Milestone', input.milestoneId);
    }

    return this.milestoneRepository.update(input.milestoneId, {
      name: input.name,
      description: input.description,
      dueDate: input.dueDate,
      status: input.status,
    });
  }
}
