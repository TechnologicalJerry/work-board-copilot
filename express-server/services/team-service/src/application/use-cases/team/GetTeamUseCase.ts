import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { TeamWithMemberCount } from '../../../domain/entities/Team';
import { NotFoundError } from '@boardpilot/errors';
import { cacheGet, cacheSet, CACHE_KEYS, CACHE_TTL } from '../../../infrastructure/cache/redis';

export class GetTeamUseCase {
  constructor(private readonly teamRepository: ITeamRepository) {}

  async execute(teamId: string): Promise<TeamWithMemberCount> {
    const cacheKey = CACHE_KEYS.team(teamId);
    const cached = await cacheGet<TeamWithMemberCount>(cacheKey);
    if (cached) return cached;

    const team = await this.teamRepository.findById(teamId);
    if (!team) {
      throw new NotFoundError('Team', teamId);
    }

    await cacheSet(cacheKey, team, CACHE_TTL.team);
    return team;
  }
}
