export type TimeEntryStatus = 'RUNNING' | 'STOPPED' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
export type TimesheetStatus = 'DRAFT' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';

export interface TimeEntry {
  id: string;
  organizationId: string;
  projectId: string;
  taskId?: string;
  userId?: string;
  description?: string;
  isBillable: boolean;
  hourlyRate?: number;
  tags?: string[];
  startTime?: string;
  endTime?: string;
  durationSeconds?: number;
  status: TimeEntryStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface Timesheet {
  id: string;
  organizationId: string;
  projectId?: string;
  userId?: string;
  periodStart: string;
  periodEnd: string;
  totalDurationSeconds?: number;
  status: TimesheetStatus;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTimeEntryRequest {
  organizationId: string;
  projectId: string;
  taskId?: string;
  description?: string;
  isBillable?: boolean;
  hourlyRate?: number;
  tags?: string[];
  startTime?: string;
}

export interface UpdateTimeEntryRequest {
  description?: string;
  isBillable?: boolean;
  tags?: string[];
  startTime?: string;
  endTime?: string;
}

export interface CreateTimesheetRequest {
  organizationId: string;
  projectId?: string;
  periodStart: string;
  periodEnd: string;
  notes?: string;
}
