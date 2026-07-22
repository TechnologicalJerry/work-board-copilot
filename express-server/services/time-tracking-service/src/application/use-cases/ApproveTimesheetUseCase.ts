import { Timesheet } from '../../domain/entities/Timesheet';
import { TimesheetRepository } from '../../infrastructure/repositories/TimesheetRepository';
import { BadRequestError, NotFoundError } from '@boardpilot/errors';

export interface ApproveTimesheetInput {
  timesheetId: string;
  approverId: string;
}

export class ApproveTimesheetUseCase {
  constructor(private readonly timesheetRepo: TimesheetRepository) {}

  async execute(input: ApproveTimesheetInput): Promise<Timesheet> {
    const timesheet = await this.timesheetRepo.findById(input.timesheetId);
    if (!timesheet) {
      throw new NotFoundError('Timesheet', input.timesheetId);
    }

    if (timesheet.status !== 'SUBMITTED') {
      throw new BadRequestError(
        `Cannot approve a timesheet with status '${timesheet.status}'; only SUBMITTED timesheets can be approved`,
      );
    }

    return this.timesheetRepo.update(input.timesheetId, {
      status: 'APPROVED',
      approvedAt: new Date(),
      approvedBy: input.approverId,
    });
  }
}
