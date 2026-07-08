import jwt from 'jsonwebtoken';
import speakeasy from 'speakeasy';
import { comparePassword, generateSecureToken, sha256 } from '@boardpilot/common';
import { UnauthorizedError } from '@boardpilot/errors';
import { User } from '../../generated/prisma-client';
import { TokenPair, JwtPayload } from '@boardpilot/types';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getSessionRepository } from '../../infrastructure/repositories/PrismaSessionRepository';
import { getJwtService } from '../../services/JwtService';
import { getConfig } from '../../config';
import { prisma } from '../../infrastructure/database/prisma';

export interface LoginInput {
  email: string;
  password: string;
  mfaCode?: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface LoginOutput {
  requiresMfa?: boolean;
  tempToken?: string;
  tokenPair?: TokenPair;
  user?: Omit<User, 'passwordHash' | 'mfaSecret' | 'mfaBackupCodes'>;
}

export function mapPrismaRoleToJwtRole(role: string): JwtPayload['role'] {
  const map: Record<string, JwtPayload['role']> = {
    SUPER_ADMIN: 'super_admin',
    ORG_ADMIN: 'org_admin',
    PROJECT_MANAGER: 'project_manager',
    TEAM_LEAD: 'team_lead',
    TEAM_MEMBER: 'team_member',
    VIEWER: 'viewer',
    GUEST: 'guest',
  };
  return map[role] ?? 'team_member';
}

export class LoginUseCase {
  async execute(input: LoginInput): Promise<LoginOutput> {
    const userRepository = getUserRepository();
    const sessionRepository = getSessionRepository();
    const jwtService = getJwtService();
    const config = getConfig();

    // Use generic error to prevent email enumeration
    const authError = new UnauthorizedError('Invalid email or password');

    const user = await userRepository.findByEmail(input.email);
    if (!user) {
      throw authError;
    }

    if (user.status === 'SUSPENDED' || user.status === 'DEACTIVATED') {
      throw new UnauthorizedError('Your account has been suspended or deactivated');
    }

    if (user.status === 'PENDING') {
      throw new UnauthorizedError('Please verify your email before logging in');
    }

    if (!user.passwordHash) {
      throw new UnauthorizedError(
        'This account uses OAuth login. Please sign in with your provider.'
      );
    }

    const passwordValid = await comparePassword(input.password, user.passwordHash);
    if (!passwordValid) {
      throw authError;
    }

    // MFA check
    if (user.mfaEnabled && user.mfaSecret) {
      if (!input.mfaCode) {
        // Return a short-lived temp token so the client can submit the MFA code
        const tempToken = jwt.sign(
          { userId: user.id, step: 'mfa' },
          config.JWT_ACCESS_SECRET,
          { expiresIn: '5m' }
        );
        return { requiresMfa: true, tempToken };
      }

      // Try TOTP first
      const totpValid = speakeasy.totp.verify({
        secret: user.mfaSecret,
        encoding: 'base32',
        token: input.mfaCode,
        window: 1,
      });

      if (!totpValid) {
        // Try backup codes (stored as sha256 hashes)
        const codeHash = sha256(input.mfaCode);
        const backupIndex = user.mfaBackupCodes.indexOf(codeHash);
        if (backupIndex === -1) {
          throw new UnauthorizedError('Invalid MFA code');
        }

        // Consume the backup code — remove it
        const updatedCodes = [...user.mfaBackupCodes];
        updatedCodes.splice(backupIndex, 1);
        await prisma.user.update({
          where: { id: user.id },
          data: { mfaBackupCodes: updatedCodes },
        });
      }
    }

    // Create session
    const refreshToken = generateSecureToken();
    const tokenHash = sha256(refreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const session = await sessionRepository.create({
      userId: user.id,
      refreshToken,
      tokenHash,
      userAgent: input.userAgent,
      ip: input.ipAddress,
      expiresAt,
    });

    // Update last login metadata
    await userRepository.update(user.id, {
      lastLoginAt: new Date(),
      lastLoginIp: input.ipAddress,
    });

    const mappedRole = mapPrismaRoleToJwtRole(user.role);
    const tokenPair = jwtService.generateTokenPair(user.id, user.email, mappedRole, session.id);

    // Inject the actual refresh token (generateTokenPair creates a JWT refresh token,
    // but we store a random token in DB and use that for the cookie)
    const finalTokenPair: TokenPair = {
      ...tokenPair,
      refreshToken,
    };

    const { passwordHash: _, mfaSecret: __, mfaBackupCodes: ___, ...safeUser } = user;

    return {
      tokenPair: finalTokenPair,
      user: safeUser,
    };
  }
}
