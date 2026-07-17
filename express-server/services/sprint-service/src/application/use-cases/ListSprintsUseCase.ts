import { ISprintRepository, SprintFilters } from '../../domain/repositories/ISprintRepository';
import { SprintEntity, SprintStatus } from '../../domain/entities/Sprint';
import { PaginationOptions } from '@boardpilot/types';

export interface ListSprintsQuery {
  projectId: string;
  status?: SprintStatus;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedSprints {
  sprints: SprintEntity[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export class ListSprintsUseCase {
  constructor(private readonly sprintRepository: ISprintRepository) {}

  async execute(query: ListSprintsQuery): Promise<PaginatedSprints> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;

    const options: PaginationOptions = {
      page,
      limit,
      sortBy: query.sortBy ?? 'createdAt',
      sortOrder: query.sortOrder ?? 'desc',
    };

    const filters: SprintFilters = {
      ...(query.status && { status: query.status }),
    };

    const { sprints, total } = await this.sprintRepository.findAll(query.projectId, filters, options);

    const totalPages = Math.ceil(total / limit);

    return {
      sprints,
      total,
      page,
      limit,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    };
  }
}
