import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { requestContextMiddleware, errorHandlerMiddleware, notFoundMiddleware, healthCheckHandler } from '@boardpilot/middlewares';
import notificationRoutes from './presentation/routes/notification.routes';
import webhookRoutes from './presentation/routes/webhook.routes';

export function createApp(): express.Application {
  const app = express();

  app.use(helmet());
  app.use(cors({
    origin: (process.env.ALLOWED_ORIGINS ?? '').split(','),
    credentials: true,
  }));

  app.use(rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS ?? '100'),
    standardHeaders: true,
    legacyHeaders: false,
  }));

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);

  app.get('/health', healthCheckHandler);
  app.get('/metrics', (_req, res) => res.json({ status: 'ok' }));

  app.use('/api/v1/notifications', notificationRoutes);
  app.use('/api/v1/webhooks', webhookRoutes);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
