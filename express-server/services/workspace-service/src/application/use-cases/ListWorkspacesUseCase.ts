import { WorkspaceEntity, WorkspaceVisibility } from '../../domain/entities/Workspace';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { PaginationOptions } from '@boardpilot/types';

export interface ListWorkspacesInput {
  organizationId: string;
  isArchived?: boolean;
  visibility?: WorkspaceVisibility;
  pagination: PaginationOptions;
}

export interface ListWorkspacesResult {
  workspaces: WorkspaceEntity[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class ListWorkspacesUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(input: ListWorkspacesInput): Promise<ListWorkspacesResult> {
    const { organizationId, isArchived, visibility, pagination } = input;
    const { workspaces, total } = await this.workspaceRepository.findAll(
      organizationId,
      { isArchived, visibility },
      pagination
    );
    const totalPages = Math.ceil(total / pagination.limit);
    return {
      workspaces,
      total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages,
    };
  }
}
