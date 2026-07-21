import { ITeamMemberRepository } from '../../../domain/repositories/ITeamMemberRepository';
import { TeamMember } from '../../../domain/entities/TeamMember';
import { TeamRole } from '../../../domain/entities/Team';
import { NotFoundError } from '@boardpilot/errors';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

export interface UpdateMemberDTO {
  teamId: string;
  userId: string;
  role?: TeamRole;
  availability?: number;
  correlationId: string;
}

export class UpdateMemberUseCase {
  constructor(private readonly memberRepository: ITeamMemberRepository) {}

  async execute(dto: UpdateMemberDTO): Promise<TeamMember> {
    // Check member exists
    const existing = await this.memberRepository.findByTeamAndUser(dto.teamId, dto.userId);
    if (!existing) {
      throw new NotFoundError('TeamMember', `${dto.teamId}/${dto.userId}`);
    }

    // Update member
    const updated = await this.memberRepository.update(dto.teamId, dto.userId, {
      role: dto.role,
      availability: dto.availability,
    });

    // Invalidate caches
    await cacheDelete(
      CACHE_KEYS.teamMembers(dto.teamId),
      CACHE_KEYS.teamCapacity(dto.teamId)
    );

    return updated;
  }
}
