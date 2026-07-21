import { Department, CreateDepartmentInput, UpdateDepartmentInput } from '../entities/Department';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';

export interface DepartmentFilter {
  organizationId?: string;
  search?: string;
}

export interface IDepartmentRepository {
  create(input: CreateDepartmentInput & { slug: string }): Promise<Department>;
  findById(id: string): Promise<Department | null>;
  findBySlug(organizationId: string, slug: string): Promise<Department | null>;
  findMany(filter: DepartmentFilter, options: PaginationOptions): Promise<PaginatedResult<Department>>;
  update(id: string, input: UpdateDepartmentInput & { slug?: string }): Promise<Department>;
  softDelete(id: string): Promise<Department>;
  exists(id: string): Promise<boolean>;
}
