import { v4 as uuidv4 } from 'uuid';
import { Prisma, PrismaClient } from '../../generated/prisma-client';
import { UserProfile } from '../../domain/entities/UserProfile';
import type { CreateUserProfileData, UpdateUserProfileData } from '../../domain/entities/UserProfile';
import type {
  IUserProfileRepository,
  ITeamMembershipRepository,
  IUserActivityRepository,
  TeamMembership,
  UserActivity,
  CreateActivityData,
  SearchResult,
  ActivityResult,
} from '../../domain/repositories/IUserProfileRepository';

type PrismaUserProfile = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  displayName: string | null;
  bio: string | null;
  avatarUrl: string | null;
  avatarKey: string | null;
  phone: string | null;
  timezone: string;
  locale: string;
  dateFormat: string;
  timeFormat: string;
  weekStartsOn: number;
  theme: string;
  jobTitle: string | null;
  department: string | null;
  skills: string[];
  linkedinUrl: string | null;
  githubUrl: string | null;
  notificationPrefs: unknown;
  onboardingCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

type PrismaTeamMembership = {
  id: string;
  userId: string;
  teamId: string;
  role: string;
  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

type PrismaUserActivity = {
  id: string;
  userId: string;
  action: string;
  entityId: string | null;
  entityType: string | null;
  metadata: unknown;
  createdAt: Date;
};

function mapToUserProfile(record: PrismaUserProfile): UserProfile {
  return new UserProfile({
    id: record.id,
    userId: record.userId,
    firstName: record.firstName,
    lastName: record.lastName,
    displayName: record.displayName,
    bio: record.bio,
    avatarUrl: record.avatarUrl,
    avatarKey: record.avatarKey,
    phone: record.phone,
    timezone: record.timezone,
    locale: record.locale,
    dateFormat: record.dateFormat,
    timeFormat: record.timeFormat,
    weekStartsOn: record.weekStartsOn,
    theme: record.theme,
    jobTitle: record.jobTitle,
    department: record.department,
    skills: record.skills,
    linkedinUrl: record.linkedinUrl,
    githubUrl: record.githubUrl,
    notificationPrefs: (record.notificationPrefs as Record<string, unknown>) ?? {},
    onboardingCompleted: record.onboardingCompleted,
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
    deletedAt: record.deletedAt ? record.deletedAt.toISOString() : null,
  });
}

function mapToTeamMembership(record: PrismaTeamMembership): TeamMembership {
  return {
    id: record.id,
    userId: record.userId,
    teamId: record.teamId,
    role: record.role,
    joinedAt: record.joinedAt.toISOString(),
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
  };
}

function mapToUserActivity(record: PrismaUserActivity): UserActivity {
  return {
    id: record.id,
    userId: record.userId,
    action: record.action,
    entityId: record.entityId,
    entityType: record.entityType,
    metadata: record.metadata as Record<string, unknown> | null,
    createdAt: record.createdAt.toISOString(),
  };
}

export class PrismaUserProfileRepository
  implements IUserProfileRepository, ITeamMembershipRepository, IUserActivityRepository
{
  constructor(private readonly prisma: PrismaClient) {}

  // IUserProfileRepository

  async findByUserId(userId: string): Promise<UserProfile | null> {
    const record = await this.prisma.userProfile.findFirst({
      where: { userId, deletedAt: null },
    });
    return record ? mapToUserProfile(record as PrismaUserProfile) : null;
  }

  async findById(id: string): Promise<UserProfile | null> {
    const record = await this.prisma.userProfile.findUnique({
      where: { id },
    });
    return record ? mapToUserProfile(record as PrismaUserProfile) : null;
  }

  async create(data: CreateUserProfileData): Promise<UserProfile> {
    const id = uuidv4();
    const record = await this.prisma.userProfile.create({
      data: {
        id,
        userId: data.userId,
        firstName: data.firstName,
        lastName: data.lastName,
        displayName: data.displayName ?? null,
        bio: data.bio ?? null,
        avatarUrl: data.avatarUrl ?? null,
        avatarKey: data.avatarKey ?? null,
        phone: data.phone ?? null,
        timezone: data.timezone ?? 'UTC',
        locale: data.locale ?? 'en',
        dateFormat: data.dateFormat ?? 'YYYY-MM-DD',
        timeFormat: data.timeFormat ?? 'HH:mm',
        weekStartsOn: data.weekStartsOn ?? 0,
        theme: data.theme ?? 'system',
        jobTitle: data.jobTitle ?? null,
        department: data.department ?? null,
        skills: data.skills ?? [],
        linkedinUrl: data.linkedinUrl ?? null,
        githubUrl: data.githubUrl ?? null,
        notificationPrefs: (data.notificationPrefs ?? {}) as Prisma.InputJsonValue,
      },
    });
    return mapToUserProfile(record as PrismaUserProfile);
  }

  async update(userId: string, data: UpdateUserProfileData): Promise<UserProfile> {
    const updateData: Record<string, unknown> = { ...data };

    // Handle notificationPrefs if passed (via type cast in use-cases)
    if ((data as Record<string, unknown>).notificationPrefs !== undefined) {
      updateData.notificationPrefs = (data as Record<string, unknown>).notificationPrefs;
    }

    const record = await this.prisma.userProfile.update({
      where: { userId },
      data: updateData,
    });
    return mapToUserProfile(record as PrismaUserProfile);
  }

  async softDelete(userId: string): Promise<void> {
    await this.prisma.userProfile.update({
      where: { userId },
      data: { deletedAt: new Date() },
    });
  }

  async search(query: string, limit: number, offset: number): Promise<SearchResult> {
    const where = {
      deletedAt: null,
      OR: [
        { firstName: { contains: query, mode: 'insensitive' as const } },
        { lastName: { contains: query, mode: 'insensitive' as const } },
        { displayName: { contains: query, mode: 'insensitive' as const } },
      ],
    };

    const [records, total] = await Promise.all([
      this.prisma.userProfile.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: { firstName: 'asc' },
      }),
      this.prisma.userProfile.count({ where }),
    ]);

    return {
      profiles: records.map((r) => mapToUserProfile(r as PrismaUserProfile)),
      total,
    };
  }

  async findManyByUserIds(userIds: string[]): Promise<UserProfile[]> {
    const records = await this.prisma.userProfile.findMany({
      where: { userId: { in: userIds }, deletedAt: null },
    });
    return records.map((r) => mapToUserProfile(r as PrismaUserProfile));
  }

  // ITeamMembershipRepository

  async findTeamMembershipsByUserId(userId: string): Promise<TeamMembership[]> {
    const records = await this.prisma.teamMembership.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return records.map((r) => mapToTeamMembership(r as PrismaTeamMembership));
  }

  // IUserActivityRepository

  async createActivity(data: CreateActivityData): Promise<UserActivity> {
    const record = await this.prisma.userActivity.create({
      data: {
        id: uuidv4(),
        userId: data.userId,
        action: data.action,
        entityId: data.entityId ?? null,
        entityType: data.entityType ?? null,
        metadata: (data.metadata ?? undefined) as Prisma.InputJsonValue | undefined,
      },
    });
    return mapToUserActivity(record as PrismaUserActivity);
  }

  async findActivitiesByUserId(
    userId: string,
    limit: number,
    offset: number,
  ): Promise<ActivityResult> {
    const where = { userId };
    const [records, total] = await Promise.all([
      this.prisma.userActivity.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.userActivity.count({ where }),
    ]);

    return {
      activities: records.map((r) => mapToUserActivity(r as PrismaUserActivity)),
      total,
    };
  }
}
