import 'dotenv/config';
import { createApp } from './app';
import { getConfig } from './config';
import prisma from './infrastructure/database/prisma';
import { getRedisClient } from './infrastructure/cache/RedisClient';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';

async function bootstrap(): Promise<void> {
  const config = getConfig();

  await prisma.$connect();
  logger.info('Connected to PostgreSQL (time-tracking-service)');

  const redis = getRedisClient();
  await redis.connect();
  logger.info('Connected to Redis (time-tracking-service)');

  registerHealthCheck('postgres', async () => {
    const start = Date.now();
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { name: 'postgres', status: 'pass' as const, duration: Date.now() - start };
    } catch {
      return { name: 'postgres', status: 'fail' as const, duration: Date.now() - start };
    }
  });

  registerHealthCheck('redis', async () => {
    const start = Date.now();
    try {
      await redis.ping();
      return { name: 'redis', status: 'pass' as const, duration: Date.now() - start };
    } catch {
      return { name: 'redis', status: 'fail' as const, duration: Date.now() - start };
    }
  });

  const app = createApp();
  const server = app.listen(config.PORT, () => {
    logger.info({ port: config.PORT, service: config.SERVICE_NAME }, 'Time tracking service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Shutting down time-tracking-service...');
    server.close(async () => {
      await prisma.$disconnect();
      await redis.quit();
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => void shutdown());
  process.on('SIGINT', () => void shutdown());
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Failed to start time-tracking-service');
  process.exit(1);
});
