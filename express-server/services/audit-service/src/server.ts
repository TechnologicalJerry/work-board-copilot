import 'dotenv/config';
import { createApp } from './app';
import { getRabbitMQConnection } from '@boardpilot/events';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';
import { config } from './config';
import { connectMongoDB, disconnectMongoDB } from './infrastructure/database/MongoConnection';
import { connectRedis, disconnectRedis, getRedisClient } from './infrastructure/cache/RedisClient';
import { startAuditConsumer, stopAuditConsumer } from './consumers/AuditEventConsumer';
import mongoose from 'mongoose';

const PORT = config.PORT ?? 3019;

async function bootstrap(): Promise<void> {
  // Connect MongoDB (primary store for audit logs)
  await connectMongoDB();

  // Connect Redis (rate-limiting / dedup cache for event processing)
  await connectRedis();
  logger.info('Connected to Redis');

  // Connect RabbitMQ (consume audit events published by other services)
  const rabbitMQ = getRabbitMQConnection();
  await rabbitMQ.connect();
  logger.info('Connected to RabbitMQ');

  // Start the dedicated audit event consumer
  await startAuditConsumer();

  // Register health checks
  registerHealthCheck('mongodb', async () => {
    const start = Date.now();
    try {
      await mongoose.connection.db!.admin().ping();
      return { name: 'mongodb', status: 'pass', duration: Date.now() - start };
    } catch {
      return { name: 'mongodb', status: 'fail', duration: Date.now() - start };
    }
  });

  registerHealthCheck('redis', async () => {
    const start = Date.now();
    try {
      await getRedisClient().ping();
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
    logger.info({ port: PORT, service: 'audit-service' }, 'Service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Graceful shutdown initiated');
    server.close(async () => {
      await stopAuditConsumer();
      await disconnectRedis();
      await rabbitMQ.close();
      await disconnectMongoDB();
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
