import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import { RegisterUseCase } from '../../application/use-cases/RegisterUseCase';
import { VerifyEmailUseCase } from '../../application/use-cases/VerifyEmailUseCase';
import { LoginUseCase } from '../../application/use-cases/LoginUseCase';
import { LogoutUseCase } from '../../application/use-cases/LogoutUseCase';
import { RefreshTokenUseCase } from '../../application/use-cases/RefreshTokenUseCase';
import { ForgotPasswordUseCase } from '../../application/use-cases/ForgotPasswordUseCase';
import { ResetPasswordUseCase } from '../../application/use-cases/ResetPasswordUseCase';

const REFRESH_COOKIE_NAME = 'refreshToken';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: '/',
};

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = new RegisterUseCase();
      const result = await useCase.execute(req.body);
      res.status(201).json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }

  async verifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = (req.query.token as string) || req.body.token;
      if (!token) {
        throw new BadRequestError('Verification token is required');
      }
      const useCase = new VerifyEmailUseCase();
      const result = await useCase.execute({ token });
      res.json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = new LoginUseCase();
      const result = await useCase.execute({
        ...req.body,
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      });

      if (result.requiresMfa) {
        res.json(successResponse({ requiresMfa: true, tempToken: result.tempToken }));
        return;
      }

      if (result.tokenPair) {
        // Set refresh token as httpOnly cookie
        res.cookie(REFRESH_COOKIE_NAME, result.tokenPair.refreshToken, COOKIE_OPTIONS);

        res.json(
          successResponse({
            accessToken: result.tokenPair.accessToken,
            expiresIn: result.tokenPair.expiresIn,
            tokenType: result.tokenPair.tokenType,
            user: result.user,
          })
        );
      } else {
        res.json(successResponse(result));
      }
    } catch (err) {
      next(err);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const refreshToken =
        req.cookies?.[REFRESH_COOKIE_NAME] || req.body?.refreshToken;

      const authHeader = req.headers.authorization;
      const accessToken = authHeader?.startsWith('Bearer ')
        ? authHeader.substring(7)
        : undefined;

      if (refreshToken) {
        const useCase = new LogoutUseCase();
        await useCase.execute({ refreshToken, accessToken });
      }

      res.clearCookie(REFRESH_COOKIE_NAME, { path: '/' });
      res.json(successResponse({ message: 'Logged out successfully' }));
    } catch (err) {
      next(err);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const refreshToken = req.cookies?.[REFRESH_COOKIE_NAME] || req.body?.refreshToken;

      if (!refreshToken) {
        throw new BadRequestError('Refresh token is required');
      }

      const useCase = new RefreshTokenUseCase();
      const tokenPair = await useCase.execute({ refreshToken });

      // Rotate cookie
      res.cookie(REFRESH_COOKIE_NAME, tokenPair.refreshToken, COOKIE_OPTIONS);

      res.json(
        successResponse({
          accessToken: tokenPair.accessToken,
          expiresIn: tokenPair.expiresIn,
          tokenType: tokenPair.tokenType,
        })
      );
    } catch (err) {
      next(err);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = new ForgotPasswordUseCase();
      const result = await useCase.execute(req.body);
      res.json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const useCase = new ResetPasswordUseCase();
      const result = await useCase.execute(req.body);
      res.json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }
}
