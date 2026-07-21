import { IDepartmentRepository } from '../../../domain/repositories/IDepartmentRepository';
import { Department } from '../../../domain/entities/Department';
import { ConflictError } from '@boardpilot/errors';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

function generateSlug(name: string): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  const suffix = Math.random().toString(36).substring(2, 7);
  return `${base}-${suffix}`;
}

export interface CreateDeptDTO {
  organizationId: string;
  name: string;
  description?: string;
  headId?: string;
  createdBy: string;
  correlationId: string;
}

export class CreateDeptUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(dto: CreateDeptDTO): Promise<Department> {
    const slug = generateSlug(dto.name);

    // Check slug uniqueness within org
    const existing = await this.departmentRepository.findBySlug(dto.organizationId, slug);
    if (existing) {
      throw new ConflictError('A department with a similar name already exists in this organization', {
        name: dto.name,
        organizationId: dto.organizationId,
      });
    }

    const department = await this.departmentRepository.create({
      organizationId: dto.organizationId,
      name: dto.name,
      slug,
      description: dto.description,
      headId: dto.headId,
      createdBy: dto.createdBy,
    });

    // Invalidate list cache
    await cacheDelete(CACHE_KEYS.departmentsByOrg(dto.organizationId));

    return department;
  }
}
