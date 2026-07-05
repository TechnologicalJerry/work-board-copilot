import mongoose from 'mongoose';
import { config } from '../config';
import logger from '@boardpilot/logger';

export async function connectMongoDB(): Promise<void> {
  const maxRetries = 5;
  let attempt = 0;

  mongoose.connection.on('connected', () => logger.info('MongoDB connected'));
  mongoose.connection.on('error', (err) => logger.error({ err }, 'MongoDB error'));
  mongoose.connection.on('disconnected', () => logger.warn('MongoDB disconnected'));

  while (attempt < maxRetries) {
    try {
      await mongoose.connect(config.MONGODB_URI, {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      return;
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) {
        logger.error({ err }, 'Failed to connect to MongoDB after max retries');
        throw err;
      }
      logger.warn({ attempt, err }, 'MongoDB connection failed, retrying in 5s...');
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

export async function disconnectMongoDB(): Promise<void> {
  await mongoose.disconnect();
  logger.info('MongoDB disconnected');
}
