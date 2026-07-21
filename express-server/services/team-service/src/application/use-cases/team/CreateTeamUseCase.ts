import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { Team, CreateTeamInput } from '../../../domain/entities/Team';
import { ConflictError } from '@boardpilot/errors';
import { TeamEventPublisher } from '../../../infrastructure/events/TeamEventPublisher';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

function generateSlug(name: string): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  const suffix = Math.random().toString(36).substring(2, 7);
  return `${base}-${suffix}`;
}

export interface CreateTeamDTO {
  organizationId: string;
  workspaceId?: string;
  name: string;
  description?: string;
  color?: string;
  iconUrl?: string;
  leadId?: string;
  isPrivate?: boolean;
  capacity?: number;
  createdBy: string;
  correlationId: string;
}

export class CreateTeamUseCase {
  constructor(
    private readonly teamRepository: ITeamRepository,
    private readonly eventPublisher: TeamEventPublisher
  ) {}

  async execute(dto: CreateTeamDTO): Promise<Team> {
    const slug = generateSlug(dto.name);

    // Check for slug collision
    const existing = await this.teamRepository.findBySlug(dto.organizationId, slug);
    if (existing) {
      throw new ConflictError(`A team with a similar name already exists in this organization`, {
        name: dto.name,
        organizationId: dto.organizationId,
      });
    }

    const input: CreateTeamInput & { slug: string; updatedBy: string } = {
      organizationId: dto.organizationId,
      workspaceId: dto.workspaceId,
      name: dto.name,
      slug,
      description: dto.description,
      color: dto.color,
      iconUrl: dto.iconUrl,
      leadId: dto.leadId,
      isPrivate: dto.isPrivate,
      capacity: dto.capacity,
      createdBy: dto.createdBy,
      updatedBy: dto.createdBy,
    };

    const team = await this.teamRepository.create(input);

    // Invalidate list caches
    await cacheDelete(
      CACHE_KEYS.teamsByOrg(dto.organizationId),
      ...(dto.workspaceId ? [CACHE_KEYS.teamsByWorkspace(dto.workspaceId)] : [])
    );

    // Publish event (fire and forget)
    void this.eventPublisher.publishTeamCreated(
      team.id,
      { teamId: team.id, organizationId: team.organizationId, name: team.name, createdBy: team.createdBy },
      { correlationId: dto.correlationId, userId: dto.createdBy, organizationId: dto.organizationId }
    );

    return team;
  }
}
