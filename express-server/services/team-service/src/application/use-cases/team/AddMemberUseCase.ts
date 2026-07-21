import { ITeamRepository } from '../../../domain/repositories/ITeamRepository';
import { ITeamMemberRepository } from '../../../domain/repositories/ITeamMemberRepository';
import { TeamMember } from '../../../domain/entities/TeamMember';
import { TeamRole } from '../../../domain/entities/Team';
import { NotFoundError, ConflictError } from '@boardpilot/errors';
import { TeamEventPublisher } from '../../../infrastructure/events/TeamEventPublisher';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

export interface AddMemberDTO {
  teamId: string;
  userId: string;
  role?: TeamRole;
  availability?: number;
  addedBy: string;
  correlationId: string;
}

export class AddMemberUseCase {
  constructor(
    private readonly teamRepository: ITeamRepository,
    private readonly memberRepository: ITeamMemberRepository,
    private readonly eventPublisher: TeamEventPublisher
  ) {}

  async execute(dto: AddMemberDTO): Promise<TeamMember> {
    // Verify team exists
    const team = await this.teamRepository.findById(dto.teamId);
    if (!team) {
      throw new NotFoundError('Team', dto.teamId);
    }

    // Check user not already a member
    const existing = await this.memberRepository.findByTeamAndUser(dto.teamId, dto.userId);
    if (existing) {
      throw new ConflictError('User is already a member of this team', {
        teamId: dto.teamId,
        userId: dto.userId,
      });
    }

    // Create member
    const member = await this.memberRepository.create({
      teamId: dto.teamId,
      userId: dto.userId,
      role: dto.role ?? 'MEMBER',
      availability: dto.availability ?? 100,
      addedBy: dto.addedBy,
    });

    // Invalidate caches
    await cacheDelete(
      CACHE_KEYS.teamMembers(dto.teamId),
      CACHE_KEYS.teamCapacity(dto.teamId)
    );

    // Publish event (fire and forget)
    void this.eventPublisher.publishMemberAdded(
      dto.teamId,
      {
        teamId: dto.teamId,
        userId: dto.userId,
        role: member.role,
        addedBy: dto.addedBy,
      },
      {
        correlationId: dto.correlationId,
        userId: dto.addedBy,
        organizationId: team.organizationId,
      }
    );

    return member;
  }
}
