import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../../config';

let redisClient: Redis | null = null;

export const CACHE_KEYS = {
  org: (id: string) => `org:${id}`,
  orgBySlug: (slug: string) => `org:slug:${slug}`,
  orgMembers: (orgId: string) => `org:${orgId}:members`,
  myOrgs: (userId: string) => `user:${userId}:orgs`,
  orgStats: (orgId: string) => `org:${orgId}:stats`,
};

export const CACHE_TTL = {
  org: 300,
  members: 120,
  myOrgs: 120,
  stats: 60,
} as const;

export function getRedisClient(): Redis {
  if (!redisClient) {
    throw new Error('Redis client not initialized. Call connectRedis() first.');
  }
  return redisClient;
}

export async function connectRedis(): Promise<void> {
  try {
    redisClient = new Redis(config.REDIS_URL, {
      maxRetriesPerRequest: 3,
      enableReadyCheck: true,
      lazyConnect: true,
    });

    redisClient.on('error', (err) => {
      logger.error({ err }, 'Redis client error');
    });

    redisClient.on('connect', () => {
      logger.info('Connected to Redis');
    });

    redisClient.on('ready', () => {
      logger.info('Redis client ready');
    });

    redisClient.on('reconnecting', () => {
      logger.warn('Redis client reconnecting');
    });

    await redisClient.connect();
  } catch (error) {
    logger.error({ error }, 'Failed to connect to Redis');
    throw error;
  }
}

export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
    logger.info('Disconnected from Redis');
  }
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const client = getRedisClient();
    const data = await client.get(key);
    if (!data) return null;
    return JSON.parse(data) as T;
  } catch (error) {
    logger.warn({ error, key }, 'Cache get failed');
    return null;
  }
}

export async function cacheSet(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  try {
    const client = getRedisClient();
    await client.setex(key, ttlSeconds, JSON.stringify(value));
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
