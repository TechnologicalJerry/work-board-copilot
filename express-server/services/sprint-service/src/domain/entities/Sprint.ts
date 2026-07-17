export type SprintStatus = 'PLANNED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export interface SprintEntity {
  id: string;
  projectId: string;
  name: string;
  goal?: string | null;
  status: SprintStatus;
  startDate?: Date | null;
  endDate?: Date | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  capacity?: number | null;
  velocityPoints?: number | null;
  notes?: string | null;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Sprint {
  constructor(private readonly data: SprintEntity) {}

  get id(): string {
    return this.data.id;
  }

  get status(): SprintStatus {
    return this.data.status;
  }

  get projectId(): string {
    return this.data.projectId;
  }

  isActive(): boolean {
    return this.data.status === 'ACTIVE';
  }

  isPlanned(): boolean {
    return this.data.status === 'PLANNED';
  }

  isCompleted(): boolean {
    return this.data.status === 'COMPLETED';
  }

  canStart(): boolean {
    return this.data.status === 'PLANNED';
  }

  canComplete(): boolean {
    return this.data.status === 'ACTIVE';
  }

  canCancel(): boolean {
    return this.data.status === 'PLANNED' || this.data.status === 'ACTIVE';
  }

  toJSON(): SprintEntity {
    return this.data;
  }
}
