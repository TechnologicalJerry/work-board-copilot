import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { Label, CreateLabelInput, UpdateLabelInput } from '../entities/Label';

export interface ILabelRepository {
  create(input: CreateLabelInput): Promise<Label>;
  findById(id: string): Promise<Label | null>;
  findByProjectAndName(projectId: string, name: string): Promise<Label | null>;
  findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<Label>>;
  update(id: string, input: UpdateLabelInput): Promise<Label>;
  delete(id: string): Promise<void>;
  countByProject(projectId: string): Promise<number>;
}
