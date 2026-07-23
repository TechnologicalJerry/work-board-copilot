import { Timesheet } from '../../domain/entities/Timesheet';
import { TimesheetRepository } from '../../infrastructure/repositories/TimesheetRepository';
import { BadRequestError, ForbiddenError, NotFoundError } from '@boardpilot/errors';

export interface SubmitTimesheetInput {
  timesheetId: string;
  userId: string;
}

export class SubmitTimesheetUseCase {
  constructor(private readonly timesheetRepo: TimesheetRepository) {}

  async execute(input: SubmitTimesheetInput): Promise<Timesheet> {
    const timesheet = await this.timesheetRepo.findById(input.timesheetId);
    if (!timesheet) {
      throw new NotFoundError('Timesheet', input.timesheetId);
    }

    if (timesheet.userId !== input.userId) {
      throw new ForbiddenError('You do not have permission to submit this timesheet');
    }

    if (timesheet.status !== 'DRAFT') {
      throw new BadRequestError(
        `Cannot submit a timesheet with status '${timesheet.status}'; only DRAFT timesheets can be submitted`,
      );
    }

    return this.timesheetRepo.update(input.timesheetId, {
      status: 'SUBMITTED',
      submittedAt: new Date(),
    });
  }
}
