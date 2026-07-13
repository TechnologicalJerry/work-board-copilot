import { NotFoundError } from '@boardpilot/errors';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { Milestone } from '../../../domain/entities/Milestone';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IMilestoneRepository } from '../../../domain/repositories/IMilestoneRepository';

export interface ListMilestonesInput {
  projectId: string;
  page: number;
  limit: number;
}

export class ListMilestonesUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly milestoneRepository: IMilestoneRepository
  ) {}

  async execute(input: ListMilestonesInput): Promise<PaginatedResult<Milestone>> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    const options: PaginationOptions = {
      page: input.page,
      limit: input.limit,
      sortBy: 'dueDate',
      sortOrder: 'asc',
    };

    return this.milestoneRepository.findAll(input.projectId, options);
  }
}
