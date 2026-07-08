import { sha256 } from '@boardpilot/common';
import { getSessionRepository } from '../../infrastructure/repositories/PrismaSessionRepository';
import { getTokenBlacklist } from '../../infrastructure/cache/TokenBlacklist';

export interface LogoutInput {
  refreshToken: string;
  accessToken?: string;
}

export interface LogoutOutput {
  message: string;
}

export class LogoutUseCase {
  async execute(input: LogoutInput): Promise<LogoutOutput> {
    const sessionRepository = getSessionRepository();
    const tokenBlacklist = getTokenBlacklist();

    const tokenHash = sha256(input.refreshToken);
    const session = await sessionRepository.findByTokenHash(tokenHash);

    if (!session || session.revokedAt) {
      // Session already revoked or not found — still clear the access token if provided
      if (input.accessToken) {
        await tokenBlacklist.blacklistToken(input.accessToken, 15 * 60); // 15 min
      }
      return { message: 'Logged out successfully' };
    }

    await sessionRepository.revoke(session.id);

    if (input.accessToken) {
      // Blacklist the access token for its remaining TTL (15 minutes max)
      await tokenBlacklist.blacklistToken(input.accessToken, 15 * 60);
    }

    return { message: 'Logged out successfully' };
  }
}
