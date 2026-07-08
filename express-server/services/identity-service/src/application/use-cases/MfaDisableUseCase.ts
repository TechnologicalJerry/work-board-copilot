import speakeasy from 'speakeasy';
import { comparePassword } from '@boardpilot/common';
import { UnauthorizedError, NotFoundError, BadRequestError } from '@boardpilot/errors';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';

export interface MfaDisableInput {
  userId: string;
  password: string;
  mfaCode: string;
}

export interface MfaDisableOutput {
  message: string;
}

export class MfaDisableUseCase {
  async execute(input: MfaDisableInput): Promise<MfaDisableOutput> {
    const userRepository = getUserRepository();

    const user = await userRepository.findById(input.userId);
    if (!user) {
      throw new NotFoundError('User', input.userId);
    }

    if (!user.passwordHash) {
      throw new BadRequestError('This account does not have a password. Use OAuth to manage MFA.');
    }

    const passwordValid = await comparePassword(input.password, user.passwordHash);
    if (!passwordValid) {
      throw new UnauthorizedError('Invalid password');
    }

    if (!user.mfaEnabled || !user.mfaSecret) {
      throw new BadRequestError('MFA is not enabled on this account');
    }

    const totpValid = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token: input.mfaCode,
      window: 1,
    });

    if (!totpValid) {
      throw new UnauthorizedError('Invalid MFA code');
    }

    await userRepository.disableMfa(input.userId);

    return { message: 'MFA has been disabled on your account' };
  }
}
