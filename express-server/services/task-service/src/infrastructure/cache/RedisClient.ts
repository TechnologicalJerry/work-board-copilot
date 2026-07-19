import Redis from 'ioredis';
import { config } from '../../config';
import logger from '@boardpilot/logger';

let redisClient: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis({
      host: config.redis.host,
      port: config.redis.port,
      password: config.redis.password,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });

    redisClient.on('connect', () => logger.info('Redis connected'));
    redisClient.on('error', (err) => logger.error({ err }, 'Redis error'));
  }
  return redisClient;
}

export async function connectRedis(): Promise<void> {
  await getRedisClient().connect();
}

export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}

export async function getCached<T>(key: string): Promise<T | null> {
  const data = await getRedisClient().get(key);
  return data ? (JSON.parse(data) as T) : null;
}

export async function setCache(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  await getRedisClient().setex(key, ttlSeconds, JSON.stringify(value));
}

export async function deleteCache(key: string): Promise<void> {
  await getRedisClient().del(key);
}

export async function deleteCachePattern(pattern: string): Promise<void> {
  const keys = await getRedisClient().keys(pattern);
  if (keys.length > 0) {
    await getRedisClient().del(...keys);
  }
}
