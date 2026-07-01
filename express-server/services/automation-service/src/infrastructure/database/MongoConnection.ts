import mongoose from 'mongoose';
import logger from '@boardpilot/logger';

let isConnected = false;

export async function connectMongoDB(uri: string): Promise<void> {
  if (isConnected) return;
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
  isConnected = true;
  logger.info('Connected to MongoDB (automation-service)');
}

export async function disconnectMongoDB(): Promise<void> {
  if (!isConnected) return;
  await mongoose.disconnect();
  isConnected = false;
}

export function isMongoConnected(): boolean {
  return mongoose.connection.readyState === 1;
}
