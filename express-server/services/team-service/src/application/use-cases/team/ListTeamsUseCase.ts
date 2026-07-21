import { ITeamRepository, TeamFilter } from '../../../domain/repositories/ITeamRepository';
import { TeamWithMemberCount } from '../../../domain/entities/Team';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { cacheGet, cacheSet, CACHE_KEYS, CACHE_TTL } from '../../../infrastructure/cache/redis';

export interface ListTeamsQuery extends TeamFilter {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export class ListTeamsUseCase {
  constructor(private readonly teamRepository: ITeamRepository) {}

  async execute(query: ListTeamsQuery): Promise<PaginatedResult<TeamWithMemberCount>> {
    const options: PaginationOptions = {
      page: query.page ?? 1,
      limit: query.limit ?? 20,
      sortBy: query.sortBy ?? 'createdAt',
      sortOrder: query.sortOrder ?? 'desc',
    };

    // Only cache first page, default sort, org-filtered results
    const isDefaultQuery = options.page === 1 && !query.search;
    let cacheKey: string | null = null;

    if (isDefaultQuery && query.organizationId) {
      cacheKey = CACHE_KEYS.teamsByOrg(query.organizationId);
      const cached = await cacheGet<PaginatedResult<TeamWithMemberCount>>(cacheKey);
      if (cached) return cached;
    }

    const filter: TeamFilter = {
      organizationId: query.organizationId,
      workspaceId: query.workspaceId,
      search: query.search,
      isPrivate: query.isPrivate,
    };

    const result = await this.teamRepository.findMany(filter, options);

    if (cacheKey) {
      await cacheSet(cacheKey, result, CACHE_TTL.teamList);
    }

    return result;
  }
}
