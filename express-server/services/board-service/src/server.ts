import 'dotenv/config';
import { createApp } from './app';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';
import { config } from './config';
import prisma from './database/prisma';
import { redisClient } from './database/redis';

const PORT = config.PORT;

async function bootstrap(): Promise<void> {
  // Connect Prisma (PostgreSQL)
  await prisma.$connect();
  logger.info('Connected to PostgreSQL');

  // Verify Redis is available (client initializes eagerly in database/redis.ts)
  await redisClient.ping();
  logger.info('Connected to Redis');

  // Register health checks
  registerHealthCheck('postgres', async () => {
    const start = Date.now();
    try {
      await prisma.$queryRaw`SELECT 1`;
      return { name: 'postgres', status: 'pass', duration: Date.now() - start };
    } catch {
      return { name: 'postgres', status: 'fail', duration: Date.now() - start };
    }
  });

  registerHealthCheck('redis', async () => {
    const start = Date.now();
    try {
      await redisClient.ping();
      return { name: 'redis', status: 'pass', duration: Date.now() - start };
    } catch {
      return { name: 'redis', status: 'fail', duration: Date.now() - start };
    }
  });

  const app = createApp();
  const server = app.listen(PORT, () => {
    logger.info({ port: PORT, service: config.SERVICE_NAME }, 'Service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Graceful shutdown initiated');
    server.close(async () => {
      await redisClient.quit();
      await prisma.$disconnect();
      logger.info('Graceful shutdown complete');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => void shutdown());
  process.on('SIGINT', () => void shutdown());
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Startup failed');
  process.exit(1);
});
