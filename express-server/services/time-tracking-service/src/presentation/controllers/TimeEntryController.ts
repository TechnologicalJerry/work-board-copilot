import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse, buildPaginatedResult } from '@boardpilot/common';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { CreateTimeEntryUseCase } from '../../application/use-cases/CreateTimeEntryUseCase';
import { StopTimerUseCase } from '../../application/use-cases/StopTimerUseCase';
import { GetActiveTimerUseCase } from '../../application/use-cases/GetActiveTimerUseCase';
import { ListTimeEntriesUseCase } from '../../application/use-cases/ListTimeEntriesUseCase';
import { UpdateTimeEntryUseCase } from '../../application/use-cases/UpdateTimeEntryUseCase';
import { DeleteTimeEntryUseCase } from '../../application/use-cases/DeleteTimeEntryUseCase';
import { GetTimeEntryByIdUseCase } from '../../application/use-cases/GetTimeEntryByIdUseCase';
import { TimeEntryStatus } from '../../domain/entities/TimeEntry';

const timeEntryRepo = new TimeEntryRepository();
const createUseCase = new CreateTimeEntryUseCase(timeEntryRepo);
const stopUseCase = new StopTimerUseCase(timeEntryRepo);
const getActiveUseCase = new GetActiveTimerUseCase(timeEntryRepo);
const listUseCase = new ListTimeEntriesUseCase(timeEntryRepo);
const updateUseCase = new UpdateTimeEntryUseCase(timeEntryRepo);
const deleteUseCase = new DeleteTimeEntryUseCase(timeEntryRepo);
const getByIdUseCase = new GetTimeEntryByIdUseCase(timeEntryRepo);

export class TimeEntryController {
  static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const entry = await createUseCase.execute({ ...req.body, userId });
      res.status(201).json(successResponse(entry, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query = req.query as Record<string, string>;
      const result = await listUseCase.execute({
        userId: query.userId,
        taskId: query.taskId,
        projectId: query.projectId,
        organizationId: query.organizationId,
        status: query.status as TimeEntryStatus | undefined,
        startFrom: query.startFrom ? new Date(query.startFrom) : undefined,
        startTo: query.startTo ? new Date(query.startTo) : undefined,
        page: query.page ? Number(query.page) : 1,
        limit: query.limit ? Number(query.limit) : 20,
      });

      const paginated = buildPaginatedResult(result.data, result.total, {
        page: result.page,
        limit: result.limit,
      });

      res.json(paginatedResponse(paginated, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async getActive(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const entry = await getActiveUseCase.execute({ userId });
      res.json(successResponse(entry, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const entry = await getByIdUseCase.execute({ entryId: req.params.id });
      res.json(successResponse(entry, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const entry = await updateUseCase.execute({
        entryId: req.params.id,
        userId,
        ...req.body,
      });
      res.json(successResponse(entry, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      await deleteUseCase.execute({ entryId: req.params.id, userId });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  static async stop(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const entry = await stopUseCase.execute({ entryId: req.params.id, userId });
      res.json(successResponse(entry, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }
}
