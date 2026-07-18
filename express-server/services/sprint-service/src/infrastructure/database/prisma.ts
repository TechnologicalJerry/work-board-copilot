import { PrismaClient } from '../../generated/prisma-client';
import logger from '@boardpilot/logger';

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  const client = new PrismaClient({
    log: [
      { level: 'warn', emit: 'event' },
      { level: 'error', emit: 'event' },
    ],
  });

  client.$on('warn', (e) => {
    logger.warn({ message: e.message }, 'Prisma warning');
  });

  client.$on('error', (e) => {
    logger.error({ message: e.message }, 'Prisma error');
  });

  return client;
}

// Singleton: reuse across hot-reloads in development
export const prisma: PrismaClient =
  global.__prisma ?? (global.__prisma = createPrismaClient());

export default prisma;
