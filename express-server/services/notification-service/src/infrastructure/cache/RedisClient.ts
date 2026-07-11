import Redis from 'ioredis';
import logger from '@boardpilot/logger';
import { config } from '../../config';

let redisInstance: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisInstance) {
    redisInstance = new Redis({
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD || undefined,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      enableReadyCheck: true,
    });

    redisInstance.on('connect', () => logger.info('Connected to Redis'));
    redisInstance.on('error', (err) => logger.error({ err }, 'Redis error'));
    redisInstance.on('close', () => logger.warn('Redis connection closed'));
  }
  return redisInstance;
}

export async function disconnectRedis(): Promise<void> {
  if (redisInstance) {
    await redisInstance.quit();
    redisInstance = null;
  }
}

export class CacheService {
  private readonly redis: Redis;
  private readonly prefix: string;

  constructor(prefix = 'notification') {
    this.redis = getRedisClient();
    this.prefix = prefix;
  }

  private key(k: string): string {
    return `${this.prefix}:${k}`;
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(this.key(key));
    return data ? (JSON.parse(data) as T) : null;
  }

  async set<T>(key: string, value: T, ttlSeconds = 300): Promise<void> {
    await this.redis.setex(this.key(key), ttlSeconds, JSON.stringify(value));
  }

  async del(key: string): Promise<void> {
    await this.redis.del(this.key(key));
  }

  async increment(key: string): Promise<number> {
    return this.redis.incr(this.key(key));
  }

  async getOrSet<T>(key: string, factory: () => Promise<T>, ttlSeconds = 300): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) return cached;
    const value = await factory();
    await this.set(key, value, ttlSeconds);
    return value;
  }
}
