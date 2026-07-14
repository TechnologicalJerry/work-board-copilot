import { NotFoundError } from '@boardpilot/errors';
import { EventMetadata } from '@boardpilot/types';
import { Project, ProjectStatus, ProjectType, Visibility } from '../../../domain/entities/Project';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { ProjectEventPublisher } from '../../../infrastructure/events/ProjectEventPublisher';

export interface UpdateProjectInput {
  projectId: string;
  name?: string;
  description?: string | null;
  status?: ProjectStatus;
  color?: string | null;
  iconUrl?: string | null;
  type?: ProjectType;
  visibility?: Visibility;
  leadId?: string | null;
  startDate?: Date | null;
  targetDate?: Date | null;
  settings?: Record<string, unknown>;
  updatedBy: string;
}

export class UpdateProjectUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly eventPublisher: ProjectEventPublisher
  ) {}

  async execute(input: UpdateProjectInput): Promise<Project> {
    const existing = await this.projectRepository.findById(input.projectId);
    if (!existing) {
      throw new NotFoundError('Project', input.projectId);
    }

    const project = await this.projectRepository.update(input.projectId, {
      name: input.name,
      description: input.description,
      status: input.status,
      color: input.color,
      iconUrl: input.iconUrl,
      type: input.type,
      visibility: input.visibility,
      leadId: input.leadId,
      startDate: input.startDate,
      targetDate: input.targetDate,
      settings: input.settings,
      updatedBy: input.updatedBy,
    });

    try {
      const metadata: EventMetadata = {
        correlationId: project.id,
        userId: input.updatedBy,
        organizationId: project.organizationId,
        workspaceId: project.workspaceId,
      };
      await this.eventPublisher.publishProjectUpdated(
        project.id,
        {
          projectId: project.id,
          organizationId: project.organizationId,
          workspaceId: project.workspaceId,
          name: project.name,
          status: project.status,
          updatedBy: input.updatedBy,
        },
        metadata
      );
    } catch {
      // Non-fatal: event publishing failure should not block the update
    }

    return project;
  }
}
