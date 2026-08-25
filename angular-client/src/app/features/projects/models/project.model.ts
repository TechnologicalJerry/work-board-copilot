export type ProjectRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';
export type ProjectType = 'SOFTWARE' | 'BUSINESS' | 'MARKETING';

export interface Project {
  id: string;
  organizationId: string;
  workspaceId: string;
  name: string;
  key: string;
  description?: string;
  type?: ProjectType;
  leadId?: string;
  avatarUrl?: string;
  color?: string;
  icon?: string;
  isArchived?: boolean;
  boardCount?: number;
  memberCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectMember {
  id: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
  user?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  };
  createdAt?: string;
}

export interface ProjectLabel {
  id: string;
  projectId: string;
  name: string;
  color?: string;
  description?: string;
}

export interface ProjectMilestone {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  dueDate?: string;
  isCompleted?: boolean;
}

export interface CreateProjectRequest {
  organizationId: string;
  workspaceId: string;
  name: string;
  key: string;
  description?: string;
  type?: ProjectType;
  leadId?: string;
  avatarUrl?: string;
  color?: string;
  icon?: string;
}

export interface UpdateProjectRequest {
  name?: string;
  description?: string;
  leadId?: string;
  color?: string;
  icon?: string;
  isArchived?: boolean;
}
