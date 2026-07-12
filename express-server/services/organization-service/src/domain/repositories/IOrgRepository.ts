import { Organization, OrgMember, OrgRole, PlanType } from '../entities/Organization';
import { PaginationOptions, PaginatedResult } from '@boardpilot/types';

export interface CreateOrgInput {
  name: string;
  slug: string;
  ownerId: string;
  description?: string;
  domain?: string;
  website?: string;
  industry?: string;
  size?: string;
  country?: string;
  timezone?: string;
  plan?: 'FREE' | 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE';
}

export interface UpdateOrgInput {
  name?: string;
  slug?: string;
  description?: string | null;
  domain?: string | null;
  logoUrl?: string | null;
  website?: string | null;
  industry?: string | null;
  size?: string | null;
  country?: string | null;
  timezone?: string;
  plan?: PlanType;
  settings?: Record<string, unknown>;
  maxMembers?: number;
  maxProjects?: number;
}

export interface IOrgRepository {
  findById(id: string): Promise<Organization | null>;
  findBySlug(slug: string): Promise<Organization | null>;
  findByOwner(ownerId: string): Promise<Organization[]>;
  findManyByIds(ids: string[]): Promise<Organization[]>;
  create(data: CreateOrgInput): Promise<Organization>;
  update(id: string, data: UpdateOrgInput): Promise<Organization>;
  softDelete(id: string): Promise<Organization>;
}

export interface IOrgMemberRepository {
  findAll(orgId: string, options: PaginationOptions): Promise<PaginatedResult<OrgMember>>;
  findByUserId(userId: string): Promise<OrgMember[]>;
  add(orgId: string, userId: string, role: OrgRole, invitedBy?: string): Promise<OrgMember>;
  updateRole(orgId: string, userId: string, role: OrgRole): Promise<OrgMember>;
  remove(orgId: string, userId: string): Promise<void>;
  isMember(orgId: string, userId: string): Promise<boolean>;
  getRole(orgId: string, userId: string): Promise<OrgRole | null>;
  count(orgId: string): Promise<number>;
}
