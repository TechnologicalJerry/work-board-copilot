import { UserProfile } from '../../domain/entities/UserProfile';
import type { IUserProfileRepository } from '../../domain/repositories/IUserProfileRepository';

export class GetMyProfileUseCase {
  constructor(private readonly userProfileRepository: IUserProfileRepository) {}

  async execute(userId: string): Promise<UserProfile> {
    const existing = await this.userProfileRepository.findByUserId(userId);

    if (existing) {
      return existing;
    }

    // Auto-create a default profile on first access
    const profile = await this.userProfileRepository.create({
      userId,
      firstName: 'User',
      lastName: userId.substring(0, 8),
    });

    return profile;
  }
}
