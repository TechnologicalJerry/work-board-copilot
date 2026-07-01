import type { Request, Response, NextFunction } from 'express';
import { AutomationService } from '../services/AutomationService';
import { AUTOMATION_TEMPLATES } from '../data/templates';
import { successResponse, paginatedResponse } from '@boardpilot/common';

export class AutomationController {
  constructor(private readonly automationService: AutomationService) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rule = await this.automationService.create({
        ...req.body as Parameters<AutomationService['create']>[0],
        createdBy: req.user!.id,
      });
      res.status(201).json(successResponse(rule, 'Automation rule created'));
    } catch (err) {
      next(err);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { projectId, organizationId, page, limit } = req.query as {
        projectId: string;
        organizationId: string;
        page?: string;
        limit?: string;
      };
      const result = await this.automationService.findAll(
        projectId,
        organizationId,
        Number(page) || 1,
        Number(limit) || 20,
      );
      res.json(paginatedResponse(result.data, {
        total: result.total,
        page: result.page,
        limit: result.limit,
        totalPages: result.totalPages,
      }));
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rule = await this.automationService.findById(req.params.id);
      res.json(successResponse(rule));
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rule = await this.automationService.update(req.params.id, req.body as Parameters<AutomationService['update']>[1]);
      res.json(successResponse(rule, 'Automation rule updated'));
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.automationService.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  enable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rule = await this.automationService.enable(req.params.id);
      res.json(successResponse(rule, 'Automation rule enabled'));
    } catch (err) {
      next(err);
    }
  };

  disable = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rule = await this.automationService.disable(req.params.id);
      res.json(successResponse(rule, 'Automation rule disabled'));
    } catch (err) {
      next(err);
    }
  };

  test = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { eventData } = req.body as { eventData: Record<string, unknown> };
      const result = await this.automationService.testRule(req.params.id, eventData);
      res.json(successResponse(result, 'Test completed'));
    } catch (err) {
      next(err);
    }
  };

  getExecutions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await this.automationService.getExecutions(
        req.params.id,
        Number(req.query.page) || 1,
        Number(req.query.limit) || 20,
      );
      res.json(paginatedResponse(result.data, {
        total: result.total,
        page: result.page,
        limit: result.limit,
        totalPages: result.totalPages,
      }));
    } catch (err) {
      next(err);
    }
  };

  getTemplates = (_req: Request, res: Response): void => {
    res.json(successResponse(AUTOMATION_TEMPLATES));
  };
}
