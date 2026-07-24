import { UserProfile } from '../../domain/entities/UserProfile';
import type { IUserProfileRepository } from '../../domain/repositories/IUserProfileRepository';
import { NotFoundError } from '@boardpilot/errors';

export interface UpdateAvatarInput {
  userId: string;
  avatarUrl: string;
}

export class UpdateAvatarUseCase {
  constructor(private readonly userProfileRepository: IUserProfileRepository) {}

  async execute(input: UpdateAvatarInput): Promise<UserProfile> {
    const { userId, avatarUrl } = input;

    const existing = await this.userProfileRepository.findByUserId(userId);
    if (!existing) {
      throw new NotFoundError('UserProfile', userId);
    }

    return this.userProfileRepository.update(userId, { avatarUrl });
  }
}
