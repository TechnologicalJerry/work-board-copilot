import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('Seeding project service database...');

  const project = await prisma.project.upsert({
    where: {
      organizationId_key: {
        organizationId: 'seed-org-001',
        key: 'SED001',
      },
    },
    update: {},
    create: {
      organizationId: 'seed-org-001',
      workspaceId: 'seed-ws-001',
      key: 'SED001',
      name: 'Seed Project',
      slug: 'seed-project-abcd',
      description: 'A seeded demo project',
      type: 'SCRUM',
      status: 'ACTIVE',
      visibility: 'PRIVATE',
      ownerId: 'seed-user-001',
      createdBy: 'seed-user-001',
      updatedBy: 'seed-user-001',
    },
  });

  console.log(`Created project: ${project.name} (${project.id})`);

  await prisma.projectMember.upsert({
    where: {
      projectId_userId: {
        projectId: project.id,
        userId: 'seed-user-001',
      },
    },
    update: {},
    create: {
      projectId: project.id,
      userId: 'seed-user-001',
      role: 'MANAGER',
      addedBy: 'seed-user-001',
    },
  });

  await prisma.label.upsert({
    where: {
      projectId_name: {
        projectId: project.id,
        name: 'Bug',
      },
    },
    update: {},
    create: {
      projectId: project.id,
      name: 'Bug',
      color: '#ef4444',
      description: 'Something is broken',
      createdBy: 'seed-user-001',
    },
  });

  await prisma.milestone.create({
    data: {
      projectId: project.id,
      name: 'v1.0 Launch',
      description: 'Initial product launch',
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      status: 'UPCOMING',
      createdBy: 'seed-user-001',
    },
  });

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
