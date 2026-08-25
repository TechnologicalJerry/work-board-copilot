export type SprintStatus = 'PLANNED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface Sprint {
  id: string;
  projectId: string;
  name: string;
  goal?: string;
  status: SprintStatus;
  startDate?: string;
  endDate?: string;
  capacity?: number;
  notes?: string;
  taskCount?: number;
  totalStoryPoints?: number;
  completedPoints?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface SprintBurndown {
  sprintId: string;
  dates: string[];
  idealPoints: number[];
  actualPoints: number[];
}

export interface CreateSprintRequest {
  projectId: string;
  name: string;
  goal?: string;
  startDate?: string;
  endDate?: string;
  capacity?: number;
  notes?: string;
  startImmediately?: boolean;
}

export interface UpdateSprintRequest {
  name?: string;
  goal?: string;
  startDate?: string;
  endDate?: string;
  capacity?: number;
  notes?: string;
}

export interface AddSprintItemRequest {
  taskId: string;
  storyPoints?: number;
}
