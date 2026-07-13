import { OrgMember, OrgRole } from '../../generated/prisma-client';
import { PaginationOptions, PaginatedResult } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { prisma } from '../database/prisma';

export class PrismaOrgMemberRepository {
  async findAll(orgId: string, options: PaginationOptions): Promise<PaginatedResult<OrgMember>> {
    const skip = calculateSkip(options.page, options.limit);
    const [data, total] = await Promise.all([
      prisma.orgMember.findMany({
        where: { organizationId: orgId },
        skip,
        take: options.limit,
        orderBy: { joinedAt: 'asc' },
      }),
      prisma.orgMember.count({ where: { organizationId: orgId } }),
    ]);
    return buildPaginatedResult(data, total, options);
  }

  async findByUserId(userId: string): Promise<OrgMember[]> {
    return prisma.orgMember.findMany({
      where: { userId },
      orderBy: { joinedAt: 'asc' },
    });
  }

  async add(
    orgId: string,
    userId: string,
    role: OrgRole,
    invitedBy?: string
  ): Promise<OrgMember> {
    return prisma.orgMember.create({
      data: {
        organizationId: orgId,
        userId,
        role,
        invitedBy: invitedBy ?? null,
      },
    });
  }

  async updateRole(orgId: string, userId: string, role: OrgRole): Promise<OrgMember> {
    return prisma.orgMember.update({
      where: { organizationId_userId: { organizationId: orgId, userId } },
      data: { role },
    });
  }

  async remove(orgId: string, userId: string): Promise<void> {
    await prisma.orgMember.delete({
      where: { organizationId_userId: { organizationId: orgId, userId } },
    });
  }

  async isMember(orgId: string, userId: string): Promise<boolean> {
    const member = await prisma.orgMember.findUnique({
      where: { organizationId_userId: { organizationId: orgId, userId } },
      select: { id: true },
    });
    return member !== null;
  }

  async getRole(orgId: string, userId: string): Promise<OrgRole | null> {
    const member = await prisma.orgMember.findUnique({
      where: { organizationId_userId: { organizationId: orgId, userId } },
      select: { role: true },
    });
    return member?.role ?? null;
  }

  async count(orgId: string): Promise<number> {
    return prisma.orgMember.count({ where: { organizationId: orgId } });
  }
}
