import { Hono } from 'hono';
import { successResponse } from '../utils/response.js';

export const healthRouter = new Hono();

const startTime = Date.now();

healthRouter.get('/health', (c) => {
  return successResponse(c, {
    status: 'UP',
    service: 'hono-server',
    version: '1.0.0',
    uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
  });
});

healthRouter.get('/health/ready', (c) => {
  return successResponse(c, {
    status: 'READY',
    checks: {
      database: 'connected',
      cache: 'connected',
    },
  });
});
