import { Organization, OrgRole } from '../../domain/entities/Organization';
import { IOrgRepository, IOrgMemberRepository } from '../../domain/repositories/IOrgRepository';
import { OrgEventPublisher } from '../../infrastructure/events/OrgEventPublisher';
import { ConflictError } from '@boardpilot/errors';
import { generateSlug, generateUniqueSlug } from '@boardpilot/common';

export interface CreateOrgInput {
  name: string;
  description?: string;
  domain?: string;
  website?: string;
  industry?: string;
  size?: string;
  country?: string;
  timezone?: string;
  plan?: 'FREE' | 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE';
  ownerId: string;
}

export class CreateOrgUseCase {
  constructor(
    private readonly orgRepository: IOrgRepository,
    private readonly memberRepository: IOrgMemberRepository,
    private readonly eventPublisher: OrgEventPublisher
  ) {}

  async execute(input: CreateOrgInput): Promise<Organization> {
    const { ownerId, ...rest } = input;

    // Generate a unique slug
    let slug = generateSlug(input.name);
    const existing = await this.orgRepository.findBySlug(slug);
    if (existing) {
      const suffix = Math.random().toString(36).slice(2, 6);
      slug = generateUniqueSlug(input.name, suffix);
      const stillExists = await this.orgRepository.findBySlug(slug);
      if (stillExists) {
        throw new ConflictError(`Organization slug '${slug}' is already taken. Try a different name.`);
      }
    }

    const org = await this.orgRepository.create({
      ...rest,
      slug,
      ownerId,
    });

    // Add creator as OWNER member
    await this.memberRepository.add(org.id, ownerId, 'OWNER' as OrgRole);

    await this.eventPublisher.publishOrgCreated(org, ownerId);

    return org;
  }
}
