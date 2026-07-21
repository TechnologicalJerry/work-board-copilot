import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { NotFoundError } from '@boardpilot/errors';
import { TeamEventPublisher } from '../../../infrastructure/events/TeamEventPublisher';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

export interface DeleteTeamDTO {
  teamId: string;
  deletedBy: string;
  correlationId: string;
}

export class DeleteTeamUseCase {
  constructor(
    private readonly teamRepository: ITeamRepository,
    private readonly eventPublisher: TeamEventPublisher
  ) {}

  async execute(dto: DeleteTeamDTO): Promise<void> {
    const team = await this.teamRepository.findById(dto.teamId);
    if (!team) {
      throw new NotFoundError('Team', dto.teamId);
    }

    await this.teamRepository.softDelete(dto.teamId, dto.deletedBy);

    // Invalidate caches
    await cacheDelete(
      CACHE_KEYS.team(dto.teamId),
      CACHE_KEYS.teamsByOrg(team.organizationId),
      ...(team.workspaceId ? [CACHE_KEYS.teamsByWorkspace(team.workspaceId)] : [])
    );

    // Publish event (fire and forget)
    void this.eventPublisher.publishTeamDeleted(
      dto.teamId,
      { teamId: dto.teamId, organizationId: team.organizationId, deletedBy: dto.deletedBy },
      { correlationId: dto.correlationId, userId: dto.deletedBy, organizationId: team.organizationId }
    );
  }
}
