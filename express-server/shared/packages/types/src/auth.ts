export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  organizationId?: string;
  workspaceId?: string;
  permissions: string[];
  sessionId: string;
  type: 'access' | 'refresh';
  iat: number;
  exp: number;
}

export interface AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
  organizationId?: string;
  workspaceId?: string;
  permissions: string[];
  sessionId: string;
}

export type UserRole =
  | 'super_admin'
  | 'org_admin'
  | 'project_manager'
  | 'team_lead'
  | 'team_member'
  | 'viewer'
  | 'guest';

export interface OAuthProfile {
  provider: OAuthProvider;
  providerId: string;
  email: string;
  name: string;
  avatar?: string;
  accessToken: string;
  refreshToken?: string;
}

export type OAuthProvider = 'google' | 'github' | 'microsoft';

export interface MfaSetup {
  secret: string;
  qrCodeUrl: string;
  backupCodes: string[];
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
}
