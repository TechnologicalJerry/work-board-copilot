import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../config';

let redisInstance: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisInstance) {
    redisInstance = new Redis({
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD,
      maxRetriesPerRequest: 3,
      retryStrategy: (times) => {
        const delay = Math.min(times * 50, 2000);
        return delay;
      },
      lazyConnect: true,
    });

    redisInstance.on('connect', () => {
      logger.info('Redis connected');
    });

    redisInstance.on('error', (err) => {
      logger.error({ err }, 'Redis connection error');
    });

    redisInstance.on('close', () => {
      logger.warn('Redis connection closed');
    });
  }
  return redisInstance;
}

export const redisClient = getRedisClient();

export async function getCached<T>(key: string): Promise<T | null> {
  try {
    const value = await redisClient.get(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  } catch (err) {
    logger.warn({ err, key }, 'Redis get error');
    return null;
  }
}

export async function setCached<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
  try {
    await redisClient.setex(key, ttlSeconds, JSON.stringify(value));
  } catch (err) {
    logger.warn({ err, key }, 'Redis set error');
  }
}

export async function deleteCached(...keys: string[]): Promise<void> {
  try {
    if (keys.length > 0) {
      await redisClient.del(...keys);
    }
  } catch (err) {
    logger.warn({ err, keys }, 'Redis delete error');
  }
}
