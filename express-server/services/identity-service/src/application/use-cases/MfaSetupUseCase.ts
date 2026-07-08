import speakeasy from 'speakeasy';
import qrcode from 'qrcode';
import { generateBackupCodes, sha256 } from '@boardpilot/common';
import { BadRequestError, UnauthorizedError } from '@boardpilot/errors';
import { getRedisService } from '../../infrastructure/cache/RedisClient';
import { getUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';
import { getEmailService } from '../../services/EmailService';
import { getConfig } from '../../config';

const MFA_SETUP_TTL = 10 * 60; // 10 minutes
const mfaSetupKey = (userId: string): string => `mfa:setup:${userId}`;

interface MfaSetupCache {
  secret: string;
}

export interface GenerateSecretOutput {
  secret: string;
  qrCodeUrl: string;
}

export interface VerifyAndEnableOutput {
  backupCodes: string[];
}

export class MfaSetupUseCase {
  async generateSecret(userId: string, email: string): Promise<GenerateSecretOutput> {
    const config = getConfig();
    const redis = getRedisService();

    const generated = speakeasy.generateSecret({
      name: `${config.MFA_APP_NAME} (${email})`,
      length: 20,
    });

    if (!generated.otpauth_url) {
      throw new BadRequestError('Failed to generate MFA secret');
    }

    const qrCodeUrl = await qrcode.toDataURL(generated.otpauth_url);

    // Cache the secret temporarily (not saved to DB until verified)
    await redis.setJSON<MfaSetupCache>(
      mfaSetupKey(userId),
      { secret: generated.base32 },
      MFA_SETUP_TTL
    );

    return {
      secret: generated.base32,
      qrCodeUrl,
    };
  }

  async verifyAndEnable(userId: string, code: string): Promise<VerifyAndEnableOutput> {
    const redis = getRedisService();
    const userRepository = getUserRepository();
    const emailService = getEmailService();

    const cached = await redis.getJSON<MfaSetupCache>(mfaSetupKey(userId));
    if (!cached) {
      throw new BadRequestError('MFA setup session has expired. Please restart the setup process.');
    }

    const isValid = speakeasy.totp.verify({
      secret: cached.secret,
      encoding: 'base32',
      token: code,
      window: 1,
    });

    if (!isValid) {
      throw new UnauthorizedError('Invalid verification code. Please try again.');
    }

    // Generate backup codes — hash them for storage
    const plainBackupCodes = generateBackupCodes(10);
    const hashedBackupCodes = plainBackupCodes.map((c) => sha256(c));

    await userRepository.setMfaSecret(userId, cached.secret, hashedBackupCodes);

    // Remove the temporary setup cache
    await redis.del(mfaSetupKey(userId));

    // Send backup codes by email (fire and forget)
    const user = await userRepository.findById(userId);
    if (user) {
      emailService.sendMfaBackupCodes(user.email, plainBackupCodes).catch(() => {
        // Non-critical
      });
    }

    return { backupCodes: plainBackupCodes };
  }
}
