import { Hono } from 'hono';
import { successResponse } from '../utils/response.js';
import { NotFoundError, BadRequestError } from '../errors/http-error.js';
import { authMiddleware } from '../middleware/auth.js';
import { User, AuthUser } from '../types/index.js';

export const userRouter = new Hono<{ Variables: { user?: AuthUser } }>();

// In-memory data store for reference implementation
const mockUsers: Map<string, User> = new Map([
  [
    'usr_1',
    {
      id: 'usr_1',
      email: 'alex@boardpilot.ai',
      name: 'Alex Johnson',
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  [
    'usr_2',
    {
      id: 'usr_2',
      email: 'sam@boardpilot.ai',
      name: 'Sam Wilson',
      role: 'manager',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
]);

userRouter.use('*', authMiddleware);

userRouter.get('/', (c) => {
  const users = Array.from(mockUsers.values());
  return successResponse(c, users, 'Users retrieved successfully');
});

userRouter.get('/:id', (c) => {
  const id = c.req.param('id');
  const user = mockUsers.get(id);

  if (!user) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  return successResponse(c, user, 'User details retrieved');
});

userRouter.post('/', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const { name, email, role = 'user' } = body;

  if (!name || !email) {
    throw new BadRequestError('Name and email are required');
  }

  const id = `usr_${Date.now()}`;
  const newUser: User = {
    id,
    name,
    email,
    role,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  mockUsers.set(id, newUser);
  return successResponse(c, newUser, 'User created successfully', 201);
});

userRouter.put('/:id', async (c) => {
  const id = c.req.param('id');
  const existingUser = mockUsers.get(id);

  if (!existingUser) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  const body = await c.req.json().catch(() => ({}));
  const updatedUser: User = {
    ...existingUser,
    ...body,
    id, // protect ID from mutation
    updatedAt: new Date().toISOString(),
  };

  mockUsers.set(id, updatedUser);
  return successResponse(c, updatedUser, 'User updated successfully');
});

userRouter.delete('/:id', (c) => {
  const id = c.req.param('id');
  if (!mockUsers.has(id)) {
    throw new NotFoundError(`User with ID ${id} not found`);
  }

  mockUsers.delete(id);
  return successResponse(c, { id }, 'User deleted successfully');
});
