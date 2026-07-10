import { PrismaClient } from '../../generated/prisma-client';
import { logger } from '@boardpilot/logger';

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  const client = new PrismaClient({
    log: [
      { emit: 'event', level: 'query' },
      { emit: 'event', level: 'error' },
      { emit: 'event', level: 'warn' },
      { emit: 'event', level: 'info' },
    ],
  });

  client.$on('query', (e) => {
    if (process.env.NODE_ENV === 'development') {
      logger.debug(
        {
          query: e.query,
          params: e.params,
          duration: `${e.duration}ms`,
        },
        'Prisma query'
      );
    }
  });

  client.$on('error', (e) => {
    logger.error({ message: e.message, target: e.target }, 'Prisma error');
  });

  client.$on('warn', (e) => {
    logger.warn({ message: e.message, target: e.target }, 'Prisma warning');
  });

  client.$on('info', (e) => {
    logger.info({ message: e.message, target: e.target }, 'Prisma info');
  });

  return client;
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
  await prisma.$disconnect();
  logger.info('Disconnected from PostgreSQL');
}

export default prisma;
