import { UserProfile, CreateUserProfileData, UpdateUserProfileData } from '../entities/UserProfile';

export interface TeamMembership {
  id: string;
  userId: string;
  teamId: string;
  role: string;
  joinedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserActivity {
  id: string;
  userId: string;
  action: string;
  entityId: string | null;
  entityType: string | null;
  metadata: Record<string, unknown> | null;
  createdAt: string;
}

export interface CreateActivityData {
  userId: string;
  action: string;
  entityId?: string | null;
  entityType?: string | null;
  metadata?: Record<string, unknown> | null;
}

export interface SearchResult {
  profiles: UserProfile[];
  total: number;
}

export interface ActivityResult {
  activities: UserActivity[];
  total: number;
}

export interface IUserProfileRepository {
  findByUserId(userId: string): Promise<UserProfile | null>;
  findById(id: string): Promise<UserProfile | null>;
  create(data: CreateUserProfileData): Promise<UserProfile>;
  update(userId: string, data: UpdateUserProfileData): Promise<UserProfile>;
  softDelete(userId: string): Promise<void>;
  search(query: string, limit: number, offset: number): Promise<SearchResult>;
  findManyByUserIds(userIds: string[]): Promise<UserProfile[]>;
}

export interface ITeamMembershipRepository {
  findTeamMembershipsByUserId(userId: string): Promise<TeamMembership[]>;
}

export interface IUserActivityRepository {
  createActivity(data: CreateActivityData): Promise<UserActivity>;
  findActivitiesByUserId(userId: string, limit: number, offset: number): Promise<ActivityResult>;
}
