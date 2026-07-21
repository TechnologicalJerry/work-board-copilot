import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { ITeamMemberRepository } from '../../../domain/repositories/ITeamMemberRepository';
import { NotFoundError } from '@boardpilot/errors';
import { TeamEventPublisher } from '../../../infrastructure/events/TeamEventPublisher';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

export interface RemoveMemberDTO {
  teamId: string;
  userId: string;
  removedBy: string;
  correlationId: string;
}

export class RemoveMemberUseCase {
  constructor(
    private readonly teamRepository: ITeamRepository,
    private readonly memberRepository: ITeamMemberRepository,
    private readonly eventPublisher: TeamEventPublisher
  ) {}

  async execute(dto: RemoveMemberDTO): Promise<void> {
    // Check member exists
    const member = await this.memberRepository.findByTeamAndUser(dto.teamId, dto.userId);
    if (!member) {
      throw new NotFoundError('TeamMember', `${dto.teamId}/${dto.userId}`);
    }

    // Get team for organizationId (needed for event metadata)
    const team = await this.teamRepository.findById(dto.teamId);

    // Remove member
    await this.memberRepository.remove(dto.teamId, dto.userId);

    // Invalidate caches
    await cacheDelete(
      CACHE_KEYS.teamMembers(dto.teamId),
      CACHE_KEYS.teamCapacity(dto.teamId)
    );

    // Publish event (fire and forget)
    void this.eventPublisher.publishMemberRemoved(
      dto.teamId,
      {
        teamId: dto.teamId,
        userId: dto.userId,
        removedBy: dto.removedBy,
      },
      {
        correlationId: dto.correlationId,
        userId: dto.removedBy,
        organizationId: team?.organizationId,
      }
    );
  }
}
