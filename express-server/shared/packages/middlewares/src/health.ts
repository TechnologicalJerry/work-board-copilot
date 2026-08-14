import { Request, Response } from 'express';
import { ServiceHealth, HealthCheck } from '@boardpilot/types';

export type HealthChecker = () => Promise<HealthCheck>;

const healthCheckers: Map<string, HealthChecker> = new Map();
const startTime = Date.now();

export function registerHealthCheck(name: string, checker: HealthChecker): void {
  healthCheckers.set(name, checker);
}

export async function healthCheckHandler(_req: Request, res: Response): Promise<void> {
  const checks = await Promise.allSettled(
    Array.from(healthCheckers.entries()).map(async ([name, checker]) => {
      const start = Date.now();
      try {
        const result = await checker();
        return result;
      } catch (error) {
        return {
          name,
          status: 'fail' as const,
          duration: Date.now() - start,
          message: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    })
  );

  const resolvedChecks: HealthCheck[] = checks.map((result) =>
    result.status === 'fulfilled' ? result.value : {
      name: 'unknown',
      status: 'fail',
      duration: 0,
      message: 'Health check failed to execute',
    }
  );

  const allHealthy = resolvedChecks.every((c) => c.status === 'pass');
  const anyFailing = resolvedChecks.some((c) => c.status === 'fail');

  const health: ServiceHealth = {
    status: allHealthy ? 'healthy' : anyFailing ? 'unhealthy' : 'degraded',
    service: process.env.SERVICE_NAME ?? 'unknown',
    version: process.env.npm_package_version ?? '1.0.0',
    uptime: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
    checks: resolvedChecks,
  };

  res.status(allHealthy ? 200 : anyFailing ? 503 : 207).json(health);
}
