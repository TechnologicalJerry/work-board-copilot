import { Organization } from '../../domain/entities/Organization';
import { IOrgRepository, IOrgMemberRepository } from '../../domain/repositories/IOrgRepository';

export interface ListOrgsResult {
  organizations: Organization[];
}

export class ListOrgsUseCase {
  constructor(
    private readonly orgRepository: IOrgRepository,
    private readonly memberRepository: IOrgMemberRepository
  ) {}

  async execute(userId: string): Promise<ListOrgsResult> {
    // Get all memberships for the user, then fetch the orgs
    const memberships = await this.memberRepository.findByUserId(userId);
    if (memberships.length === 0) {
      return { organizations: [] };
    }

    const orgIds = memberships.map((m) => m.organizationId);
    const organizations = await this.orgRepository.findManyByIds(orgIds);

    return { organizations };
  }
}
