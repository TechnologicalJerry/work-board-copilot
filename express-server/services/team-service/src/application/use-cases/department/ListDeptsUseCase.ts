import { IDepartmentRepository, DepartmentFilter } from '../../../domain/repositories/IDepartmentRepository';
import { Department } from '../../../domain/entities/Department';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { cacheGet, cacheSet, CACHE_KEYS, CACHE_TTL } from '../../../infrastructure/cache/redis';

export interface ListDeptsQuery {
  organizationId: string;
  search?: string;
  page?: number;
  limit?: number;
}

export class ListDeptsUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(query: ListDeptsQuery): Promise<PaginatedResult<Department>> {
    const options: PaginationOptions = {
      page: query.page ?? 1,
      limit: query.limit ?? 20,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    };

    // Cache the first page with no search for org-level list
    const isDefaultQuery = options.page === 1 && !query.search;
    let cacheKey: string | null = null;

    if (isDefaultQuery) {
      cacheKey = CACHE_KEYS.departmentsByOrg(query.organizationId);
      const cached = await cacheGet<PaginatedResult<Department>>(cacheKey);
      if (cached) return cached;
    }

    const filter: DepartmentFilter = {
      organizationId: query.organizationId,
      search: query.search,
    };

    const result = await this.departmentRepository.findMany(filter, options);

    if (cacheKey) {
      await cacheSet(cacheKey, result, CACHE_TTL.deptList);
    }

    return result;
  }
}
