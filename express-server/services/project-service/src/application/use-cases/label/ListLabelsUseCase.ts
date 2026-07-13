import { NotFoundError } from '@boardpilot/errors';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { Label } from '../../../domain/entities/Label';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { ILabelRepository } from '../../../domain/repositories/ILabelRepository';

export interface ListLabelsInput {
  projectId: string;
  page: number;
  limit: number;
}

export class ListLabelsUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly labelRepository: ILabelRepository
  ) {}

  async execute(input: ListLabelsInput): Promise<PaginatedResult<Label>> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    const options: PaginationOptions = {
      page: input.page,
      limit: input.limit,
      sortBy: 'name',
      sortOrder: 'asc',
    };

    return this.labelRepository.findAll(input.projectId, options);
  }
}
