import {
  TimesheetRepository,
  TimesheetFilters,
  PaginatedTimesheets,
} from '../../infrastructure/repositories/TimesheetRepository';

export interface ListTimesheetsInput extends TimesheetFilters {
  page?: number;
  limit?: number;
}

export class ListTimesheetsUseCase {
  constructor(private readonly timesheetRepo: TimesheetRepository) {}

  async execute(input: ListTimesheetsInput): Promise<PaginatedTimesheets> {
    const page = input.page ?? 1;
    const limit = input.limit ?? 20;

    const filters: TimesheetFilters = {
      userId: input.userId,
      organizationId: input.organizationId,
      projectId: input.projectId,
      status: input.status,
      periodStart: input.periodStart,
      periodEnd: input.periodEnd,
    };

    return this.timesheetRepo.findAll(filters, page, limit);
  }
}
