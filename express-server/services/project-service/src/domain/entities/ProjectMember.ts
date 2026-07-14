export type ProjectRole = 'MANAGER' | 'LEAD' | 'MEMBER' | 'VIEWER';

export interface ProjectMember {
  id: string;
  projectId: string;
  userId: string;
  role: ProjectRole;
  addedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddMemberInput {
  projectId: string;
  userId: string;
  role?: ProjectRole;
  addedBy: string;
}

export interface UpdateMemberInput {
  role: ProjectRole;
}
