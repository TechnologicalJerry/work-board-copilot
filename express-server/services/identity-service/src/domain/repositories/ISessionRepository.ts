import { Session } from '../../generated/prisma-client';

export interface CreateSessionData {
  userId: string;
  refreshToken: string;
  tokenHash: string;
  userAgent?: string;
  ip?: string;
  expiresAt: Date;
}

export interface ISessionRepository {
  findById(id: string): Promise<Session | null>;
  findByTokenHash(tokenHash: string): Promise<Session | null>;
  findAllByUserId(userId: string): Promise<Session[]>;
  create(data: CreateSessionData): Promise<Session>;
  revoke(id: string): Promise<void>;
  revokeAll(userId: string): Promise<void>;
  deleteExpired(): Promise<void>;
}
