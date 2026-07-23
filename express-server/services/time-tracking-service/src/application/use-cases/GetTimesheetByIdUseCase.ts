import { Timesheet } from '../../domain/entities/Timesheet';
import { TimesheetRepository } from '../../infrastructure/repositories/TimesheetRepository';
import { NotFoundError } from '@boardpilot/errors';

export interface GetTimesheetByIdInput {
  timesheetId: string;
}

export class GetTimesheetByIdUseCase {
  constructor(private readonly timesheetRepo: TimesheetRepository) {}

  async execute(input: GetTimesheetByIdInput): Promise<Timesheet> {
    const timesheet = await this.timesheetRepo.findById(input.timesheetId);
    if (!timesheet) {
      throw new NotFoundError('Timesheet', input.timesheetId);
    }
    return timesheet;
  }
}
