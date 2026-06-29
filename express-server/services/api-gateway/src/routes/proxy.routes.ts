import path from 'path';
import { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { setupProxyRoutes } from '../middleware/proxy';
import { logger } from '@boardpilot/logger';

/**
 * Loads the swagger.yaml spec from the project root.
 * Falls back gracefully if the file is missing.
 */
function loadSwaggerSpec(): Record<string, unknown> | null {
  try {
    const swaggerPath = path.resolve(__dirname, '../../swagger.yaml');
    return YAML.load(swaggerPath) as Record<string, unknown>;
  } catch (err) {
    logger.warn({ err }, 'swagger.yaml not found — API docs will be unavailable');
    return null;
  }
}

/**
 * setupRoutes registers:
 *  1. Swagger UI at GET /api-docs (aggregated OpenAPI spec)
 *  2. All 20 downstream service proxy routes under /api/v1/*
 */
export function setupRoutes(app: Application): void {
  // Swagger / OpenAPI documentation
  const swaggerSpec = loadSwaggerSpec();

  if (swaggerSpec) {
    app.use('/api-docs', swaggerUi.serve);
    app.get('/api-docs', swaggerUi.setup(swaggerSpec, {
      explorer: true,
      customCss: '.swagger-ui .topbar { display: none }',
      customSiteTitle: 'BoardPilot AI API Gateway',
      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        filter: true,
        tryItOutEnabled: true,
      },
    }));

    // Also expose the raw JSON spec
    app.get('/api-docs.json', (_req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(swaggerSpec);
    });

    logger.info('Swagger UI registered at /api-docs');
  } else {
    app.get('/api-docs', (_req: Request, res: Response) => {
      res.status(503).json({
        error: 'API documentation is not available',
        message: 'swagger.yaml was not found at the expected location',
      });
    });
  }

  // Register all downstream proxy routes
  setupProxyRoutes(app);
}
