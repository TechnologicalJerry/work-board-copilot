import { IDepartmentRepository } from '../../../domain/repositories/IDepartmentRepository';
import { Department } from '../../../domain/entities/Department';
import { NotFoundError, ConflictError } from '@boardpilot/errors';
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

export interface UpdateDeptDTO {
  deptId: string;
  name?: string;
  description?: string;
  headId?: string;
  updatedBy: string;
}

export class UpdateDeptUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(dto: UpdateDeptDTO): Promise<Department> {
    const existing = await this.departmentRepository.findById(dto.deptId);
    if (!existing) {
      throw new NotFoundError('Department', dto.deptId);
    }

    let slug: string | undefined;

    // If name changed, generate new slug and check uniqueness
    if (dto.name && dto.name !== existing.name) {
      slug = generateSlug(dto.name);
      const conflict = await this.departmentRepository.findBySlug(existing.organizationId, slug);
      if (conflict && conflict.id !== dto.deptId) {
        throw new ConflictError('A department with a similar name already exists in this organization', {
          name: dto.name,
          organizationId: existing.organizationId,
        });
      }
    }

    const updated = await this.departmentRepository.update(dto.deptId, {
      name: dto.name,
      description: dto.description,
      headId: dto.headId,
      slug,
    });

    // Invalidate caches
    await cacheDelete(
      CACHE_KEYS.department(dto.deptId),
      CACHE_KEYS.departmentsByOrg(existing.organizationId)
    );

    return updated;
  }
}
