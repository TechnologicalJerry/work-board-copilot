import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateMilestoneUseCase } from '../../application/use-cases/milestone/CreateMilestoneUseCase';
import { ListMilestonesUseCase } from '../../application/use-cases/milestone/ListMilestonesUseCase';
import { UpdateMilestoneUseCase } from '../../application/use-cases/milestone/UpdateMilestoneUseCase';
import { DeleteMilestoneUseCase } from '../../application/use-cases/milestone/DeleteMilestoneUseCase';

export class MilestoneController {
  constructor(
    private readonly createMilestoneUseCase: CreateMilestoneUseCase,
    private readonly listMilestonesUseCase: ListMilestonesUseCase,
    private readonly updateMilestoneUseCase: UpdateMilestoneUseCase,
    private readonly deleteMilestoneUseCase: DeleteMilestoneUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId } = req.params;
      const createdBy = req.user!.id;
      const { name, description, dueDate, status } = req.body;

      const milestone = await this.createMilestoneUseCase.execute({
        projectId,
        name,
        description,
        dueDate: new Date(dueDate),
        status,
        createdBy,
      });

      res.status(201).json(successResponse(milestone, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId } = req.params;
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;

      const result = await this.listMilestonesUseCase.execute({ projectId, page, limit });
      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId, mId: milestoneId } = req.params;
      const { name, description, dueDate, status } = req.body;

      const milestone = await this.updateMilestoneUseCase.execute({
        milestoneId,
        projectId,
        name,
        description,
        dueDate: dueDate !== undefined ? (dueDate === null ? null : new Date(dueDate)) : undefined,
        status,
      });

      res.json(successResponse(milestone, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId, mId: milestoneId } = req.params;

      await this.deleteMilestoneUseCase.execute({ milestoneId, projectId });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
