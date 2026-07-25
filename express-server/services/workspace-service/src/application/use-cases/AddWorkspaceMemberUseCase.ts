import { WorkspaceMemberEntity, WorkspaceRole } from '../../domain/entities/Workspace';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { NotFoundError, ConflictError, ForbiddenError } from '@boardpilot/errors';

export interface AddWorkspaceMemberInput {
  workspaceId: string;
  userId: string;
  role?: WorkspaceRole;
  requesterId: string;
}

export class AddWorkspaceMemberUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(input: AddWorkspaceMemberInput): Promise<WorkspaceMemberEntity> {
    const { workspaceId, userId, role = 'MEMBER', requesterId } = input;

    const workspace = await this.workspaceRepository.findById(workspaceId);
    if (!workspace) {
      throw new NotFoundError('Workspace', workspaceId);
    }

    const requesterRole = await this.workspaceRepository.getMemberRole(workspaceId, requesterId);
    if (requesterRole !== 'OWNER' && requesterRole !== 'ADMIN') {
      throw new ForbiddenError('Only workspace owners or admins can add members');
    }

    const alreadyMember = await this.workspaceRepository.isMember(workspaceId, userId);
    if (alreadyMember) {
      throw new ConflictError('User is already a member of this workspace');
    }

    return this.workspaceRepository.addMember(workspaceId, userId, role, requesterId);
  }
}
