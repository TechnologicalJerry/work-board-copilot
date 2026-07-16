import { Request, Response, NextFunction } from 'express';
import * as SearchService from '../services/SearchService';
import * as SavedFilterService from '../services/SavedFilterService';
import { successResponse, paginatedResponse } from '@boardpilot/common';

export async function globalSearch(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { q, type, page, limit } = req.query as any;
    const orgId = req.user!.organizationId!;
    const result = await SearchService.globalSearch(q, orgId, type, { page: Number(page), limit: Number(limit) });
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function searchTasks(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { q, status, priority, assigneeId, projectId, page, limit } = req.query as any;
    const orgId = req.user!.organizationId!;
    const result = await SearchService.searchTasks(
      q ?? '',
      { status, priority, assigneeId, projectId },
      orgId,
      { page: Number(page), limit: Number(limit) }
    );
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function suggest(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { q, type } = req.query as any;
    const orgId = req.user!.organizationId!;
    const results = await SearchService.suggest(q, type ?? 'global', orgId);
    res.json(successResponse(results, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

// Saved Filter handlers
export async function listSavedFilters(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { page = 1, limit = 20 } = req.query as any;
    const result = await SavedFilterService.findAll(
      req.user!.id,
      req.user!.organizationId!,
      Number(page),
      Number(limit)
    );
    res.json(paginatedResponse(result, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function createSavedFilter(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const filter = await SavedFilterService.create(req.body, req.user!.id, req.user!.organizationId!);
    res.status(201).json(successResponse(filter, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function updateSavedFilter(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const filter = await SavedFilterService.update(req.params.id, req.user!.id, req.body);
    res.json(successResponse(filter, req.context.requestId));
  } catch (err) {
    next(err);
  }
}

export async function deleteSavedFilter(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await SavedFilterService.remove(req.params.id, req.user!.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
