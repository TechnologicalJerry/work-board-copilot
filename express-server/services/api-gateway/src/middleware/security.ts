import { Application } from 'express';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import xssClean from 'xss-clean';
import { config } from '../config';
import { logger } from '@boardpilot/logger';

function buildCorsOrigins(): string[] | boolean {
  const raw = config.ALLOWED_ORIGINS.trim();
  if (raw === '*') {
    return true;
  }
  return raw
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
}

const allowedOrigins = buildCorsOrigins();

export function applySecurityMiddleware(app: Application): void {
  // Helmet: sets various HTTP headers for security
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          imgSrc: ["'self'", 'data:', 'https:'],
          connectSrc: ["'self'"],
          frameSrc: ["'none'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      crossOriginEmbedderPolicy: true,
      crossOriginOpenerPolicy: { policy: 'same-origin' },
      crossOriginResourcePolicy: { policy: 'same-site' },
      dnsPrefetchControl: { allow: false },
      frameguard: { action: 'deny' },
      hidePoweredBy: true,
      hsts: {
        maxAge: 31536000, // 1 year in seconds
        includeSubDomains: true,
        preload: true,
      },
      ieNoOpen: true,
      noSniff: true,
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
      xssFilter: true,
    })
  );

  // CORS: restrict cross-origin requests to allowed origins
  app.use(
    cors({
      origin: (
        origin: string | undefined,
        callback: (err: Error | null, allow?: boolean) => void
      ) => {
        // Allow requests with no origin (e.g., server-to-server, curl, Postman)
        if (!origin) {
          return callback(null, true);
        }

        if (allowedOrigins === true) {
          return callback(null, true);
        }

        if ((allowedOrigins as string[]).includes(origin)) {
          return callback(null, true);
        }

        logger.warn({ origin }, 'CORS request from disallowed origin blocked');
        return callback(new Error(`Origin '${origin}' is not allowed by CORS policy`));
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Request-Id',
        'X-Correlation-Id',
        'X-Api-Key',
        'Accept',
        'Cache-Control',
      ],
      exposedHeaders: [
        'X-Request-Id',
        'X-Correlation-Id',
        'X-Gateway-Id',
        'X-Gateway-Version',
        'X-RateLimit-Limit',
        'X-RateLimit-Remaining',
        'X-RateLimit-Reset',
      ],
      maxAge: 86400, // 24 hours preflight cache
    })
  );

  // XSS-clean: sanitize request body, query, and params
  app.use(xssClean());

  // Body size limits
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
}
