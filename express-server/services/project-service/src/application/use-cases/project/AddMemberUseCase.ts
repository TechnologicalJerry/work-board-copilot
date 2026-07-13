import { ConflictError, NotFoundError } from '@boardpilot/errors';
import { EventMetadata } from '@boardpilot/types';
import { ProjectMember, ProjectRole } from '../../../domain/entities/ProjectMember';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IProjectMemberRepository } from '../../../domain/repositories/IProjectMemberRepository';
import { ProjectEventPublisher } from '../../../infrastructure/events/ProjectEventPublisher';

export interface AddMemberInput {
  projectId: string;
  userId: string;
  role?: ProjectRole;
  addedBy: string;
}

export class AddMemberUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly memberRepository: IProjectMemberRepository,
    private readonly eventPublisher: ProjectEventPublisher
  ) {}

  async execute(input: AddMemberInput): Promise<ProjectMember> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    const existing = await this.memberRepository.findByProjectAndUser(
      input.projectId,
      input.userId
    );
    if (existing) {
      throw new ConflictError(
        `User '${input.userId}' is already a member of project '${input.projectId}'`
      );
    }

    const member = await this.memberRepository.add({
      projectId: input.projectId,
      userId: input.userId,
      role: input.role ?? 'MEMBER',
      addedBy: input.addedBy,
    });

    try {
      const metadata: EventMetadata = {
        correlationId: input.projectId,
        userId: input.addedBy,
        organizationId: project.organizationId,
        workspaceId: project.workspaceId,
      };
      await this.eventPublisher.publishMemberAdded(
        input.projectId,
        {
          projectId: input.projectId,
          userId: input.userId,
          role: member.role,
          addedBy: input.addedBy,
        },
        metadata
      );
    } catch {
      // Non-fatal
    }

    return member;
  }
}
