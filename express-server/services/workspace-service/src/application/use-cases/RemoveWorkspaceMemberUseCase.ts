import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface RemoveWorkspaceMemberInput {
  workspaceId: string;
  userId: string;
  requesterId: string;
}

export class RemoveWorkspaceMemberUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(input: RemoveWorkspaceMemberInput): Promise<void> {
    const { workspaceId, userId, requesterId } = input;

    const workspace = await this.workspaceRepository.findById(workspaceId);
    if (!workspace) {
      throw new NotFoundError('Workspace', workspaceId);
    }

    if (workspace.ownerId === userId) {
      throw new ForbiddenError('Cannot remove the workspace owner');
    }

    const requesterRole = await this.workspaceRepository.getMemberRole(workspaceId, requesterId);
    if (requesterRole !== 'OWNER' && requesterRole !== 'ADMIN') {
      throw new ForbiddenError('Only workspace owners or admins can remove members');
    }

    const targetRole = await this.workspaceRepository.getMemberRole(workspaceId, userId);
    if (targetRole === null) {
      throw new NotFoundError('WorkspaceMember', `${workspaceId}/${userId}`);
    }

    await this.workspaceRepository.removeMember(workspaceId, userId);
  }
}
