import { prisma } from '../database/prisma';
import { ITeamRepository, TeamFilter } from '../../domain/repositories/ITeamRepository';
import { Team, CreateTeamInput, UpdateTeamInput, TeamWithMemberCount } from '../../domain/entities/Team';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';

export class PrismaTeamRepository implements ITeamRepository {
  async create(input: CreateTeamInput & { slug: string; updatedBy: string }): Promise<Team> {
    return prisma.team.create({
      data: {
        organizationId: input.organizationId,
        workspaceId: input.workspaceId,
        name: input.name,
        slug: input.slug,
        description: input.description,
        color: input.color,
        iconUrl: input.iconUrl,
        leadId: input.leadId,
        isPrivate: input.isPrivate ?? false,
        capacity: input.capacity,
        createdBy: input.createdBy,
        updatedBy: input.updatedBy,
      },
    }) as Promise<Team>;
  }

  async findById(id: string): Promise<TeamWithMemberCount | null> {
    const team = await prisma.team.findFirst({
      where: { id, deletedAt: null },
      include: {
        _count: {
          select: { members: true },
        },
      },
    });
    return team as TeamWithMemberCount | null;
  }

  async findBySlug(organizationId: string, slug: string): Promise<Team | null> {
    return prisma.team.findFirst({
      where: { organizationId, slug, deletedAt: null },
    }) as Promise<Team | null>;
  }

  async findMany(filter: TeamFilter, options: PaginationOptions): Promise<PaginatedResult<TeamWithMemberCount>> {
    const { page, limit, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    const skip = calculateSkip(page, limit);

    const where = {
      deletedAt: null,
      ...(filter.organizationId && { organizationId: filter.organizationId }),
      ...(filter.workspaceId && { workspaceId: filter.workspaceId }),
      ...(filter.isPrivate !== undefined && { isPrivate: filter.isPrivate }),
      ...(filter.search && {
        OR: [
          { name: { contains: filter.search, mode: 'insensitive' as const } },
          { description: { contains: filter.search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.team.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          _count: {
            select: { members: true },
          },
        },
      }),
      prisma.team.count({ where }),
    ]);

    return buildPaginatedResult(data as TeamWithMemberCount[], total, options);
  }

  async update(id: string, input: UpdateTeamInput): Promise<Team> {
    return prisma.team.update({
      where: { id },
      data: {
        ...(input.name && { name: input.name }),
        ...(input.description !== undefined && { description: input.description }),
        ...(input.color !== undefined && { color: input.color }),
        ...(input.iconUrl !== undefined && { iconUrl: input.iconUrl }),
        ...(input.leadId !== undefined && { leadId: input.leadId }),
        ...(input.isPrivate !== undefined && { isPrivate: input.isPrivate }),
        ...(input.capacity !== undefined && { capacity: input.capacity }),
        updatedBy: input.updatedBy,
      },
    }) as Promise<Team>;
  }

  async softDelete(id: string, deletedBy: string): Promise<Team> {
    return prisma.team.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        updatedBy: deletedBy,
      },
    }) as Promise<Team>;
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.team.count({
      where: { id, deletedAt: null },
    });
    return count > 0;
  }
}
