export interface Timesheet {
  id: string;
  userId: string;
  organizationId: string;
  projectId?: string;
  periodStart: Date;
  periodEnd: Date;
  totalHours: number;
  billableHours: number;
  status: TimesheetStatus;
  notes?: string;
  submittedAt?: Date;
  approvedAt?: Date;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TimesheetStatus = 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
