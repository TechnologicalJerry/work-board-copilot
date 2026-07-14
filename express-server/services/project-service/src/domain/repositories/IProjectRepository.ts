import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import {
  Project,
  CreateProjectInput,
  UpdateProjectInput,
  ListProjectsFilter,
} from '../entities/Project';

export interface IProjectRepository {
  create(input: CreateProjectInput): Promise<Project>;
  findById(id: string): Promise<Project | null>;
  findByIdWithCounts(id: string): Promise<Project | null>;
  findAll(
    filter: ListProjectsFilter,
    options: PaginationOptions
  ): Promise<PaginatedResult<Project>>;
  update(id: string, input: UpdateProjectInput): Promise<Project>;
  archive(id: string, updatedBy: string): Promise<Project>;
  existsByOrgAndKey(organizationId: string, key: string): Promise<boolean>;
  existsByWorkspaceAndSlug(workspaceId: string, slug: string): Promise<boolean>;
}
