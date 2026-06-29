import express from 'express';

import { applySecurityMiddleware } from './middleware/security';
import { correlationMiddleware } from './middleware/correlation';
import { globalRateLimit } from './middleware/rate-limit';
import { timeoutMiddleware } from './middleware/timeout';
import { gatewayAuthMiddleware } from './middleware/auth';
import { setupHealthRoutes } from './routes/health.routes';
import { setupRoutes } from './routes/proxy.routes';
import { notFoundMiddleware, errorHandlerMiddleware } from '@boardpilot/middlewares';

/**
 * Creates and configures the Express application.
 *
 * Middleware stack (in order):
 *  1. Security (helmet, CORS, XSS-clean, body parser)
 *  2. Correlation IDs + request context
 *  3. Global rate limiter
 *  4. Request timeout guard
 *  5. Optional gateway-level JWT auth (injects x-user-* headers for downstream)
 *  6. Health routes (/health, /health/services/:name, /health/internal)
 *  7. Proxy routes + Swagger UI (/api-docs, /api/v1/*)
 *  8. 404 handler (must come after all routes)
 *  9. Global error handler (must be last)
 */
export function createApp(): express.Application {
  const app = express();

  // Trust the first proxy hop (for correct IP in rate limiting / logging behind nginx/ALB)
  app.set('trust proxy', 1);

  // 1. Security headers, CORS, XSS sanitisation, body parsing
  applySecurityMiddleware(app);

  // 2. Request context (requestId, correlationId, req.log) + gateway headers
  app.use(correlationMiddleware);

  // 3. Global rate limiting
  app.use(globalRateLimit);

  // 4. Request timeout
  app.use(timeoutMiddleware);

  // 5. Optional JWT validation — populates req.user when a valid token is present
  app.use(gatewayAuthMiddleware);

  // 6. Health check routes (these must be before proxy so /health is handled locally)
  setupHealthRoutes(app);

  // 7. Proxy routes to downstream services + Swagger UI
  setupRoutes(app);

  // 8. 404 catch-all
  app.use(notFoundMiddleware);

  // 9. Centralised error handler
  app.use(errorHandlerMiddleware);

  return app;
}
