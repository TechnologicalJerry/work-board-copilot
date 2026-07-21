import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { ITeamMemberRepository } from '../../../domain/repositories/ITeamMemberRepository';
import { CapacityReport } from '../../../domain/entities/TeamMember';
import { NotFoundError } from '@boardpilot/errors';
import { cacheGet, cacheSet, CACHE_KEYS, CACHE_TTL } from '../../../infrastructure/cache/redis';

export class GetCapacityUseCase {
  constructor(
    private readonly teamRepository: ITeamRepository,
    private readonly memberRepository: ITeamMemberRepository
  ) {}

  async execute(teamId: string): Promise<CapacityReport> {
    const cacheKey = CACHE_KEYS.teamCapacity(teamId);
    const cached = await cacheGet<CapacityReport>(cacheKey);
    if (cached) return cached;

    const team = await this.teamRepository.findById(teamId);
    if (!team) {
      throw new NotFoundError('Team', teamId);
    }

    const members = await this.memberRepository.findAllByTeam(teamId);

    const totalCapacity = members.reduce((sum, m) => sum + m.availability, 0);
    const usedCapacity = 0; // No sprint data available in this service
    const availableCapacity = totalCapacity - usedCapacity;

    const report: CapacityReport = {
      teamId: team.id,
      teamName: team.name,
      totalCapacity,
      usedCapacity,
      availableCapacity,
      memberCount: members.length,
      members: members.map((m) => ({
        userId: m.userId,
        role: m.role,
        availability: m.availability,
        usedCapacity: 0,
      })),
    };

    await cacheSet(cacheKey, report, CACHE_TTL.capacity);

    return report;
  }
}
