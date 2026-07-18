import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../../config';

declare global {
  // eslint-disable-next-line no-var
  var __redisClient: Redis | undefined;
}

function createRedisClient(): Redis {
  const client = new Redis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    password: config.REDIS_PASSWORD,
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: false,
  });

  client.on('connect', () => {
    logger.info('Sprint service Redis client connected');
  });

  client.on('error', (err: Error) => {
    logger.error({ err }, 'Sprint service Redis client error');
  });

  client.on('close', () => {
    logger.warn('Sprint service Redis connection closed');
  });

  return client;
}

export function getRedisClient(): Redis {
  if (!global.__redisClient) {
    global.__redisClient = createRedisClient();
  }
  return global.__redisClient;
}

export async function disconnectRedis(): Promise<void> {
  if (global.__redisClient) {
    await global.__redisClient.quit();
    global.__redisClient = undefined;
    logger.info('Sprint service Redis disconnected');
  }
}

export const CACHE_KEYS = {
  sprint: (id: string) => `sprint-service:sprint:${id}`,
  sprintsByProject: (projectId: string) => `sprint-service:sprints:project:${projectId}`,
  activeSprint: (projectId: string) => `sprint-service:sprint:active:${projectId}`,
  sprintItems: (sprintId: string) => `sprint-service:sprint:${sprintId}:items`,
  sprintStats: (sprintId: string) => `sprint-service:sprint:${sprintId}:stats`,
  burndown: (sprintId: string) => `sprint-service:sprint:${sprintId}:burndown`,
  velocity: (projectId: string) => `sprint-service:velocity:project:${projectId}`,
} as const;

export const CACHE_TTL = {
  sprint: 300,       // 5 minutes
  sprintList: 120,   // 2 minutes
  items: 60,         // 1 minute
  stats: 60,         // 1 minute
  burndown: 120,     // 2 minutes
  velocity: 300,     // 5 minutes
  activeSprint: 60,  // 1 minute
} as const;

export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const client = getRedisClient();
    const value = await client.get(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  } catch (err) {
    logger.warn({ err, key }, 'Cache get failed');
    return null;
  }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  try {
    const client = getRedisClient();
    await client.setex(key, ttlSeconds, JSON.stringify(value));
  } catch (err) {
    logger.warn({ err, key }, 'Cache set failed');
  }
}

export async function cacheDelete(...keys: string[]): Promise<void> {
  try {
    const client = getRedisClient();
    if (keys.length > 0) {
      await client.del(...keys);
    }
  } catch (err) {
    logger.warn({ err, keys }, 'Cache delete failed');
  }
}
