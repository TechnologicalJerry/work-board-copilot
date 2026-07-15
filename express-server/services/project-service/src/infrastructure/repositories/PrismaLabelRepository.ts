import { PrismaClient } from '../../generated/prisma-client';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { Label, CreateLabelInput, UpdateLabelInput } from '../../domain/entities/Label';
import { ILabelRepository } from '../../domain/repositories/ILabelRepository';

export class PrismaLabelRepository implements ILabelRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateLabelInput): Promise<Label> {
    const label = await this.prisma.label.create({
      data: {
        projectId: input.projectId,
        name: input.name,
        color: input.color,
        description: input.description,
        createdBy: input.createdBy,
      },
    });
    return this.mapLabel(label);
  }

  async findById(id: string): Promise<Label | null> {
    const label = await this.prisma.label.findUnique({
      where: { id },
    });
    return label ? this.mapLabel(label) : null;
  }

  async findByProjectAndName(projectId: string, name: string): Promise<Label | null> {
    const label = await this.prisma.label.findUnique({
      where: {
        projectId_name: { projectId, name },
      },
    });
    return label ? this.mapLabel(label) : null;
  }

  async findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<Label>> {
    const skip = calculateSkip(options.page, options.limit);

    const [data, total] = await Promise.all([
      this.prisma.label.findMany({
        where: { projectId },
        skip,
        take: options.limit,
        orderBy: { [options.sortBy ?? 'createdAt']: options.sortOrder ?? 'asc' },
      }),
      this.prisma.label.count({ where: { projectId } }),
    ]);

    return buildPaginatedResult(data.map((l) => this.mapLabel(l)), total, options);
  }

  async update(id: string, input: UpdateLabelInput): Promise<Label> {
    const label = await this.prisma.label.update({
      where: { id },
      data: {
        ...(input.name !== undefined && { name: input.name }),
        ...(input.color !== undefined && { color: input.color }),
        ...(input.description !== undefined && { description: input.description }),
      },
    });
    return this.mapLabel(label);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.label.delete({ where: { id } });
  }

  async countByProject(projectId: string): Promise<number> {
    return this.prisma.label.count({ where: { projectId } });
  }

  private mapLabel(raw: {
    id: string;
    projectId: string;
    name: string;
    color: string;
    description: string | null;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  }): Label {
    return {
      id: raw.id,
      projectId: raw.projectId,
      name: raw.name,
      color: raw.color,
      description: raw.description,
      createdBy: raw.createdBy,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
