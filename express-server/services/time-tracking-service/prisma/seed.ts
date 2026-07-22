import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('Seeding time-tracking-service...');
  // No seed data required for time-tracking (entries are created by users at runtime)
  console.log('Done.');
}

main().finally(() => prisma.$disconnect());
