export interface VelocitySprintItem {
  sprintId: string;
  sprintName: string;
  completedPoints: number;
  commitmentPoints: number;
}

export interface VelocityReport {
  projectId: string;
  sprints: VelocitySprintItem[];
  averageVelocity: number;
}

export interface BurndownDataPoint {
  date: string;
  idealRemainingPoints: number;
  actualRemainingPoints: number;
}

export interface BurndownReport {
  sprintId: string;
  sprintName: string;
  totalPoints: number;
  dataPoints: BurndownDataPoint[];
}

export interface WorkloadUserItem {
  userId: string;
  userName: string;
  assignedTasksCount: number;
  totalStoryPoints: number;
}

export interface WorkloadReport {
  projectId: string;
  workload: WorkloadUserItem[];
}

export interface CycleTimeReport {
  projectId: string;
  averageDaysToComplete: number;
}

export interface SavedReport {
  id: string;
  organizationId: string;
  projectId?: string;
  name: string;
  type: string;
  config?: Record<string, unknown>;
  createdAt?: string;
}
