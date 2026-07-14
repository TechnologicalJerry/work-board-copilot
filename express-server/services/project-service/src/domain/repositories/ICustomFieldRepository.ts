import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { CustomField, CreateCustomFieldInput, UpdateCustomFieldInput } from '../entities/CustomField';

export interface ICustomFieldRepository {
  create(input: CreateCustomFieldInput, position: number): Promise<CustomField>;
  findById(id: string): Promise<CustomField | null>;
  findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<CustomField>>;
  update(id: string, input: UpdateCustomFieldInput): Promise<CustomField>;
  delete(id: string): Promise<void>;
  getMaxPosition(projectId: string): Promise<number>;
  countByProject(projectId: string): Promise<number>;
}
