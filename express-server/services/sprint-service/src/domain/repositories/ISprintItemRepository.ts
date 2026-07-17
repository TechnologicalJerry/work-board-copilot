export interface SprintItemEntity {
  id: string;
  sprintId: string;
  taskId: string;
  storyPoints?: number | null;
  addedBy: string;
  addedAt: Date;
  removedAt?: Date | null;
  completedAt?: Date | null;
}

export interface AddSprintItemData {
  sprintId: string;
  taskId: string;
  storyPoints?: number | null;
  addedBy: string;
}

export interface ISprintItemRepository {
  findAll(sprintId: string): Promise<SprintItemEntity[]>;
  findByTaskId(sprintId: string, taskId: string): Promise<SprintItemEntity | null>;
  add(data: AddSprintItemData): Promise<SprintItemEntity>;
  remove(sprintId: string, taskId: string): Promise<void>;
  countByStatus(sprintId: string): Promise<{
    total: number;
    completed: number;
    remaining: number;
  }>;
  markCompleted(sprintId: string, taskId: string): Promise<SprintItemEntity>;
  getStatsForSprint(sprintId: string): Promise<{
    total: number;
    completed: number;
    totalPoints: number;
    completedPoints: number;
  }>;
}
