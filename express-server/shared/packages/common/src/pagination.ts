import { PaginatedResult, PaginationOptions } from '@boardpilot/types';

export function parsePaginationQuery(query: Record<string, unknown>): PaginationOptions {
  const page = Math.max(1, parseInt(String(query.page ?? '1'), 10) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(String(query.limit ?? '20'), 10) || 20));
  const sortOrder = query.sortOrder === 'desc' ? 'desc' : 'asc';
  const sortBy = typeof query.sortBy === 'string' ? query.sortBy : 'createdAt';
  return { page, limit, sortBy, sortOrder };
}

export function buildPaginatedResult<T>(
  data: T[],
  total: number,
  options: PaginationOptions
): PaginatedResult<T> {
  const { page, limit } = options;
  const totalPages = Math.ceil(total / limit);
  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
}

export function calculateSkip(page: number, limit: number): number {
  return (page - 1) * limit;
}
