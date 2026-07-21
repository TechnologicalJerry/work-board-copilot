export interface Department {
  id: string;
  organizationId: string;
  name: string;
  slug: string;
  description?: string | null;
  headId?: string | null;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface CreateDepartmentInput {
  organizationId: string;
  name: string;
  description?: string;
  headId?: string;
  createdBy: string;
}

export interface UpdateDepartmentInput {
  name?: string;
  description?: string;
  headId?: string;
}
