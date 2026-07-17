import { ISprintRepository } from '../../domain/repositories/ISprintRepository';
import { PaginationOptions } from '@boardpilot/types';

export interface SprintVelocityEntry {
  sprintId: string;
  name: string;
  completedPoints: number;
  totalPoints: number;
  completedTasks: number;
  totalTasks: number;
}

export interface VelocityResult {
  projectId: string;
  sprints: SprintVelocityEntry[];
  average: number;
  averageCompletionRate: number;
}

export interface SprintItemStatsProvider {
  getStatsForSprint(sprintId: string): Promise<{
    total: number;
    completed: number;
    totalPoints: number;
    completedPoints: number;
  }>;
}

export class GetVelocityUseCase {
  constructor(
    private readonly sprintRepository: ISprintRepository,
    private readonly itemStatsProvider: SprintItemStatsProvider
  ) {}

  async execute(projectId: string, limit = 10): Promise<VelocityResult> {
    const options: PaginationOptions = {
      page: 1,
      limit: Math.min(limit, 20),
      sortBy: 'completedAt',
      sortOrder: 'desc',
    };

    const { sprints } = await this.sprintRepository.findAll(
      projectId,
      { status: 'COMPLETED' },
      options
    );

    const entries: SprintVelocityEntry[] = await Promise.all(
      sprints.map(async (sprint) => {
        const stats = await this.itemStatsProvider.getStatsForSprint(sprint.id);
        return {
          sprintId: sprint.id,
          name: sprint.name,
          completedPoints: stats.completedPoints,
          totalPoints: stats.totalPoints,
          completedTasks: stats.completed,
          totalTasks: stats.total,
        };
      })
    );

    const average =
      entries.length > 0
        ? entries.reduce((sum, e) => sum + e.completedPoints, 0) / entries.length
        : 0;

    const averageCompletionRate =
      entries.length > 0
        ? entries.reduce((sum, e) => sum + (e.totalTasks > 0 ? e.completedTasks / e.totalTasks : 0), 0) /
          entries.length
        : 0;

    return {
      projectId,
      sprints: entries,
      average: Math.round(average * 10) / 10,
      averageCompletionRate: Math.round(averageCompletionRate * 1000) / 10, // percentage
    };
  }
}
