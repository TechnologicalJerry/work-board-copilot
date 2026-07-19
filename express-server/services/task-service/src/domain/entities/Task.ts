export type TaskStatus =
  | 'BACKLOG'
  | 'TODO'
  | 'IN_PROGRESS'
  | 'IN_REVIEW'
  | 'DONE'
  | 'CANCELLED'
  | 'BLOCKED';

export type Priority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'NONE';

export type TaskType = 'TASK' | 'BUG' | 'STORY' | 'EPIC' | 'SUBTASK';

export interface Task {
  id: string;
  organizationId: string;
  projectId: string;
  sprintId: string | null;
  boardId: string | null;
  parentId: string | null;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: Priority;
  type: TaskType;
  assigneeId: string | null;
  reporterId: string;
  storyPoints: number | null;
  dueDate: Date | null;
  startDate: Date | null;
  completedAt: Date | null;
  position: number;
  labels: string[];
  tags: string[];
  customFields: Record<string, unknown>;
  attachmentCount: number;
  commentCount: number;
  subtaskCount: number;
  completedSubtaskCount: number;
  estimatedHours: number | null;
  actualHours: number | null;
  createdBy: string;
  updatedBy: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  subtasks?: Task[];
  watchers?: TaskWatcher[];
}

export interface TaskHistory {
  id: string;
  taskId: string;
  userId: string;
  field: string;
  oldValue: string | null;
  newValue: string | null;
  createdAt: Date;
}

export interface TaskWatcher {
  id: string;
  taskId: string;
  userId: string;
  createdAt: Date;
}

export interface TaskFilters {
  organizationId: string;
  projectId?: string;
  sprintId?: string;
  boardId?: string;
  assigneeId?: string;
  status?: TaskStatus[];
  priority?: Priority[];
  type?: TaskType[];
  labels?: string[];
  parentId?: string | null;
  search?: string;
}

export interface TaskStats {
  total: number;
  byStatus: Record<string, number>;
}
