import { User } from '../../generated/prisma-client';

export interface CreateUserData {
  email: string;
  passwordHash?: string;
  firstName: string;
  lastName: string;
  emailVerifyToken?: string;
  emailVerifyExpiry?: Date;
  emailVerified?: boolean;
  role?: User['role'];
  status?: User['status'];
}

export interface UpdateUserData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  phoneVerified?: boolean;
  status?: User['status'];
  role?: User['role'];
  lastLoginAt?: Date;
  lastLoginIp?: string;
  emailVerifyToken?: string | null;
  emailVerifyExpiry?: Date | null;
  passwordResetToken?: string | null;
  passwordResetExpiry?: Date | null;
}

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByOAuthProvider(provider: string, providerId: string): Promise<User | null>;
  findByEmailVerifyToken(tokenHash: string): Promise<User | null>;
  findByPasswordResetToken(tokenHash: string): Promise<User | null>;
  create(data: CreateUserData): Promise<User>;
  update(id: string, data: UpdateUserData): Promise<User>;
  updatePassword(id: string, passwordHash: string): Promise<void>;
  setEmailVerified(id: string): Promise<void>;
  setMfaSecret(id: string, secret: string, backupCodes: string[]): Promise<void>;
  disableMfa(id: string): Promise<void>;
}
