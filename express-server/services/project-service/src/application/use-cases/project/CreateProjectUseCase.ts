import { ConflictError } from '@boardpilot/errors';
import { EventMetadata } from '@boardpilot/types';
import { Project, ProjectType, ProjectStatus, Visibility } from '../../../domain/entities/Project';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IProjectMemberRepository } from '../../../domain/repositories/IProjectMemberRepository';
import { ProjectEventPublisher } from '../../../infrastructure/events/ProjectEventPublisher';

export interface CreateProjectInput {
  organizationId: string;
  workspaceId: string;
  name: string;
  description?: string;
  key?: string;
  type?: ProjectType;
  status?: ProjectStatus;
  visibility?: Visibility;
  ownerId: string;
  leadId?: string;
  startDate?: Date;
  targetDate?: Date;
  settings?: Record<string, unknown>;
  createdBy: string;
}

function generateKey(name: string): string {
  const prefix = name
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 5) || 'PROJ';
  const suffix = Math.floor(100 + Math.random() * 900).toString();
  return `${prefix}-${suffix}`;
}

function generateSlug(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50);
  const suffix = Math.floor(1000 + Math.random() * 9000).toString();
  return `${base}-${suffix}`;
}

export class CreateProjectUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly memberRepository: IProjectMemberRepository,
    private readonly eventPublisher: ProjectEventPublisher
  ) {}

  async execute(input: CreateProjectInput): Promise<Project> {
    // Generate or validate key
    let key = input.key;
    if (!key) {
      key = generateKey(input.name);
    } else {
      key = key.toUpperCase();
    }

    // Check key uniqueness in org
    const keyExists = await this.projectRepository.existsByOrgAndKey(input.organizationId, key);
    if (keyExists) {
      throw new ConflictError(`A project with key '${key}' already exists in this organization`);
    }

    // Generate slug and check uniqueness in workspace
    let slug = generateSlug(input.name);
    let slugExists = await this.projectRepository.existsByWorkspaceAndSlug(input.workspaceId, slug);
    // Retry slug generation if collision
    let retries = 0;
    while (slugExists && retries < 5) {
      slug = generateSlug(input.name);
      slugExists = await this.projectRepository.existsByWorkspaceAndSlug(input.workspaceId, slug);
      retries++;
    }
    if (slugExists) {
      throw new ConflictError(`Could not generate a unique slug for project '${input.name}'`);
    }

    // Create project
    const project = await this.projectRepository.create({
      organizationId: input.organizationId,
      workspaceId: input.workspaceId,
      key,
      name: input.name,
      slug,
      description: input.description,
      type: input.type,
      status: input.status,
      visibility: input.visibility,
      ownerId: input.ownerId,
      leadId: input.leadId,
      startDate: input.startDate,
      targetDate: input.targetDate,
      settings: input.settings,
      createdBy: input.createdBy,
      updatedBy: input.createdBy,
    });

    // Add creator as MANAGER
    await this.memberRepository.add({
      projectId: project.id,
      userId: input.createdBy,
      role: 'MANAGER',
      addedBy: input.createdBy,
    });

    // Publish event
    try {
      const metadata: EventMetadata = {
        correlationId: project.id,
        userId: input.createdBy,
        organizationId: input.organizationId,
        workspaceId: input.workspaceId,
      };
      await this.eventPublisher.publishProjectCreated(
        project.id,
        {
          projectId: project.id,
          organizationId: project.organizationId,
          workspaceId: project.workspaceId,
          name: project.name,
          key: project.key,
          ownerId: project.ownerId,
          createdBy: project.createdBy,
        },
        metadata
      );
    } catch {
      // Non-fatal: event publishing failure should not block project creation
    }

    return project;
  }
}
