import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { env } from './config/env.js';
import { healthRouter } from './routes/health.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { userRouter } from './routes/user.routes.js';
import { taskRouter } from './routes/task.routes.js';
import { HttpError } from './errors/http-error.js';
import { errorResponse, successResponse } from './utils/response.js';
import { AppVariables } from './types/index.js';

export function createApp(): Hono<{ Variables: AppVariables }> {
  const app = new Hono<{ Variables: AppVariables }>();

  // 1. Request ID & logging middleware
  app.use('*', async (c, next) => {
    const requestId = crypto.randomUUID();
    c.set('requestId', requestId);
    c.header('X-Request-ID', requestId);
    await next();
  });

  if (env.NODE_ENV !== 'test') {
    app.use('*', logger());
  }

  // 2. Global CORS & formatting
  app.use('*', cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'x-user-id'],
    exposeHeaders: ['X-Request-ID'],
  }));

  app.use('*', prettyJSON());

  // 3. Health routes (unprotected)
  app.route('/', healthRouter);

  // 4. API routes under configured prefix (/api/v1)
  const api = new Hono<{ Variables: AppVariables }>();
  api.route('/auth', authRouter);
  api.route('/users', userRouter);
  api.route('/tasks', taskRouter);

  app.route(env.API_PREFIX, api);

  // 5. 404 Not Found Handler
  app.notFound((c) => {
    return errorResponse(c, `Route ${c.req.method} ${c.req.path} not found`, 'NOT_FOUND', 404);
  });

  // 6. Centralized Error Handler
  app.onError((err, c) => {
    if (err instanceof HttpError) {
      return errorResponse(c, err.message, err.code, err.statusCode, err.details);
    }

    console.error('🔥 Unhandled Error:', err);
    return errorResponse(
      c,
      env.NODE_ENV === 'production' ? 'Internal server error' : err.message || 'Internal server error',
      'INTERNAL_SERVER_ERROR',
      500
    );
  });

  return app;
}
