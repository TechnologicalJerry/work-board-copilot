import Redis from 'ioredis';
import { config } from '../config';
import logger from '@boardpilot/logger';

let redisClient: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisClient) {
    redisClient = new Redis({
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD || undefined,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      enableOfflineQueue: false,
    });

    redisClient.on('connect', () => logger.info('Redis connected'));
    redisClient.on('error', (err) => logger.error({ err }, 'Redis error'));
    redisClient.on('close', () => logger.warn('Redis connection closed'));
  }
  return redisClient;
}

export async function connectRedis(): Promise<void> {
  const client = getRedisClient();
  await client.connect();
}

export async function disconnectRedis(): Promise<void> {
  if (redisClient) {
    await redisClient.quit();
    redisClient = null;
  }
}

/**
 * Track token usage per user per hour using a sliding window.
 * Returns {used, limit, remaining}.
 */
export async function trackTokenUsage(
  userId: string,
  tokensUsed: number
): Promise<{ used: number; limit: number; remaining: number; allowed: boolean }> {
  const redis = getRedisClient();
  const key = `ai:tokens:${userId}:${getCurrentHourKey()}`;
  const limit = config.AI_TOKEN_LIMIT_PER_HOUR;

  const pipe = redis.multi();
  pipe.incrby(key, tokensUsed);
  pipe.expire(key, 3600); // 1 hour TTL
  const results = await pipe.exec();

  const used = (results?.[0]?.[1] as number) ?? tokensUsed;
  const remaining = Math.max(0, limit - used);

  return { used, limit, remaining, allowed: used <= limit };
}

export async function getTokenUsage(
  userId: string
): Promise<{ used: number; limit: number; remaining: number }> {
  const redis = getRedisClient();
  const key = `ai:tokens:${userId}:${getCurrentHourKey()}`;
  const limit = config.AI_TOKEN_LIMIT_PER_HOUR;

  const raw = await redis.get(key);
  const used = parseInt(raw ?? '0', 10);
  return { used, limit, remaining: Math.max(0, limit - used) };
}

function getCurrentHourKey(): string {
  const now = new Date();
  return `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}`;
}

export async function cacheSet(key: string, value: unknown, ttlSeconds = 300): Promise<void> {
  const redis = getRedisClient();
  await redis.setex(key, ttlSeconds, JSON.stringify(value));
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  const redis = getRedisClient();
  const raw = await redis.get(key);
  if (!raw) return null;
  return JSON.parse(raw) as T;
}

export async function cacheDel(key: string): Promise<void> {
  const redis = getRedisClient();
  await redis.del(key);
}

export async function healthCheck(): Promise<boolean> {
  try {
    const redis = getRedisClient();
    const pong = await redis.ping();
    return pong === 'PONG';
  } catch {
    return false;
  }
}
