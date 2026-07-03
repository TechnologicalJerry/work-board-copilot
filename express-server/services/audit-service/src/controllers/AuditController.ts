import { Request, Response, NextFunction } from 'express';
import * as AuditService from '../services/AuditService';
import { successResponse, paginatedResponse } from '@boardpilot/common';

export async function createAuditLog(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    // Enrich with request context
    const dto = {
      ...req.body,
      organizationId: req.body.organizationId ?? req.user?.organizationId,
      ip: req.body.ip ?? req.context.ip,
      userAgent: req.body.userAgent ?? req.context.userAgent,
      requestId: req.body.requestId ?? req.context.requestId,
    };

    const log = await AuditService.create(dto);
    res.status(201).json(successResponse(log, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function listAuditLogs(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { page, limit, ...rest } = req.query as any;
    const filters = {
      ...rest,
      organizationId: rest.organizationId ?? req.user!.organizationId,
    };

    const result = await AuditService.findAll(filters, Number(page), Number(limit));
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getLogsByEntity(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { entityType, entityId, page, limit } = req.query as any;
    const result = await AuditService.findByEntity(entityType, entityId, Number(page), Number(limit));
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function getLogsByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { userId, page, limit } = req.query as any;
    const result = await AuditService.findByUser(userId, req.user!.organizationId!, Number(page), Number(limit));
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function exportCsv(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const filters = {
      ...(req.query as any),
      organizationId: (req.query as any).organizationId ?? req.user!.organizationId,
    };

    const csv = await AuditService.exportToCsv(filters);
    const filename = `audit-logs-${new Date().toISOString().split('T')[0]}.csv`;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(csv);
  } catch (err) {
    next(err);
  }
}

export async function getStats(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { days } = req.query as any;
    const stats = await AuditService.getStats(req.user!.organizationId!, Number(days));
    res.json(successResponse(stats, req.context.requestId));
  } catch (err) {
    next(err);
  }
}
