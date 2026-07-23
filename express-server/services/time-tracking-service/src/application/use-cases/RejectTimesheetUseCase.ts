import { Timesheet } from '../../domain/entities/Timesheet';
import { TimesheetRepository } from '../../infrastructure/repositories/TimesheetRepository';
import { BadRequestError, NotFoundError } from '@boardpilot/errors';

export interface RejectTimesheetInput {
  timesheetId: string;
  approverId: string;
}

export class RejectTimesheetUseCase {
  constructor(private readonly timesheetRepo: TimesheetRepository) {}

  async execute(input: RejectTimesheetInput): Promise<Timesheet> {
    const timesheet = await this.timesheetRepo.findById(input.timesheetId);
    if (!timesheet) {
      throw new NotFoundError('Timesheet', input.timesheetId);
    }

    if (timesheet.status !== 'SUBMITTED') {
      throw new BadRequestError(
        `Cannot reject a timesheet with status '${timesheet.status}'; only SUBMITTED timesheets can be rejected`,
      );
    }

    return this.timesheetRepo.update(input.timesheetId, {
      status: 'REJECTED',
    });
  }
}
