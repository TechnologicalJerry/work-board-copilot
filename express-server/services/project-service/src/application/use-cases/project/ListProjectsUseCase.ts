import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { Project, ProjectStatus, ListProjectsFilter } from '../../../domain/entities/Project';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';

export interface ListProjectsInput {
  workspaceId?: string;
  organizationId: string;
  status?: ProjectStatus;
  page: number;
  limit: number;
}

export class ListProjectsUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(input: ListProjectsInput): Promise<PaginatedResult<Project>> {
    const filter: ListProjectsFilter = {
      organizationId: input.organizationId,
      workspaceId: input.workspaceId,
      status: input.status,
    };

    const options: PaginationOptions = {
      page: input.page,
      limit: input.limit,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    };

    return this.projectRepository.findAll(filter, options);
  }
}
