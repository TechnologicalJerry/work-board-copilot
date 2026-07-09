import { sha256 } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getEmailService } from '../../services/EmailService';

export interface VerifyEmailInput {
  token: string;
}

export interface VerifyEmailOutput {
  message: string;
}

export class VerifyEmailUseCase {
  async execute(input: VerifyEmailInput): Promise<VerifyEmailOutput> {
    const userRepository = getUserRepository();
    const emailService = getEmailService();

    const tokenHash = sha256(input.token);
    const user = await userRepository.findByEmailVerifyToken(tokenHash);

    if (!user) {
      throw new BadRequestError('Invalid or expired verification token');
    }

    if (user.emailVerified) {
      return { message: 'Email is already verified' };
    }

    if (!user.emailVerifyExpiry || user.emailVerifyExpiry < new Date()) {
      throw new BadRequestError('Verification token has expired. Please request a new one.');
    }

    await userRepository.setEmailVerified(user.id);

    // Fire and forget welcome email
    emailService.sendWelcomeEmail(user.email, user.firstName).catch(() => {
      // Non-critical, swallow error
    });

    return { message: 'Email verified successfully. You can now log in.' };
  }
}
