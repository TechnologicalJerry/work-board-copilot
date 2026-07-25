import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface DeleteWorkspaceInput {
  workspaceId: string;
  requesterId: string;
}

export class DeleteWorkspaceUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(input: DeleteWorkspaceInput): Promise<void> {
    const { workspaceId, requesterId } = input;

    const workspace = await this.workspaceRepository.findById(workspaceId);
    if (!workspace) {
      throw new NotFoundError('Workspace', workspaceId);
    }

    if (workspace.ownerId !== requesterId) {
      throw new ForbiddenError('Only the workspace owner can delete the workspace');
    }

    await this.workspaceRepository.softDelete(workspaceId, requesterId);
  }
}
