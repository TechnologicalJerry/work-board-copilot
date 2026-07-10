import jwt from 'jsonwebtoken';
import { JwtPayload, TokenPair } from '@boardpilot/types';
import { TokenInvalidError } from '@boardpilot/errors';
import { getConfig } from '../config';

export class JwtService {
  generateAccessToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
    const config = getConfig();
    return jwt.sign(payload, config.JWT_ACCESS_SECRET, {
      expiresIn: '15m',
    });
  }

  generateRefreshToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
    const config = getConfig();
    return jwt.sign(payload, config.JWT_REFRESH_SECRET, {
      expiresIn: '7d',
    });
  }

  verifyAccessToken(token: string): JwtPayload {
    const config = getConfig();
    try {
      return jwt.verify(token, config.JWT_ACCESS_SECRET) as JwtPayload;
    } catch {
      throw new TokenInvalidError();
    }
  }

  verifyRefreshToken(token: string): JwtPayload {
    const config = getConfig();
    try {
      return jwt.verify(token, config.JWT_REFRESH_SECRET) as JwtPayload;
    } catch {
      throw new TokenInvalidError();
    }
  }

  /**
   * Generates an access token JWT and a placeholder TokenPair.
   * Note: The actual refresh token stored in cookies and DB is an opaque
   * random token (generateSecureToken()), not a JWT. Callers should replace
   * tokenPair.refreshToken with the opaque token before returning to clients.
   */
  generateTokenPair(
    userId: string,
    email: string,
    role: JwtPayload['role'],
    sessionId: string,
    organizationId?: string,
  ): TokenPair {
    const basePayload: Omit<JwtPayload, 'iat' | 'exp'> = {
      sub: userId,
      email,
      role,
      organizationId,
      permissions: [],
      sessionId,
      type: 'access',
    };

    const accessToken = this.generateAccessToken(basePayload);

    // The refresh token in this pair is a JWT but will be replaced by the
    // opaque token generated in the use-case before being sent to the client.
    const refreshToken = this.generateRefreshToken({ ...basePayload, type: 'refresh' });

    return {
      accessToken,
      refreshToken,
      expiresIn: 900, // 15 minutes in seconds
      tokenType: 'Bearer',
    };
  }
}

let _jwtService: JwtService | null = null;

export function getJwtService(): JwtService {
  if (!_jwtService) {
    _jwtService = new JwtService();
  }
  return _jwtService;
}
