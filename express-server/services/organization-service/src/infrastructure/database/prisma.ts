import { PrismaClient } from '../../generated/prisma-client';
import logger from '@boardpilot/logger';

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log: [
      { level: 'query', emit: 'event' },
      { level: 'error', emit: 'event' },
      { level: 'warn', emit: 'event' },
    ],
  });
}

export const prisma: PrismaClient =
  global.__prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prisma;
}

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    logger.info('Connected to PostgreSQL via Prisma');
  } catch (error) {
    logger.error({ error }, 'Failed to connect to PostgreSQL');
    throw error;
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await prisma.$disconnect();
    logger.info('Disconnected from PostgreSQL');
  } catch (error) {
    logger.error({ error }, 'Error disconnecting from PostgreSQL');
    throw error;
  }
}
