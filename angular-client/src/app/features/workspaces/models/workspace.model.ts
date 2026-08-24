export type WorkspaceRole = 'ADMIN' | 'MEMBER' | 'GUEST';

export interface Workspace {
  id: string;
  organizationId: string;
  name: string;
  slug?: string;
  description?: string;
  isPrivate?: boolean;
  isArchived?: boolean;
  memberCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface WorkspaceMember {
  id: string;
  workspaceId: string;
  userId: string;
  role: WorkspaceRole;
  user?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  };
  createdAt?: string;
}

export interface CreateWorkspaceRequest {
  organizationId: string;
  name: string;
  slug?: string;
  description?: string;
  isPrivate?: boolean;
}

export interface UpdateWorkspaceRequest {
  name?: string;
  description?: string;
  isArchived?: boolean;
}

export interface AddWorkspaceMemberRequest {
  userId: string;
  role?: WorkspaceRole;
}
