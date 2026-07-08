import { generateSecureToken, sha256 } from '@boardpilot/common';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getEmailService } from '../../services/EmailService';
import { logger } from '@boardpilot/logger';

export interface ForgotPasswordInput {
  email: string;
}

export interface ForgotPasswordOutput {
  message: string;
}

const SAFE_RESPONSE: ForgotPasswordOutput = {
  message: 'If an account with that email exists, password reset instructions have been sent.',
};

export class ForgotPasswordUseCase {
  async execute(input: ForgotPasswordInput): Promise<ForgotPasswordOutput> {
    const userRepository = getUserRepository();
    const emailService = getEmailService();

    const user = await userRepository.findByEmail(input.email);

    if (!user) {
      // Always return the same message to prevent email enumeration
      return SAFE_RESPONSE;
    }

    const resetToken = generateSecureToken();
    const tokenHash = sha256(resetToken);
    const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await userRepository.update(user.id, {
      passwordResetToken: tokenHash,
      passwordResetExpiry: tokenExpiry,
    });

    emailService
      .sendPasswordResetEmail(user.email, user.firstName, resetToken)
      .catch((err) => {
        logger.error({ err, userId: user.id }, 'Failed to send password reset email');
      });

    return SAFE_RESPONSE;
  }
}
