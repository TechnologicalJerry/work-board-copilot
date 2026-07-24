import { UserProfile, UpdateUserProfileData } from '../../domain/entities/UserProfile';
import type { IUserProfileRepository } from '../../domain/repositories/IUserProfileRepository';
import { UserEventPublisher } from '../../infrastructure/events/UserEventPublisher';
import { NotFoundError } from '@boardpilot/errors';

export interface UpdateProfileInput {
  userId: string;
  firstName?: string;
  lastName?: string;
  displayName?: string | null;
  bio?: string | null;
  avatarUrl?: string | null;
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
}

export class UpdateProfileUseCase {
  constructor(
    private readonly userProfileRepository: IUserProfileRepository,
    private readonly eventPublisher: UserEventPublisher
  ) {}

  async execute(input: UpdateProfileInput): Promise<UserProfile> {
    const { userId, ...updateData } = input;

    const existing = await this.userProfileRepository.findByUserId(userId);
    if (!existing) {
      throw new NotFoundError('UserProfile', userId);
    }

    const data: UpdateUserProfileData = {};
    if (updateData.firstName !== undefined) data.firstName = updateData.firstName;
    if (updateData.lastName !== undefined) data.lastName = updateData.lastName;
    if (updateData.displayName !== undefined) data.displayName = updateData.displayName;
    if (updateData.bio !== undefined) data.bio = updateData.bio;
    if (updateData.avatarUrl !== undefined) data.avatarUrl = updateData.avatarUrl;
    if (updateData.phone !== undefined) data.phone = updateData.phone;
    if (updateData.timezone !== undefined) data.timezone = updateData.timezone;
    if (updateData.locale !== undefined) data.locale = updateData.locale;
    if (updateData.dateFormat !== undefined) data.dateFormat = updateData.dateFormat;
    if (updateData.timeFormat !== undefined) data.timeFormat = updateData.timeFormat;
    if (updateData.weekStartsOn !== undefined) data.weekStartsOn = updateData.weekStartsOn;
    if (updateData.theme !== undefined) data.theme = updateData.theme;
    if (updateData.jobTitle !== undefined) data.jobTitle = updateData.jobTitle;
    if (updateData.department !== undefined) data.department = updateData.department;
    if (updateData.skills !== undefined) data.skills = updateData.skills;
    if (updateData.linkedinUrl !== undefined) data.linkedinUrl = updateData.linkedinUrl;
    if (updateData.githubUrl !== undefined) data.githubUrl = updateData.githubUrl;

    const updated = await this.userProfileRepository.update(userId, data);

    await this.eventPublisher.publishProfileUpdated(userId, {
      fields: Object.keys(data),
    });

    return updated;
  }
}
