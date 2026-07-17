import { PaginationOptions } from '@boardpilot/types';
import { SprintEntity, SprintStatus } from '../entities/Sprint';

export interface SprintFilters {
  status?: SprintStatus;
}

export interface CreateSprintData {
  projectId: string;
  name: string;
  goal?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  capacity?: number | null;
  notes?: string | null;
  createdBy: string;
  updatedBy: string;
}

export interface UpdateSprintData {
  name?: string;
  goal?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  capacity?: number | null;
  velocityPoints?: number | null;
  notes?: string | null;
  status?: SprintStatus;
  startedAt?: Date | null;
  completedAt?: Date | null;
  updatedBy: string;
}

export interface ISprintRepository {
  findById(id: string): Promise<SprintEntity | null>;
  findAll(
    projectId: string,
    filters: SprintFilters,
    pagination: PaginationOptions
  ): Promise<{ sprints: SprintEntity[]; total: number }>;
  findActiveSprint(projectId: string): Promise<SprintEntity | null>;
  getBurndownData(sprintId: string): Promise<SprintEntity | null>;
  create(data: CreateSprintData): Promise<SprintEntity>;
  update(id: string, data: UpdateSprintData): Promise<SprintEntity>;
  delete(id: string): Promise<void>;
}
