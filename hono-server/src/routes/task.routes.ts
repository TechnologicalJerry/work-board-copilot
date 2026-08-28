import { Hono } from 'hono';
import { successResponse } from '../utils/response.js';
import { NotFoundError, BadRequestError } from '../errors/http-error.js';
import { authMiddleware } from '../middleware/auth.js';
import { Task, AuthUser } from '../types/index.js';

export const taskRouter = new Hono<{ Variables: { user?: AuthUser } }>();

const mockTasks: Map<string, Task> = new Map([
  [
    'tsk_1',
    {
      id: 'tsk_1',
      title: 'Setup Hono Server',
      description: 'Implement simple TypeScript Hono server reference architecture',
      status: 'in_progress',
      priority: 'high',
      assigneeId: 'usr_1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  [
    'tsk_2',
    {
      id: 'tsk_2',
      title: 'Configure OpenAPI / Swagger Docs',
      description: 'Add API documentation endpoints for BoardPilot AI microservices',
      status: 'todo',
      priority: 'medium',
      assigneeId: 'usr_2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
]);

taskRouter.use('*', authMiddleware);

taskRouter.get('/', (c) => {
  const status = c.req.query('status');
  let tasks = Array.from(mockTasks.values());

  if (status) {
    tasks = tasks.filter((t) => t.status === status);
  }

  return successResponse(c, tasks, 'Tasks retrieved successfully');
});

taskRouter.get('/:id', (c) => {
  const id = c.req.param('id');
  const task = mockTasks.get(id);

  if (!task) {
    throw new NotFoundError(`Task with ID ${id} not found`);
  }

  return successResponse(c, task, 'Task details retrieved');
});

taskRouter.post('/', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const { title, description = '', status = 'todo', priority = 'medium', assigneeId } = body;

  if (!title) {
    throw new BadRequestError('Task title is required');
  }

  const id = `tsk_${Date.now()}`;
  const newTask: Task = {
    id,
    title,
    description,
    status,
    priority,
    assigneeId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  mockTasks.set(id, newTask);
  return successResponse(c, newTask, 'Task created successfully', 201);
});

taskRouter.put('/:id', async (c) => {
  const id = c.req.param('id');
  const existingTask = mockTasks.get(id);

  if (!existingTask) {
    throw new NotFoundError(`Task with ID ${id} not found`);
  }

  const body = await c.req.json().catch(() => ({}));
  const updatedTask: Task = {
    ...existingTask,
    ...body,
    id,
    updatedAt: new Date().toISOString(),
  };

  mockTasks.set(id, updatedTask);
  return successResponse(c, updatedTask, 'Task updated successfully');
});

taskRouter.delete('/:id', (c) => {
  const id = c.req.param('id');
  if (!mockTasks.has(id)) {
    throw new NotFoundError(`Task with ID ${id} not found`);
  }

  mockTasks.delete(id);
  return successResponse(c, { id }, 'Task deleted successfully');
});
