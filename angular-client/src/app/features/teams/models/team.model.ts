export type TeamRole = 'LEAD' | 'MEMBER' | 'VIEWER';

export interface Team {
  id: string;
  organizationId: string;
  workspaceId?: string;
  departmentId?: string;
  name: string;
  description?: string;
  leadId?: string;
  color?: string;
  icon?: string;
  isPrivate?: boolean;
  capacity?: number;
  memberCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface TeamMember {
  id: string;
  teamId: string;
  userId: string;
  role: TeamRole;
  capacity?: number;
  user?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  };
  createdAt?: string;
}

export interface CreateTeamRequest {
  organizationId: string;
  workspaceId?: string;
  departmentId?: string;
  name: string;
  description?: string;
  leadId?: string;
  color?: string;
  icon?: string;
  isPrivate?: boolean;
  capacity?: number;
}

export interface UpdateTeamRequest {
  name?: string;
  description?: string;
  leadId?: string;
  color?: string;
  icon?: string;
  isPrivate?: boolean;
  capacity?: number;
}

export interface AddTeamMemberRequest {
  userId: string;
  role?: TeamRole;
  capacity?: number;
}

export interface UpdateTeamMemberRequest {
  role?: TeamRole;
  capacity?: number;
}
