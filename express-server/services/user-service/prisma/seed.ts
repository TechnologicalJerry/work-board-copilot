import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('Seeding user-service database...');

  // Clean existing data
  await prisma.userActivity.deleteMany();
  await prisma.teamMembership.deleteMany();
  await prisma.userProfile.deleteMany();

  // ─── User Profiles ───────────────────────────────────────────────────────────
  const profiles = await Promise.all([
    prisma.userProfile.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000001',
        firstName: 'Alice',
        lastName: 'Johnson',
        displayName: 'Alice J.',
        bio: 'Senior software engineer with 8 years of experience in distributed systems and cloud architecture.',
        avatarUrl: 'https://avatars.example.com/alice.jpg',
        avatarKey: 'avatars/alice-johnson.jpg',
        phone: '+14155552671',
        timezone: 'America/Los_Angeles',
        locale: 'en',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mm A',
        weekStartsOn: 0,
        theme: 'dark',
        jobTitle: 'Senior Software Engineer',
        department: 'Engineering',
        skills: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Docker', 'Kubernetes'],
        linkedinUrl: 'https://linkedin.com/in/alicejohnson',
        githubUrl: 'https://github.com/alicejohnson',
        notificationPrefs: {
          email: { taskAssigned: true, taskDueSoon: true, sprintStarted: true, mentions: true, digest: 'daily' },
          inApp: { taskAssigned: true, comments: true, mentions: true },
          push: { enabled: false },
        },
        onboardingCompleted: true,
      },
    }),

    prisma.userProfile.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000002',
        firstName: 'Bob',
        lastName: 'Martinez',
        displayName: 'Bob M.',
        bio: 'Product manager focused on agile methodologies and data-driven decision making.',
        avatarUrl: 'https://avatars.example.com/bob.jpg',
        avatarKey: 'avatars/bob-martinez.jpg',
        phone: '+12125551234',
        timezone: 'America/New_York',
        locale: 'en',
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        weekStartsOn: 1,
        theme: 'light',
        jobTitle: 'Product Manager',
        department: 'Product',
        skills: ['Product Strategy', 'Agile', 'Scrum', 'Jira', 'Data Analysis', 'Roadmapping'],
        linkedinUrl: 'https://linkedin.com/in/bobmartinez',
        githubUrl: null,
        notificationPrefs: {
          email: { taskAssigned: true, taskDueSoon: true, sprintStarted: true, mentions: true, digest: 'weekly' },
          inApp: { taskAssigned: true, comments: true, mentions: true },
          push: { enabled: true, taskDueSoon: true },
        },
        onboardingCompleted: true,
      },
    }),

    prisma.userProfile.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000003',
        firstName: 'Carol',
        lastName: 'Chen',
        displayName: 'Carol',
        bio: 'UX designer passionate about creating intuitive and accessible user experiences.',
        avatarUrl: 'https://avatars.example.com/carol.jpg',
        avatarKey: 'avatars/carol-chen.jpg',
        phone: null,
        timezone: 'America/Chicago',
        locale: 'en',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        weekStartsOn: 0,
        theme: 'system',
        jobTitle: 'Senior UX Designer',
        department: 'Design',
        skills: ['Figma', 'User Research', 'Prototyping', 'Accessibility', 'Design Systems'],
        linkedinUrl: 'https://linkedin.com/in/carolchen',
        githubUrl: 'https://github.com/carolchen',
        notificationPrefs: {
          email: { taskAssigned: true, taskDueSoon: false, sprintStarted: false, mentions: true, digest: 'none' },
          inApp: { taskAssigned: true, comments: true, mentions: true },
          push: { enabled: false },
        },
        onboardingCompleted: true,
      },
    }),

    prisma.userProfile.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000004',
        firstName: 'David',
        lastName: 'Kim',
        displayName: 'Dave K.',
        bio: 'DevOps engineer specializing in CI/CD pipelines and infrastructure automation.',
        avatarUrl: null,
        avatarKey: null,
        phone: '+13105559876',
        timezone: 'Asia/Seoul',
        locale: 'ko',
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        weekStartsOn: 1,
        theme: 'dark',
        jobTitle: 'DevOps Engineer',
        department: 'Infrastructure',
        skills: ['AWS', 'Terraform', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Ansible'],
        linkedinUrl: null,
        githubUrl: 'https://github.com/davidkim',
        notificationPrefs: {
          email: { taskAssigned: true, taskDueSoon: true, sprintStarted: true, mentions: true, digest: 'daily' },
          inApp: { taskAssigned: true, comments: false, mentions: true },
          push: { enabled: true, taskDueSoon: false, mentions: true },
        },
        onboardingCompleted: false,
      },
    }),

    prisma.userProfile.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000005',
        firstName: 'Eva',
        lastName: 'Patel',
        displayName: 'Eva P.',
        bio: 'Data scientist with expertise in machine learning and predictive analytics.',
        avatarUrl: 'https://avatars.example.com/eva.jpg',
        avatarKey: 'avatars/eva-patel.jpg',
        phone: '+14085557890',
        timezone: 'Europe/London',
        locale: 'en',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        weekStartsOn: 1,
        theme: 'light',
        jobTitle: 'Data Scientist',
        department: 'Analytics',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Spark', 'Statistics', 'R'],
        linkedinUrl: 'https://linkedin.com/in/evapatel',
        githubUrl: 'https://github.com/evapatel',
        notificationPrefs: {
          email: { taskAssigned: true, taskDueSoon: true, sprintStarted: false, mentions: true, digest: 'weekly' },
          inApp: { taskAssigned: true, comments: true, mentions: true },
          push: { enabled: true, taskDueSoon: true, mentions: true },
        },
        onboardingCompleted: true,
      },
    }),
  ]);

  console.log(`Created ${profiles.length} user profiles`);

  // ─── Team Memberships ─────────────────────────────────────────────────────────
  const memberships = await Promise.all([
    prisma.teamMembership.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000001',
        teamId: 'aaaaaaaa-0000-0000-0000-000000000001',
        role: 'team_lead',
        joinedAt: new Date('2024-01-15T09:00:00Z'),
      },
    }),
    prisma.teamMembership.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000002',
        teamId: 'aaaaaaaa-0000-0000-0000-000000000001',
        role: 'team_member',
        joinedAt: new Date('2024-01-20T10:00:00Z'),
      },
    }),
    prisma.teamMembership.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000003',
        teamId: 'aaaaaaaa-0000-0000-0000-000000000002',
        role: 'team_member',
        joinedAt: new Date('2024-02-01T08:30:00Z'),
      },
    }),
  ]);

  console.log(`Created ${memberships.length} team memberships`);

  // ─── User Activities ──────────────────────────────────────────────────────────
  const activities = await Promise.all([
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000001',
        action: 'profile.updated',
        entityId: profiles[0].id,
        entityType: 'UserProfile',
        metadata: { fields: ['bio', 'jobTitle', 'skills'] },
        createdAt: new Date('2024-03-01T10:00:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000001',
        action: 'avatar.uploaded',
        entityId: profiles[0].id,
        entityType: 'UserProfile',
        metadata: { avatarKey: 'avatars/alice-johnson.jpg' },
        createdAt: new Date('2024-03-02T14:30:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000001',
        action: 'preferences.updated',
        entityId: profiles[0].id,
        entityType: 'UserProfile',
        metadata: { fields: ['notificationPrefs'] },
        createdAt: new Date('2024-03-05T09:15:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000002',
        action: 'profile.updated',
        entityId: profiles[1].id,
        entityType: 'UserProfile',
        metadata: { fields: ['displayName', 'theme'] },
        createdAt: new Date('2024-03-03T11:00:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000002',
        action: 'onboarding.completed',
        entityId: profiles[1].id,
        entityType: 'UserProfile',
        metadata: { completedSteps: ['profile', 'team', 'preferences'] },
        createdAt: new Date('2024-03-04T15:00:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000003',
        action: 'profile.updated',
        entityId: profiles[2].id,
        entityType: 'UserProfile',
        metadata: { fields: ['bio', 'skills', 'linkedinUrl'] },
        createdAt: new Date('2024-03-06T10:30:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000003',
        action: 'preferences.updated',
        entityId: profiles[2].id,
        entityType: 'UserProfile',
        metadata: { fields: ['notificationPrefs'] },
        createdAt: new Date('2024-03-07T09:00:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000004',
        action: 'profile.created',
        entityId: profiles[3].id,
        entityType: 'UserProfile',
        metadata: { source: 'registration' },
        createdAt: new Date('2024-03-08T08:00:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000005',
        action: 'profile.updated',
        entityId: profiles[4].id,
        entityType: 'UserProfile',
        metadata: { fields: ['phone', 'timezone', 'locale'] },
        createdAt: new Date('2024-03-09T12:00:00Z'),
      },
    }),
    prisma.userActivity.create({
      data: {
        userId: '00000000-0000-0000-0000-000000000005',
        action: 'onboarding.completed',
        entityId: profiles[4].id,
        entityType: 'UserProfile',
        metadata: { completedSteps: ['profile', 'team', 'preferences', 'integrations'] },
        createdAt: new Date('2024-03-10T16:00:00Z'),
      },
    }),
  ]);

  console.log(`Created ${activities.length} user activity records`);
  console.log('Seeding complete!');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
