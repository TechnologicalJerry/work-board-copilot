export type BoardType = 'KANBAN' | 'SCRUM' | 'BUG_TRACKER';

export interface BoardColumn {
  id: string;
  boardId: string;
  name: string;
  status: string;
  position: number;
  color?: string;
  wipLimit?: number;
}

export interface BoardSwimlane {
  id: string;
  boardId: string;
  name: string;
  type: string;
  value?: string;
  position: number;
}

export interface Board {
  id: string;
  projectId: string;
  name: string;
  type: BoardType;
  description?: string;
  isDefault?: boolean;
  columns?: BoardColumn[];
  swimlanes?: BoardSwimlane[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBoardRequest {
  projectId: string;
  name: string;
  type?: BoardType;
  description?: string;
  isDefault?: boolean;
  columns?: Array<{ name: string; status: string; color?: string; wipLimit?: number }>;
}

export interface UpdateBoardRequest {
  name?: string;
  description?: string;
  type?: BoardType;
}

export interface CreateColumnRequest {
  name: string;
  status: string;
  color?: string;
  wipLimit?: number;
}
