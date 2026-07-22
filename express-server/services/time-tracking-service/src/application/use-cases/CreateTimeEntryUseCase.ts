import { TimeEntry } from '../../domain/entities/TimeEntry';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { BadRequestError } from '@boardpilot/errors';

export interface CreateTimeEntryInput {
  userId: string;
  taskId?: string;
  projectId: string;
  organizationId: string;
  description?: string;
  isBillable?: boolean;
  hourlyRate?: number;
  tags?: string[];
  startTime?: string;
}

export class CreateTimeEntryUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: CreateTimeEntryInput): Promise<TimeEntry> {
    // Check if user already has a RUNNING entry
    const running = await this.timeEntryRepo.findRunning(input.userId);
    if (running) {
      throw new BadRequestError('Timer already running');
    }

    const startTime = input.startTime ? new Date(input.startTime) : new Date();

    const entry = await this.timeEntryRepo.create({
      userId: input.userId,
      taskId: input.taskId,
      projectId: input.projectId,
      organizationId: input.organizationId,
      description: input.description,
      isBillable: input.isBillable ?? true,
      hourlyRate: input.hourlyRate,
      tags: input.tags ?? [],
      startTime,
      status: 'RUNNING',
    });

    return entry;
  }
}
