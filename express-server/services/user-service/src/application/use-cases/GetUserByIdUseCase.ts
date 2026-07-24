import { PublicUserProfile } from '../../domain/entities/UserProfile';
import type { IUserProfileRepository } from '../../domain/repositories/IUserProfileRepository';
import { NotFoundError } from '@boardpilot/errors';

export class GetUserByIdUseCase {
  constructor(private readonly userProfileRepository: IUserProfileRepository) {}

  async execute(profileId: string): Promise<PublicUserProfile> {
    const profile = await this.userProfileRepository.findById(profileId);
    if (!profile) {
      throw new NotFoundError('UserProfile', profileId);
    }
    return profile.toPublicProfile();
  }
}
