import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateTaskUseCase } from '../../application/use-cases/CreateTaskUseCase';
import { GetTaskUseCase } from '../../application/use-cases/GetTaskUseCase';
import { ListTasksUseCase } from '../../application/use-cases/ListTasksUseCase';
import { UpdateTaskUseCase } from '../../application/use-cases/UpdateTaskUseCase';
import { DeleteTaskUseCase } from '../../application/use-cases/DeleteTaskUseCase';
import { AssignTaskUseCase } from '../../application/use-cases/AssignTaskUseCase';
import { ChangeTaskStatusUseCase } from '../../application/use-cases/ChangeTaskStatusUseCase';
import { AddLabelUseCase } from '../../application/use-cases/AddLabelUseCase';
import { RemoveLabelUseCase } from '../../application/use-cases/RemoveLabelUseCase';
import { WatchTaskUseCase } from '../../application/use-cases/WatchTaskUseCase';
import { UnwatchTaskUseCase } from '../../application/use-cases/UnwatchTaskUseCase';
import { GetTaskHistoryUseCase } from '../../application/use-cases/GetTaskHistoryUseCase';
import { BulkUpdateStatusUseCase } from '../../application/use-cases/BulkUpdateStatusUseCase';
import { GetTaskStatsUseCase } from '../../application/use-cases/GetTaskStatsUseCase';
import { TaskStatus, Priority, TaskType, TaskFilters } from '../../domain/entities/Task';

function splitEnum<T extends string>(value: string | undefined): T[] | undefined {
  if (!value) return undefined;
  return value.split(',').map((v) => v.trim() as T).filter(Boolean);
}

export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly getTaskUseCase: GetTaskUseCase,
    private readonly listTasksUseCase: ListTasksUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly assignTaskUseCase: AssignTaskUseCase,
    private readonly changeTaskStatusUseCase: ChangeTaskStatusUseCase,
    private readonly addLabelUseCase: AddLabelUseCase,
    private readonly removeLabelUseCase: RemoveLabelUseCase,
    private readonly watchTaskUseCase: WatchTaskUseCase,
    private readonly unwatchTaskUseCase: UnwatchTaskUseCase,
    private readonly getTaskHistoryUseCase: GetTaskHistoryUseCase,
    private readonly bulkUpdateStatusUseCase: BulkUpdateStatusUseCase,
    private readonly getTaskStatsUseCase: GetTaskStatsUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const task = await this.createTaskUseCase.execute({
        ...req.body,
        reporterId: req.body.reporterId ?? userId,
        createdBy: userId,
      });
      res.status(201).json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as Record<string, string>;
      const page = Number(query.page ?? 1);
      const limit = Number(query.limit ?? 20);

      const filters: TaskFilters = {
        organizationId: query.organizationId,
        projectId: query.projectId,
        sprintId: query.sprintId,
        boardId: query.boardId,
        assigneeId: query.assigneeId,
        status: splitEnum<TaskStatus>(query.status),
        priority: splitEnum<Priority>(query.priority),
        type: splitEnum<TaskType>(query.type),
        search: query.search,
        parentId: query.parentId === 'null' ? null : query.parentId,
      };

      const result = await this.listTasksUseCase.execute(filters, page, limit);
      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const task = await this.getTaskUseCase.execute(req.params.id);
      res.json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const task = await this.updateTaskUseCase.execute(req.params.id, {
        ...req.body,
        updatedBy: userId,
      });
      res.json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      await this.deleteTaskUseCase.execute(req.params.id, userId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  assign = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const task = await this.assignTaskUseCase.execute({
        taskId: req.params.id,
        assigneeId: req.body.assigneeId,
        requesterId: userId,
      });
      res.json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  changeStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const task = await this.changeTaskStatusUseCase.execute({
        taskId: req.params.id,
        status: req.body.status as TaskStatus,
        userId,
      });
      res.json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  addLabel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const task = await this.addLabelUseCase.execute(req.params.id, req.params.label, userId);
      res.json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  removeLabel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const task = await this.removeLabelUseCase.execute(req.params.id, req.params.label, userId);
      res.json(successResponse(task, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  watch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      await this.watchTaskUseCase.execute(req.params.id, userId);
      res.json(successResponse({ watching: true }, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  unwatch = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      await this.unwatchTaskUseCase.execute(req.params.id, userId);
      res.json(successResponse({ watching: false }, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getHistory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const page = Number(req.query.page ?? 1);
      const limit = Number(req.query.limit ?? 20);
      const result = await this.getTaskHistoryUseCase.execute(req.params.id, page, limit);
      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  bulkUpdateStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const result = await this.bulkUpdateStatusUseCase.execute({
        taskIds: req.body.taskIds,
        status: req.body.status as TaskStatus,
        userId,
      });
      res.json(successResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getStats = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectId = req.query.projectId as string;
      const stats = await this.getTaskStatsUseCase.execute(projectId);
      res.json(successResponse(stats, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };
}
