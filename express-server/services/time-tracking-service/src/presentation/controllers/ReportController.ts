import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { TimeEntryRepository } from '../../infrastructure/repositories/TimeEntryRepository';
import { GetUserTimeReportUseCase } from '../../application/use-cases/GetUserTimeReportUseCase';
import { GetProjectTimeReportUseCase } from '../../application/use-cases/GetProjectTimeReportUseCase';

const timeEntryRepo = new TimeEntryRepository();
const getUserReportUseCase = new GetUserTimeReportUseCase(timeEntryRepo);
const getProjectReportUseCase = new GetProjectTimeReportUseCase(timeEntryRepo);

export class ReportController {
  static async getUserReport(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId } = req.params;
      const query = req.query as Record<string, string>;

      const report = await getUserReportUseCase.execute({
        userId,
        organizationId: query.organizationId,
        startFrom: new Date(query.startFrom),
        startTo: new Date(query.startTo),
      });

      res.json(successResponse(report, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }

  static async getProjectReport(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { projectId } = req.params;
      const query = req.query as Record<string, string>;

      const report = await getProjectReportUseCase.execute({
        projectId,
        startFrom: new Date(query.startFrom),
        startTo: new Date(query.startTo),
      });

      res.json(successResponse(report, req.context?.requestId));
    } catch (err) {
      next(err);
    }
  }
}
