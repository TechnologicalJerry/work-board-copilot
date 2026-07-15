import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateLabelUseCase } from '../../application/use-cases/label/CreateLabelUseCase';
import { ListLabelsUseCase } from '../../application/use-cases/label/ListLabelsUseCase';
import { UpdateLabelUseCase } from '../../application/use-cases/label/UpdateLabelUseCase';
import { DeleteLabelUseCase } from '../../application/use-cases/label/DeleteLabelUseCase';

export class LabelController {
  constructor(
    private readonly createLabelUseCase: CreateLabelUseCase,
    private readonly listLabelsUseCase: ListLabelsUseCase,
    private readonly updateLabelUseCase: UpdateLabelUseCase,
    private readonly deleteLabelUseCase: DeleteLabelUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId } = req.params;
      const createdBy = req.user!.id;
      const { name, color, description } = req.body;

      const label = await this.createLabelUseCase.execute({
        projectId,
        name,
        color,
        description,
        createdBy,
      });

      res.status(201).json(successResponse(label, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId } = req.params;
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 50;

      const result = await this.listLabelsUseCase.execute({ projectId, page, limit });
      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId, labelId } = req.params;
      const { name, color, description } = req.body;

      const label = await this.updateLabelUseCase.execute({
        labelId,
        projectId,
        name,
        color,
        description,
      });

      res.json(successResponse(label, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId, labelId } = req.params;

      await this.deleteLabelUseCase.execute({ labelId, projectId });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
