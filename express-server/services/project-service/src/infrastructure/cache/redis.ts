import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../../config';

let redisInstance: Redis | null = null;

export const CACHE_TTL = {
  PROJECT: 5 * 60,       // 5 minutes
  PROJECTS_LIST: 2 * 60, // 2 minutes
  STATS: 3 * 60,         // 3 minutes
} as const;

export const CACHE_KEY = {
  project: (id: string) => `project:${id}`,
  projectsList: (workspaceId: string) => `projects:workspace:${workspaceId}`,
  projectStats: (id: string) => `project:stats:${id}`,
} as const;

export function getRedisClient(): Redis {
  if (!redisInstance) {
    redisInstance = new Redis(config.redisUrl, {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      enableReadyCheck: true,
    });

    redisInstance.on('connect', () => {
      logger.info('Redis connected');
    });

    redisInstance.on('error', (err) => {
      logger.error({ err }, 'Redis error');
    });

    redisInstance.on('close', () => {
      logger.warn('Redis connection closed');
    });
  }
  return redisInstance;
}

export async function connectRedis(): Promise<void> {
  const redis = getRedisClient();
  await redis.connect();
  logger.info('Connected to Redis');
}

export async function disconnectRedis(): Promise<void> {
  if (redisInstance) {
    await redisInstance.quit();
    redisInstance = null;
    logger.info('Disconnected from Redis');
  }
}

export async function getCache<T>(key: string): Promise<T | null> {
  try {
    const redis = getRedisClient();
    const raw = await redis.get(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch (err) {
    logger.warn({ err, key }, 'Cache get failed');
    return null;
  }
}

export async function setCache<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
  try {
    const redis = getRedisClient();
    await redis.setex(key, ttlSeconds, JSON.stringify(value));
  } catch (err) {
    logger.warn({ err, key }, 'Cache set failed');
  }
}

export async function deleteCache(...keys: string[]): Promise<void> {
  if (keys.length === 0) return;
  try {
    const redis = getRedisClient();
    await redis.del(...keys);
  } catch (err) {
    logger.warn({ err, keys }, 'Cache delete failed');
  }
}

export async function deleteCacheByPattern(pattern: string): Promise<void> {
  try {
    const redis = getRedisClient();
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (err) {
    logger.warn({ err, pattern }, 'Cache pattern delete failed');
  }
}
