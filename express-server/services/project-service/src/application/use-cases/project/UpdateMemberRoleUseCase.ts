import { ForbiddenError, NotFoundError } from '@boardpilot/errors';
import { ProjectMember, ProjectRole } from '../../../domain/entities/ProjectMember';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IProjectMemberRepository } from '../../../domain/repositories/IProjectMemberRepository';

export interface UpdateMemberRoleInput {
  projectId: string;
  userId: string;
  role: ProjectRole;
  updatedBy: string;
}

export class UpdateMemberRoleUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly memberRepository: IProjectMemberRepository
  ) {}

  async execute(input: UpdateMemberRoleInput): Promise<ProjectMember> {
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

    // Cannot change the role of the project owner
    if (project.ownerId === input.userId) {
      throw new ForbiddenError('Cannot change the role of the project owner');
    }

    return this.memberRepository.update(input.projectId, input.userId, { role: input.role });
  }
}
