import { NotFoundError } from '@boardpilot/errors';
import { Milestone, MilestoneStatus } from '../../../domain/entities/Milestone';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IMilestoneRepository } from '../../../domain/repositories/IMilestoneRepository';

export interface CreateMilestoneInput {
  projectId: string;
  name: string;
  description?: string;
  dueDate: Date;
  status?: MilestoneStatus;
  createdBy: string;
}

export class CreateMilestoneUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly milestoneRepository: IMilestoneRepository
  ) {}

  async execute(input: CreateMilestoneInput): Promise<Milestone> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    return this.milestoneRepository.create({
      projectId: input.projectId,
      name: input.name,
      description: input.description,
      dueDate: input.dueDate,
      status: input.status,
      createdBy: input.createdBy,
    });
  }
}
