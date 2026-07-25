import { WorkspaceEntity } from '../../domain/entities/Workspace';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface UpdateWorkspaceInput {
  workspaceId: string;
  requesterId: string;
  name?: string;
  description?: string;
  iconUrl?: string;
  color?: string;
  visibility?: 'PUBLIC' | 'PRIVATE';
  settings?: Record<string, unknown>;
}

export class UpdateWorkspaceUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(input: UpdateWorkspaceInput): Promise<WorkspaceEntity> {
    const { workspaceId, requesterId, ...updateData } = input;

    const workspace = await this.workspaceRepository.findById(workspaceId);
    if (!workspace) {
      throw new NotFoundError('Workspace', workspaceId);
    }

    const role = await this.workspaceRepository.getMemberRole(workspaceId, requesterId);
    if (role !== 'OWNER' && role !== 'ADMIN') {
      throw new ForbiddenError('Only workspace owners or admins can update workspace settings');
    }

    return this.workspaceRepository.update(workspaceId, {
      ...updateData,
      updatedBy: requesterId,
    });
  }
}
