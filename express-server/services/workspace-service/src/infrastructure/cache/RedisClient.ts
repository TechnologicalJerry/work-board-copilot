import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../../config';

let redisInstance: Redis | null = null;

export const CACHE_KEYS = {
  workspace: (id: string) => `workspace-service:workspace:${id}`,
  workspaceBySlug: (orgId: string, slug: string) => `workspace-service:workspace:${orgId}:${slug}`,
  workspaceMembers: (id: string) => `workspace-service:workspace:${id}:members`,
  orgWorkspaces: (orgId: string) => `workspace-service:org:${orgId}:workspaces`,
};

export const CACHE_TTL = {
  workspace: config.REDIS_TTL ?? 300,
  members: 120,
  list: 120,
};

export function getRedisClient(): Redis {
  if (!redisInstance) {
    redisInstance = new Redis({
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD,
      lazyConnect: true,
      maxRetriesPerRequest: 3,
      retryStrategy(times) {
        if (times > 10) return null;
        return Math.min(times * 100, 3000);
      },
    });

    redisInstance.on('connect', () => logger.info('Redis connected'));
    redisInstance.on('error', (err) => logger.error({ err }, 'Redis error'));
    redisInstance.on('close', () => logger.warn('Redis connection closed'));
  }
  return redisInstance;
}

export async function connectRedis(): Promise<void> {
  const client = getRedisClient();
  await client.connect();
  await client.ping();
  logger.info('Redis ping successful');
}

export async function disconnectRedis(): Promise<void> {
  if (redisInstance) {
    await redisInstance.quit();
    redisInstance = null;
    logger.info('Redis disconnected');
  }
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const value = await getRedisClient().get(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  } catch (error) {
    logger.warn({ error, key }, 'Cache get failed');
    return null;
  }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  try {
    await getRedisClient().set(key, JSON.stringify(value), 'EX', ttlSeconds);
  } catch (error) {
    logger.warn({ error, key }, 'Cache set failed');
  }
}

export async function cacheDelete(...keys: string[]): Promise<void> {
  try {
    const client = getRedisClient();
    if (keys.length > 0) {
      await client.del(...keys);
    }
  } catch (error) {
    logger.warn({ error, keys }, 'Cache delete failed');
  }
}
