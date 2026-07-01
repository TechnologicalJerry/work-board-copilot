import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { requestContextMiddleware, errorHandlerMiddleware, notFoundMiddleware, healthCheckHandler } from '@boardpilot/middlewares';
import { automationRouter } from './routes/automation.routes';
import { getConfig } from './config';

export function createApp(): express.Application {
  const config = getConfig();
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: config.ALLOWED_ORIGINS.split(','), credentials: true }));
  app.use(rateLimit({
    windowMs: config.RATE_LIMIT_WINDOW_MS,
    max: config.RATE_LIMIT_MAX_REQUESTS,
    standardHeaders: true,
    legacyHeaders: false,
  }));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);

  app.get('/health', healthCheckHandler);
  app.use('/api/v1/automations', automationRouter);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
