import { PrismaClient, Prisma } from '../../generated/prisma-client';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { CustomField, CreateCustomFieldInput, UpdateCustomFieldInput } from '../../domain/entities/CustomField';
import { ICustomFieldRepository } from '../../domain/repositories/ICustomFieldRepository';

export class PrismaCustomFieldRepository implements ICustomFieldRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateCustomFieldInput, position: number): Promise<CustomField> {
    const field = await this.prisma.customField.create({
      data: {
        projectId: input.projectId,
        name: input.name,
        fieldType: input.fieldType,
        options: input.options !== undefined ? (input.options as Prisma.InputJsonValue) : Prisma.JsonNull,
        isRequired: input.isRequired ?? false,
        defaultValue: input.defaultValue,
        position,
        createdBy: input.createdBy,
      },
    });
    return this.mapField(field);
  }

  async findById(id: string): Promise<CustomField | null> {
    const field = await this.prisma.customField.findUnique({
      where: { id },
    });
    return field ? this.mapField(field) : null;
  }

  async findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<CustomField>> {
    const skip = calculateSkip(options.page, options.limit);

    const [data, total] = await Promise.all([
      this.prisma.customField.findMany({
        where: { projectId },
        skip,
        take: options.limit,
        orderBy: { [options.sortBy ?? 'position']: options.sortOrder ?? 'asc' },
      }),
      this.prisma.customField.count({ where: { projectId } }),
    ]);

    return buildPaginatedResult(data.map((f) => this.mapField(f)), total, options);
  }

  async update(id: string, input: UpdateCustomFieldInput): Promise<CustomField> {
    const updateData: Prisma.CustomFieldUpdateInput = {};

    if (input.name !== undefined) updateData.name = input.name;
    if (input.fieldType !== undefined) updateData.fieldType = input.fieldType;
    if (input.options !== undefined) {
      updateData.options = input.options as Prisma.InputJsonValue;
    }
    if (input.isRequired !== undefined) updateData.isRequired = input.isRequired;
    if (input.defaultValue !== undefined) updateData.defaultValue = input.defaultValue;
    if (input.position !== undefined) updateData.position = input.position;

    const field = await this.prisma.customField.update({
      where: { id },
      data: updateData,
    });
    return this.mapField(field);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customField.delete({ where: { id } });
  }

  async getMaxPosition(projectId: string): Promise<number> {
    const result = await this.prisma.customField.aggregate({
      _max: { position: true },
      where: { projectId },
    });
    return result._max.position ?? 0;
  }

  async countByProject(projectId: string): Promise<number> {
    return this.prisma.customField.count({ where: { projectId } });
  }

  private mapField(raw: {
    id: string;
    projectId: string;
    name: string;
    fieldType: string;
    options: unknown;
    isRequired: boolean;
    defaultValue: string | null;
    position: number;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  }): CustomField {
    return {
      id: raw.id,
      projectId: raw.projectId,
      name: raw.name,
      fieldType: raw.fieldType as CustomField['fieldType'],
      options: raw.options,
      isRequired: raw.isRequired,
      defaultValue: raw.defaultValue,
      position: raw.position,
      createdBy: raw.createdBy,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  }
}
