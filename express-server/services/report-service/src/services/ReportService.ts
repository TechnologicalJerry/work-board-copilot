import * as ServiceClient from '../infrastructure/http/ServiceClient';
import { config } from '../config';
import { getCached, setCache } from '../infrastructure/cache/RedisClient';
import logger from '@boardpilot/logger';

export interface BurndownPoint {
  date: string;
  remaining: number;
  ideal: number;
  completed: number;
}

export interface VelocityData {
  sprints: Array<{ sprintId: string; name: string; points: number; completedPoints: number }>;
  average: number;
}

export interface WorkloadItem {
  assigneeId: string;
  taskCount: number;
  storyPoints: number;
}

export interface CycleTimeData {
  byType: Record<string, { avgDays: number; count: number }>;
  overall: number;
}

export interface DashboardData {
  velocity: VelocityData;
  workload: WorkloadItem[];
  tasksByStatus: Record<string, number>;
}

function buildCacheKey(type: string, ...parts: string[]): string {
  return `report:${type}:${parts.join(':')}`;
}

export async function getBurndown(
  sprintId: string,
  authHeader: string
): Promise<BurndownPoint[]> {
  const cacheKey = buildCacheKey('burndown', sprintId);
  const cached = await getCached<BurndownPoint[]>(cacheKey);
  if (cached) return cached;

  const data = await ServiceClient.get<Record<string, unknown>>(
    config.SPRINT_SERVICE_URL,
    `/api/v1/sprints/${sprintId}`,
    { authorization: authHeader }
  );

  const sprint = data as any;
  const startDate = new Date(sprint.startDate ?? sprint.createdAt);
  const endDate = new Date(sprint.endDate ?? sprint.updatedAt);
  const totalPoints = sprint.storyPoints ?? sprint.totalPoints ?? 0;
  const completedPoints = sprint.completedPoints ?? 0;

  // Build daily burndown
  const days = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  const idealDecrement = totalPoints / days;

  const burndown: BurndownPoint[] = [];
  for (let i = 0; i <= days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    burndown.push({
      date: date.toISOString().split('T')[0],
      remaining: Math.max(0, totalPoints - (i / days) * completedPoints),
      ideal: Math.max(0, totalPoints - idealDecrement * i),
      completed: Math.min(completedPoints, (i / days) * completedPoints),
    });
  }

  await setCache(cacheKey, burndown, config.REPORT_CACHE_TTL_SECONDS);
  return burndown;
}

export async function getVelocity(
  projectId: string,
  authHeader: string,
  limit = 10
): Promise<VelocityData> {
  const cacheKey = buildCacheKey('velocity', projectId, String(limit));
  const cached = await getCached<VelocityData>(cacheKey);
  if (cached) return cached;

  const data = await ServiceClient.get<unknown[]>(
    config.SPRINT_SERVICE_URL,
    `/api/v1/sprints?projectId=${projectId}&limit=${limit}&status=completed`,
    { authorization: authHeader }
  );

  const sprints = (Array.isArray(data) ? data : []) as any[];
  const sprintData = sprints.map((s: any) => ({
    sprintId: s.id ?? s._id,
    name: s.name,
    points: s.storyPoints ?? s.totalPoints ?? 0,
    completedPoints: s.completedPoints ?? 0,
  }));

  const totalCompleted = sprintData.reduce((sum, s) => sum + s.completedPoints, 0);
  const average = sprintData.length > 0 ? Math.round(totalCompleted / sprintData.length) : 0;

  const result: VelocityData = { sprints: sprintData, average };
  await setCache(cacheKey, result, config.REPORT_CACHE_TTL_SECONDS);
  return result;
}

export async function getWorkload(
  projectId: string,
  authHeader: string
): Promise<WorkloadItem[]> {
  const cacheKey = buildCacheKey('workload', projectId);
  const cached = await getCached<WorkloadItem[]>(cacheKey);
  if (cached) return cached;

  const data = await ServiceClient.get<unknown[]>(
    config.TASK_SERVICE_URL,
    `/api/v1/tasks?projectId=${projectId}&status=in_progress,todo,backlog&limit=500`,
    { authorization: authHeader }
  );

  const tasks = (Array.isArray(data) ? data : []) as any[];

  const workloadMap = new Map<string, WorkloadItem>();
  for (const task of tasks) {
    if (!task.assigneeId) continue;
    const entry = workloadMap.get(task.assigneeId) ?? { assigneeId: task.assigneeId, taskCount: 0, storyPoints: 0 };
    entry.taskCount++;
    entry.storyPoints += task.storyPoints ?? 0;
    workloadMap.set(task.assigneeId, entry);
  }

  const workload = Array.from(workloadMap.values()).sort((a, b) => b.taskCount - a.taskCount);
  await setCache(cacheKey, workload, config.REPORT_CACHE_TTL_SECONDS);
  return workload;
}

export async function getCycleTime(
  projectId: string,
  authHeader: string,
  days = 30
): Promise<CycleTimeData> {
  const cacheKey = buildCacheKey('cycletime', projectId, String(days));
  const cached = await getCached<CycleTimeData>(cacheKey);
  if (cached) return cached;

  const since = new Date();
  since.setDate(since.getDate() - days);

  const data = await ServiceClient.get<unknown[]>(
    config.TASK_SERVICE_URL,
    `/api/v1/tasks?projectId=${projectId}&status=done&completedAfter=${since.toISOString()}&limit=500`,
    { authorization: authHeader }
  );

  const tasks = (Array.isArray(data) ? data : []) as any[];

  const byType: Record<string, { totalDays: number; count: number }> = {};
  let totalDays = 0;
  let totalCount = 0;

  for (const task of tasks) {
    if (!task.startDate || !task.completedAt) continue;
    const start = new Date(task.startDate);
    const end = new Date(task.completedAt);
    const cycleDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    const type = task.type ?? 'task';

    if (!byType[type]) byType[type] = { totalDays: 0, count: 0 };
    byType[type].totalDays += cycleDays;
    byType[type].count++;
    totalDays += cycleDays;
    totalCount++;
  }

  const result: CycleTimeData = {
    byType: Object.fromEntries(
      Object.entries(byType).map(([type, { totalDays: td, count }]) => [
        type,
        { avgDays: count > 0 ? Math.round((td / count) * 10) / 10 : 0, count },
      ])
    ),
    overall: totalCount > 0 ? Math.round((totalDays / totalCount) * 10) / 10 : 0,
  };

  await setCache(cacheKey, result, config.REPORT_CACHE_TTL_SECONDS);
  return result;
}

export async function getDashboard(
  projectId: string,
  authHeader: string
): Promise<DashboardData> {
  const cacheKey = buildCacheKey('dashboard', projectId);
  const cached = await getCached<DashboardData>(cacheKey);
  if (cached) return cached;

  const [velocity, workload, taskData] = await Promise.all([
    getVelocity(projectId, authHeader, 5),
    getWorkload(projectId, authHeader),
    ServiceClient.get<unknown[]>(
      config.TASK_SERVICE_URL,
      `/api/v1/tasks?projectId=${projectId}&limit=500`,
      { authorization: authHeader }
    ),
  ]);

  const tasks = (Array.isArray(taskData) ? taskData : []) as any[];
  const tasksByStatus: Record<string, number> = {};
  for (const task of tasks) {
    const status = task.status ?? 'unknown';
    tasksByStatus[status] = (tasksByStatus[status] ?? 0) + 1;
  }

  const result: DashboardData = { velocity, workload, tasksByStatus };
  await setCache(cacheKey, result, config.REPORT_CACHE_TTL_SECONDS);
  return result;
}
