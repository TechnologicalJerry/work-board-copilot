export type SearchEntityType = 'task' | 'project' | 'document' | 'user' | 'global';

export interface SearchResultItem {
  id: string;
  type: SearchEntityType;
  title: string;
  description?: string;
  url?: string;
  score?: number;
  metadata?: Record<string, unknown>;
}

export interface GlobalSearchResponse {
  query: string;
  total: number;
  results: SearchResultItem[];
}

export interface TaskSearchQuery {
  q?: string;
  status?: string[];
  priority?: string[];
  assigneeId?: string;
  projectId?: string;
  page?: number;
  limit?: number;
}
