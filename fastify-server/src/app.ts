import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import cookie from '@fastify/cookie';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';
import authPlugin from './plugins/auth.plugin';
import { authRoutes } from './routes/auth.routes';
import { healthRoutes } from './routes/health.routes';
import { env } from './config/env';

export function buildApp() {
  const app = Fastify({
    logger: env.NODE_ENV === 'development' ? {
      transport: {
        target: 'pino-pretty',
        options: { translateTime: 'HH:MM:ss Z', ignore: 'pid,hostname' },
      },
    } : true,
    trustProxy: true,
  });

  // Register Security & Utility Plugins
  app.register(helmet, { contentSecurityPolicy: false });

  app.register(cors, {
    origin: env.CORS_ORIGIN.split(',').map((o) => o.trim()),
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-Id'],
  });

  app.register(cookie, {
    secret: env.JWT_SECRET,
  });

  app.register(jwt, {
    secret: env.JWT_SECRET,
    sign: {
      expiresIn: env.JWT_EXPIRES_IN,
    },
  });

  app.register(rateLimit, {
    max: env.RATE_LIMIT_MAX,
    timeWindow: env.RATE_LIMIT_WINDOW_MS,
  });

  // Register Authentication Plugin Decorator
  app.register(authPlugin);

  // Register Routes
  app.register(healthRoutes);
  app.register(authRoutes, { prefix: '/api/v1/auth' });

  // Global Error Handler
  app.setErrorHandler((error: any, _request, reply) => {
    const statusCode = error.statusCode || 500;
    const response = {
      statusCode,
      error: error.name || 'InternalServerError',
      message: error.message || 'An unexpected error occurred',
      ...(error.issues ? { issues: error.issues } : {}),
    };

    if (statusCode >= 500) {
      app.log.error(error);
    }

    reply.status(statusCode).send(response);
  });

  return app;
}
