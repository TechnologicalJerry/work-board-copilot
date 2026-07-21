import { PrismaClient, TeamRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('Seeding team-service database...');

  // Seed a Department
  const department = await prisma.department.upsert({
    where: {
      organizationId_slug: {
        organizationId: 'org-seed-001',
        slug: 'engineering',
      },
    },
    update: {},
    create: {
      organizationId: 'org-seed-001',
      name: 'Engineering',
      slug: 'engineering',
      description: 'Software engineering department',
      headId: 'user-seed-001',
      createdBy: 'user-seed-001',
    },
  });

  console.log('Created department:', department.name);

  // Seed Teams
  const alphaTeam = await prisma.team.upsert({
    where: {
      organizationId_slug: {
        organizationId: 'org-seed-001',
        slug: 'alpha-team',
      },
    },
    update: {},
    create: {
      organizationId: 'org-seed-001',
      workspaceId: 'ws-seed-001',
      name: 'Alpha Team',
      slug: 'alpha-team',
      description: 'Frontend development team',
      color: '#3B82F6',
      leadId: 'user-seed-001',
      isPrivate: false,
      capacity: 400,
      createdBy: 'user-seed-001',
      updatedBy: 'user-seed-001',
    },
  });

  console.log('Created team:', alphaTeam.name);

  const betaTeam = await prisma.team.upsert({
    where: {
      organizationId_slug: {
        organizationId: 'org-seed-001',
        slug: 'beta-team',
      },
    },
    update: {},
    create: {
      organizationId: 'org-seed-001',
      workspaceId: 'ws-seed-001',
      name: 'Beta Team',
      slug: 'beta-team',
      description: 'Backend development team',
      color: '#10B981',
      leadId: 'user-seed-002',
      isPrivate: false,
      capacity: 300,
      createdBy: 'user-seed-001',
      updatedBy: 'user-seed-001',
    },
  });

  console.log('Created team:', betaTeam.name);

  // Seed TeamMembers for Alpha Team
  const members = [
    { userId: 'user-seed-001', role: TeamRole.LEAD, availability: 80 },
    { userId: 'user-seed-002', role: TeamRole.MEMBER, availability: 100 },
    { userId: 'user-seed-003', role: TeamRole.MEMBER, availability: 100 },
    { userId: 'user-seed-004', role: TeamRole.VIEWER, availability: 50 },
  ];

  for (const member of members) {
    await prisma.teamMember.upsert({
      where: {
        teamId_userId: {
          teamId: alphaTeam.id,
          userId: member.userId,
        },
      },
      update: {},
      create: {
        teamId: alphaTeam.id,
        userId: member.userId,
        role: member.role,
        availability: member.availability,
        addedBy: 'user-seed-001',
      },
    });
  }

  console.log('Created team members for Alpha Team');

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
