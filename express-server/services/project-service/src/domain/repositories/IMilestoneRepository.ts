import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { Milestone, CreateMilestoneInput, UpdateMilestoneInput } from '../entities/Milestone';

export interface IMilestoneRepository {
  create(input: CreateMilestoneInput): Promise<Milestone>;
  findById(id: string): Promise<Milestone | null>;
  findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<Milestone>>;
  update(id: string, input: UpdateMilestoneInput): Promise<Milestone>;
  delete(id: string): Promise<void>;
  countByProject(projectId: string): Promise<number>;
  countCompletedByProject(projectId: string): Promise<number>;
  findUpcoming(
    projectId: string,
    limit: number
  ): Promise<Array<{ id: string; name: string; dueDate: Date | null; status: string }>>;
}
