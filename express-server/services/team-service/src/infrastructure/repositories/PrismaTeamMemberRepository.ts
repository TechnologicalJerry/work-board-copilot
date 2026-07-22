import { prisma } from '../database/prisma';
import { ITeamMemberRepository } from '../../domain/repositories/ITeamMemberRepository';
import { TeamMember, CreateTeamMemberInput, UpdateTeamMemberInput } from '../../domain/entities/TeamMember';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';

export class PrismaTeamMemberRepository implements ITeamMemberRepository {
  async create(input: CreateTeamMemberInput): Promise<TeamMember> {
    return prisma.teamMember.create({
      data: {
        teamId: input.teamId,
        userId: input.userId,
        role: input.role ?? 'MEMBER',
        availability: input.availability ?? 100,
        addedBy: input.addedBy,
      },
    }) as Promise<TeamMember>;
  }

  async findById(id: string): Promise<TeamMember | null> {
    return prisma.teamMember.findUnique({
      where: { id },
    }) as Promise<TeamMember | null>;
  }

  async findByTeamAndUser(teamId: string, userId: string): Promise<TeamMember | null> {
    return prisma.teamMember.findUnique({
      where: {
        teamId_userId: { teamId, userId },
      },
    }) as Promise<TeamMember | null>;
  }

  async findManyByTeam(teamId: string, options: PaginationOptions): Promise<PaginatedResult<TeamMember>> {
    const { page, limit, sortBy = 'joinedAt', sortOrder = 'asc' } = options;
    const skip = calculateSkip(page, limit);

    const [data, total] = await Promise.all([
      prisma.teamMember.findMany({
        where: { teamId },
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      prisma.teamMember.count({ where: { teamId } }),
    ]);

    return buildPaginatedResult(data as TeamMember[], total, options);
  }

  async findAllByTeam(teamId: string): Promise<TeamMember[]> {
    return prisma.teamMember.findMany({
      where: { teamId },
      orderBy: { joinedAt: 'asc' },
    }) as Promise<TeamMember[]>;
  }

  async update(teamId: string, userId: string, input: UpdateTeamMemberInput): Promise<TeamMember> {
    return prisma.teamMember.update({
      where: {
        teamId_userId: { teamId, userId },
      },
      data: {
        ...(input.role && { role: input.role }),
        ...(input.availability !== undefined && { availability: input.availability }),
      },
    }) as Promise<TeamMember>;
  }

  async remove(teamId: string, userId: string): Promise<void> {
    await prisma.teamMember.delete({
      where: {
        teamId_userId: { teamId, userId },
      },
    });
  }

  async countByTeam(teamId: string): Promise<number> {
    return prisma.teamMember.count({ where: { teamId } });
  }
}
