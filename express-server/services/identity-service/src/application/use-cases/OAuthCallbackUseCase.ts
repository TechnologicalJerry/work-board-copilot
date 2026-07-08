import { generateSecureToken, sha256 } from '@boardpilot/common';
import { TokenPair, OAuthProvider } from '@boardpilot/types';
import { User } from '../../generated/prisma-client';
import { prisma } from '../../infrastructure/database/prisma';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getSessionRepository } from '../../infrastructure/repositories/PrismaSessionRepository';
import { getJwtService } from '../../services/JwtService';
import { mapPrismaRoleToJwtRole } from './LoginUseCase';

export interface OAuthCallbackInput {
  provider: OAuthProvider;
  providerId: string;
  email: string;
  name: string;
  avatarUrl?: string;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
  userAgent?: string;
  ipAddress?: string;
}

export interface OAuthCallbackOutput {
  tokenPair: TokenPair;
  user: Omit<User, 'passwordHash' | 'mfaSecret' | 'mfaBackupCodes'>;
  isNewUser: boolean;
}

export class OAuthCallbackUseCase {
  async execute(input: OAuthCallbackInput): Promise<OAuthCallbackOutput> {
    const userRepository = getUserRepository();
    const sessionRepository = getSessionRepository();
    const jwtService = getJwtService();

    let user: User | null = null;
    let isNewUser = false;

    // 1. Try to find by OAuth provider record
    user = await userRepository.findByOAuthProvider(input.provider, input.providerId);

    // 2. If not found by OAuth, try to find by email (link accounts)
    if (!user && input.email) {
      user = await userRepository.findByEmail(input.email);
    }

    // 3. If no user exists, create one
    if (!user) {
      isNewUser = true;
      const nameParts = input.name.trim().split(/\s+/);
      const firstName = nameParts[0] || 'User';
      const lastName = nameParts.slice(1).join(' ') || firstName;

      user = await userRepository.create({
        email: input.email,
        firstName,
        lastName,
        emailVerified: true,
        status: 'ACTIVE',
      });
    }

    // 4. Upsert OAuth provider record
    await prisma.oAuthProvider.upsert({
      where: {
        provider_providerId: {
          provider: input.provider,
          providerId: input.providerId,
        },
      },
      create: {
        userId: user.id,
        provider: input.provider,
        providerId: input.providerId,
        accessToken: input.accessToken,
        refreshToken: input.refreshToken,
        expiresAt: input.tokenExpiresAt,
      },
      update: {
        accessToken: input.accessToken,
        refreshToken: input.refreshToken,
        expiresAt: input.tokenExpiresAt,
      },
    });

    // 5. Ensure user is active (activate PENDING users who verified via OAuth)
    if (user.status === 'PENDING') {
      await userRepository.update(user.id, { status: 'ACTIVE' });
      user = { ...user, status: 'ACTIVE', emailVerified: true };
    }

    // 6. Create session
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

    // Update last login
    await userRepository.update(user.id, {
      lastLoginAt: new Date(),
      lastLoginIp: input.ipAddress,
    });

    const mappedRole = mapPrismaRoleToJwtRole(user.role);
    const tokenPair = jwtService.generateTokenPair(user.id, user.email, mappedRole, session.id);

    const { passwordHash: _, mfaSecret: __, mfaBackupCodes: ___, ...safeUser } = user;

    return {
      tokenPair: { ...tokenPair, refreshToken },
      user: safeUser,
      isNewUser,
    };
  }
}
