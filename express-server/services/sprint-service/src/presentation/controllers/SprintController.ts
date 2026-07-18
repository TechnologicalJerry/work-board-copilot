import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { CreateSprintUseCase } from '../../application/use-cases/CreateSprintUseCase';
import { GetSprintUseCase } from '../../application/use-cases/GetSprintUseCase';
import { ListSprintsUseCase } from '../../application/use-cases/ListSprintsUseCase';
import { UpdateSprintUseCase } from '../../application/use-cases/UpdateSprintUseCase';
import { DeleteSprintUseCase } from '../../application/use-cases/DeleteSprintUseCase';
import { StartSprintUseCase } from '../../application/use-cases/StartSprintUseCase';
import { CompleteSprintUseCase } from '../../application/use-cases/CompleteSprintUseCase';
import { GetBurndownUseCase } from '../../application/use-cases/GetBurndownUseCase';
import { GetVelocityUseCase } from '../../application/use-cases/GetVelocityUseCase';
import { AddSprintItemUseCase } from '../../application/use-cases/AddSprintItemUseCase';
import { RemoveSprintItemUseCase } from '../../application/use-cases/RemoveSprintItemUseCase';
import { SprintStatus } from '../../domain/entities/Sprint';

export class SprintController {
  constructor(
    private readonly createSprintUseCase: CreateSprintUseCase,
    private readonly getSprintUseCase: GetSprintUseCase,
    private readonly listSprintsUseCase: ListSprintsUseCase,
    private readonly updateSprintUseCase: UpdateSprintUseCase,
    private readonly deleteSprintUseCase: DeleteSprintUseCase,
    private readonly startSprintUseCase: StartSprintUseCase,
    private readonly completeSprintUseCase: CompleteSprintUseCase,
    private readonly getBurndownUseCase: GetBurndownUseCase,
    private readonly getVelocityUseCase: GetVelocityUseCase,
    private readonly addSprintItemUseCase: AddSprintItemUseCase,
    private readonly removeSprintItemUseCase: RemoveSprintItemUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const sprint = await this.createSprintUseCase.execute({
        projectId: req.body.projectId as string,
        name: req.body.name as string,
        goal: req.body.goal as string | undefined,
        startDate: req.body.startDate ? new Date(req.body.startDate as string) : undefined,
        endDate: req.body.endDate ? new Date(req.body.endDate as string) : undefined,
        capacity: req.body.capacity as number | undefined,
        notes: req.body.notes as string | undefined,
        startImmediately: req.body.startImmediately as boolean | undefined,
        createdBy: userId,
      });

      res.status(201).json(successResponse(sprint, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const sprint = await this.getSprintUseCase.execute(req.params.id);
      res.status(200).json(successResponse(sprint, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as unknown as {
        projectId: string;
        status?: SprintStatus;
        page?: number;
        limit?: number;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
      };

      const result = await this.listSprintsUseCase.execute({
        projectId: query.projectId,
        status: query.status,
        page: query.page,
        limit: query.limit,
        sortBy: query.sortBy,
        sortOrder: query.sortOrder,
      });

      res.status(200).json(
        successResponse(
          {
            sprints: result.sprints,
            meta: {
              page: result.page,
              limit: result.limit,
              total: result.total,
              totalPages: result.totalPages,
              hasNextPage: result.hasNextPage,
              hasPrevPage: result.hasPrevPage,
            },
          },
          req.context.requestId
        )
      );
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const sprint = await this.updateSprintUseCase.execute({
        sprintId: req.params.id,
        name: req.body.name as string | undefined,
        goal: req.body.goal as string | null | undefined,
        startDate: req.body.startDate !== undefined
          ? (req.body.startDate ? new Date(req.body.startDate as string) : null)
          : undefined,
        endDate: req.body.endDate !== undefined
          ? (req.body.endDate ? new Date(req.body.endDate as string) : null)
          : undefined,
        capacity: req.body.capacity as number | null | undefined,
        notes: req.body.notes as string | null | undefined,
        updatedBy: userId,
      });

      res.status(200).json(successResponse(sprint, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      await this.deleteSprintUseCase.execute({
        sprintId: req.params.id,
        deletedBy: userId,
      });

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  start = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const sprint = await this.startSprintUseCase.execute({
        sprintId: req.params.id,
        startedBy: userId,
        startDate: req.body.startDate ? new Date(req.body.startDate as string) : undefined,
        endDate: req.body.endDate ? new Date(req.body.endDate as string) : undefined,
      });

      res.status(200).json(successResponse(sprint, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  complete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const result = await this.completeSprintUseCase.execute({
        sprintId: req.params.id,
        completedBy: userId,
      });

      res.status(200).json(successResponse(result, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  getBurndown = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const burndown = await this.getBurndownUseCase.execute(req.params.id);
      res.status(200).json(successResponse(burndown, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  getVelocity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;

      const velocity = await this.getVelocityUseCase.execute(req.params.projectId, limit);
      res.status(200).json(successResponse(velocity, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  addItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const item = await this.addSprintItemUseCase.execute({
        sprintId: req.params.id,
        taskId: req.body.taskId as string,
        storyPoints: req.body.storyPoints as number | undefined,
        addedBy: userId,
      });

      res.status(201).json(successResponse(item, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  removeItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      await this.removeSprintItemUseCase.execute({
        sprintId: req.params.id,
        taskId: req.params.taskId,
        removedBy: userId,
      });

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}
