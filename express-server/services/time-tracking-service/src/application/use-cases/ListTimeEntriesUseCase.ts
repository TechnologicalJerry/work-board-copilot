import {
  TimeEntryRepository,
  TimeEntryFilters,
  PaginatedTimeEntries,
} from '../../infrastructure/repositories/TimeEntryRepository';

export interface ListTimeEntriesInput extends TimeEntryFilters {
  page?: number;
  limit?: number;
}

export class ListTimeEntriesUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: ListTimeEntriesInput): Promise<PaginatedTimeEntries> {
    const page = input.page ?? 1;
    const limit = input.limit ?? 20;

    const filters: TimeEntryFilters = {
      userId: input.userId,
      taskId: input.taskId,
      projectId: input.projectId,
      organizationId: input.organizationId,
      status: input.status,
      startFrom: input.startFrom,
      startTo: input.startTo,
    };

    return this.timeEntryRepo.findAll(filters, page, limit);
  }
}
