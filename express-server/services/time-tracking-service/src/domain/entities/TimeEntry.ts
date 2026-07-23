export interface TimeEntry {
  id: string;
  userId: string;
  taskId?: string;
  projectId: string;
  organizationId: string;
  description?: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  isBillable: boolean;
  hourlyRate?: number;
  tags: string[];
  status: TimeEntryStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type TimeEntryStatus =
  | 'RUNNING'
  | 'STOPPED'
  | 'SUBMITTED'
  | 'APPROVED'
  | 'REJECTED';

/**
 * Calculate duration in seconds between two dates.
 */
export function calculateDuration(startTime: Date, endTime: Date): number {
  return Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
}
