import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { ForbiddenError, NotFoundError } from '@boardpilot/errors';

export interface DeleteTimeEntryInput {
  entryId: string;
  userId: string;
}

export class DeleteTimeEntryUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: DeleteTimeEntryInput): Promise<void> {
    const entry = await this.timeEntryRepo.findById(input.entryId);
    if (!entry) {
      throw new NotFoundError('TimeEntry', input.entryId);
    }

    if (entry.userId !== input.userId) {
      throw new ForbiddenError('You do not have permission to delete this time entry');
    }

    await this.timeEntryRepo.softDelete(input.entryId);
  }
}
