import 'dotenv/config';
import { createApp } from './app';
import { connectDatabase, disconnectDatabase, getPrismaClient } from './infrastructure/database/prisma';
import { connectRedis, disconnectRedis, getRedisClient } from './infrastructure/cache/redis';
import { config } from './config';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';

const PORT = config.port;

async function bootstrap(): Promise<void> {
  // Connect PostgreSQL via Prisma
  await connectDatabase();

  // Connect Redis
  await connectRedis();

  // Register health checks
  registerHealthCheck('postgres', async () => {
    const start = Date.now();
    try {
      const prisma = getPrismaClient();
      await prisma.$queryRaw`SELECT 1`;
      return { name: 'postgres', status: 'pass' as const, duration: Date.now() - start };
    } catch (err) {
      return {
        name: 'postgres',
        status: 'fail' as const,
        duration: Date.now() - start,
        message: err instanceof Error ? err.message : 'Postgres health check failed',
      };
    }
  });

  registerHealthCheck('redis', async () => {
    const start = Date.now();
    try {
      const redis = getRedisClient();
      await redis.ping();
      return { name: 'redis', status: 'pass' as const, duration: Date.now() - start };
    } catch (err) {
      return {
        name: 'redis',
        status: 'fail' as const,
        duration: Date.now() - start,
        message: err instanceof Error ? err.message : 'Redis health check failed',
      };
    }
  });

  const app = createApp();

  const server = app.listen(PORT, () => {
    logger.info({ port: PORT, service: config.serviceName }, 'Project service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Graceful shutdown initiated');
    server.close(async () => {
      try {
        await disconnectRedis();
        await disconnectDatabase();
        logger.info('Graceful shutdown complete');
      } catch (err) {
        logger.error({ err }, 'Error during shutdown');
      } finally {
        process.exit(0);
      }
    });

    // Force shutdown after 30 seconds if graceful shutdown hangs
    setTimeout(() => {
      logger.error('Forced shutdown after timeout');
      process.exit(1);
    }, 30_000).unref();
  };

  process.on('SIGTERM', () => void shutdown());
  process.on('SIGINT', () => void shutdown());
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Failed to start project service');
  process.exit(1);
});
