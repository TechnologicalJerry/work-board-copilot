export type TeamRole = 'LEAD' | 'MEMBER' | 'VIEWER';

export interface Team {
  id: string;
  organizationId: string;
  workspaceId?: string | null;
  name: string;
  slug: string;
  description?: string | null;
  color?: string | null;
  iconUrl?: string | null;
  leadId?: string | null;
  isPrivate: boolean;
  capacity?: number | null;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface TeamWithMemberCount extends Team {
  _count?: {
    members: number;
  };
}

export interface CreateTeamInput {
  organizationId: string;
  workspaceId?: string;
  name: string;
  description?: string;
  color?: string;
  iconUrl?: string;
  leadId?: string;
  isPrivate?: boolean;
  capacity?: number;
  createdBy: string;
}

export interface UpdateTeamInput {
  name?: string;
  description?: string;
  color?: string;
  iconUrl?: string;
  leadId?: string;
  isPrivate?: boolean;
  capacity?: number;
  updatedBy: string;
}
