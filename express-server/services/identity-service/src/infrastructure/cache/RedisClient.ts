import Redis from 'ioredis';
import { logger } from '@boardpilot/logger';
import { getConfig } from '../../config';

let _redisClient: Redis | null = null;

export function getRedisClient(): Redis {
  if (_redisClient) return _redisClient;

  const config = getConfig();

  _redisClient = new Redis({
    host: config.REDIS_HOST,
    port: config.REDIS_PORT,
    password: config.REDIS_PASSWORD,
    retryStrategy(times) {
      const delay = Math.min(times * 50, 2000);
      logger.warn({ attempt: times, delay }, 'Redis reconnecting');
      return delay;
    },
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: false,
  });

  _redisClient.on('connect', () => {
    logger.info('Redis client connected');
  });

  _redisClient.on('ready', () => {
    logger.info('Redis client ready');
  });

  _redisClient.on('error', (err) => {
    logger.error({ err }, 'Redis client error');
  });

  _redisClient.on('close', () => {
    logger.warn('Redis client connection closed');
  });

  _redisClient.on('reconnecting', () => {
    logger.info('Redis client reconnecting');
  });

  return _redisClient;
}

export class RedisService {
  private readonly client: Redis;

  constructor(client?: Redis) {
    this.client = client ?? getRedisClient();
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
    if (ttlSeconds !== undefined) {
      await this.client.setex(key, ttlSeconds, value);
    } else {
      await this.client.set(key, value);
    }
  }

  async setWithExpiry(key: string, value: string, ttlSeconds: number): Promise<void> {
    await this.client.setex(key, ttlSeconds, value);
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.client.exists(key);
    return result === 1;
  }

  async getJSON<T>(key: string): Promise<T | null> {
    const raw = await this.client.get(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      logger.warn({ key }, 'Failed to parse cached JSON value');
      return null;
    }
  }

  async setJSON<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const serialized = JSON.stringify(value);
    await this.set(key, serialized, ttlSeconds);
  }

  async ttl(key: string): Promise<number> {
    return this.client.ttl(key);
  }

  async ping(): Promise<string> {
    return this.client.ping();
  }

  async disconnect(): Promise<void> {
    await this.client.quit();
    _redisClient = null;
    logger.info('Redis client disconnected');
  }

  getClient(): Redis {
    return this.client;
  }
}

let _redisService: RedisService | null = null;

export function getRedisService(): RedisService {
  if (!_redisService) {
    _redisService = new RedisService();
  }
  return _redisService;
}
