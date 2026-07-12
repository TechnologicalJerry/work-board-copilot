import { OrgMember, OrgRole } from '../../domain/entities/Organization';
import { IOrgMemberRepository } from '../../domain/repositories/IOrgRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface UpdateMemberRoleInput {
  orgId: string;
  userId: string;
  newRole: OrgRole;
  requesterId: string;
}

export class UpdateMemberRoleUseCase {
  constructor(private readonly memberRepository: IOrgMemberRepository) {}

  async execute(input: UpdateMemberRoleInput): Promise<OrgMember> {
    const { orgId, userId, newRole, requesterId } = input;

    if (userId === requesterId) {
      throw new ForbiddenError('You cannot change your own role');
    }

    const requesterRole = await this.memberRepository.getRole(orgId, requesterId);
    if (requesterRole !== 'OWNER' && requesterRole !== 'ADMIN') {
      throw new ForbiddenError('Only organization owners or admins can update member roles');
    }

    const targetRole = await this.memberRepository.getRole(orgId, userId);
    if (targetRole === null) {
      throw new NotFoundError('OrgMember', `${orgId}/${userId}`);
    }

    if (targetRole === 'OWNER') {
      throw new ForbiddenError('Cannot change the role of the organization owner');
    }

    return this.memberRepository.updateRole(orgId, userId, newRole);
  }
}
