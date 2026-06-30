import 'dotenv/config';
import mongoose from 'mongoose';
import { createApp } from './app';
import { registerHealthCheck } from '@boardpilot/middlewares';
import logger from '@boardpilot/logger';
import { config } from './config';
import { connectRedis, disconnectRedis, getRedisClient } from './services/redis.service';

const PORT = config.PORT ?? 3018;

async function bootstrap(): Promise<void> {
  // Connect MongoDB
  mongoose.connection.on('connected', () => logger.info('MongoDB connected'));
  mongoose.connection.on('error', (err) => logger.error({ err }, 'MongoDB error'));
  mongoose.connection.on('disconnected', () => logger.warn('MongoDB disconnected'));

  await mongoose.connect(config.MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  // Connect Redis (token usage tracking + session caching)
  await connectRedis();
  logger.info('Connected to Redis');

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
      const redis = getRedisClient();
      await redis.ping();
      return { name: 'redis', status: 'pass', duration: Date.now() - start };
    } catch {
      return { name: 'redis', status: 'fail', duration: Date.now() - start };
    }
  });

  const app = createApp();
  const server = app.listen(PORT, () => {
    logger.info({ port: PORT, service: 'ai-service' }, 'Service started');
  });

  const shutdown = async (): Promise<void> => {
    logger.info('Graceful shutdown initiated');
    server.close(async () => {
      await disconnectRedis();
      await mongoose.disconnect();
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
