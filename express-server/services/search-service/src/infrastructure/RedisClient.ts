import Redis from 'ioredis';
import { config } from '../config';
import logger from '@boardpilot/logger';

let redisClient: Redis;

export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis({
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });

    redisClient.on('connect', () => logger.info('Redis connected'));
    redisClient.on('error', (err) => logger.error({ err }, 'Redis error'));
    redisClient.on('close', () => logger.warn('Redis connection closed'));
  }
  return redisClient;
}

export async function connectRedis(): Promise<void> {
  await getRedisClient().connect();
}

export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
  }
}

export async function getCached<T>(key: string): Promise<T | null> {
  const data = await getRedisClient().get(key);
  return data ? (JSON.parse(data) as T) : null;
}

export async function setCache(key: string, value: unknown, ttlSeconds: number): Promise<void> {
  await getRedisClient().setex(key, ttlSeconds, JSON.stringify(value));
}

export default getRedisClient;
