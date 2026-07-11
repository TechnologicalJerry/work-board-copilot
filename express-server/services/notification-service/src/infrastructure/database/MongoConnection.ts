import mongoose from 'mongoose';
import logger from '@boardpilot/logger';

let isConnected = false;

export async function connectMongoDB(uri: string): Promise<void> {
  if (isConnected) return;

  try {
    await mongoose.connect(uri, {
      maxPoolSize: 20,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    isConnected = true;
    logger.info('Connected to MongoDB');

    mongoose.connection.on('error', (err) => {
      logger.error({ err }, 'MongoDB connection error');
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
      isConnected = false;
    });
  } catch (error) {
    logger.error({ error }, 'Failed to connect to MongoDB');
    throw error;
  }
}

export async function disconnectMongoDB(): Promise<void> {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
  logger.info('Disconnected from MongoDB');
}

export function getMongoHealth(): { status: string; isConnected: boolean } {
  return {
    status: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    isConnected: mongoose.connection.readyState === 1,
  };
}
