import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';

export interface GetProjectTimeReportInput {
  projectId: string;
  startFrom: Date;
  startTo: Date;
}

export interface UserBreakdown {
  userId: string;
  totalSeconds: number;
}

export interface DayBreakdown {
  date: string;
  totalSeconds: number;
}

export interface ProjectTimeReport {
  totalSeconds: number;
  billableSeconds: number;
  totalHours: number;
  billableHours: number;
  byUser: UserBreakdown[];
  byDay: DayBreakdown[];
}

export class GetProjectTimeReportUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: GetProjectTimeReportInput): Promise<ProjectTimeReport> {
    const entries = await this.timeEntryRepo.findByProjectAndDateRange(
      input.projectId,
      input.startFrom,
      input.startTo,
    );

    let totalSeconds = 0;
    let billableSeconds = 0;
    const userMap = new Map<string, number>();
    const dayMap = new Map<string, number>();

    for (const entry of entries) {
      const duration = entry.duration ?? 0;
      totalSeconds += duration;
      if (entry.isBillable) {
        billableSeconds += duration;
      }

      // Group by userId
      userMap.set(entry.userId, (userMap.get(entry.userId) ?? 0) + duration);

      // Group by calendar day (ISO date string, UTC)
      const dayKey = entry.startTime.toISOString().slice(0, 10);
      dayMap.set(dayKey, (dayMap.get(dayKey) ?? 0) + duration);
    }

    const byUser: UserBreakdown[] = Array.from(userMap.entries()).map(
      ([userId, secs]) => ({ userId, totalSeconds: secs }),
    );

    const byDay: DayBreakdown[] = Array.from(dayMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, secs]) => ({ date, totalSeconds: secs }));

    return {
      totalSeconds,
      billableSeconds,
      totalHours: totalSeconds / 3600,
      billableHours: billableSeconds / 3600,
      byUser,
      byDay,
    };
  }
}
