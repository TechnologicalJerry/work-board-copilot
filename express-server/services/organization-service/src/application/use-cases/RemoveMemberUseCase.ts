import { IOrgRepository, IOrgMemberRepository } from '../../domain/repositories/IOrgRepository';
import { OrgEventPublisher } from '../../infrastructure/events/OrgEventPublisher';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface RemoveMemberInput {
  orgId: string;
  userId: string;
  requesterId: string;
}

export class RemoveMemberUseCase {
  constructor(
    private readonly orgRepository: IOrgRepository,
    private readonly memberRepository: IOrgMemberRepository,
    private readonly eventPublisher: OrgEventPublisher
  ) {}

  async execute(input: RemoveMemberInput): Promise<void> {
    const { orgId, userId, requesterId } = input;

    const org = await this.orgRepository.findById(orgId);
    if (!org) {
      throw new NotFoundError('Organization', orgId);
    }

    if (org.ownerId === userId) {
      throw new ForbiddenError('Cannot remove the organization owner');
    }

    if (userId === requesterId) {
      throw new ForbiddenError('Cannot remove yourself from the organization. Use the leave endpoint instead.');
    }

    const requesterRole = await this.memberRepository.getRole(orgId, requesterId);
    if (requesterRole !== 'OWNER' && requesterRole !== 'ADMIN') {
      throw new ForbiddenError('Only organization owners or admins can remove members');
    }

    const targetRole = await this.memberRepository.getRole(orgId, userId);
    if (targetRole === null) {
      throw new NotFoundError('OrgMember', `${orgId}/${userId}`);
    }

    await this.memberRepository.remove(orgId, userId);
    await this.eventPublisher.publishMemberRemoved(orgId, userId, requesterId);
  }
}
