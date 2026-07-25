import { WorkspaceEntity } from '../../domain/entities/Workspace';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { ConflictError } from '@boardpilot/errors';
import { generateSlug, generateUniqueSlug } from '@boardpilot/common';

export interface CreateWorkspaceInput {
  organizationId: string;
  name: string;
  description?: string;
  iconUrl?: string;
  color?: string;
  visibility?: 'PUBLIC' | 'PRIVATE';
  settings?: Record<string, unknown>;
  createdBy: string;
}

export class CreateWorkspaceUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(input: CreateWorkspaceInput): Promise<WorkspaceEntity> {
    const { organizationId, createdBy, name, ...rest } = input;

    // Generate unique slug within the org
    let slug = generateSlug(name);
    const existing = await this.workspaceRepository.findBySlug(organizationId, slug);
    if (existing) {
      const suffix = Math.random().toString(36).slice(2, 6);
      slug = generateUniqueSlug(name, suffix);
      const stillExists = await this.workspaceRepository.findBySlug(organizationId, slug);
      if (stillExists) {
        throw new ConflictError(`Workspace slug '${slug}' already exists in this organization`);
      }
    }

    const workspace = await this.workspaceRepository.create({
      organizationId,
      name,
      slug,
      ownerId: createdBy,
      createdBy,
      updatedBy: createdBy,
      ...rest,
    });

    // Add creator as OWNER member
    await this.workspaceRepository.addMember(workspace.id, createdBy, 'OWNER', createdBy);

    return workspace;
  }
}
