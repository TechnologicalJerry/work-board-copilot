import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { UnauthorizedError, NotFoundError } from '@boardpilot/errors';
import { MfaSetupUseCase } from '../../application/use-cases/MfaSetupUseCase';
import { MfaDisableUseCase } from '../../application/use-cases/MfaDisableUseCase';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';

export class MfaController {
  async setupMfa(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) throw new UnauthorizedError();

      const useCase = new MfaSetupUseCase();
      const result = await useCase.generateSecret(user.id, user.email);

      res.json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }

  async verifyMfa(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) throw new UnauthorizedError();

      const { code } = req.body as { code: string };
      const useCase = new MfaSetupUseCase();
      const result = await useCase.verifyAndEnable(user.id, code);

      res.json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }

  async disableMfa(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) throw new UnauthorizedError();

      const { password, mfaCode } = req.body as { password: string; mfaCode: string };
      const useCase = new MfaDisableUseCase();
      const result = await useCase.execute({ userId: user.id, password, mfaCode });

      res.json(successResponse(result));
    } catch (err) {
      next(err);
    }
  }

  async getBackupCodes(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const authUser = req.user;
      if (!authUser) throw new UnauthorizedError();

      const userRepository = getUserRepository();
      const user = await userRepository.findById(authUser.id);
      if (!user) throw new NotFoundError('User');

      // Return count only — actual codes are hashed; one-time plaintext shown only at setup
      res.json(
        successResponse({
          mfaEnabled: user.mfaEnabled,
          backupCodesRemaining: user.mfaBackupCodes.length,
        })
      );
    } catch (err) {
      next(err);
    }
  }
}
