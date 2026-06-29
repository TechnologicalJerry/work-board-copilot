import { Application, Request, Response, NextFunction, RequestHandler } from 'express';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { IncomingMessage, ServerResponse } from 'http';
import { serviceCircuitBreakers } from '../services/circuit-breaker';
import { config } from '../config';
import { logger } from '@boardpilot/logger';
import { errorResponse } from '@boardpilot/common';

interface ServiceConfig {
  target: string;
  serviceName: string;
}

/**
 * Routing table mapping API path prefixes to downstream service targets.
 * All 20 downstream services are registered here.
 */
const SERVICE_MAP: Record<string, ServiceConfig> = {
  '/api/v1/auth': { target: config.IDENTITY_SERVICE_URL, serviceName: 'identity-service' },
  '/api/v1/users': { target: config.USER_SERVICE_URL, serviceName: 'user-service' },
  '/api/v1/organizations': { target: config.ORGANIZATION_SERVICE_URL, serviceName: 'organization-service' },
  '/api/v1/workspaces': { target: config.WORKSPACE_SERVICE_URL, serviceName: 'workspace-service' },
  '/api/v1/projects': { target: config.PROJECT_SERVICE_URL, serviceName: 'project-service' },
  '/api/v1/tasks': { target: config.TASK_SERVICE_URL, serviceName: 'task-service' },
  '/api/v1/sprints': { target: config.SPRINT_SERVICE_URL, serviceName: 'sprint-service' },
  '/api/v1/boards': { target: config.BOARD_SERVICE_URL, serviceName: 'board-service' },
  '/api/v1/comments': { target: config.COMMENT_SERVICE_URL, serviceName: 'comment-service' },
  '/api/v1/notifications': { target: config.NOTIFICATION_SERVICE_URL, serviceName: 'notification-service' },
  '/api/v1/audit': { target: config.AUDIT_SERVICE_URL, serviceName: 'audit-service' },
  '/api/v1/billing': { target: config.BILLING_SERVICE_URL, serviceName: 'billing-service' },
  '/api/v1/analytics': { target: config.ANALYTICS_SERVICE_URL, serviceName: 'analytics-service' },
  '/api/v1/search': { target: config.SEARCH_SERVICE_URL, serviceName: 'search-service' },
  '/api/v1/files': { target: config.FILE_SERVICE_URL, serviceName: 'file-service' },
  '/api/v1/ai': { target: config.AI_SERVICE_URL, serviceName: 'ai-service' },
  '/api/v1/webhooks': { target: config.WEBHOOK_SERVICE_URL, serviceName: 'webhook-service' },
  '/api/v1/integrations': { target: config.INTEGRATION_SERVICE_URL, serviceName: 'integration-service' },
  '/api/v1/reports': { target: config.REPORT_SERVICE_URL, serviceName: 'report-service' },
  '/api/v1/realtime': { target: config.REALTIME_SERVICE_URL, serviceName: 'realtime-service' },
};

/**
 * Builds forwarding header injector for a proxy request.
 * Sets x-forwarded-* and gateway correlation headers on every proxied call.
 */
function buildOnProxyReq(serviceName: string) {
  return (
    proxyReq: import('http').ClientRequest,
    req: IncomingMessage
  ): void => {
    const expressReq = req as Request;
    const requestId = expressReq.context?.requestId ?? '';
    const correlationId = expressReq.context?.correlationId ?? requestId;

    proxyReq.setHeader('x-forwarded-for', expressReq.ip ?? '');
    proxyReq.setHeader('x-forwarded-host', expressReq.hostname ?? '');
    proxyReq.setHeader('x-forwarded-proto', expressReq.protocol ?? 'http');
    proxyReq.setHeader('x-request-id', requestId);
    proxyReq.setHeader('x-correlation-id', correlationId);
    proxyReq.setHeader('x-gateway-service', serviceName);

    const log = expressReq.log ?? logger;
    log.debug(
      {
        requestId,
        serviceName,
        method: expressReq.method,
        path: expressReq.path,
      },
      'Proxying request to downstream service'
    );
  };
}

/**
 * Creates a proxy middleware for a single downstream service, protected by a circuit breaker.
 */
export function createServiceProxy(
  pathPrefix: string,
  serviceConfig: ServiceConfig
): RequestHandler {
  const { target, serviceName } = serviceConfig;
  const breaker = serviceCircuitBreakers.getBreaker(serviceName);

  const proxyOptions: Options = {
    target,
    changeOrigin: true,
    // Keep full path — downstream services expect the full /api/v1/... path
    pathRewrite: undefined,
    timeout: config.PROXY_TIMEOUT,
    proxyTimeout: config.PROXY_TIMEOUT,
    on: {
      proxyReq: buildOnProxyReq(serviceName),
      proxyRes: (
        proxyRes: IncomingMessage,
        req: IncomingMessage,
        _res: ServerResponse
      ): void => {
        const expressReq = req as Request;
        const log = expressReq.log ?? logger;
        log.debug(
          {
            requestId: expressReq.context?.requestId,
            serviceName,
            statusCode: proxyRes.statusCode,
          },
          'Received response from downstream service'
        );
      },
      error: (
        err: Error,
        req: IncomingMessage,
        res: ServerResponse | Response
      ): void => {
        const expressReq = req as Request;
        const expressRes = res as Response;
        const log = expressReq.log ?? logger;
        const requestId = expressReq.context?.requestId;

        log.error(
          { err, requestId, serviceName, target },
          'Proxy error communicating with downstream service'
        );

        // Record failure in circuit breaker
        breaker.execute(() => Promise.reject(err)).catch(() => {
          // Expected — we just want the circuit breaker to record the failure
        });

        if (!expressRes.headersSent) {
          expressRes.status(502).json(
            errorResponse(
              'BAD_GATEWAY',
              `Unable to reach ${serviceName}. Please try again later.`,
              requestId
            )
          );
        }
      },
    },
  };

  // The raw HPM middleware
  const hpmProxy = createProxyMiddleware(proxyOptions);

  // Wrap with circuit-breaker guard
  const circuitBreakerGuard: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const state = breaker.getState();

    if (state === 'OPEN') {
      const requestId = req.context?.requestId;
      const log = req.log ?? logger;

      log.warn(
        { requestId, serviceName, state },
        'Circuit breaker is OPEN — request rejected fast'
      );

      res.status(503).json(
        errorResponse(
          'SERVICE_UNAVAILABLE',
          `${serviceName} is temporarily unavailable. Please try again later.`,
          requestId
        )
      );
      return;
    }

    // Execute via circuit breaker — the actual I/O happens inside HPM
    breaker
      .execute(
        () =>
          new Promise<void>((resolve, reject) => {
            // We need to know if the proxy succeeded or failed so the circuit
            // breaker can record it. HPM calls the error handler on failure;
            // on success the response is piped and we resolve after headers send.
            const originalEnd = res.end.bind(res);
            let settled = false;

            const settle = (success: boolean): void => {
              if (settled) return;
              settled = true;
              if (success) {
                resolve();
              } else {
                reject(new Error(`${serviceName} returned error`));
              }
            };

            res.end = function (
              this: Response,
              ...args: Parameters<Response['end']>
            ): Response {
              const statusCode = res.statusCode;
              // Treat 5xx as failures for the circuit breaker
              settle(statusCode < 500);
              return originalEnd(...args);
            };

            // Invoke HPM — it handles the actual proxy
            hpmProxy(req, res, (err?: unknown) => {
              if (err) {
                settle(false);
                next(err);
              } else {
                // HPM called next() without error (e.g., no route matched inside HPM)
                settle(true);
                next();
              }
            });
          })
      )
      .catch((err: unknown) => {
        // Circuit breaker threw (OPEN state race) or HPM errored — already handled above
        const knownErr = err instanceof Error ? err : new Error(String(err));
        const message = knownErr.message ?? '';

        if (message.startsWith("Circuit breaker '")) {
          // Fast-fail from a race with OPEN state
          if (!res.headersSent) {
            res.status(503).json(
              errorResponse(
                'SERVICE_UNAVAILABLE',
                `${serviceName} is temporarily unavailable. Please try again later.`,
                req.context?.requestId
              )
            );
          }
        }
        // Other errors are already handled by the HPM error handler above
      });
  };

  return circuitBreakerGuard;
}

/**
 * Registers all proxy routes on the Express application.
 */
export function setupProxyRoutes(app: Application): void {
  const sortedPrefixes = Object.keys(SERVICE_MAP).sort(
    // Sort longest prefix first so more specific routes match before general ones
    (a, b) => b.length - a.length
  );

  for (const prefix of sortedPrefixes) {
    const serviceConfig = SERVICE_MAP[prefix];
    if (!serviceConfig) continue;

    const proxy = createServiceProxy(prefix, serviceConfig);

    app.use(prefix, proxy);

    logger.info(
      { prefix, target: serviceConfig.target, service: serviceConfig.serviceName },
      'Proxy route registered'
    );
  }
}
