import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { ISprintItemRepository } from '../../domain/repositories/ISprintItemRepository';
import { NotFoundError, BadRequestError } from '@boardpilot/errors';

export interface BurndownDataPoint {
  date: string; // ISO date string (YYYY-MM-DD)
  remaining: number;
}

export interface BurndownResult {
  sprintId: string;
  sprintName: string;
  startDate: Date;
  endDate: Date;
  ideal: BurndownDataPoint[];
  actual: BurndownDataPoint[];
  totalItems: number;
  completedItems: number;
}

export class GetBurndownUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly itemRepository: ISprintItemRepository
  ) {}

  async execute(sprintId: string): Promise<BurndownResult> {
    const sprint = await this.sprintRepository.getBurndownData(sprintId);
    if (!sprint) {
      throw new NotFoundError('Sprint', sprintId);
    }

    if (!sprint.startDate) {
      throw new BadRequestError('Sprint has no start date. Cannot generate burndown chart.');
    }

    const startDate = new Date(sprint.startDate);
    const endDate = sprint.endDate ? new Date(sprint.endDate) : new Date();
    const today = new Date();

    // Clamp the actual range to today (can't predict the future)
    const actualEnd = endDate < today ? endDate : today;

    const items = await this.itemRepository.findAll(sprintId);
    const totalItems = items.length;

    // Build day-by-day list from startDate to end
    const days = this.getDayRange(startDate, endDate);
    const actualDays = this.getDayRange(startDate, actualEnd);

    // Ideal burndown: linear from totalItems down to 0
    const ideal: BurndownDataPoint[] = days.map((date, index) => ({
      date,
      remaining: Math.max(0, Math.round(totalItems - (totalItems * index) / Math.max(days.length - 1, 1))),
    }));

    // Actual burndown: for each day up to today, count items NOT yet completed as of end-of-day
    const actual: BurndownDataPoint[] = actualDays.map((dateStr) => {
      const dayEnd = new Date(dateStr);
      dayEnd.setHours(23, 59, 59, 999);

      const remaining = items.filter(
        (item) => item.completedAt == null || new Date(item.completedAt) > dayEnd
      ).length;

      return { date: dateStr, remaining };
    });

    const completedItems = items.filter((item) => item.completedAt !== null).length;

    return {
      sprintId,
      sprintName: sprint.name,
      startDate,
      endDate,
      ideal,
      actual,
      totalItems,
      completedItems,
    };
  }

  private getDayRange(start: Date, end: Date): string[] {
    const days: string[] = [];
    const current = new Date(start);
    current.setHours(0, 0, 0, 0);

    const endNormalized = new Date(end);
    endNormalized.setHours(0, 0, 0, 0);

    while (current <= endNormalized) {
      days.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }

    return days;
  }
}
