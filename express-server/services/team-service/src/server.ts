import 'dotenv/config';
import { PrismaClient } from './generated/prisma-client';
import { createApp } from './app';
import { getRabbitMQConnection } from '@boardpilot/events';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';
import { config } from './config';
import Redis from 'ioredis';

const PORT = config.PORT;
const prisma = new PrismaClient();

let redisClient: Redis;

async function bootstrap(): Promise<void> {
  // Connect Prisma (PostgreSQL)
  await prisma.$connect();
  logger.info('Connected to PostgreSQL');

  // Connect Redis (used for team/department caching)
  redisClient = new Redis(config.REDIS_URL, {
    maxRetriesPerRequest: 3,
    lazyConnect: true,
  });
  await redisClient.connect();
  logger.info('Connected to Redis');

  // Connect RabbitMQ (used by TeamEventPublisher)
  const rabbitMQ = getRabbitMQConnection();
  await rabbitMQ.connect();
  logger.info('Connected to RabbitMQ');

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

  registerHealthCheck('rabbitmq', async () => ({
    name: 'rabbitmq',
    status: rabbitMQ.isConnected() ? 'pass' : 'fail',
    duration: 0,
  }));

  const app = createApp();
  const server = app.listen(PORT, () => {
    logger.info({ port: PORT, service: config.SERVICE_NAME }, 'Service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Graceful shutdown initiated');
    server.close(async () => {
      await redisClient.quit();
      await prisma.$disconnect();
      await rabbitMQ.close();
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
