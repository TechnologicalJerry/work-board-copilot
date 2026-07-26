import { PaginationOptions } from '@boardpilot/types';
import { WorkspaceEntity, WorkspaceVisibility } from '../entities/Workspace';

export interface WorkspaceFilters {
  isArchived?: boolean;
  visibility?: WorkspaceVisibility;
}

export interface CreateWorkspaceData {
  organizationId: string;
  name: string;
  slug: string;
  description?: string;
  iconUrl?: string;
  color?: string;
  visibility?: WorkspaceVisibility;
  settings?: Record<string, unknown>;
  ownerId: string;
  createdBy: string;
  updatedBy: string;
}

export interface UpdateWorkspaceData {
  name?: string;
  description?: string;
  iconUrl?: string;
  color?: string;
  visibility?: WorkspaceVisibility;
  settings?: Record<string, unknown>;
  updatedBy: string;
}

export interface IWorkspaceRepository {
  findById(id: string): Promise<WorkspaceEntity | null>;
  findBySlug(organizationId: string, slug: string): Promise<WorkspaceEntity | null>;
  findAll(
    organizationId: string,
    filters: WorkspaceFilters,
    pagination: PaginationOptions
  ): Promise<{ workspaces: WorkspaceEntity[]; total: number }>;
  create(data: CreateWorkspaceData): Promise<WorkspaceEntity>;
  update(id: string, data: UpdateWorkspaceData): Promise<WorkspaceEntity>;
  archive(id: string, userId: string): Promise<WorkspaceEntity>;
  softDelete(id: string, userId: string): Promise<WorkspaceEntity>;
}
