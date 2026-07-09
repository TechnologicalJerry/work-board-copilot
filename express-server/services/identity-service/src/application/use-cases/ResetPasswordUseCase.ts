import { hashPassword, comparePassword, sha256 } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getSessionRepository } from '../../infrastructure/repositories/PrismaSessionRepository';

export interface ResetPasswordInput {
  token: string;
  password: string;
}

export interface ResetPasswordOutput {
  message: string;
}

export class ResetPasswordUseCase {
  async execute(input: ResetPasswordInput): Promise<ResetPasswordOutput> {
    const userRepository = getUserRepository();
    const sessionRepository = getSessionRepository();

    const tokenHash = sha256(input.token);
    const user = await userRepository.findByPasswordResetToken(tokenHash);

    if (!user) {
      throw new BadRequestError('Invalid or expired password reset token');
    }

    if (!user.passwordResetExpiry || user.passwordResetExpiry < new Date()) {
      throw new BadRequestError('Password reset token has expired. Please request a new one.');
    }

    // Prevent reusing the current password
    if (user.passwordHash) {
      const samePassword = await comparePassword(input.password, user.passwordHash);
      if (samePassword) {
        throw new BadRequestError('New password must be different from your current password');
      }
    }

    const newPasswordHash = await hashPassword(input.password);

    await userRepository.updatePassword(user.id, newPasswordHash);

    // Clear reset token fields
    await userRepository.update(user.id, {
      passwordResetToken: null,
      passwordResetExpiry: null,
    });

    // Revoke all sessions to force re-login everywhere
    await sessionRepository.revokeAll(user.id);

    return { message: 'Password reset successfully. Please log in with your new password.' };
  }
}
