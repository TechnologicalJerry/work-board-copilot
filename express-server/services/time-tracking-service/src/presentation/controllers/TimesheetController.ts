import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse, buildPaginatedResult } from '@boardpilot/common';
import { TimesheetRepository } from '../../infrastructure/repositories/TimesheetRepository';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { CreateTimesheetUseCase } from '../../application/use-cases/CreateTimesheetUseCase';
import { SubmitTimesheetUseCase } from '../../application/use-cases/SubmitTimesheetUseCase';
import { ApproveTimesheetUseCase } from '../../application/use-cases/ApproveTimesheetUseCase';
import { RejectTimesheetUseCase } from '../../application/use-cases/RejectTimesheetUseCase';
import { ListTimesheetsUseCase } from '../../application/use-cases/ListTimesheetsUseCase';
import { GetTimesheetByIdUseCase } from '../../application/use-cases/GetTimesheetByIdUseCase';
import { TimesheetStatus } from '../../domain/entities/Timesheet';

const timesheetRepo = new TimesheetRepository();
const timeEntryRepo = new TimeEntryRepository();
const createUseCase = new CreateTimesheetUseCase(timesheetRepo, timeEntryRepo);
const submitUseCase = new SubmitTimesheetUseCase(timesheetRepo);
const approveUseCase = new ApproveTimesheetUseCase(timesheetRepo);
const rejectUseCase = new RejectTimesheetUseCase(timesheetRepo);
const listUseCase = new ListTimesheetsUseCase(timesheetRepo);
const getByIdUseCase = new GetTimesheetByIdUseCase(timesheetRepo);

export class TimesheetController {
  static async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const timesheet = await createUseCase.execute({ ...req.body, userId });
      res.status(201).json(successResponse(timesheet, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query = req.query as Record<string, string>;
      const result = await listUseCase.execute({
        userId: req.user!.id,
        organizationId: query.organizationId,
        projectId: query.projectId,
        status: query.status as TimesheetStatus | undefined,
        periodStart: query.periodStart ? new Date(query.periodStart) : undefined,
        periodEnd: query.periodEnd ? new Date(query.periodEnd) : undefined,
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

  static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const timesheet = await getByIdUseCase.execute({ timesheetId: req.params.id });
      res.json(successResponse(timesheet, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async submit(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.id;
      const timesheet = await submitUseCase.execute({
        timesheetId: req.params.id,
        userId,
      });
      res.json(successResponse(timesheet, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async approve(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const approverId = req.user!.id;
      const timesheet = await approveUseCase.execute({
        timesheetId: req.params.id,
        approverId,
      });
      res.json(successResponse(timesheet, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async reject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const approverId = req.user!.id;
      const timesheet = await rejectUseCase.execute({
        timesheetId: req.params.id,
        approverId,
      });
      res.json(successResponse(timesheet, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }
}
