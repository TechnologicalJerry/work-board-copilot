import { IDepartmentRepository } from '../../../domain/repositories/IDepartmentRepository';
import { NotFoundError } from '@boardpilot/errors';
import { cacheDelete, CACHE_KEYS } from '../../../infrastructure/cache/redis';

export interface DeleteDeptDTO {
  deptId: string;
  deletedBy: string;
}

export class DeleteDeptUseCase {
  constructor(private readonly departmentRepository: IDepartmentRepository) {}

  async execute(dto: DeleteDeptDTO): Promise<void> {
    const existing = await this.departmentRepository.findById(dto.deptId);
    if (!existing) {
      throw new NotFoundError('Department', dto.deptId);
    }

    await this.departmentRepository.softDelete(dto.deptId);

    await cacheDelete(
      CACHE_KEYS.department(dto.deptId),
      CACHE_KEYS.departmentsByOrg(existing.organizationId)
    );
  }
}
