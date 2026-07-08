import { hashPassword, generateSecureToken, sha256 } from '@boardpilot/common';
import { ConflictError } from '@boardpilot/errors';
import { User } from '../../generated/prisma-client';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getEmailService } from '../../services/EmailService';

export interface RegisterInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organizationName?: string;
}

export interface RegisterOutput {
  user: Omit<User, 'passwordHash' | 'mfaSecret' | 'mfaBackupCodes'>;
  message: string;
}

export class RegisterUseCase {
  async execute(input: RegisterInput): Promise<RegisterOutput> {
    const userRepository = getUserRepository();
    const emailService = getEmailService();

    const existing = await userRepository.findByEmail(input.email);
    if (existing) {
      throw new ConflictError('An account with this email already exists');
    }

    const passwordHash = await hashPassword(input.password);
    const verificationToken = generateSecureToken();
    const tokenHash = sha256(verificationToken);
    const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const user = await userRepository.create({
      email: input.email,
      passwordHash,
      firstName: input.firstName,
      lastName: input.lastName,
      emailVerifyToken: tokenHash,
      emailVerifyExpiry: tokenExpiry,
      emailVerified: false,
      status: 'PENDING',
    });

    await emailService.sendVerificationEmail(user.email, user.firstName, verificationToken);

    const { passwordHash: _, mfaSecret: __, mfaBackupCodes: ___, ...safeUser } = user;

    return {
      user: safeUser,
      message: 'Registration successful. Please check your email to verify your account.',
    };
  }
}
