import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';
import { config } from '../config';
import { errorResponse } from '@boardpilot/common';

/**
 * Global rate limit: 100 requests per 15-minute window per IP.
 * Uses configured values from environment.
 */
export const globalRateLimit = rateLimit({
  windowMs: config.RATE_LIMIT_WINDOW_MS,
  max: config.RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request): string => {
    return (
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ??
      req.ip ??
      'unknown'
    );
  },
  handler: (_req: Request, res: Response): void => {
    res.status(429).json(
      errorResponse(
        'TOO_MANY_REQUESTS',
        'Too many requests. Please try again later.',
        undefined
      )
    );
  },
  skip: (req: Request): boolean => {
    // Skip rate limiting for health checks
    return req.path === '/health' || req.path.startsWith('/health/');
  },
});

/**
 * Auth rate limit: 20 requests per 15-minute window per IP.
 * Applied to authentication endpoints to prevent brute force.
 */
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request): string => {
    return (
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ??
      req.ip ??
      'unknown'
    );
  },
  handler: (_req: Request, res: Response): void => {
    res.status(429).json(
      errorResponse(
        'TOO_MANY_REQUESTS',
        'Too many authentication attempts. Please try again later.',
        undefined
      )
    );
  },
});

/**
 * Strict rate limit: 5 requests per 1-minute window per IP.
 * Applied to sensitive endpoints like password reset, MFA setup.
 */
export const strictRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request): string => {
    return (
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ??
      req.ip ??
      'unknown'
    );
  },
  handler: (_req: Request, res: Response): void => {
    res.status(429).json(
      errorResponse(
        'TOO_MANY_REQUESTS',
        'Rate limit exceeded for sensitive operation. Please wait before trying again.',
        undefined
      )
    );
  },
});

/**
 * API key rate limit: 1000 requests per 15-minute window per authenticated user.
 * Keyed by user ID if authenticated, falls back to IP.
 */
export const apiKeyRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request): string => {
    return req.user?.id ?? req.ip ?? 'unknown';
  },
  handler: (_req: Request, res: Response): void => {
    res.status(429).json(
      errorResponse(
        'TOO_MANY_REQUESTS',
        'API rate limit exceeded. Please reduce your request frequency.',
        undefined
      )
    );
  },
});
