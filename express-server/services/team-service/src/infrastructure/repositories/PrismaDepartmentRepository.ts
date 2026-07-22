import { prisma } from '../database/prisma';
import { IDepartmentRepository, DepartmentFilter } from '../../domain/repositories/IDepartmentRepository';
import { Department, CreateDepartmentInput, UpdateDepartmentInput } from '../../domain/entities/Department';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';

export class PrismaDepartmentRepository implements IDepartmentRepository {
  async create(input: CreateDepartmentInput & { slug: string }): Promise<Department> {
    return prisma.department.create({
      data: {
        organizationId: input.organizationId,
        name: input.name,
        slug: input.slug,
        description: input.description,
        headId: input.headId,
        createdBy: input.createdBy,
      },
    }) as Promise<Department>;
  }

  async findById(id: string): Promise<Department | null> {
    return prisma.department.findFirst({
      where: { id, deletedAt: null },
    }) as Promise<Department | null>;
  }

  async findBySlug(organizationId: string, slug: string): Promise<Department | null> {
    return prisma.department.findFirst({
      where: { organizationId, slug, deletedAt: null },
    }) as Promise<Department | null>;
  }

  async findMany(filter: DepartmentFilter, options: PaginationOptions): Promise<PaginatedResult<Department>> {
    const { page, limit, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    const skip = calculateSkip(page, limit);

    const where = {
      deletedAt: null,
      ...(filter.organizationId && { organizationId: filter.organizationId }),
      ...(filter.search && {
        OR: [
          { name: { contains: filter.search, mode: 'insensitive' as const } },
          { description: { contains: filter.search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [data, total] = await Promise.all([
      prisma.department.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
      }),
      prisma.department.count({ where }),
    ]);

    return buildPaginatedResult(data as Department[], total, options);
  }

  async update(id: string, input: UpdateDepartmentInput & { slug?: string }): Promise<Department> {
    return prisma.department.update({
      where: { id },
      data: {
        ...(input.name && { name: input.name }),
        ...(input.slug && { slug: input.slug }),
        ...(input.description !== undefined && { description: input.description }),
        ...(input.headId !== undefined && { headId: input.headId }),
      },
    }) as Promise<Department>;
  }

  async softDelete(id: string): Promise<Department> {
    return prisma.department.update({
      where: { id },
      data: { deletedAt: new Date() },
    }) as Promise<Department>;
  }

  async exists(id: string): Promise<boolean> {
    const count = await prisma.department.count({
      where: { id, deletedAt: null },
    });
    return count > 0;
  }
}
