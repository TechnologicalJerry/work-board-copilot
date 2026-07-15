import 'dotenv/config';
import { createApp } from './app';
import { connectDatabase, disconnectDatabase } from './infrastructure/database/prisma';
import { connectRedis, disconnectRedis, getRedisClient } from './infrastructure/cache/RedisClient';
import { registerHealthCheck } from '@boardpilot/middlewares';
import { config } from './config';
import logger from '@boardpilot/logger';
import prisma from './infrastructure/database/prisma';

async function bootstrap(): Promise<void> {
  registerHealthCheck('postgresql', async () => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { name: 'postgresql', status: 'pass', duration: 0, message: 'Connected' };
    } catch {
      return { name: 'postgresql', status: 'fail', duration: 0, message: 'Unavailable' };
    }
  });

  registerHealthCheck('redis', async () => {
    try {
      await getRedisClient().ping();
      return { name: 'redis', status: 'pass', duration: 0, message: 'Connected' };
    } catch {
      return { name: 'redis', status: 'fail', duration: 0, message: 'Unavailable' };
    }
  });

  await connectDatabase();
  await connectRedis();

  const app = createApp();
  const PORT = config.PORT ?? 3015;

  const server = app.listen(PORT, () => {
    logger.info({ port: PORT, service: 'report-service' }, 'Report service started');
  });

  const shutdown = async (signal: string) => {
    logger.info({ signal }, 'Shutdown signal received');
    server.close(async () => {
      await disconnectDatabase();
      await disconnectRedis();
      logger.info('Report service stopped');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('uncaughtException', (err) => { logger.error({ err }, 'Uncaught exception'); process.exit(1); });
  process.on('unhandledRejection', (reason) => { logger.error({ reason }, 'Unhandled rejection'); process.exit(1); });
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Failed to start report service');
  process.exit(1);
});
