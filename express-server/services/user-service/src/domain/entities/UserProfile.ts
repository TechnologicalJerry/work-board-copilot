import { UUID, ISODateString } from '@boardpilot/types';

export interface NotificationPreferences {
  email?: {
    taskAssigned?: boolean;
    taskDueSoon?: boolean;
    sprintStarted?: boolean;
    mentions?: boolean;
    digest?: 'daily' | 'weekly' | 'none';
  };
  inApp?: {
    taskAssigned?: boolean;
    comments?: boolean;
    mentions?: boolean;
  };
  push?: {
    enabled?: boolean;
    taskDueSoon?: boolean;
    mentions?: boolean;
  };
}

export interface UserProfileProps {
  id: UUID;
  userId: UUID;
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
  notificationPrefs: NotificationPreferences;
  onboardingCompleted: boolean;
  createdAt: ISODateString;
  updatedAt: ISODateString;
  deletedAt: ISODateString | null;
}

export interface CreateUserProfileData {
  userId: UUID;
  firstName: string;
  lastName: string;
  displayName?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  avatarKey?: string | null;
  phone?: string | null;
  timezone?: string;
  locale?: string;
  dateFormat?: string;
  timeFormat?: string;
  weekStartsOn?: number;
  theme?: string;
  jobTitle?: string | null;
  department?: string | null;
  skills?: string[];
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  notificationPrefs?: NotificationPreferences;
}

export interface UpdateUserProfileData {
  firstName?: string;
  lastName?: string;
  displayName?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
  avatarKey?: string | null;
  phone?: string | null;
  timezone?: string;
  locale?: string;
  dateFormat?: string;
  timeFormat?: string;
  weekStartsOn?: number;
  theme?: string;
  jobTitle?: string | null;
  department?: string | null;
  skills?: string[];
  linkedinUrl?: string | null;
  githubUrl?: string | null;
  onboardingCompleted?: boolean;
}

export interface PublicUserProfile {
  id: UUID;
  userId: UUID;
  firstName: string;
  lastName: string;
  displayName: string | null;
  bio: string | null;
  avatarUrl: string | null;
  jobTitle: string | null;
  department: string | null;
  skills: string[];
  linkedinUrl: string | null;
  githubUrl: string | null;
  timezone: string;
}

export class UserProfile {
  public readonly id: UUID;
  public readonly userId: UUID;
  public firstName: string;
  public lastName: string;
  public displayName: string | null;
  public bio: string | null;
  public avatarUrl: string | null;
  public avatarKey: string | null;
  public phone: string | null;
  public timezone: string;
  public locale: string;
  public dateFormat: string;
  public timeFormat: string;
  public weekStartsOn: number;
  public theme: string;
  public jobTitle: string | null;
  public department: string | null;
  public skills: string[];
  public linkedinUrl: string | null;
  public githubUrl: string | null;
  public notificationPrefs: NotificationPreferences;
  public onboardingCompleted: boolean;
  public readonly createdAt: ISODateString;
  public readonly updatedAt: ISODateString;
  public readonly deletedAt: ISODateString | null;

  constructor(props: UserProfileProps) {
    this.id = props.id;
    this.userId = props.userId;
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.displayName = props.displayName;
    this.bio = props.bio;
    this.avatarUrl = props.avatarUrl;
    this.avatarKey = props.avatarKey;
    this.phone = props.phone;
    this.timezone = props.timezone;
    this.locale = props.locale;
    this.dateFormat = props.dateFormat;
    this.timeFormat = props.timeFormat;
    this.weekStartsOn = props.weekStartsOn;
    this.theme = props.theme;
    this.jobTitle = props.jobTitle;
    this.department = props.department;
    this.skills = props.skills;
    this.linkedinUrl = props.linkedinUrl;
    this.githubUrl = props.githubUrl;
    this.notificationPrefs = props.notificationPrefs;
    this.onboardingCompleted = props.onboardingCompleted;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get effectiveDisplayName(): string {
    return this.displayName ?? this.fullName;
  }

  static create(data: CreateUserProfileData & { id: UUID; createdAt: ISODateString; updatedAt: ISODateString }): UserProfile {
    return new UserProfile({
      id: data.id,
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
      notificationPrefs: data.notificationPrefs ?? {},
      onboardingCompleted: false,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: null,
    });
  }

  toPublicProfile(): PublicUserProfile {
    return {
      id: this.id,
      userId: this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      displayName: this.displayName,
      bio: this.bio,
      avatarUrl: this.avatarUrl,
      jobTitle: this.jobTitle,
      department: this.department,
      skills: this.skills,
      linkedinUrl: this.linkedinUrl,
      githubUrl: this.githubUrl,
      timezone: this.timezone,
    };
  }

  toJSON(): UserProfileProps {
    return {
      id: this.id,
      userId: this.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      displayName: this.displayName,
      bio: this.bio,
      avatarUrl: this.avatarUrl,
      avatarKey: this.avatarKey,
      phone: this.phone,
      timezone: this.timezone,
      locale: this.locale,
      dateFormat: this.dateFormat,
      timeFormat: this.timeFormat,
      weekStartsOn: this.weekStartsOn,
      theme: this.theme,
      jobTitle: this.jobTitle,
      department: this.department,
      skills: this.skills,
      linkedinUrl: this.linkedinUrl,
      githubUrl: this.githubUrl,
      notificationPrefs: this.notificationPrefs,
      onboardingCompleted: this.onboardingCompleted,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
