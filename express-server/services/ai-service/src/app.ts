import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import {
  requestContextMiddleware,
  errorHandlerMiddleware,
  notFoundMiddleware,
  healthCheckHandler,
  authenticate,
} from '@boardpilot/middlewares';
import { config } from './config';
import {
  chat,
  sprintPlanning,
  taskBreakdown,
  standupSummary,
  releaseNotes,
  bugAnalysis,
  meetingNotes,
  getSessions,
  getSession,
  removeSession,
  continueSession,
  getTokenUsageHandler,
} from './controllers/ai.controller';

export function createApp(): express.Application {
  const app = express();

  // Trust first proxy hop (for correct IP behind nginx/ALB)
  app.set('trust proxy', 1);

  // Security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: (config.ALLOWED_ORIGINS ?? 'http://localhost:3000').split(',').map((o) => o.trim()),
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id', 'X-Correlation-Id'],
    })
  );

  // Rate limiting — tighter for AI endpoints (token cost)
  app.use(
    rateLimit({
      windowMs: 900000,
      max: 60,
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

  // ── AI capability routes ──────────────────────────────────────────────────
  app.post('/api/v1/ai/chat', authenticate, chat);
  app.post('/api/v1/ai/sprint-planning', authenticate, sprintPlanning);
  app.post('/api/v1/ai/task-breakdown', authenticate, taskBreakdown);
  app.post('/api/v1/ai/standup', authenticate, standupSummary);
  app.post('/api/v1/ai/release-notes', authenticate, releaseNotes);
  app.post('/api/v1/ai/bug-analysis', authenticate, bugAnalysis);
  app.post('/api/v1/ai/meeting-notes', authenticate, meetingNotes);

  // ── Session management routes ────────────────────────────────────────────
  app.get('/api/v1/ai/sessions', authenticate, getSessions);
  app.get('/api/v1/ai/sessions/:sessionId', authenticate, getSession);
  app.delete('/api/v1/ai/sessions/:sessionId', authenticate, removeSession);
  app.post('/api/v1/ai/sessions/:sessionId/continue', authenticate, continueSession);

  // ── Token usage ──────────────────────────────────────────────────────────
  app.get('/api/v1/ai/usage', authenticate, getTokenUsageHandler);

  // 404 catch-all
  app.use(notFoundMiddleware);

  // Global error handler (must be last)
  app.use(errorHandlerMiddleware);

  return app;
}
