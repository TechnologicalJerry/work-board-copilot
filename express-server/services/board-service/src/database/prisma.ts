import { PrismaClient } from '@prisma/client';
import logger from '@boardpilot/logger';

const prisma = new PrismaClient({
  log: [
    { level: 'query', emit: 'event' },
    { level: 'error', emit: 'stdout' },
    { level: 'warn', emit: 'stdout' },
  ],
});

// @ts-ignore - Prisma query event typing varies by version
prisma.$on('query', (e: { query: string; duration: number }) => {
  if (process.env.NODE_ENV === 'development') {
    logger.debug({ query: e.query, duration: e.duration }, 'Prisma query');
  }
});

export default prisma;
