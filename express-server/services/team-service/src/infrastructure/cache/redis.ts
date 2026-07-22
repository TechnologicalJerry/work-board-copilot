import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../../config';

let redisClient: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis(config.REDIS_URL, {
      maxRetriesPerRequest: 3,
      enableReadyCheck: true,
      lazyConnect: false,
    });

    redisClient.on('connect', () => {
      logger.info('Redis client connected');
    });

    redisClient.on('error', (err) => {
      logger.error({ err }, 'Redis client error');
    });

    redisClient.on('close', () => {
      logger.warn('Redis connection closed');
    });
  }
  return redisClient;
}

export async function connectRedis(): Promise<void> {
  const client = getRedisClient();
  await client.ping();
  logger.info('Redis ping successful');
}

export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
    logger.info('Redis disconnected');
  }
}

export const CACHE_KEYS = {
  team: (id: string) => `team-service:team:${id}`,
  teamsByOrg: (orgId: string) => `team-service:teams:org:${orgId}`,
  teamsByWorkspace: (wsId: string) => `team-service:teams:ws:${wsId}`,
  teamMembers: (teamId: string) => `team-service:team:${teamId}:members`,
  teamCapacity: (teamId: string) => `team-service:team:${teamId}:capacity`,
  department: (id: string) => `team-service:department:${id}`,
  departmentsByOrg: (orgId: string) => `team-service:departments:org:${orgId}`,
} as const;

export const CACHE_TTL = {
  team: 300,       // 5 minutes
  teamList: 120,   // 2 minutes
  members: 120,    // 2 minutes
  capacity: 60,    // 1 minute
  department: 300, // 5 minutes
  deptList: 120,   // 2 minutes
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

export async function cacheDeletePattern(pattern: string): Promise<void> {
  try {
    const client = getRedisClient();
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
      await client.del(...keys);
    }
  } catch (err) {
    logger.warn({ err, pattern }, 'Cache delete pattern failed');
  }
}
