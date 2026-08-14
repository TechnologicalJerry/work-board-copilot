import { Request, Response, NextFunction } from 'express';
import { AppError } from '@boardpilot/errors';
import { errorResponse } from '@boardpilot/common';
import logger from '@boardpilot/logger';
import { ZodError } from 'zod';

export function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const requestId = req.context?.requestId;

  if (err instanceof ZodError) {
    const details = err.errors.reduce<Record<string, string>>((acc, e) => {
      acc[e.path.join('.')] = e.message;
      return acc;
    }, {});

    res.status(422).json(
      errorResponse('VALIDATION_ERROR', 'Validation failed', requestId, details)
    );
    return;
  }

  if (err instanceof AppError) {
    if (!err.isOperational) {
      logger.error({ err, requestId }, 'Non-operational error');
    }

    res.status(err.statusCode).json(
      errorResponse(err.code, err.message, requestId, err.details)
    );
    return;
  }

  logger.error({ err, requestId, path: req.path, method: req.method }, 'Unhandled error');

  res.status(500).json(
    errorResponse(
      'INTERNAL_SERVER_ERROR',
      process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
      requestId
    )
  );
}
