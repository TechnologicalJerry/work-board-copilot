import { OrgMember } from '../../domain/entities/Organization';
import { IOrgMemberRepository } from '../../domain/repositories/IOrgRepository';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';

export interface GetOrgMembersInput {
  orgId: string;
  pagination: PaginationOptions;
}

export class GetOrgMembersUseCase {
  constructor(private readonly memberRepository: IOrgMemberRepository) {}

  async execute(input: GetOrgMembersInput): Promise<PaginatedResult<OrgMember>> {
    return this.memberRepository.findAll(input.orgId, input.pagination);
  }
}
