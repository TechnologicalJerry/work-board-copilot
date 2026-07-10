import { sha256 } from '@boardpilot/common';
import { logger } from '@boardpilot/logger';
import { getRedisService } from './RedisClient';

const BLACKLIST_KEY = 'token:blacklist';

export class TokenBlacklist {
  async blacklistToken(token: string, expirySeconds: number): Promise<void> {
    try {
      const redis = getRedisService();
      const tokenHash = sha256(token);
      const score = Date.now() + expirySeconds * 1000;

      await redis.getClient().zadd(BLACKLIST_KEY, score, tokenHash);

      // Clean up expired tokens periodically
      const now = Date.now();
      await redis.getClient().zremrangebyscore(BLACKLIST_KEY, '-inf', now);

      logger.debug({ tokenHash }, 'Token blacklisted');
    } catch (error) {
      logger.error({ error }, 'Failed to blacklist token');
      throw error;
    }
  }

  async isBlacklisted(token: string): Promise<boolean> {
    try {
      const redis = getRedisService();
      const tokenHash = sha256(token);
      const now = Date.now();

      // Check if token hash exists with a score greater than now (not yet expired)
      const members = await redis
        .getClient()
        .zrangebyscore(BLACKLIST_KEY, now, '+inf');

      return members.includes(tokenHash);
    } catch (error) {
      logger.error({ error }, 'Failed to check token blacklist');
      // Fail safe: assume not blacklisted to avoid blocking valid requests on Redis failure
      return false;
    }
  }

  async cleanup(): Promise<number> {
    try {
      const redis = getRedisService();
      const now = Date.now();
      const removed = await redis
        .getClient()
        .zremrangebyscore(BLACKLIST_KEY, '-inf', now);
      logger.debug({ removed }, 'Cleaned up expired blacklisted tokens');
      return removed;
    } catch (error) {
      logger.error({ error }, 'Failed to cleanup token blacklist');
      return 0;
    }
  }
}

let _tokenBlacklist: TokenBlacklist | null = null;

export function getTokenBlacklist(): TokenBlacklist {
  if (!_tokenBlacklist) {
    _tokenBlacklist = new TokenBlacklist();
  }
  return _tokenBlacklist;
}
