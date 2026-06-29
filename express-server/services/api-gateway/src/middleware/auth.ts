import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload, AuthenticatedUser } from '@boardpilot/types';
import { logger } from '@boardpilot/logger';
import { config } from '../config';

/**
 * gatewayAuthMiddleware performs optional JWT validation at the gateway level.
 *
 * Behaviour:
 *  - If no Authorization header is present, the request continues unauthenticated.
 *  - If a Bearer token is present and valid, req.user is populated and upstream
 *    forwarding headers (x-user-*) are injected so downstream services can trust
 *    the identity without repeating JWT verification.
 *  - If the token is present but invalid / expired, the request still continues
 *    unauthenticated; downstream services that require auth will reject it.
 *
 * This design lets public endpoints (e.g., POST /api/v1/auth/login) pass through
 * without a token while services that require auth enforce it themselves.
 */
export function gatewayAuthMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const log = req.log ?? logger;
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    // No token — continue as unauthenticated
    return next();
  }

  const token = authHeader.substring(7);

  try {
    const payload = jwt.verify(token, config.JWT_ACCESS_SECRET) as JwtPayload;

    if (payload.type !== 'access') {
      log.warn(
        { requestId: req.context?.requestId, tokenType: payload.type },
        'Gateway auth: token type is not "access" — ignoring token'
      );
      return next();
    }

    const user: AuthenticatedUser = {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      organizationId: payload.organizationId,
      workspaceId: payload.workspaceId,
      permissions: payload.permissions,
      sessionId: payload.sessionId,
    };

    req.user = user;

    // Update request context with user identity
    if (req.context) {
      req.context = {
        ...req.context,
        userId: payload.sub,
        organizationId: payload.organizationId,
        workspaceId: payload.workspaceId,
      };
    }

    // Inject forwarding headers for downstream services
    req.headers['x-user-id'] = user.id;
    req.headers['x-user-email'] = user.email;
    req.headers['x-user-role'] = user.role;
    req.headers['x-user-permissions'] = user.permissions.join(',');
    req.headers['x-user-session-id'] = user.sessionId;

    if (user.organizationId) {
      req.headers['x-user-organization-id'] = user.organizationId;
    }
    if (user.workspaceId) {
      req.headers['x-user-workspace-id'] = user.workspaceId;
    }

    log.debug(
      {
        requestId: req.context?.requestId,
        userId: user.id,
        role: user.role,
      },
      'Gateway auth: token validated successfully'
    );
  } catch (err) {
    // Token present but invalid — log and continue as unauthenticated
    const errorMessage = err instanceof Error ? err.message : 'Unknown JWT error';
    log.warn(
      { requestId: req.context?.requestId, error: errorMessage },
      'Gateway auth: invalid token presented — continuing unauthenticated'
    );
  }

  next();
}
