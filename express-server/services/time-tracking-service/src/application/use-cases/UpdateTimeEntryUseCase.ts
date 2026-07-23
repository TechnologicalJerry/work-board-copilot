import { TimeEntry } from '../../domain/entities/TimeEntry';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { BadRequestError, ForbiddenError, NotFoundError } from '@boardpilot/errors';

export interface UpdateTimeEntryInput {
  entryId: string;
  userId: string;
  description?: string;
  isBillable?: boolean;
  tags?: string[];
  startTime?: string;
  endTime?: string;
}

export class UpdateTimeEntryUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: UpdateTimeEntryInput): Promise<TimeEntry> {
    const entry = await this.timeEntryRepo.findById(input.entryId);
    if (!entry) {
      throw new NotFoundError('TimeEntry', input.entryId);
    }

    if (entry.userId !== input.userId) {
      throw new ForbiddenError('You do not have permission to update this time entry');
    }

    if (entry.status === 'RUNNING') {
      throw new BadRequestError('Cannot update a running time entry; stop the timer first');
    }

    const updateData: Partial<TimeEntry> = {};
    if (input.description !== undefined) updateData.description = input.description;
    if (input.isBillable !== undefined) updateData.isBillable = input.isBillable;
    if (input.tags !== undefined) updateData.tags = input.tags;
    if (input.startTime !== undefined) updateData.startTime = new Date(input.startTime);
    if (input.endTime !== undefined) updateData.endTime = new Date(input.endTime);

    return this.timeEntryRepo.update(input.entryId, updateData);
  }
}
