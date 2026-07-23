import { TimeEntry } from '../../domain/entities/TimeEntry';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';

export interface GetActiveTimerInput {
  userId: string;
}

export class GetActiveTimerUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: GetActiveTimerInput): Promise<TimeEntry | null> {
    return this.timeEntryRepo.findRunning(input.userId);
  }
}
