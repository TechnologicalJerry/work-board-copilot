import mongoose from 'mongoose';
import { config } from '../../config';
import logger from '@boardpilot/logger';

export async function connectMongoDB(): Promise<void> {
  mongoose.connection.on('connected', () => logger.info('MongoDB connected'));
  mongoose.connection.on('error', (err) => logger.error({ err }, 'MongoDB error'));
  mongoose.connection.on('disconnected', () => logger.warn('MongoDB disconnected'));

  await mongoose.connect(config.MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });
}

export async function disconnectMongoDB(): Promise<void> {
  await mongoose.disconnect();
  logger.info('MongoDB disconnected');
}
