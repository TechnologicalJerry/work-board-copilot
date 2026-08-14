import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { ValidationError } from '@boardpilot/errors';

export function validateBody<T>(schema: ZodSchema<T>) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      req.body = schema.parse(req.body) as typeof req.body;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const details = error.errors.reduce<Record<string, string>>((acc, e) => {
          acc[e.path.join('.')] = e.message;
          return acc;
        }, {});
        next(new ValidationError('Request body validation failed', details));
      } else {
        next(error);
      }
    }
  };
}

export function validateQuery<T>(schema: ZodSchema<T>) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      req.query = schema.parse(req.query) as typeof req.query;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const details = error.errors.reduce<Record<string, string>>((acc, e) => {
          acc[e.path.join('.')] = e.message;
          return acc;
        }, {});
        next(new ValidationError('Query parameter validation failed', details));
      } else {
        next(error);
      }
    }
  };
}

export function validateParams<T>(schema: ZodSchema<T>) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    try {
      req.params = schema.parse(req.params) as typeof req.params;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const details = error.errors.reduce<Record<string, string>>((acc, e) => {
          acc[e.path.join('.')] = e.message;
          return acc;
        }, {});
        next(new ValidationError('URL parameter validation failed', details));
      } else {
        next(error);
      }
    }
  };
}
