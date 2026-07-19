import { Router } from 'express';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import { TaskController } from '../presentation/controllers/TaskController';
import { TaskRepository } from '../infrastructure/repositories/TaskRepository';
import { TaskHistoryRepository } from '../infrastructure/repositories/TaskHistoryRepository';
import { CreateTaskUseCase } from '../application/use-cases/CreateTaskUseCase';
import { GetTaskUseCase } from '../application/use-cases/GetTaskUseCase';
import { ListTasksUseCase } from '../application/use-cases/ListTasksUseCase';
import { UpdateTaskUseCase } from '../application/use-cases/UpdateTaskUseCase';
import { DeleteTaskUseCase } from '../application/use-cases/DeleteTaskUseCase';
import { AssignTaskUseCase } from '../application/use-cases/AssignTaskUseCase';
import { ChangeTaskStatusUseCase } from '../application/use-cases/ChangeTaskStatusUseCase';
import { AddLabelUseCase } from '../application/use-cases/AddLabelUseCase';
import { RemoveLabelUseCase } from '../application/use-cases/RemoveLabelUseCase';
import { WatchTaskUseCase } from '../application/use-cases/WatchTaskUseCase';
import { UnwatchTaskUseCase } from '../application/use-cases/UnwatchTaskUseCase';
import { GetTaskHistoryUseCase } from '../application/use-cases/GetTaskHistoryUseCase';
import { BulkUpdateStatusUseCase } from '../application/use-cases/BulkUpdateStatusUseCase';
import { GetTaskStatsUseCase } from '../application/use-cases/GetTaskStatsUseCase';
import {
  createTaskSchema,
  updateTaskSchema,
  listTasksSchema,
  changeStatusSchema,
  assignSchema,
  bulkStatusSchema,
  statsQuerySchema,
} from '../presentation/validators/task.validators';

// Compose dependencies
const taskRepository = new TaskRepository();
const taskHistoryRepository = new TaskHistoryRepository();

const createTaskUseCase = new CreateTaskUseCase(taskRepository, taskHistoryRepository);
const getTaskUseCase = new GetTaskUseCase(taskRepository);
const listTasksUseCase = new ListTasksUseCase(taskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository, taskHistoryRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
const assignTaskUseCase = new AssignTaskUseCase(taskRepository, taskHistoryRepository);
const changeTaskStatusUseCase = new ChangeTaskStatusUseCase(taskRepository, taskHistoryRepository);
const addLabelUseCase = new AddLabelUseCase(taskRepository);
const removeLabelUseCase = new RemoveLabelUseCase(taskRepository);
const watchTaskUseCase = new WatchTaskUseCase(taskRepository);
const unwatchTaskUseCase = new UnwatchTaskUseCase(taskRepository);
const getTaskHistoryUseCase = new GetTaskHistoryUseCase(taskHistoryRepository);
const bulkUpdateStatusUseCase = new BulkUpdateStatusUseCase(taskRepository);
const getTaskStatsUseCase = new GetTaskStatsUseCase(taskRepository);

const controller = new TaskController(
  createTaskUseCase,
  getTaskUseCase,
  listTasksUseCase,
  updateTaskUseCase,
  deleteTaskUseCase,
  assignTaskUseCase,
  changeTaskStatusUseCase,
  addLabelUseCase,
  removeLabelUseCase,
  watchTaskUseCase,
  unwatchTaskUseCase,
  getTaskHistoryUseCase,
  bulkUpdateStatusUseCase,
  getTaskStatsUseCase
);

const router = Router();

// Bulk and stats routes must be declared before /:id to avoid param conflicts
router.post('/bulk/status', authenticate, validateBody(bulkStatusSchema), controller.bulkUpdateStatus);
router.get('/stats', authenticate, validateQuery(statsQuerySchema), controller.getStats);

// Task CRUD
router.post('/', authenticate, validateBody(createTaskSchema), controller.create);
router.get('/', authenticate, validateQuery(listTasksSchema), controller.list);
router.get('/:id', authenticate, controller.getById);
router.put('/:id', authenticate, validateBody(updateTaskSchema), controller.update);
router.delete('/:id', authenticate, controller.delete);

// Task sub-resources
router.post('/:id/assign', authenticate, validateBody(assignSchema), controller.assign);
router.post('/:id/status', authenticate, validateBody(changeStatusSchema), controller.changeStatus);
router.post('/:id/labels/:label', authenticate, controller.addLabel);
router.delete('/:id/labels/:label', authenticate, controller.removeLabel);
router.post('/:id/watch', authenticate, controller.watch);
router.delete('/:id/watch', authenticate, controller.unwatch);
router.get('/:id/history', authenticate, controller.getHistory);

export { router as taskRouter };
