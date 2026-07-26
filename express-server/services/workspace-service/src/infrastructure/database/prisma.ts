import { PrismaClient } from '../../generated/prisma-client';
import logger from '@boardpilot/logger';

declare global {
  // eslint-disable-next-line no-var
  var __workspacePrisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log: [
      { level: 'query', emit: 'event' },
      { level: 'error', emit: 'stdout' },
      { level: 'warn', emit: 'stdout' },
    ],
  });
}

export const prisma: PrismaClient =
  globalThis.__workspacePrisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.__workspacePrisma = prisma;
}

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    logger.info('Connected to PostgreSQL via Prisma');
  } catch (error) {
    logger.error({ error }, 'Failed to connect to database');
    throw error;
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await prisma.$disconnect();
    logger.info('Disconnected from PostgreSQL');
  } catch (error) {
    logger.error({ error }, 'Failed to disconnect from database');
    throw error;
  }
}
