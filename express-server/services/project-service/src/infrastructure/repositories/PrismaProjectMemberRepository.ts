import { PrismaClient } from '../../generated/prisma-client';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { ProjectMember, AddMemberInput, UpdateMemberInput } from '../../domain/entities/ProjectMember';
import { IProjectMemberRepository } from '../../domain/repositories/IProjectMemberRepository';

export class PrismaProjectMemberRepository implements IProjectMemberRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async add(input: AddMemberInput): Promise<ProjectMember> {
    const member = await this.prisma.projectMember.create({
      data: {
        projectId: input.projectId,
        userId: input.userId,
        role: input.role ?? 'MEMBER',
        addedBy: input.addedBy,
      },
    });
    return this.mapMember(member);
  }

  async findById(id: string): Promise<ProjectMember | null> {
    const member = await this.prisma.projectMember.findUnique({
      where: { id },
    });
    return member ? this.mapMember(member) : null;
  }

  async findByProjectAndUser(projectId: string, userId: string): Promise<ProjectMember | null> {
    const member = await this.prisma.projectMember.findUnique({
      where: {
        projectId_userId: { projectId, userId },
      },
    });
    return member ? this.mapMember(member) : null;
  }

  async findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<ProjectMember>> {
    const skip = calculateSkip(options.page, options.limit);

    const [data, total] = await Promise.all([
      this.prisma.projectMember.findMany({
        where: { projectId },
        skip,
        take: options.limit,
        orderBy: { [options.sortBy ?? 'createdAt']: options.sortOrder ?? 'asc' },
      }),
      this.prisma.projectMember.count({ where: { projectId } }),
    ]);

    return buildPaginatedResult(data.map((m) => this.mapMember(m)), total, options);
  }

  async update(projectId: string, userId: string, input: UpdateMemberInput): Promise<ProjectMember> {
    const member = await this.prisma.projectMember.update({
      where: {
        projectId_userId: { projectId, userId },
      },
      data: {
        role: input.role,
      },
    });
    return this.mapMember(member);
  }

  async remove(projectId: string, userId: string): Promise<void> {
    await this.prisma.projectMember.delete({
      where: {
        projectId_userId: { projectId, userId },
      },
    });
  }

  async countByProject(projectId: string): Promise<number> {
    return this.prisma.projectMember.count({ where: { projectId } });
  }

  private mapMember(raw: {
    id: string;
    projectId: string;
    userId: string;
    role: string;
    addedBy: string;
    createdAt: Date;
    updatedAt: Date;
  }): ProjectMember {
    return {
      id: raw.id,
      projectId: raw.projectId,
      userId: raw.userId,
      role: raw.role as ProjectMember['role'],
      addedBy: raw.addedBy,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
