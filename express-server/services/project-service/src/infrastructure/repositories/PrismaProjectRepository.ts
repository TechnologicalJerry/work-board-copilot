import { PrismaClient, Prisma } from '../../generated/prisma-client';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import {
  Project,
  CreateProjectInput,
  UpdateProjectInput,
  ListProjectsFilter,
} from '../../domain/entities/Project';
import { IProjectRepository } from '../../domain/repositories/IProjectRepository';

export class PrismaProjectRepository implements IProjectRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateProjectInput): Promise<Project> {
    const project = await this.prisma.project.create({
      data: {
        organizationId: input.organizationId,
        workspaceId: input.workspaceId,
        key: input.key!,
        name: input.name,
        slug: input.slug!,
        description: input.description,
        iconUrl: input.iconUrl,
        color: input.color,
        type: input.type ?? 'SCRUM',
        status: input.status ?? 'ACTIVE',
        visibility: input.visibility ?? 'PRIVATE',
        ownerId: input.ownerId,
        leadId: input.leadId,
        startDate: input.startDate,
        targetDate: input.targetDate,
        settings: (input.settings as Prisma.InputJsonValue) ?? {},
        createdBy: input.createdBy,
        updatedBy: input.updatedBy,
      },
    });
    return this.mapProject(project);
  }

  async findById(id: string): Promise<Project | null> {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });
    return project ? this.mapProject(project) : null;
  }

  async findByIdWithCounts(id: string): Promise<Project | null> {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        _count: {
          select: { members: true, labels: true },
        },
      },
    });
    if (!project) return null;
    return this.mapProject(project);
  }

  async findAll(
    filter: ListProjectsFilter,
    options: PaginationOptions
  ): Promise<PaginatedResult<Project>> {
    const where: Prisma.ProjectWhereInput = {
      deletedAt: null,
    };

    if (filter.organizationId) where.organizationId = filter.organizationId;
    if (filter.workspaceId) where.workspaceId = filter.workspaceId;
    if (filter.status) where.status = filter.status;
    if (filter.type) where.type = filter.type;
    if (filter.ownerId) where.ownerId = filter.ownerId;
    if (filter.search) {
      where.OR = [
        { name: { contains: filter.search, mode: 'insensitive' } },
        { description: { contains: filter.search, mode: 'insensitive' } },
        { key: { contains: filter.search, mode: 'insensitive' } },
      ];
    }

    const skip = calculateSkip(options.page, options.limit);
    const orderBy: Prisma.ProjectOrderByWithRelationInput = {
      [options.sortBy ?? 'createdAt']: options.sortOrder ?? 'desc',
    };

    const [data, total] = await Promise.all([
      this.prisma.project.findMany({
        where,
        skip,
        take: options.limit,
        orderBy,
      }),
      this.prisma.project.count({ where }),
    ]);

    return buildPaginatedResult(data.map((p) => this.mapProject(p)), total, options);
  }

  async update(id: string, input: UpdateProjectInput): Promise<Project> {
    const updateData: Prisma.ProjectUpdateInput = {
      updatedBy: input.updatedBy,
    };

    if (input.name !== undefined) updateData.name = input.name;
    if (input.description !== undefined) updateData.description = input.description;
    if (input.iconUrl !== undefined) updateData.iconUrl = input.iconUrl;
    if (input.color !== undefined) updateData.color = input.color;
    if (input.type !== undefined) updateData.type = input.type;
    if (input.status !== undefined) updateData.status = input.status;
    if (input.visibility !== undefined) updateData.visibility = input.visibility;
    if (input.leadId !== undefined) updateData.leadId = input.leadId;
    if (input.startDate !== undefined) updateData.startDate = input.startDate;
    if (input.targetDate !== undefined) updateData.targetDate = input.targetDate;
    if (input.completedAt !== undefined) updateData.completedAt = input.completedAt;
    if (input.settings !== undefined) {
      updateData.settings = input.settings as Prisma.InputJsonValue;
    }

    const project = await this.prisma.project.update({
      where: { id },
      data: updateData,
    });
    return this.mapProject(project);
  }

  async archive(id: string, updatedBy: string): Promise<Project> {
    const project = await this.prisma.project.update({
      where: { id },
      data: {
        status: 'ARCHIVED',
        deletedAt: new Date(),
        updatedBy,
      },
    });
    return this.mapProject(project);
  }

  async existsByOrgAndKey(organizationId: string, key: string): Promise<boolean> {
    const count = await this.prisma.project.count({
      where: { organizationId, key },
    });
    return count > 0;
  }

  async existsByWorkspaceAndSlug(workspaceId: string, slug: string): Promise<boolean> {
    const count = await this.prisma.project.count({
      where: { workspaceId, slug },
    });
    return count > 0;
  }

  private mapProject(
    raw: Prisma.ProjectGetPayload<{ include: { _count: { select: { members: true; labels: true } } } }> | Prisma.ProjectGetPayload<Record<string, never>>
  ): Project {
    const project = raw as Prisma.ProjectGetPayload<{
      include: { _count: { select: { members: true; labels: true } } };
    }>;
    return {
      id: project.id,
      organizationId: project.organizationId,
      workspaceId: project.workspaceId,
      key: project.key,
      name: project.name,
      slug: project.slug,
      description: project.description,
      iconUrl: project.iconUrl,
      color: project.color,
      type: project.type as Project['type'],
      status: project.status as Project['status'],
      visibility: project.visibility as Project['visibility'],
      ownerId: project.ownerId,
      leadId: project.leadId,
      startDate: project.startDate,
      targetDate: project.targetDate,
      completedAt: project.completedAt,
      settings: (project.settings as Record<string, unknown>) ?? {},
      createdBy: project.createdBy,
      updatedBy: project.updatedBy,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      deletedAt: project.deletedAt,
      _count: project._count,
    };
  }
}
