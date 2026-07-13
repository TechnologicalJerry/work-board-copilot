import { NotFoundError } from '@boardpilot/errors';
import { EventMetadata } from '@boardpilot/types';
import { Project } from '../../../domain/entities/Project';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { ProjectEventPublisher } from '../../../infrastructure/events/ProjectEventPublisher';

export interface DeleteProjectInput {
  projectId: string;
  deletedBy: string;
}

export class DeleteProjectUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly eventPublisher: ProjectEventPublisher
  ) {}

  async execute(input: DeleteProjectInput): Promise<Project> {
    const existing = await this.projectRepository.findById(input.projectId);
    if (!existing) {
      throw new NotFoundError('Project', input.projectId);
    }

    // Soft delete by archiving
    const project = await this.projectRepository.archive(input.projectId, input.deletedBy);

    try {
      const metadata: EventMetadata = {
        correlationId: project.id,
        userId: input.deletedBy,
        organizationId: project.organizationId,
        workspaceId: project.workspaceId,
      };
      await this.eventPublisher.publishProjectDeleted(
        project.id,
        {
          projectId: project.id,
          organizationId: project.organizationId,
          workspaceId: project.workspaceId,
          deletedBy: input.deletedBy,
        },
        metadata
      );
    } catch {
      // Non-fatal: event publishing failure should not block the deletion
    }

    return project;
  }
}
