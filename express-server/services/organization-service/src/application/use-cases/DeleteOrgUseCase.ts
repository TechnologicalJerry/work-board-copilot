import { IOrgRepository } from '../../domain/repositories/IOrgRepository';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';

export interface DeleteOrgInput {
  orgId: string;
  requesterId: string;
}

export class DeleteOrgUseCase {
  constructor(private readonly orgRepository: IOrgRepository) {}

  async execute(input: DeleteOrgInput): Promise<void> {
    const { orgId, requesterId } = input;

    const org = await this.orgRepository.findById(orgId);
    if (!org) {
      throw new NotFoundError('Organization', orgId);
    }

    if (org.ownerId !== requesterId) {
      throw new ForbiddenError('Only the organization owner can delete the organization');
    }

    await this.orgRepository.softDelete(orgId);
  }
}
