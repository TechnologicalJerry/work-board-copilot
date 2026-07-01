import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { requestContextMiddleware, errorHandlerMiddleware, notFoundMiddleware, healthCheckHandler } from '@boardpilot/middlewares';
import { billingRouter } from './presentation/routes/billing.routes';
import { BillingController } from './presentation/controllers/BillingController';
import { BillingService } from './services/BillingService';
import { BillingRepository } from './infrastructure/repositories/BillingRepository';
import { StripeService } from './infrastructure/stripe/StripeService';
import { BillingEventPublisher } from './infrastructure/events/BillingEventPublisher';
import { getConfig } from './config';

export function createApp(): express.Application {
  const config = getConfig();
  const app = express();

  app.use(helmet());
  app.use(cors({
    origin: config.ALLOWED_ORIGINS.split(','),
    credentials: true,
  }));
  app.use(rateLimit({
    windowMs: config.RATE_LIMIT_WINDOW_MS,
    max: config.RATE_LIMIT_MAX_REQUESTS,
    standardHeaders: true,
    legacyHeaders: false,
  }));

  // Stripe webhook requires raw body — mount BEFORE express.json()
  const repo = new BillingRepository();
  const stripe = new StripeService();
  const publisher = new BillingEventPublisher();
  const billingService = new BillingService(repo, stripe, publisher);
  const controller = new BillingController(billingService, stripe);

  app.post(
    '/api/v1/billing/webhooks/stripe',
    express.raw({ type: 'application/json' }),
    controller.handleStripeWebhook,
  );

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(requestContextMiddleware);

  app.get('/health', healthCheckHandler);
  app.use('/api/v1/billing', billingRouter);

  app.use(notFoundMiddleware);
  app.use(errorHandlerMiddleware);

  return app;
}
