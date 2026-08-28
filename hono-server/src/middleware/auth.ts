import { MiddlewareHandler } from 'hono';
import { UnauthorizedError } from '../errors/http-error.js';
import { AuthUser } from '../types/index.js';

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header('Authorization') || c.req.header('x-user-id');

  if (!authHeader) {
    throw new UnauthorizedError('Missing authorization header');
  }

  // Simulated authentication validation
  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    if (token === 'invalid-token') {
      throw new UnauthorizedError('Invalid or expired token');
    }
  }

  // Inject authenticated user into Hono Context
  const mockUser: AuthUser = {
    id: 'usr_101',
    email: 'admin@boardpilot.ai',
    name: 'Admin User',
    role: 'admin',
  };

  c.set('user', mockUser);
  await next();
};
