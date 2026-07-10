import { User } from '../../generated/prisma-client';
import { prisma } from '../database/prisma';
import {
  IUserRepository,
  CreateUserData,
  UpdateUserData,
} from '../../domain/repositories/IUserRepository';

export class PrismaUserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  }

  async findByOAuthProvider(provider: string, providerId: string): Promise<User | null> {
    const oauthRecord = await prisma.oAuthProvider.findFirst({
      where: { provider, providerId },
    });
    if (!oauthRecord) return null;
    return prisma.user.findUnique({ where: { id: oauthRecord.userId } });
  }

  async findByEmailVerifyToken(tokenHash: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { emailVerifyToken: tokenHash } });
  }

  async findByPasswordResetToken(tokenHash: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { passwordResetToken: tokenHash } });
  }

  async create(data: CreateUserData): Promise<User> {
    return prisma.user.create({
      data: {
        email: data.email.toLowerCase(),
        passwordHash: data.passwordHash,
        firstName: data.firstName,
        lastName: data.lastName,
        emailVerifyToken: data.emailVerifyToken,
        emailVerifyExpiry: data.emailVerifyExpiry,
        emailVerified: data.emailVerified ?? false,
        role: data.role ?? 'TEAM_MEMBER',
        status: data.status ?? 'PENDING',
      },
    });
  }

  async update(id: string, data: UpdateUserData): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async updatePassword(id: string, passwordHash: string): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: { passwordHash },
    });
  }

  async setEmailVerified(id: string): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: {
        emailVerified: true,
        status: 'ACTIVE',
        emailVerifyToken: null,
        emailVerifyExpiry: null,
      },
    });
  }

  async setMfaSecret(id: string, secret: string, backupCodes: string[]): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: {
        mfaEnabled: true,
        mfaSecret: secret,
        mfaBackupCodes: backupCodes,
      },
    });
  }

  async disableMfa(id: string): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: {
        mfaEnabled: false,
        mfaSecret: null,
        mfaBackupCodes: [],
      },
    });
  }
}

let _userRepository: PrismaUserRepository | null = null;

export function getUserRepository(): PrismaUserRepository {
  if (!_userRepository) {
    _userRepository = new PrismaUserRepository();
  }
  return _userRepository;
}
