import { Request, Response, NextFunction } from 'express';
import { config } from '../config';
import { errorResponse } from '@boardpilot/common';
import { logger } from '@boardpilot/logger';

/**
 * timeoutMiddleware enforces a maximum request duration.
 *
 * If the upstream proxy or handler does not complete within PROXY_TIMEOUT ms,
 * the gateway responds with HTTP 504 Gateway Timeout and logs the event.
 *
 * Once the timeout fires, a flag is set to prevent double-sending if the
 * downstream handler later tries to send a response.
 */
export function timeoutMiddleware(req: Request, res: Response, next: NextFunction): void {
  let timedOut = false;

  const timer = setTimeout(() => {
    timedOut = true;

    const requestId = req.context?.requestId;
    const log = req.log ?? logger;

    log.warn(
      {
        requestId,
        method: req.method,
        path: req.path,
        timeoutMs: config.PROXY_TIMEOUT,
      },
      'Request timed out at gateway'
    );

    if (!res.headersSent) {
      res.status(504).json(
        errorResponse(
          'GATEWAY_TIMEOUT',
          `Request timed out after ${config.PROXY_TIMEOUT}ms`,
          requestId
        )
      );
    }
  }, config.PROXY_TIMEOUT);

  // Ensure the timer does not prevent Node from exiting
  timer.unref();

  // Clear the timer once the response finishes
  res.on('finish', () => {
    if (!timedOut) {
      clearTimeout(timer);
    }
  });

  res.on('close', () => {
    if (!timedOut) {
      clearTimeout(timer);
    }
  });

  next();
}
