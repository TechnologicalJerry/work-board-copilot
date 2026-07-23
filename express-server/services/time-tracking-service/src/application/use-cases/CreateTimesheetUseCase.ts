import { Timesheet } from '../../domain/entities/Timesheet';
import { TimesheetRepository } from '../../infrastructure/repositories/TimesheetRepository';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { ConflictError } from '@boardpilot/errors';

export interface CreateTimesheetInput {
  userId: string;
  organizationId: string;
  projectId?: string;
  periodStart: string;
  periodEnd: string;
  notes?: string;
}

export class CreateTimesheetUseCase {
  constructor(
    private readonly timesheetRepo: TimesheetRepository,
    private readonly timeEntryRepo: TimeEntryRepository,
  ) {}

  async execute(input: CreateTimesheetInput): Promise<Timesheet> {
    const periodStart = new Date(input.periodStart);
    const periodEnd = new Date(input.periodEnd);

    // Check for an existing timesheet covering the same period
    const existing = await this.timesheetRepo.findByPeriod(
      input.userId,
      periodStart,
      periodEnd,
    );
    if (existing) {
      throw new ConflictError(
        'A timesheet for this period already exists',
        { userId: input.userId, periodStart: input.periodStart, periodEnd: input.periodEnd },
      );
    }

    // Gather all stopped entries in the period to compute totals
    const entries = await this.timeEntryRepo.findByUserAndDateRange(
      input.userId,
      periodStart,
      periodEnd,
    );

    const totalSeconds = entries.reduce((sum, e) => sum + (e.duration ?? 0), 0);
    const billableSeconds = entries
      .filter((e) => e.isBillable)
      .reduce((sum, e) => sum + (e.duration ?? 0), 0);

    const totalHours = totalSeconds / 3600;
    const billableHours = billableSeconds / 3600;

    return this.timesheetRepo.create({
      userId: input.userId,
      organizationId: input.organizationId,
      projectId: input.projectId,
      periodStart,
      periodEnd,
      totalHours,
      billableHours,
      status: 'DRAFT',
      notes: input.notes,
      submittedAt: undefined,
      approvedAt: undefined,
      approvedBy: undefined,
    });
  }
}
