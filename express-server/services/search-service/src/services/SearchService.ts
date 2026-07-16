import { estypes } from '@elastic/elasticsearch';
import { getElasticClient } from '../infrastructure/elasticsearch/ElasticClient';
import { taskIndexName, taskMapping } from '../infrastructure/elasticsearch/mappings/task.mapping';
import logger from '@boardpilot/logger';
import { buildPaginatedResult } from '@boardpilot/common';

const PROJECT_INDEX = 'boardpilot_projects';

const projectMapping = {
  mappings: {
    properties: {
      name: { type: 'text' as const, fields: { keyword: { type: 'keyword' as const } } },
      description: { type: 'text' as const },
      organizationId: { type: 'keyword' as const },
      workspaceId: { type: 'keyword' as const },
      status: { type: 'keyword' as const },
      createdAt: { type: 'date' as const },
    },
  },
};

async function ensureIndexes(): Promise<void> {
  const es = getElasticClient();
  const exists = await es.indices.exists({ index: taskIndexName });
  if (!exists) {
    await es.indices.create({ index: taskIndexName, body: taskMapping });
    logger.info({ index: taskIndexName }, 'Created Elasticsearch index');
  }

  const projExists = await es.indices.exists({ index: PROJECT_INDEX });
  if (!projExists) {
    await es.indices.create({ index: PROJECT_INDEX, body: projectMapping });
    logger.info({ index: PROJECT_INDEX }, 'Created Elasticsearch index');
  }
}

export async function createIndexIfNotExists(name: string, mappings: unknown): Promise<void> {
  const es = getElasticClient();
  const exists = await es.indices.exists({ index: name });
  if (!exists) {
    await es.indices.create({ index: name, body: mappings as Record<string, unknown> });
    logger.info({ index: name }, 'Created Elasticsearch index');
  }
}

export interface SearchPagination {
  page: number;
  limit: number;
}

export async function globalSearch(
  q: string,
  orgId: string,
  type: string | undefined,
  pagination: SearchPagination
) {
  await ensureIndexes();
  const es = getElasticClient();
  const { page, limit } = pagination;
  const from = (page - 1) * limit;

  const indexes = type === 'task' ? [taskIndexName] : type === 'project' ? [PROJECT_INDEX] : [taskIndexName, PROJECT_INDEX];

  const body = {
    from,
    size: limit,
    query: {
      bool: {
        must: [
          {
            multi_match: {
              query: q,
              fields: ['title^3', 'name^3', 'description'],
              fuzziness: 'AUTO',
            },
          },
        ],
        filter: [{ term: { organizationId: orgId } }],
      },
    },
  };

  const result = await es.search({ index: indexes.join(','), body });
  const hits = result.hits.hits.map((h) => ({
    _index: h._index,
    _id: h._id,
    ...(h._source as Record<string, unknown>),
  }));
  const total = typeof result.hits.total === 'number' ? result.hits.total : result.hits.total?.value ?? 0;

  return buildPaginatedResult(hits, total, { page, limit, sortBy: '_score', sortOrder: 'desc' });
}

export interface TaskSearchFilters {
  status?: string[];
  priority?: string[];
  assigneeId?: string;
  projectId?: string;
}

export async function searchTasks(
  q: string,
  filters: TaskSearchFilters,
  orgId: string,
  pagination: SearchPagination
) {
  await ensureIndexes();
  const es = getElasticClient();
  const { page, limit } = pagination;
  const from = (page - 1) * limit;

  const filterClauses: estypes.QueryDslQueryContainer[] = [{ term: { organizationId: orgId } }];
  if (filters.status?.length) filterClauses.push({ terms: { status: filters.status } });
  if (filters.priority?.length) filterClauses.push({ terms: { priority: filters.priority } });
  if (filters.assigneeId) filterClauses.push({ term: { assigneeId: filters.assigneeId } });
  if (filters.projectId) filterClauses.push({ term: { projectId: filters.projectId } });

  const body = {
    from,
    size: limit,
    query: {
      bool: {
        must: q
          ? [{ multi_match: { query: q, fields: ['title^3', 'description'], fuzziness: 'AUTO' } }]
          : [{ match_all: {} }],
        filter: filterClauses,
      },
    },
    sort: (q ? [{ _score: 'desc' }, { createdAt: 'desc' }] : [{ createdAt: 'desc' }]) as estypes.SortCombinations[],
  };

  const result = await es.search({ index: taskIndexName, body });
  const hits = result.hits.hits.map((h) => ({ _id: h._id, ...(h._source as Record<string, unknown>) }));
  const total = typeof result.hits.total === 'number' ? result.hits.total : result.hits.total?.value ?? 0;

  return buildPaginatedResult(hits, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}

export interface TaskIndexDoc {
  id: string;
  title: string;
  description?: string;
  type?: string;
  status?: string;
  priority?: string;
  assigneeId?: string;
  projectId?: string;
  workspaceId?: string;
  organizationId: string;
  labels?: string[];
  sprintId?: string;
  reporterId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export async function indexTask(doc: TaskIndexDoc): Promise<void> {
  await ensureIndexes();
  const es = getElasticClient();
  const { id, ...body } = doc;
  await es.index({ index: taskIndexName, id, document: body });
  logger.debug({ taskId: id }, 'Task indexed');
}

export async function updateTask(id: string, partial: Partial<TaskIndexDoc>): Promise<void> {
  const es = getElasticClient();
  await es.update({ index: taskIndexName, id, doc: partial });
  logger.debug({ taskId: id }, 'Task index updated');
}

export async function deleteTask(id: string): Promise<void> {
  const es = getElasticClient();
  await es.delete({ index: taskIndexName, id });
  logger.debug({ taskId: id }, 'Task removed from index');
}

export async function indexProject(doc: { id: string; [key: string]: unknown }): Promise<void> {
  await ensureIndexes();
  const es = getElasticClient();
  const { id, ...body } = doc;
  await es.index({ index: PROJECT_INDEX, id, document: body });
  logger.debug({ projectId: id }, 'Project indexed');
}

export async function deleteProject(id: string): Promise<void> {
  const es = getElasticClient();
  await es.delete({ index: PROJECT_INDEX, id });
  logger.debug({ projectId: id }, 'Project removed from index');
}

export async function suggest(
  q: string,
  type: 'task' | 'project' | 'global',
  orgId: string
): Promise<Array<{ id: string; title: string; type: string }>> {
  await ensureIndexes();
  const es = getElasticClient();
  const indexes = type === 'task' ? [taskIndexName] : type === 'project' ? [PROJECT_INDEX] : [taskIndexName, PROJECT_INDEX];

  const body = {
    size: 10,
    _source: ['title', 'name'],
    query: {
      bool: {
        must: [
          {
            multi_match: {
              query: q,
              fields: ['title', 'name'],
              type: 'phrase_prefix' as const,
            },
          },
        ],
        filter: [{ term: { organizationId: orgId } }],
      },
    },
  };

  const result = await es.search({ index: indexes.join(','), body });
  return result.hits.hits.map((h) => {
    const source = h._source as Record<string, unknown>;
    return {
      id: h._id ?? '',
      title: (source.title as string) ?? (source.name as string) ?? '',
      type: h._index === taskIndexName ? 'task' : 'project',
    };
  });
}
