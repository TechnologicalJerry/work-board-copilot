import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload, AuthenticatedUser, PermissionKey } from '@boardpilot/types';
import { UnauthorizedError, ForbiddenError, TokenExpiredError, TokenInvalidError } from '@boardpilot/errors';

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

export function authenticate(req: Request, _res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Missing or invalid Authorization header'));
  }

  const token = authHeader.substring(7);
  const secret = process.env.JWT_ACCESS_SECRET;

  if (!secret) {
    return next(new Error('JWT_ACCESS_SECRET not configured'));
  }

  try {
    const payload = jwt.verify(token, secret) as JwtPayload;

    if (payload.type !== 'access') {
      return next(new TokenInvalidError());
    }

    req.user = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      organizationId: payload.organizationId,
      workspaceId: payload.workspaceId,
      permissions: payload.permissions,
      sessionId: payload.sessionId,
    };

    req.context = {
      ...req.context,
      userId: payload.sub,
      organizationId: payload.organizationId,
      workspaceId: payload.workspaceId,
    };

    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return next(new TokenExpiredError());
    }
    next(new TokenInvalidError());
  }
}

export function optionalAuthenticate(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return next();
  }
  authenticate(req, res, next);
}

export function requirePermission(...permissions: PermissionKey[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new UnauthorizedError());
    }

    const hasPermission =
      req.user.permissions.includes('admin:*') ||
      permissions.every((p) => req.user!.permissions.includes(p));

    if (!hasPermission) {
      return next(new ForbiddenError(`Missing required permissions: ${permissions.join(', ')}`));
    }

    next();
  };
}

export function requireRole(...roles: string[]) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new UnauthorizedError());
    }

    if (!roles.includes(req.user.role) && req.user.role !== 'super_admin') {
      return next(new ForbiddenError(`Required role: ${roles.join(' or ')}`));
    }

    next();
  };
}
