import { TimeEntry } from '../../domain/entities/TimeEntry';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { NotFoundError } from '@boardpilot/errors';

export interface GetTimeEntryByIdInput {
  entryId: string;
}

export class GetTimeEntryByIdUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: GetTimeEntryByIdInput): Promise<TimeEntry> {
    const entry = await this.timeEntryRepo.findById(input.entryId);
    if (!entry) {
      throw new NotFoundError('TimeEntry', input.entryId);
    }
    return entry;
  }
}
