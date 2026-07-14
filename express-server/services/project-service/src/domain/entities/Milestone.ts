export type MilestoneStatus = 'UPCOMING' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE';

export interface Milestone {
  id: string;
  projectId: string;
  name: string;
  description?: string | null;
  dueDate?: Date | null;
  status: MilestoneStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMilestoneInput {
  projectId: string;
  name: string;
  description?: string;
  dueDate?: Date;
  status?: MilestoneStatus;
  createdBy: string;
}

export interface UpdateMilestoneInput {
  name?: string;
  description?: string | null;
  dueDate?: Date | null;
  status?: MilestoneStatus;
}
