import { Organization as PrismaOrganization, Prisma } from '../../generated/prisma-client';
import { prisma } from '../database/prisma';
import { Organization } from '../../domain/entities/Organization';

function toDomain(org: PrismaOrganization): Organization {
  return {
    ...org,
    settings: (org.settings ?? {}) as Record<string, unknown>,
  } as Organization;
}

export class PrismaOrgRepository {
  async findById(id: string): Promise<Organization | null> {
    const org = await prisma.organization.findFirst({
      where: { id, deletedAt: null },
    });
    return org ? toDomain(org) : null;
  }

  async findBySlug(slug: string): Promise<Organization | null> {
    const org = await prisma.organization.findFirst({
      where: { slug, deletedAt: null },
    });
    return org ? toDomain(org) : null;
  }

  async findByOwner(ownerId: string): Promise<Organization[]> {
    const orgs = await prisma.organization.findMany({
      where: { ownerId, deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
    return orgs.map(toDomain);
  }

  async create(data: {
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
  }): Promise<Organization> {
    const org = await prisma.organization.create({ data });
    return toDomain(org);
  }

  async update(
    id: string,
    data: Partial<{
      name: string;
      slug: string;
      description: string | null;
      domain: string | null;
      logoUrl: string | null;
      website: string | null;
      industry: string | null;
      size: string | null;
      country: string | null;
      timezone: string;
      plan: 'FREE' | 'STARTER' | 'PROFESSIONAL' | 'ENTERPRISE';
      settings: Record<string, unknown>;
      maxMembers: number;
      maxProjects: number;
    }>
  ): Promise<Organization> {
    const { settings, ...rest } = data;
    const org = await prisma.organization.update({
      where: { id },
      data: {
        ...rest,
        ...(settings !== undefined ? { settings: settings as Prisma.InputJsonValue } : {}),
      },
    });
    return toDomain(org);
  }

  async softDelete(id: string): Promise<Organization> {
    const org = await prisma.organization.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        status: 'DELETED',
      },
    });
    return toDomain(org);
  }

  async findManyByIds(ids: string[]): Promise<Organization[]> {
    const orgs = await prisma.organization.findMany({
      where: { id: { in: ids }, deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
    return orgs.map(toDomain);
  }
}
