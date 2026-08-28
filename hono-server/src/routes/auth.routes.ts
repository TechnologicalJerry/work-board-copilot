import { Hono } from 'hono';
import { successResponse } from '../utils/response.js';
import { BadRequestError } from '../errors/http-error.js';
import { authMiddleware } from '../middleware/auth.js';
import { AuthUser } from '../types/index.js';

export const authRouter = new Hono<{ Variables: { user?: AuthUser } }>();

authRouter.post('/login', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const { email, password } = body;

  if (!email || !password) {
    throw new BadRequestError('Email and password are required');
  }

  // Simulated login check
  const token = 'mock-jwt-token-hono-server-12345';
  const user: AuthUser = {
    id: 'usr_101',
    email,
    name: 'BoardPilot User',
    role: 'user',
  };

  return successResponse(c, { token, user }, 'Login successful');
});

authRouter.post('/register', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const { email, password, name } = body;

  if (!email || !password || !name) {
    throw new BadRequestError('Name, email, and password are required');
  }

  const user: AuthUser = {
    id: `usr_${Date.now()}`,
    email,
    name,
    role: 'user',
  };

  return successResponse(c, { user }, 'User registered successfully', 201);
});

authRouter.get('/me', authMiddleware, (c) => {
  const user = c.get('user');
  return successResponse(c, { user }, 'Current user profile');
});
