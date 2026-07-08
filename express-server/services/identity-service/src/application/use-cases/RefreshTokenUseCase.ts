import { generateSecureToken, sha256 } from '@boardpilot/common';
import { TokenInvalidError, TokenExpiredError, UnauthorizedError } from '@boardpilot/errors';
import { TokenPair } from '@boardpilot/types';
import { getJwtService } from '../../services/JwtService';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getSessionRepository } from '../../infrastructure/repositories/PrismaSessionRepository';
import { mapPrismaRoleToJwtRole } from './LoginUseCase';

export interface RefreshTokenInput {
  refreshToken: string;
}

export class RefreshTokenUseCase {
  async execute(input: RefreshTokenInput): Promise<TokenPair> {
    const jwtService = getJwtService();
    const userRepository = getUserRepository();
    const sessionRepository = getSessionRepository();

    // Look up session by token hash (the stored random token, not a JWT)
    const tokenHash = sha256(input.refreshToken);
    const session = await sessionRepository.findByTokenHash(tokenHash);

    if (!session || session.revokedAt) {
      throw new TokenInvalidError();
    }

    if (session.expiresAt < new Date()) {
      throw new TokenExpiredError();
    }

    // Validate user is still active
    const user = await userRepository.findById(session.userId);
    if (!user) {
      throw new TokenInvalidError();
    }

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedError('Account is no longer active');
    }

    // Rotate: revoke old session and create a new one
    await sessionRepository.revoke(session.id);

    const newRefreshToken = generateSecureToken();
    const newTokenHash = sha256(newRefreshToken);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const newSession = await sessionRepository.create({
      userId: user.id,
      refreshToken: newRefreshToken,
      tokenHash: newTokenHash,
      userAgent: session.userAgent ?? undefined,
      ip: session.ip ?? undefined,
      expiresAt,
    });

    const mappedRole = mapPrismaRoleToJwtRole(user.role);
    const tokenPair = jwtService.generateTokenPair(user.id, user.email, mappedRole, newSession.id);

    // Return with the new opaque refresh token (not a JWT)
    return {
      ...tokenPair,
      refreshToken: newRefreshToken,
    };
  }
}
