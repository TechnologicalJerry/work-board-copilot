import { OrgMember, OrgRole } from '../../domain/entities/Organization';
import { IOrgRepository, IOrgMemberRepository } from '../../domain/repositories/IOrgRepository';
import { OrgEventPublisher } from '../../infrastructure/events/OrgEventPublisher';
import { NotFoundError, ConflictError, TooManyRequestsError } from '@boardpilot/errors';

export interface InviteMemberInput {
  orgId: string;
  userId: string;
  role: OrgRole;
  invitedBy: string;
}

export class InviteMemberUseCase {
  constructor(
    private readonly orgRepository: IOrgRepository,
    private readonly memberRepository: IOrgMemberRepository,
    private readonly eventPublisher: OrgEventPublisher
  ) {}

  async execute(input: InviteMemberInput): Promise<OrgMember> {
    const { orgId, userId, role, invitedBy } = input;

    const org = await this.orgRepository.findById(orgId);
    if (!org) {
      throw new NotFoundError('Organization', orgId);
    }

    const alreadyMember = await this.memberRepository.isMember(orgId, userId);
    if (alreadyMember) {
      throw new ConflictError('User is already a member of this organization');
    }

    const currentCount = await this.memberRepository.count(orgId);
    if (currentCount >= org.maxMembers) {
      throw new TooManyRequestsError(
        `Organization has reached the maximum member limit of ${org.maxMembers} for the ${org.plan} plan`
      );
    }

    const member = await this.memberRepository.add(orgId, userId, role, invitedBy);

    await this.eventPublisher.publishMemberAdded(orgId, userId, role, invitedBy);

    return member;
  }
}
