import { Request, Response, NextFunction } from 'express';
import * as ReportService from '../services/ReportService';
import * as SavedReportRepository from '../repositories/SavedReportRepository';
import { successResponse, paginatedResponse } from '@boardpilot/common';

export async function getBurndown(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { sprintId } = req.query as any;
    const data = await ReportService.getBurndown(sprintId, req.headers.authorization ?? '');
    res.json(successResponse(data, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getVelocity(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { projectId, limit } = req.query as any;
    const data = await ReportService.getVelocity(projectId, req.headers.authorization ?? '', Number(limit));
    res.json(successResponse(data, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getWorkload(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { projectId } = req.query as any;
    const data = await ReportService.getWorkload(projectId, req.headers.authorization ?? '');
    res.json(successResponse(data, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getCycleTime(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { projectId, days } = req.query as any;
    const data = await ReportService.getCycleTime(projectId, req.headers.authorization ?? '', Number(days));
    res.json(successResponse(data, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getDashboard(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { projectId } = req.query as any;
    const data = await ReportService.getDashboard(projectId, req.headers.authorization ?? '');
    res.json(successResponse(data, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

// Saved report handlers
export async function listSavedReports(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { projectId, page, limit } = req.query as any;
    const result = await SavedReportRepository.findAll(
      req.user!.organizationId!,
      projectId,
      Number(page),
      Number(limit)
    );
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function createSavedReport(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const report = await SavedReportRepository.create(req.body, req.user!.id);
    res.status(201).json(successResponse(report, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function updateSavedReport(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const report = await SavedReportRepository.update(req.params.id, req.user!.id, req.body);
    res.json(successResponse(report, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function deleteSavedReport(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await SavedReportRepository.softDelete(req.params.id, req.user!.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
