import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import {
  requestContextMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware,
  healthCheckHandler,
} from '@boardpilot/middlewares';
import { boardRouter } from './routes/index';
import { config } from './config';

export function createApp(): express.Application {
  const app = express();

  // Trust first proxy hop (for correct IP behind nginx/ALB)
  app.set('trust proxy', 1);

  // Security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: config.ALLOWED_ORIGINS.split(',').map((o) => o.trim()),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Request-Id',
        'X-Correlation-Id',
      ],
    })
  );

  // Compression
  app.use(compression());

  // Body parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Request context (requestId, correlationId, req.log)
  app.use(requestContextMiddleware);

  // Health check endpoint (no auth required)
  app.get('/health', healthCheckHandler);

  // API routes
  app.use('/api/v1', boardRouter);

  // 404 catch-all
  app.use(notFoundMiddleware);

  // Global error handler (must be last)
  app.use(errorHandlerMiddleware);

  return app;
}
