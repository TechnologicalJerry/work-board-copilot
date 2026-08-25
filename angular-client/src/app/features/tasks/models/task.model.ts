export type TaskStatus =
  | 'BACKLOG'
  | 'TODO'
  | 'IN_PROGRESS'
  | 'IN_REVIEW'
  | 'DONE'
  | 'CANCELLED'
  | 'BLOCKED';

export type TaskPriority = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'NONE';

export type TaskType = 'TASK' | 'BUG' | 'STORY' | 'EPIC' | 'SUBTASK';

export interface Task {
  id: string;
  organizationId: string;
  projectId: string;
  sprintId?: string;
  boardId?: string;
  parentId?: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  type?: TaskType;
  assigneeId?: string;
  assignee?: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatarUrl?: string;
  };
  storyPoints?: number;
  dueDate?: string;
  startDate?: string;
  labels?: string[];
  tags?: string[];
  position?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTaskRequest {
  organizationId: string;
  projectId: string;
  sprintId?: string;
  boardId?: string;
  parentId?: string;
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  type?: TaskType;
  assigneeId?: string;
  storyPoints?: number;
  dueDate?: string;
  startDate?: string;
  labels?: string[];
  tags?: string[];
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  type?: TaskType;
  assigneeId?: string | null;
  storyPoints?: number | null;
  dueDate?: string | null;
  startDate?: string | null;
  labels?: string[];
  tags?: string[];
  sprintId?: string | null;
  boardId?: string | null;
}
