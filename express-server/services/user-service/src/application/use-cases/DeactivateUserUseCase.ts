import type { IUserProfileRepository } from '../../domain/repositories/IUserProfileRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface DeactivateUserInput {
  userId: string;
  requesterId: string;
  requesterRole: string;
}

const ALLOWED_ROLES = ['super_admin', 'org_admin'];

export class DeactivateUserUseCase {
  constructor(private readonly userProfileRepository: IUserProfileRepository) {}

  async execute(input: DeactivateUserInput): Promise<void> {
    const { userId, requesterId, requesterRole } = input;

    if (!ALLOWED_ROLES.includes(requesterRole)) {
      throw new ForbiddenError('Only SUPER_ADMIN or ORG_ADMIN can deactivate users');
    }

    if (userId === requesterId) {
      throw new ForbiddenError('You cannot deactivate your own account');
    }

    const target = await this.userProfileRepository.findById(userId);
    if (!target) {
      throw new NotFoundError('UserProfile', userId);
    }

    await this.userProfileRepository.softDelete(target.userId);
  }
}
