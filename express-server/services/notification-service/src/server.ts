import 'dotenv/config';
import { createApp } from './app';
import { connectMongoDB, disconnectMongoDB, getMongoHealth } from './infrastructure/database/MongoConnection';
import { getRedisClient, disconnectRedis } from './infrastructure/cache/RedisClient';
import { getRabbitMQConnection } from '@boardpilot/events';
import { NotificationConsumer } from './application/consumers/NotificationConsumer';
import { NotificationService } from './application/services/NotificationService';
import { MongoNotificationRepository } from './infrastructure/database/NotificationRepository';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';

const PORT = parseInt(process.env.PORT ?? '3010');

async function bootstrap(): Promise<void> {
  await connectMongoDB(process.env.MONGODB_URI!);

  const redis = getRedisClient();

  const rabbitMQ = getRabbitMQConnection();
  await rabbitMQ.connect();

  registerHealthCheck('mongodb', async () => ({
    name: 'mongodb',
    status: getMongoHealth().isConnected ? 'pass' : 'fail',
    duration: 0,
  }));

  registerHealthCheck('redis', async () => {
    const start = Date.now();
    try {
      await redis.ping();
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

  const notificationRepo = new MongoNotificationRepository();
  const notificationService = new NotificationService(notificationRepo);
  const consumer = new NotificationConsumer(rabbitMQ, notificationService);
  await consumer.start();

  const app = createApp();
  const server = app.listen(PORT, () => {
    logger.info({ port: PORT, service: 'notification-service' }, 'Service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Shutting down notification-service...');
    server.close(async () => {
      await disconnectMongoDB();
      await disconnectRedis();
      await rabbitMQ.close();
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => void shutdown());
  process.on('SIGINT', () => void shutdown());
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Failed to start notification-service');
  process.exit(1);
});
