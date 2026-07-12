import { Organization } from '../../domain/entities/Organization';
import { IOrgRepository } from '../../domain/repositories/IOrgRepository';
import { NotFoundError } from '@boardpilot/errors';

export class GetOrgUseCase {
  constructor(private readonly orgRepository: IOrgRepository) {}

  async execute(orgId: string): Promise<Organization> {
    const org = await this.orgRepository.findById(orgId);
    if (!org) {
      throw new NotFoundError('Organization', orgId);
    }
    return org;
  }
}
