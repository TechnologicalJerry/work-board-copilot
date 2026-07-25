import Redis from 'ioredis';
import logger from '@boardpilot/logger';

let redisInstance: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisInstance) {
    const url = process.env.REDIS_URL ?? 'redis://localhost:6379';
    redisInstance = new Redis(url, {
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

export const CACHE_KEYS = {
  profile: (userId: string) => `user-service:profile:${userId}`,
  publicProfile: (userId: string) => `user-service:public-profile:${userId}`,
  activity: (userId: string) => `user-service:activity:${userId}`,
};

export const CACHE_TTL = {
  profile: 300,
  activity: 120,
};

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

export async function cacheSet(
  key: string,
  value: unknown,
  ttlSeconds: number
): Promise<void> {
  try {
    await getRedisClient().set(key, JSON.stringify(value), 'EX', ttlSeconds);
  } catch (error) {
    logger.warn({ error, key }, 'Cache set failed');
  }
}

export async function cacheDelete(key: string): Promise<void> {
  try {
    await getRedisClient().del(key);
  } catch (error) {
    logger.warn({ error, key }, 'Cache delete failed');
  }
}
