import 'dotenv/config';
import { createApp } from './app';
import { getConfig } from './config';
import { connectMongoDB, disconnectMongoDB, isMongoConnected } from './infrastructure/database/MongoConnection';
import prisma from './infrastructure/database/prisma';
import { getRedisClient } from './infrastructure/cache/RedisClient';
import { getRabbitMQConnection } from '@boardpilot/events';
import { AutomationConsumer } from './infrastructure/consumers/AutomationConsumer';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';

async function bootstrap(): Promise<void> {
  const config = getConfig();

  await connectMongoDB(config.MONGODB_URI);
  await prisma.$connect();
  logger.info('Connected to PostgreSQL');

  const redis = getRedisClient();
  await redis.connect();
  logger.info('Connected to Redis');

  const rabbitMQ = getRabbitMQConnection();
  await rabbitMQ.connect();
  logger.info('Connected to RabbitMQ');

  registerHealthCheck('mongodb', async () => ({
    name: 'mongodb',
    status: isMongoConnected() ? 'pass' as const : 'fail' as const,
    duration: 0,
  }));

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

  registerHealthCheck('rabbitmq', async () => ({
    name: 'rabbitmq',
    status: rabbitMQ.isConnected() ? 'pass' as const : 'fail' as const,
    duration: 0,
  }));

  const consumer = new AutomationConsumer();
  await consumer.start();
  logger.info('Automation event consumer started');

  const app = createApp();
  const server = app.listen(config.PORT, () => {
    logger.info({ port: config.PORT, service: config.SERVICE_NAME }, 'Automation service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Shutting down automation-service...');
    server.close(async () => {
      await disconnectMongoDB();
      await prisma.$disconnect();
      await redis.quit();
      await rabbitMQ.close();
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => void shutdown());
  process.on('SIGINT', () => void shutdown());
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Failed to start automation-service');
  process.exit(1);
});
