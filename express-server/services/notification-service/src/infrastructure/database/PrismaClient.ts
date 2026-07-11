import { PrismaClient } from '../../generated/prisma-client';
import logger from '@boardpilot/logger';

let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
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

    prismaInstance = client;
  }
  return prismaInstance;
}

export async function disconnectPrisma(): Promise<void> {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
    prismaInstance = null;
  }
}
