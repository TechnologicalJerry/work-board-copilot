export interface PaginatedResult<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface PaginationOptions {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterOptions {
  search?: string;
  dateRange?: {
    from: string;
    to: string;
  };
  [key: string]: unknown;
}

export function calculatePaginationMeta(
  total: number,
  page: number,
  limit: number
): PaginatedResult<never>['meta'] {
  const totalPages = Math.ceil(total / limit);
  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
