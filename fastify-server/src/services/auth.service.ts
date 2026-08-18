import { FastifyInstance } from 'fastify';
import { prisma } from '../db/prisma';
import { RegisterInput, LoginInput, ForgotPasswordInput, ResetPasswordInput } from '../schemas/auth.schema';
import { hashPassword, comparePassword, generateSecureToken, sha256 } from '../utils/crypto';
import { User, UserRole, UserStatus } from '@prisma/client';
import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from '../errors/http-error';

export type SafeUser = Omit<User, 'passwordHash' | 'mfaSecret' | 'mfaBackupCodes'>;

export function sanitizeUser(user: User): SafeUser {
  const { passwordHash, mfaSecret, mfaBackupCodes, ...safeUser } = user;
  return safeUser;
}

export class AuthService {
  async register(input: RegisterInput): Promise<{ user: SafeUser; message: string }> {
    const existing = await prisma.user.findUnique({
      where: { email: input.email },
    });

    if (existing) {
      throw new ConflictError('An account with this email address already exists');
    }

    const hashedPassword = await hashPassword(input.password);

    const user = await prisma.user.create({
      data: {
        email: input.email,
        passwordHash: hashedPassword,
        firstName: input.firstName,
        lastName: input.lastName,
        role: UserRole.TEAM_MEMBER,
        status: UserStatus.ACTIVE,
        emailVerified: true,
      },
    });

    return {
      user: sanitizeUser(user),
      message: 'User registered successfully',
    };
  }

  async login(
    input: LoginInput,
    fastify: FastifyInstance,
    userAgent?: string,
    ipAddress?: string
  ): Promise<{ accessToken: string; refreshToken: string; user: SafeUser }> {
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedError('Invalid email or password');
    }

    if (user.status === UserStatus.SUSPENDED || user.status === UserStatus.DEACTIVATED) {
      throw new ForbiddenError('Your account has been suspended or deactivated');
    }

    const isPasswordValid = await comparePassword(input.password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const rawRefreshToken = generateSecureToken();
    const tokenHash = sha256(rawRefreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const session = await prisma.session.create({
      data: {
        userId: user.id,
        refreshToken: rawRefreshToken,
        tokenHash,
        userAgent,
        ip: ipAddress,
        expiresAt,
      },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLoginAt: new Date(),
        lastLoginIp: ipAddress,
      },
    });

    const accessToken = fastify.jwt.sign({
      userId: user.id,
      email: user.email,
      role: user.role,
      sessionId: session.id,
    });

    return {
      accessToken,
      refreshToken: rawRefreshToken,
      user: sanitizeUser(user),
    };
  }

  async refresh(
    refreshToken: string,
    fastify: FastifyInstance
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const tokenHash = sha256(refreshToken);

    const session = await prisma.session.findFirst({
      where: {
        tokenHash,
        revokedAt: null,
      },
      include: {
        user: true,
      },
    });

    if (!session || session.expiresAt < new Date()) {
      throw new UnauthorizedError('Invalid or expired refresh token');
    }

    if (session.user.status === UserStatus.SUSPENDED || session.user.status === UserStatus.DEACTIVATED) {
      throw new ForbiddenError('Account suspended');
    }

    // Token Rotation
    const newRefreshToken = generateSecureToken();
    const newTokenHash = sha256(newRefreshToken);
    const newExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await prisma.session.update({
      where: { id: session.id },
      data: {
        refreshToken: newRefreshToken,
        tokenHash: newTokenHash,
        expiresAt: newExpiresAt,
      },
    });

    const accessToken = fastify.jwt.sign({
      userId: session.user.id,
      email: session.user.email,
      role: session.user.role,
      sessionId: session.id,
    });

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }

  async logout(sessionId?: string, refreshToken?: string): Promise<void> {
    if (sessionId) {
      await prisma.session.updateMany({
        where: { id: sessionId },
        data: { revokedAt: new Date() },
      });
    } else if (refreshToken) {
      const tokenHash = sha256(refreshToken);
      await prisma.session.updateMany({
        where: { tokenHash },
        data: { revokedAt: new Date() },
      });
    }
  }

  async getCurrentUser(userId: string): Promise<SafeUser> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundError('User not found');
    }

    return sanitizeUser(user);
  }

  async forgotPassword(input: ForgotPasswordInput): Promise<{ message: string }> {
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    });

    if (user) {
      const resetToken = generateSecureToken();
      const tokenHash = sha256(resetToken);
      const tokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      await prisma.user.update({
        where: { id: user.id },
        data: {
          passwordResetToken: tokenHash,
          passwordResetExpiry: tokenExpiry,
        },
      });

      // In production, an email service would send `resetToken` to the user's email
    }

    return {
      message: 'If an account with that email exists, a password reset link has been sent.',
    };
  }

  async resetPassword(input: ResetPasswordInput): Promise<{ message: string }> {
    const tokenHash = sha256(input.token);

    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: tokenHash,
        passwordResetExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new BadRequestError('Invalid or expired password reset token');
    }

    const newPasswordHash = await hashPassword(input.newPassword);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash: newPasswordHash,
        passwordResetToken: null,
        passwordResetExpiry: null,
      },
    });

    // Revoke all existing sessions for safety
    await prisma.session.updateMany({
      where: { userId: user.id, revokedAt: null },
      data: { revokedAt: new Date() },
    });

    return { message: 'Password has been successfully reset. Please log in with your new password.' };
  }
}
