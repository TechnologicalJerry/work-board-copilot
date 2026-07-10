import { Session } from '../../generated/prisma-client';
import { prisma } from '../database/prisma';
import {
  ISessionRepository,
  CreateSessionData,
} from '../../domain/repositories/ISessionRepository';

export class PrismaSessionRepository implements ISessionRepository {
  async findById(id: string): Promise<Session | null> {
    return prisma.session.findUnique({ where: { id } });
  }

  async findByTokenHash(tokenHash: string): Promise<Session | null> {
    return prisma.session.findUnique({ where: { tokenHash } });
  }

  async findAllByUserId(userId: string): Promise<Session[]> {
    return prisma.session.findMany({
      where: {
        userId,
        revokedAt: null,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: CreateSessionData): Promise<Session> {
    return prisma.session.create({
      data: {
        userId: data.userId,
        refreshToken: data.refreshToken,
        tokenHash: data.tokenHash,
        userAgent: data.userAgent,
        ip: data.ip,
        expiresAt: data.expiresAt,
      },
    });
  }

  async revoke(id: string): Promise<void> {
    await prisma.session.update({
      where: { id },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAll(userId: string): Promise<void> {
    await prisma.session.updateMany({
      where: {
        userId,
        revokedAt: null,
      },
      data: { revokedAt: new Date() },
    });
  }

  async deleteExpired(): Promise<void> {
    await prisma.session.deleteMany({
      where: {
        expiresAt: { lt: new Date() },
      },
    });
  }
}

let _sessionRepository: PrismaSessionRepository | null = null;

export function getSessionRepository(): PrismaSessionRepository {
  if (!_sessionRepository) {
    _sessionRepository = new PrismaSessionRepository();
  }
  return _sessionRepository;
}
