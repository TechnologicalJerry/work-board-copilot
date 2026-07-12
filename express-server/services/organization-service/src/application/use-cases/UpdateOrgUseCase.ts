import { Organization } from '../../domain/entities/Organization';
import { IOrgRepository, IOrgMemberRepository, UpdateOrgInput } from '../../domain/repositories/IOrgRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface UpdateOrgUseCaseInput extends UpdateOrgInput {
  orgId: string;
  requesterId: string;
}

export class UpdateOrgUseCase {
  constructor(
    private readonly orgRepository: IOrgRepository,
    private readonly memberRepository: IOrgMemberRepository
  ) {}

  async execute(input: UpdateOrgUseCaseInput): Promise<Organization> {
    const { orgId, requesterId, ...updateData } = input;

    const org = await this.orgRepository.findById(orgId);
    if (!org) {
      throw new NotFoundError('Organization', orgId);
    }

    const role = await this.memberRepository.getRole(orgId, requesterId);
    if (role !== 'OWNER' && role !== 'ADMIN') {
      throw new ForbiddenError('Only organization admins or owners can update the organization');
    }

    return this.orgRepository.update(orgId, updateData);
  }
}
