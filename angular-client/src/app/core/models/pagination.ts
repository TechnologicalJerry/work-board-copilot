export interface PaginationParams {
  page?: number;
  pageSize?: number;
  limit?: number;
}

export interface SortParams {
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: string | number | boolean | Array<string | number | boolean> | undefined;
}

export interface QueryOptions extends PaginationParams, SortParams {
  search?: string;
  filters?: FilterParams;
  [key: string]: unknown;
}
