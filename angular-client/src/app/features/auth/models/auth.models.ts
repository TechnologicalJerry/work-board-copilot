export type AuthStatus = 'unknown' | 'initializing' | 'authenticated' | 'unauthenticated' | 'refreshing';

export interface AuthenticatedUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  role?: string;
  isEmailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponseData {
  accessToken: string;
  expiresIn?: number;
  tokenType?: string;
  user: AuthenticatedUser;
  requiresMfa?: boolean;
  tempToken?: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organizationName?: string;
}

export interface RegisterResponseData {
  user: AuthenticatedUser;
  message?: string;
}

export interface RefreshResponseData {
  accessToken: string;
  expiresIn?: number;
  tokenType?: string;
}

export interface UserSession {
  user: AuthenticatedUser;
  accessToken: string;
  expiresAt?: number;
}
