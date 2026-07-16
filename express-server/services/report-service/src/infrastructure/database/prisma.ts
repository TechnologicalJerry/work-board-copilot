import { PrismaClient } from '../../generated/prisma-client';
import logger from '@boardpilot/logger';

const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'warn' },
  ],
});

prisma.$on('error', (e) => {
  logger.error({ err: e }, 'Prisma error');
});

prisma.$on('warn', (e) => {
  logger.warn({ msg: e.message }, 'Prisma warning');
});

export async function connectDatabase(): Promise<void> {
  await prisma.$connect();
  logger.info('Connected to PostgreSQL via Prisma');
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  logger.info('Disconnected from PostgreSQL');
}

export default prisma;
