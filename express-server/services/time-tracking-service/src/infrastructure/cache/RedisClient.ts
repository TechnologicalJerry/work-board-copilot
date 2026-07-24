import Redis from 'ioredis';
import { getConfig } from '../../config';

let instance: Redis;

export function getRedisClient(): Redis {
  if (!instance) {
    const config = getConfig();
    instance = new Redis({
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
      password: config.REDIS_PASSWORD,
      lazyConnect: true,
    });
    instance.on('error', (err) => console.error('Redis error:', err));
  }
  return instance;
}
