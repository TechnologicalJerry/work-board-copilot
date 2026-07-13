import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import {
  requestContextMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware,
  healthCheckHandler,
} from '@boardpilot/middlewares';
import { createProjectRouter } from './presentation/routes/project.routes';

const corsOrigins = (
  process.env.CORS_ORIGINS ??
  process.env.ALLOWED_ORIGINS ??
  'http://localhost:3000'
)
  .split(',')
  .map((o) => o.trim());

export function createApp(): express.Application {
  const app = express();

  // Trust first proxy hop (for correct IP behind nginx/ALB)
  app.set('trust proxy', 1);

  // Security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: corsOrigins,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id', 'X-Correlation-Id'],
    })
  );

  // Rate limiting
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 300,
      standardHeaders: true,
      legacyHeaders: false,
    })
  );

  // Body parsing
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Request context (requestId, correlationId, req.log)
  app.use(requestContextMiddleware);

  // Health check (no auth required)
  app.get('/health', healthCheckHandler);

  // API routes
  app.use('/api/v1/projects', createProjectRouter());

  // 404 catch-all
  app.use(notFoundMiddleware);

  // Global error handler (must be last)
  app.use(errorHandlerMiddleware);

  return app;
}
