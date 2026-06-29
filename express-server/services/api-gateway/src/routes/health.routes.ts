import { Application, Request, Response } from 'express';
import http from 'http';
import https from 'https';
import { URL } from 'url';
import { ServiceHealth, HealthCheck } from '@boardpilot/types';
import { registerHealthCheck, healthCheckHandler } from '@boardpilot/middlewares';
import { serviceCircuitBreakers } from '../services/circuit-breaker';
import { config } from '../config';
import { logger } from '@boardpilot/logger';

const HEALTH_CHECK_TIMEOUT_MS = 2000;

interface ServiceEntry {
  name: string;
  url: string;
  serviceName: string;
}

const DOWNSTREAM_SERVICES: ServiceEntry[] = [
  { name: 'identity-service', url: config.IDENTITY_SERVICE_URL, serviceName: 'identity-service' },
  { name: 'user-service', url: config.USER_SERVICE_URL, serviceName: 'user-service' },
  { name: 'organization-service', url: config.ORGANIZATION_SERVICE_URL, serviceName: 'organization-service' },
  { name: 'workspace-service', url: config.WORKSPACE_SERVICE_URL, serviceName: 'workspace-service' },
  { name: 'project-service', url: config.PROJECT_SERVICE_URL, serviceName: 'project-service' },
  { name: 'task-service', url: config.TASK_SERVICE_URL, serviceName: 'task-service' },
  { name: 'sprint-service', url: config.SPRINT_SERVICE_URL, serviceName: 'sprint-service' },
  { name: 'board-service', url: config.BOARD_SERVICE_URL, serviceName: 'board-service' },
  { name: 'comment-service', url: config.COMMENT_SERVICE_URL, serviceName: 'comment-service' },
  { name: 'notification-service', url: config.NOTIFICATION_SERVICE_URL, serviceName: 'notification-service' },
  { name: 'audit-service', url: config.AUDIT_SERVICE_URL, serviceName: 'audit-service' },
  { name: 'billing-service', url: config.BILLING_SERVICE_URL, serviceName: 'billing-service' },
  { name: 'analytics-service', url: config.ANALYTICS_SERVICE_URL, serviceName: 'analytics-service' },
  { name: 'search-service', url: config.SEARCH_SERVICE_URL, serviceName: 'search-service' },
  { name: 'file-service', url: config.FILE_SERVICE_URL, serviceName: 'file-service' },
  { name: 'ai-service', url: config.AI_SERVICE_URL, serviceName: 'ai-service' },
  { name: 'webhook-service', url: config.WEBHOOK_SERVICE_URL, serviceName: 'webhook-service' },
  { name: 'integration-service', url: config.INTEGRATION_SERVICE_URL, serviceName: 'integration-service' },
  { name: 'report-service', url: config.REPORT_SERVICE_URL, serviceName: 'report-service' },
  { name: 'realtime-service', url: config.REALTIME_SERVICE_URL, serviceName: 'realtime-service' },
];

/**
 * Probes a single downstream service's /health endpoint with a strict timeout.
 */
function probeServiceHealth(serviceUrl: string, serviceName: string): Promise<HealthCheck> {
  return new Promise((resolve) => {
    const start = Date.now();

    let parsed: URL;
    try {
      parsed = new URL(`${serviceUrl}/health`);
    } catch {
      resolve({
        name: serviceName,
        status: 'fail',
        duration: Date.now() - start,
        message: `Invalid service URL: ${serviceUrl}`,
      });
      return;
    }

    const transport = parsed.protocol === 'https:' ? https : http;

    const req = transport.get(
      {
        hostname: parsed.hostname,
        port: parsed.port ? parseInt(parsed.port, 10) : parsed.protocol === 'https:' ? 443 : 80,
        path: parsed.pathname,
        timeout: HEALTH_CHECK_TIMEOUT_MS,
        headers: { Accept: 'application/json' },
      },
      (res) => {
        const duration = Date.now() - start;
        const statusCode = res.statusCode ?? 0;

        // Consume the response body so the socket can be reused
        res.resume();

        if (statusCode >= 200 && statusCode < 300) {
          resolve({ name: serviceName, status: 'pass', duration });
        } else if (statusCode >= 500) {
          resolve({
            name: serviceName,
            status: 'fail',
            duration,
            message: `Service returned HTTP ${statusCode}`,
          });
        } else {
          resolve({
            name: serviceName,
            status: 'warn',
            duration,
            message: `Service returned HTTP ${statusCode}`,
          });
        }
      }
    );

    req.on('timeout', () => {
      req.destroy();
      resolve({
        name: serviceName,
        status: 'fail',
        duration: Date.now() - start,
        message: `Health check timed out after ${HEALTH_CHECK_TIMEOUT_MS}ms`,
      });
    });

    req.on('error', (err: Error) => {
      resolve({
        name: serviceName,
        status: 'fail',
        duration: Date.now() - start,
        message: err.message,
      });
    });
  });
}

/**
 * Aggregates health from all downstream services and returns a gateway-level ServiceHealth.
 */
async function aggregateHealth(): Promise<ServiceHealth> {
  const startTime = process.hrtime.bigint();

  const checkResults = await Promise.allSettled(
    DOWNSTREAM_SERVICES.map((svc) => probeServiceHealth(svc.url, svc.name))
  );

  const checks: HealthCheck[] = checkResults.map((result) => {
    if (result.status === 'fulfilled') {
      return result.value;
    }
    return {
      name: 'unknown',
      status: 'fail' as const,
      duration: 0,
      message: 'Health probe threw unexpectedly',
    };
  });

  const allPass = checks.every((c) => c.status === 'pass');
  const anyFail = checks.some((c) => c.status === 'fail');

  const uptimeSeconds = Math.floor(Number(process.hrtime.bigint() - startTime) / 1e6);

  return {
    status: allPass ? 'healthy' : anyFail ? 'unhealthy' : 'degraded',
    service: config.SERVICE_NAME,
    version: process.env.npm_package_version ?? '1.0.0',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    checks: [
      ...checks,
      // Include circuit breaker states as advisory checks
      ...Object.entries(serviceCircuitBreakers.getAllStatus()).map(([name, state]) => ({
        name: `circuit-breaker:${name}`,
        status: state === 'OPEN' ? ('fail' as const) : state === 'HALF_OPEN' ? ('warn' as const) : ('pass' as const),
        duration: uptimeSeconds,
        message: `Circuit breaker state: ${state}`,
      })),
    ],
  };
}

/**
 * Handler for GET /health — gateway-level aggregate health
 */
async function gatewayHealthHandler(_req: Request, res: Response): Promise<void> {
  try {
    const health = await aggregateHealth();
    const httpStatus =
      health.status === 'healthy' ? 200 : health.status === 'degraded' ? 207 : 503;
    res.status(httpStatus).json(health);
  } catch (err) {
    logger.error({ err }, 'Failed to compute gateway health');
    res.status(503).json({
      status: 'unhealthy',
      service: config.SERVICE_NAME,
      version: process.env.npm_package_version ?? '1.0.0',
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      checks: [
        {
          name: 'gateway',
          status: 'fail',
          duration: 0,
          message: err instanceof Error ? err.message : 'Unknown error',
        },
      ],
    } satisfies ServiceHealth);
  }
}

/**
 * Handler for GET /health/services/:serviceName — individual service health probe
 */
async function serviceHealthHandler(req: Request, res: Response): Promise<void> {
  const { serviceName } = req.params as { serviceName: string };
  const entry = DOWNSTREAM_SERVICES.find((s) => s.name === serviceName);

  if (!entry) {
    res.status(404).json({
      status: 'unhealthy',
      service: serviceName,
      version: '0.0.0',
      uptime: 0,
      timestamp: new Date().toISOString(),
      checks: [
        {
          name: serviceName,
          status: 'fail',
          duration: 0,
          message: `Unknown service: ${serviceName}`,
        },
      ],
    } satisfies ServiceHealth);
    return;
  }

  const check = await probeServiceHealth(entry.url, entry.name);
  const circuitState = serviceCircuitBreakers.getAllStatus()[entry.serviceName] ?? 'CLOSED';

  const health: ServiceHealth = {
    status: check.status === 'pass' ? 'healthy' : check.status === 'fail' ? 'unhealthy' : 'degraded',
    service: serviceName,
    version: process.env.npm_package_version ?? '1.0.0',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    checks: [
      check,
      {
        name: `circuit-breaker:${serviceName}`,
        status:
          circuitState === 'OPEN'
            ? 'fail'
            : circuitState === 'HALF_OPEN'
            ? 'warn'
            : 'pass',
        duration: 0,
        message: `Circuit breaker state: ${circuitState}`,
      },
    ],
  };

  const httpStatus = check.status === 'pass' ? 200 : check.status === 'fail' ? 503 : 207;
  res.status(httpStatus).json(health);
}

/**
 * Registers the gateway self-health check so the shared healthCheckHandler also knows about it.
 */
function registerGatewayHealthChecks(): void {
  registerHealthCheck('gateway-process', async (): Promise<HealthCheck> => {
    const memUsage = process.memoryUsage();
    const heapUsedMb = memUsage.heapUsed / 1024 / 1024;
    const status = heapUsedMb < 512 ? 'pass' : heapUsedMb < 768 ? 'warn' : 'fail';
    return {
      name: 'gateway-process',
      status,
      duration: 0,
      message: `Heap used: ${heapUsedMb.toFixed(1)} MB`,
    };
  });

  registerHealthCheck('circuit-breakers', async (): Promise<HealthCheck> => {
    const statuses = serviceCircuitBreakers.getAllStatus();
    const openCount = Object.values(statuses).filter((s) => s === 'OPEN').length;
    return {
      name: 'circuit-breakers',
      status: openCount === 0 ? 'pass' : openCount < 3 ? 'warn' : 'fail',
      duration: 0,
      message: `${openCount} circuit breaker(s) open out of ${Object.keys(statuses).length}`,
    };
  });
}

export function setupHealthRoutes(app: Application): void {
  registerGatewayHealthChecks();

  // Full aggregate health (includes all downstream services)
  app.get('/health', gatewayHealthHandler);

  // Individual service health probe
  app.get('/health/services/:serviceName', serviceHealthHandler);

  // Internal gateway health (uses registered health checks only, not downstream probes)
  app.get('/health/internal', healthCheckHandler);
}
