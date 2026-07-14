export type ProjectType = 'SCRUM' | 'KANBAN' | 'SCRUMBAN';
export type ProjectStatus = 'PLANNING' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'ARCHIVED';
export type Visibility = 'PUBLIC' | 'PRIVATE' | 'INTERNAL';

export interface Project {
  id: string;
  organizationId: string;
  workspaceId: string;
  key: string;
  name: string;
  slug: string;
  description?: string | null;
  iconUrl?: string | null;
  color?: string | null;
  type: ProjectType;
  status: ProjectStatus;
  visibility: Visibility;
  ownerId: string;
  leadId?: string | null;
  startDate?: Date | null;
  targetDate?: Date | null;
  completedAt?: Date | null;
  settings: Record<string, unknown>;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  // Computed counts (optional, present on detail view)
  _count?: {
    members: number;
    labels: number;
  };
}

export interface CreateProjectInput {
  organizationId: string;
  workspaceId: string;
  key?: string;
  name: string;
  slug?: string;
  description?: string;
  iconUrl?: string;
  color?: string;
  type?: ProjectType;
  status?: ProjectStatus;
  visibility?: Visibility;
  ownerId: string;
  leadId?: string;
  startDate?: Date;
  targetDate?: Date;
  settings?: Record<string, unknown>;
  createdBy: string;
  updatedBy: string;
}

export interface UpdateProjectInput {
  name?: string;
  description?: string | null;
  iconUrl?: string | null;
  color?: string | null;
  type?: ProjectType;
  status?: ProjectStatus;
  visibility?: Visibility;
  leadId?: string | null;
  startDate?: Date | null;
  targetDate?: Date | null;
  completedAt?: Date | null;
  settings?: Record<string, unknown>;
  updatedBy: string;
}

export interface ListProjectsFilter {
  workspaceId?: string;
  organizationId?: string;
  status?: ProjectStatus;
  type?: ProjectType;
  ownerId?: string;
  search?: string;
}
