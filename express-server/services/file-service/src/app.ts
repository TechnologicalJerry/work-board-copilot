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
import { config } from './config';
import fileRouter from './routes/file.routes';

export function createApp(): express.Application {
  const app = express();

  app.set('trust proxy', 1);
  app.use(helmet());

  app.use(
    cors({
      origin: (config.ALLOWED_ORIGINS ?? 'http://localhost:3000').split(',').map((o) => o.trim()),
      credentials: true,
      methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id', 'X-Correlation-Id'],
    })
  );

  app.use(
    rateLimit({
      windowMs: config.RATE_LIMIT_WINDOW_MS,
      max: config.RATE_LIMIT_MAX_REQUESTS,
      standardHeaders: true,
      legacyHeaders: false,
    })
  );

  // Note: express.json() is NOT applied globally here because multer handles multipart/form-data
  // For non-multipart routes, body parsing is done by express.json()
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);

  app.get('/health', healthCheckHandler);

  app.use('/api/v1/files', fileRouter);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
