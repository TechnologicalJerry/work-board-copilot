import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const GB = BigInt(1024 * 1024 * 1024);

async function main() {
  console.log('Seeding billing plan limits...');

  const plans = [
    {
      plan: 'FREE' as const,
      maxMembers: 5,
      maxProjects: 3,
      maxStorage: GB * BigInt(1),
      maxBoards: 2,
      hasAi: false,
      hasReports: false,
      hasSso: false,
      hasApi: false,
      priceMonthly: 0,
      priceYearly: 0,
      features: ['5 members', '3 projects', '2 boards', '1 GB storage', 'Basic Kanban'],
    },
    {
      plan: 'STARTER' as const,
      maxMembers: 25,
      maxProjects: 15,
      maxStorage: GB * BigInt(20),
      maxBoards: 10,
      hasAi: false,
      hasReports: true,
      hasSso: false,
      hasApi: true,
      priceMonthly: 1200,
      priceYearly: 11520,
      features: ['25 members', '15 projects', '10 boards', '20 GB storage', 'Reports', 'API Access', 'Priority support'],
    },
    {
      plan: 'PROFESSIONAL' as const,
      maxMembers: 100,
      maxProjects: -1,
      maxStorage: GB * BigInt(100),
      maxBoards: 50,
      hasAi: true,
      hasReports: true,
      hasSso: false,
      hasApi: true,
      priceMonthly: 2400,
      priceYearly: 23040,
      features: ['100 members', 'Unlimited projects', '50 boards', '100 GB storage', 'AI features', 'Advanced reports', 'API Access', 'Priority support'],
    },
    {
      plan: 'ENTERPRISE' as const,
      maxMembers: -1,
      maxProjects: -1,
      maxStorage: BigInt(-1),
      maxBoards: -1,
      hasAi: true,
      hasReports: true,
      hasSso: true,
      hasApi: true,
      priceMonthly: 9900,
      priceYearly: 95040,
      features: ['Unlimited members', 'Unlimited projects', 'Unlimited boards', 'Unlimited storage', 'AI features', 'SSO/SAML', 'Custom reports', 'Dedicated support', 'Custom integrations', 'SLA guarantee'],
    },
  ];

  for (const plan of plans) {
    await prisma.planLimit.upsert({
      where: { plan: plan.plan },
      update: plan,
      create: plan,
    });
    console.log(`  Upserted ${plan.plan} plan`);
  }

  console.log('Seeding complete.');
}

main()
  .catch((err) => {
    console.error('Seed failed:', err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
