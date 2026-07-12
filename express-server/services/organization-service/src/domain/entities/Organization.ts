export type PlanType = 'FREE' | 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE';
export type OrgStatus = 'ACTIVE' | 'SUSPENDED' | 'DELETED';
export type OrgRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'BILLING_ADMIN' | 'VIEWER';
export type MemberStatus = 'ACTIVE' | 'SUSPENDED' | 'LEFT';

export interface Organization {
  id: string;
  name: string;
  slug: string;
  domain: string | null;
  logoUrl: string | null;
  website: string | null;
  description: string | null;
  industry: string | null;
  size: string | null;
  country: string | null;
  timezone: string;
  plan: PlanType;
  planExpiresAt: Date | null;
  maxMembers: number;
  maxProjects: number;
  maxStorage: bigint;
  settings: Record<string, unknown>;
  ownerId: string;
  status: OrgStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface OrgMember {
  id: string;
  organizationId: string;
  userId: string;
  role: OrgRole;
  status: MemberStatus;
  invitedBy: string | null;
  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrgInvitation {
  id: string;
  organizationId: string;
  email: string;
  role: OrgRole;
  token: string;
  invitedBy: string;
  expiresAt: Date;
  acceptedAt: Date | null;
  revokedAt: Date | null;
  createdAt: Date;
}
