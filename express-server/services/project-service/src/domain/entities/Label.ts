export interface Label {
  id: string;
  projectId: string;
  name: string;
  color: string;
  description?: string | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateLabelInput {
  projectId: string;
  name: string;
  color: string;
  description?: string;
  createdBy: string;
}

export interface UpdateLabelInput {
  name?: string;
  color?: string;
  description?: string | null;
}
