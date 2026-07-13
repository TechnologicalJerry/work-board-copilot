import { ForbiddenError, NotFoundError } from '@boardpilot/errors';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IProjectMemberRepository } from '../../../domain/repositories/IProjectMemberRepository';

export interface RemoveMemberInput {
  projectId: string;
  userId: string;
  requestedBy: string;
}

export class RemoveMemberUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly memberRepository: IProjectMemberRepository
  ) {}

  async execute(input: RemoveMemberInput): Promise<void> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    const member = await this.memberRepository.findByProjectAndUser(
      input.projectId,
      input.userId
    );
    if (!member) {
      throw new NotFoundError('Project member', input.userId);
    }

    // Cannot remove the project owner
    if (project.ownerId === input.userId) {
      throw new ForbiddenError('Cannot remove the project owner from the project');
    }

    await this.memberRepository.remove(input.projectId, input.userId);
  }
}
