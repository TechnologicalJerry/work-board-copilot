import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { RequestContext } from '@boardpilot/types';
import { createRequestLogger } from '@boardpilot/logger';

declare global {
  namespace Express {
    interface Request {
      context: RequestContext;
      log: ReturnType<typeof createRequestLogger>;
    }
  }
}

export function requestContextMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const requestId = (req.headers['x-request-id'] as string) ?? uuidv4();
  const correlationId = (req.headers['x-correlation-id'] as string) ?? requestId;

  req.context = {
    requestId,
    correlationId,
    ip: req.ip ?? req.socket.remoteAddress ?? 'unknown',
    userAgent: req.headers['user-agent'] ?? 'unknown',
    path: req.path,
    method: req.method as RequestContext['method'],
    startTime: Date.now(),
  };

  req.log = createRequestLogger(requestId, correlationId, {
    service: process.env.SERVICE_NAME,
  });

  res.setHeader('X-Request-Id', requestId);
  res.setHeader('X-Correlation-Id', correlationId);

  req.log.info({ method: req.method, path: req.path, ip: req.context.ip }, 'Incoming request');

  res.on('finish', () => {
    const duration = Date.now() - req.context.startTime;
    req.log.info(
      {
        method: req.method,
        path: req.path,
        statusCode: res.statusCode,
        duration,
      },
      'Request completed'
    );
  });

  next();
}
