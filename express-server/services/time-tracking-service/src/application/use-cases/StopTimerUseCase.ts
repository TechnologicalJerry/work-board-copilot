import { TimeEntry, calculateDuration } from '../../domain/entities/TimeEntry';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { BadRequestError, ForbiddenError, NotFoundError } from '@boardpilot/errors';

export interface StopTimerInput {
  entryId: string;
  userId: string;
}

export class StopTimerUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: StopTimerInput): Promise<TimeEntry> {
    const entry = await this.timeEntryRepo.findById(input.entryId);
    if (!entry) {
      throw new NotFoundError('TimeEntry', input.entryId);
    }

    if (entry.userId !== input.userId) {
      throw new ForbiddenError('You do not have permission to stop this timer');
    }

    if (entry.status !== 'RUNNING') {
      throw new BadRequestError('Timer not running');
    }

    const endTime = new Date();
    const duration = calculateDuration(entry.startTime, endTime);

    return this.timeEntryRepo.update(input.entryId, {
      endTime,
      duration,
      status: 'STOPPED',
    });
  }
}
