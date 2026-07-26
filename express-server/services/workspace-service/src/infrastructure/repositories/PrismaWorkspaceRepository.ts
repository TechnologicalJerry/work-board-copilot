import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../database/prisma';
import { Prisma } from '../../generated/prisma-client';
import { WorkspaceEntity, WorkspaceMemberEntity, WorkspaceVisibility, WorkspaceRole } from '../../domain/entities/Workspace';
import {
  IWorkspaceRepository,
  CreateWorkspaceData,
  UpdateWorkspaceData,
  WorkspaceFilters,
} from '../../domain/repositories/IWorkspaceRepository';
import { PaginationOptions } from '@boardpilot/types';
import { calculateSkip } from '@boardpilot/common';

type PrismaWorkspace = {
  id: string;
  organizationId: string;
  name: string;
  slug: string;
  description: string | null;
  iconUrl: string | null;
  color: string | null;
  visibility: string;
  settings: unknown;
  ownerId: string;
  createdBy: string;
  updatedBy: string;
  isArchived: boolean;
  archivedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

type PrismaWorkspaceMember = {
  id: string;
  workspaceId: string;
  userId: string;
  role: string;
  addedBy: string;
  createdAt: Date;
  updatedAt: Date;
};

function mapToWorkspaceEntity(
  record: PrismaWorkspace,
  members?: PrismaWorkspaceMember[]
): WorkspaceEntity {
  return new WorkspaceEntity({
    id: record.id,
    organizationId: record.organizationId,
    name: record.name,
    slug: record.slug,
    description: record.description,
    iconUrl: record.iconUrl,
    color: record.color,
    visibility: record.visibility as WorkspaceVisibility,
    settings: (record.settings as Record<string, unknown>) ?? {},
    ownerId: record.ownerId,
    createdBy: record.createdBy,
    updatedBy: record.updatedBy,
    isArchived: record.isArchived,
    archivedAt: record.archivedAt,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
    deletedAt: record.deletedAt,
    members: members?.map(mapToMemberEntity),
  });
}

function mapToMemberEntity(record: PrismaWorkspaceMember): WorkspaceMemberEntity {
  return {
    id: record.id,
    workspaceId: record.workspaceId,
    userId: record.userId,
    role: record.role as WorkspaceRole,
    addedBy: record.addedBy,
    createdAt: record.createdAt,
    updatedAt: record.updatedAt,
  };
}

export class PrismaWorkspaceRepository implements IWorkspaceRepository {
  async findById(id: string): Promise<WorkspaceEntity | null> {
    const record = await prisma.workspace.findFirst({
      where: { id, deletedAt: null },
      include: { members: true },
    });
    if (!record) return null;
    return mapToWorkspaceEntity(
      record as unknown as PrismaWorkspace,
      (record.members ?? []) as unknown as PrismaWorkspaceMember[]
    );
  }

  async findBySlug(organizationId: string, slug: string): Promise<WorkspaceEntity | null> {
    const record = await prisma.workspace.findFirst({
      where: { organizationId, slug, deletedAt: null },
    });
    if (!record) return null;
    return mapToWorkspaceEntity(record as unknown as PrismaWorkspace);
  }

  async findAll(
    organizationId: string,
    filters: WorkspaceFilters,
    pagination: PaginationOptions
  ): Promise<{ workspaces: WorkspaceEntity[]; total: number }> {
    const skip = calculateSkip(pagination.page, pagination.limit);

    const where: Prisma.WorkspaceWhereInput = { organizationId, deletedAt: null };
    if (filters.isArchived !== undefined) where.isArchived = filters.isArchived;
    if (filters.visibility !== undefined) where.visibility = filters.visibility;

    const [records, total] = await Promise.all([
      prisma.workspace.findMany({
        where,
        skip,
        take: pagination.limit,
        orderBy: { createdAt: pagination.sortOrder ?? 'asc' },
      }),
      prisma.workspace.count({
        where,
      }),
    ]);

    return {
      workspaces: records.map((r) => mapToWorkspaceEntity(r as unknown as PrismaWorkspace)),
      total,
    };
  }

  async create(data: CreateWorkspaceData): Promise<WorkspaceEntity> {
    const record = await prisma.workspace.create({
      data: {
        id: uuidv4(),
        organizationId: data.organizationId,
        name: data.name,
        slug: data.slug,
        description: data.description ?? null,
        iconUrl: data.iconUrl ?? null,
        color: data.color ?? null,
        visibility: data.visibility ?? 'PRIVATE',
        settings: (data.settings ?? {}) as Prisma.InputJsonValue,
        ownerId: data.ownerId,
        createdBy: data.createdBy,
        updatedBy: data.updatedBy,
      },
    });
    return mapToWorkspaceEntity(record as unknown as PrismaWorkspace);
  }

  async update(id: string, data: UpdateWorkspaceData): Promise<WorkspaceEntity> {
    const updateData: Record<string, unknown> = { updatedBy: data.updatedBy };
    if (data.name !== undefined) updateData.name = data.name;
    if (data.description !== undefined) updateData.description = data.description;
    if (data.iconUrl !== undefined) updateData.iconUrl = data.iconUrl;
    if (data.color !== undefined) updateData.color = data.color;
    if (data.visibility !== undefined) updateData.visibility = data.visibility;
    if (data.settings !== undefined) updateData.settings = data.settings;

    const record = await prisma.workspace.update({
      where: { id },
      data: updateData,
    });
    return mapToWorkspaceEntity(record as unknown as PrismaWorkspace);
  }

  async archive(id: string, userId: string): Promise<WorkspaceEntity> {
    const record = await prisma.workspace.update({
      where: { id },
      data: { isArchived: true, archivedAt: new Date(), updatedBy: userId },
    });
    return mapToWorkspaceEntity(record as unknown as PrismaWorkspace);
  }

  async softDelete(id: string, userId: string): Promise<WorkspaceEntity> {
    const record = await prisma.workspace.update({
      where: { id },
      data: { deletedAt: new Date(), updatedBy: userId },
    });
    return mapToWorkspaceEntity(record as unknown as PrismaWorkspace);
  }

  async addMember(workspaceId: string, userId: string, role: WorkspaceRole, addedBy: string): Promise<WorkspaceMemberEntity> {
    const record = await prisma.workspaceMember.create({
      data: {
        id: uuidv4(),
        workspaceId,
        userId,
        role,
        addedBy,
      },
    });
    return mapToMemberEntity(record as unknown as PrismaWorkspaceMember);
  }

  async removeMember(workspaceId: string, userId: string): Promise<void> {
    await prisma.workspaceMember.delete({
      where: { workspaceId_userId: { workspaceId, userId } },
    });
  }

  async getMembers(workspaceId: string): Promise<WorkspaceMemberEntity[]> {
    const records = await prisma.workspaceMember.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'asc' },
    });
    return records.map((r) => mapToMemberEntity(r as unknown as PrismaWorkspaceMember));
  }

  async getMemberRole(workspaceId: string, userId: string): Promise<WorkspaceRole | null> {
    const record = await prisma.workspaceMember.findUnique({
      where: { workspaceId_userId: { workspaceId, userId } },
      select: { role: true },
    });
    return record ? (record.role as WorkspaceRole) : null;
  }

  async isMember(workspaceId: string, userId: string): Promise<boolean> {
    const record = await prisma.workspaceMember.findUnique({
      where: { workspaceId_userId: { workspaceId, userId } },
      select: { id: true },
    });
    return record !== null;
  }
}
