import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { successResponse } from '@boardpilot/common';
import { BadRequestError, UnauthorizedError } from '@boardpilot/errors';
import { logger } from '@boardpilot/logger';
import { OAuthCallbackUseCase } from '../../application/use-cases/OAuthCallbackUseCase';
import { getConfig } from '../../config';

const REFRESH_COOKIE_NAME = 'refreshToken';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: '/',
};

// --- Google OAuth ---

const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
const GOOGLE_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';

// --- GitHub OAuth ---

const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USERINFO_URL = 'https://api.github.com/user';
const GITHUB_EMAILS_URL = 'https://api.github.com/user/emails';

function buildGoogleAuthUrl(redirectUri: string, state: string): string {
  const params = new URLSearchParams({
    client_id: getConfig().GOOGLE_CLIENT_ID ?? '',
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent',
    state,
  });
  return `${GOOGLE_AUTH_URL}?${params.toString()}`;
}

function buildGithubAuthUrl(redirectUri: string, state: string): string {
  const params = new URLSearchParams({
    client_id: getConfig().GITHUB_CLIENT_ID ?? '',
    redirect_uri: redirectUri,
    scope: 'read:user user:email',
    state,
  });
  return `${GITHUB_AUTH_URL}?${params.toString()}`;
}

function generateState(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export class OAuthController {
  initiateGoogle(_req: Request, res: Response): void {
    const config = getConfig();
    if (!config.GOOGLE_CLIENT_ID || !config.GOOGLE_CLIENT_SECRET) {
      res.status(503).json({ success: false, message: 'Google OAuth is not configured' });
      return;
    }

    const redirectUri = `${config.FRONTEND_URL}/api/v1/oauth/google/callback`;
    const state = generateState();

    // Store state in a short-lived cookie for CSRF protection
    res.cookie('oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 10 * 60 * 1000, // 10 minutes
    });

    res.redirect(buildGoogleAuthUrl(redirectUri, state));
  }

  async googleCallback(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const config = getConfig();
      const { code, state, error } = req.query as Record<string, string>;

      if (error) {
        throw new UnauthorizedError(`Google OAuth error: ${error}`);
      }

      if (!code) {
        throw new BadRequestError('Authorization code is required');
      }

      // CSRF state check
      const storedState = req.cookies?.oauth_state;
      if (state && storedState && state !== storedState) {
        throw new UnauthorizedError('Invalid OAuth state parameter');
      }
      res.clearCookie('oauth_state');

      const redirectUri = `${config.FRONTEND_URL}/api/v1/oauth/google/callback`;

      // Exchange code for tokens
      const tokenResponse = await axios.post<{
        access_token: string;
        refresh_token?: string;
        expires_in: number;
        id_token: string;
      }>(
        GOOGLE_TOKEN_URL,
        new URLSearchParams({
          code,
          client_id: config.GOOGLE_CLIENT_ID ?? '',
          client_secret: config.GOOGLE_CLIENT_SECRET ?? '',
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        }).toString(),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      const { access_token, refresh_token, expires_in } = tokenResponse.data;

      // Get user profile
      const profileResponse = await axios.get<{
        sub: string;
        email: string;
        name: string;
        picture?: string;
        email_verified?: boolean;
      }>(GOOGLE_USERINFO_URL, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const profile = profileResponse.data;

      const useCase = new OAuthCallbackUseCase();
      const result = await useCase.execute({
        provider: 'google',
        providerId: profile.sub,
        email: profile.email,
        name: profile.name,
        avatarUrl: profile.picture,
        accessToken: access_token,
        refreshToken: refresh_token,
        tokenExpiresAt: new Date(Date.now() + expires_in * 1000),
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      });

      res.cookie(REFRESH_COOKIE_NAME, result.tokenPair.refreshToken, COOKIE_OPTIONS);

      res.json(
        successResponse({
          accessToken: result.tokenPair.accessToken,
          expiresIn: result.tokenPair.expiresIn,
          tokenType: result.tokenPair.tokenType,
          user: result.user,
          isNewUser: result.isNewUser,
        })
      );
    } catch (err) {
      logger.error({ err }, 'Google OAuth callback error');
      next(err);
    }
  }

  initiateGithub(_req: Request, res: Response): void {
    const config = getConfig();
    if (!config.GITHUB_CLIENT_ID || !config.GITHUB_CLIENT_SECRET) {
      res.status(503).json({ success: false, message: 'GitHub OAuth is not configured' });
      return;
    }

    const redirectUri = `${config.FRONTEND_URL}/api/v1/oauth/github/callback`;
    const state = generateState();

    res.cookie('oauth_state', state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 10 * 60 * 1000,
    });

    res.redirect(buildGithubAuthUrl(redirectUri, state));
  }

  async githubCallback(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const config = getConfig();
      const { code, state, error } = req.query as Record<string, string>;

      if (error) {
        throw new UnauthorizedError(`GitHub OAuth error: ${error}`);
      }

      if (!code) {
        throw new BadRequestError('Authorization code is required');
      }

      const storedState = req.cookies?.oauth_state;
      if (state && storedState && state !== storedState) {
        throw new UnauthorizedError('Invalid OAuth state parameter');
      }
      res.clearCookie('oauth_state');

      const redirectUri = `${config.FRONTEND_URL}/api/v1/oauth/github/callback`;

      // Exchange code for access token
      const tokenResponse = await axios.post<string>(
        GITHUB_TOKEN_URL,
        {
          client_id: config.GITHUB_CLIENT_ID,
          client_secret: config.GITHUB_CLIENT_SECRET,
          code,
          redirect_uri: redirectUri,
        },
        { headers: { Accept: 'application/json' } }
      );

      const tokenData =
        typeof tokenResponse.data === 'string'
          ? Object.fromEntries(new URLSearchParams(tokenResponse.data))
          : (tokenResponse.data as Record<string, string>);

      const accessToken = tokenData['access_token'] as string;
      if (!accessToken) {
        throw new UnauthorizedError('Failed to obtain GitHub access token');
      }

      const authHeaders = { Authorization: `Bearer ${accessToken}` };

      // Get user profile
      const profileResponse = await axios.get<{
        id: number;
        login: string;
        name?: string;
        email?: string;
        avatar_url?: string;
      }>(GITHUB_USERINFO_URL, { headers: authHeaders });

      const profile = profileResponse.data;

      // GitHub may not return a public email — fetch from emails endpoint
      let email = profile.email;
      if (!email) {
        const emailsResponse = await axios.get<
          Array<{ email: string; primary: boolean; verified: boolean }>
        >(GITHUB_EMAILS_URL, { headers: authHeaders });

        const primaryEmail = emailsResponse.data.find((e) => e.primary && e.verified);
        email = primaryEmail?.email;
      }

      if (!email) {
        throw new BadRequestError(
          'Could not retrieve a verified email from GitHub. Please make your email public or use a different login method.'
        );
      }

      const useCase = new OAuthCallbackUseCase();
      const result = await useCase.execute({
        provider: 'github',
        providerId: String(profile.id),
        email,
        name: profile.name || profile.login,
        avatarUrl: profile.avatar_url,
        accessToken,
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      });

      res.cookie(REFRESH_COOKIE_NAME, result.tokenPair.refreshToken, COOKIE_OPTIONS);

      res.json(
        successResponse({
          accessToken: result.tokenPair.accessToken,
          expiresIn: result.tokenPair.expiresIn,
          tokenType: result.tokenPair.tokenType,
          user: result.user,
          isNewUser: result.isNewUser,
        })
      );
    } catch (err) {
      logger.error({ err }, 'GitHub OAuth callback error');
      next(err);
    }
  }
}
