import 'dotenv/config';
import { createApp } from './app';
import { connectToElasticsearch, getElasticClient } from './infrastructure/elasticsearch/ElasticClient';
import { connectMongoDB, disconnectMongoDB } from './infrastructure/MongoConnection';
import { connectRedis, disconnectRedis, getRedisClient } from './infrastructure/RedisClient';
import { startIndexConsumer, stopIndexConsumer } from './consumers/IndexConsumer';
import { registerHealthCheck } from '@boardpilot/middlewares';
import { config } from './config';
import logger from '@boardpilot/logger';
import mongoose from 'mongoose';

async function bootstrap(): Promise<void> {
  registerHealthCheck('elasticsearch', async () => {
    try {
      const health = await getElasticClient().cluster.health({});
      return { name: 'elasticsearch', status: health.status === 'red' ? 'fail' : 'pass', duration: 0, message: health.status };
    } catch {
      return { name: 'elasticsearch', status: 'fail', duration: 0, message: 'Unavailable' };
    }
  });

  registerHealthCheck('mongodb', async () => {
    const state = mongoose.connection.readyState;
    return { name: 'mongodb', status: state === 1 ? 'pass' : 'fail', duration: 0, message: state === 1 ? 'Connected' : 'Disconnected' };
  });

  registerHealthCheck('redis', async () => {
    try {
      await getRedisClient().ping();
      return { name: 'redis', status: 'pass', duration: 0, message: 'Connected' };
    } catch {
      return { name: 'redis', status: 'fail', duration: 0, message: 'Unavailable' };
    }
  });

  await connectToElasticsearch();
  await connectMongoDB();
  await connectRedis();
  await startIndexConsumer();

  const app = createApp();
  const server = app.listen(config.PORT, () => {
    logger.info({ port: config.PORT, service: config.SERVICE_NAME }, 'Search service started');
  });

  const shutdown = async (signal: string) => {
    logger.info({ signal }, 'Shutdown signal received');
    server.close(async () => {
      await stopIndexConsumer();
      await disconnectMongoDB();
      await disconnectRedis();
      logger.info('Search service stopped');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('uncaughtException', (err) => { logger.error({ err }, 'Uncaught exception'); process.exit(1); });
  process.on('unhandledRejection', (reason) => { logger.error({ reason }, 'Unhandled rejection'); process.exit(1); });
}

bootstrap().catch((err) => {
  logger.error({ err }, 'Failed to start search service');
  process.exit(1);
});
