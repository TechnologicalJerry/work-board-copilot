import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';

export interface GetUserTimeReportInput {
  userId: string;
  organizationId?: string;
  startFrom: Date;
  startTo: Date;
}

export interface DayBreakdown {
  date: string;
  totalSeconds: number;
}

export interface ProjectBreakdown {
  projectId: string;
  totalSeconds: number;
}

export interface UserTimeReport {
  totalSeconds: number;
  billableSeconds: number;
  totalHours: number;
  billableHours: number;
  byProject: ProjectBreakdown[];
  byDay: DayBreakdown[];
}

export class GetUserTimeReportUseCase {
  constructor(private readonly timeEntryRepo: TimeEntryRepository) {}

  async execute(input: GetUserTimeReportInput): Promise<UserTimeReport> {
    const entries = await this.timeEntryRepo.findByUserAndDateRange(
      input.userId,
      input.startFrom,
      input.startTo,
    );

    let totalSeconds = 0;
    let billableSeconds = 0;
    const projectMap = new Map<string, number>();
    const dayMap = new Map<string, number>();

    for (const entry of entries) {
      const duration = entry.duration ?? 0;
      totalSeconds += duration;
      if (entry.isBillable) {
        billableSeconds += duration;
      }

      // Group by projectId
      projectMap.set(entry.projectId, (projectMap.get(entry.projectId) ?? 0) + duration);

      // Group by calendar day (ISO date string, UTC)
      const dayKey = entry.startTime.toISOString().slice(0, 10);
      dayMap.set(dayKey, (dayMap.get(dayKey) ?? 0) + duration);
    }

    const byProject: ProjectBreakdown[] = Array.from(projectMap.entries()).map(
      ([projectId, secs]) => ({ projectId, totalSeconds: secs }),
    );

    const byDay: DayBreakdown[] = Array.from(dayMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, secs]) => ({ date, totalSeconds: secs }));

    return {
      totalSeconds,
      billableSeconds,
      totalHours: totalSeconds / 3600,
      billableHours: billableSeconds / 3600,
      byProject,
      byDay,
    };
  }
}
