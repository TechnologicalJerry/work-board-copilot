export type OrgRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'GUEST';

export interface Organization {
  id: string;
  name: string;
  slug?: string;
  logoUrl?: string;
  ownerId?: string;
  memberCount?: number;
  workspaceCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface OrganizationMember {
  id: string;
  organizationId: string;
  userId: string;
  role: OrgRole;
  user?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  };
  createdAt?: string;
}

export interface CreateOrganizationRequest {
  name: string;
  slug?: string;
  logoUrl?: string;
}

export interface UpdateOrganizationRequest {
  name?: string;
  slug?: string;
  logoUrl?: string;
}

export interface InviteMemberRequest {
  email: string;
  role: OrgRole;
}

export interface UpdateMemberRoleRequest {
  role: OrgRole;
}
