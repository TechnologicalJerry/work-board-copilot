import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { Team, UpdateTeamInput } from '../../../domain/entities/Team';
import { NotFoundError } from '@boardpilot/errors';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

export interface UpdateTeamDTO extends Omit<UpdateTeamInput, 'updatedBy'> {
  teamId: string;
  updatedBy: string;
}

export class UpdateTeamUseCase {
  constructor(private readonly teamRepository: ITeamRepository) {}

  async execute(dto: UpdateTeamDTO): Promise<Team> {
    const existing = await this.teamRepository.findById(dto.teamId);
    if (!existing) {
      throw new NotFoundError('Team', dto.teamId);
    }

    const updated = await this.teamRepository.update(dto.teamId, {
      name: dto.name,
      description: dto.description,
      color: dto.color,
      iconUrl: dto.iconUrl,
      leadId: dto.leadId,
      isPrivate: dto.isPrivate,
      capacity: dto.capacity,
      updatedBy: dto.updatedBy,
    });

    // Invalidate caches
    await cacheDelete(
      CACHE_KEYS.team(dto.teamId),
      CACHE_KEYS.teamsByOrg(existing.organizationId),
      ...(existing.workspaceId ? [CACHE_KEYS.teamsByWorkspace(existing.workspaceId)] : [])
    );

    return updated;
  }
}
