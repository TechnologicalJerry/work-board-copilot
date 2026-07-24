import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { PrismaClient } from './generated/prisma-client';
import {
  requestContextMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware,
  healthCheckHandler,
} from '@boardpilot/middlewares';
import { createUserRouter } from './presentation/routes/user.routes';

export function createApp(prisma?: PrismaClient): express.Application {
  const app = express();

  // Trust first proxy hop (for correct IP behind nginx/ALB)
  app.set('trust proxy', 1);

  // Security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: (process.env.ALLOWED_ORIGINS ?? 'http://localhost:3000').split(',').map((o) => o.trim()),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id', 'X-Correlation-Id'],
    })
  );

  // Rate limiting
  app.use(
    rateLimit({
      windowMs: 900000,
      max: 100,
      standardHeaders: true,
      legacyHeaders: false,
    })
  );

  // Body parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Request context (requestId, correlationId, req.log)
  app.use(requestContextMiddleware);

  // Health check (no auth required)
  app.get('/health', healthCheckHandler);

  // API routes
  if (prisma) {
    app.use('/api/v1/users', createUserRouter(prisma));
  }

  // 404 catch-all
  app.use(notFoundMiddleware);

  // Global error handler (must be last)
  app.use(errorHandlerMiddleware);

  return app;
}
