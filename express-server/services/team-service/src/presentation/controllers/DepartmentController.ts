import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateDeptUseCase } from '../../application/use-cases/department/CreateDeptUseCase';
import { ListDeptsUseCase } from '../../application/use-cases/department/ListDeptsUseCase';
import { UpdateDeptUseCase } from '../../application/use-cases/department/UpdateDeptUseCase';
import { DeleteDeptUseCase } from '../../application/use-cases/department/DeleteDeptUseCase';

export class DepartmentController {
  constructor(
    private readonly createDeptUseCase: CreateDeptUseCase,
    private readonly listDeptsUseCase: ListDeptsUseCase,
    private readonly updateDeptUseCase: UpdateDeptUseCase,
    private readonly deleteDeptUseCase: DeleteDeptUseCase
  ) {}

  createDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const correlationId = req.context.correlationId;

      const department = await this.createDeptUseCase.execute({
        organizationId: req.body.organizationId as string,
        name: req.body.name as string,
        description: req.body.description as string | undefined,
        headId: req.body.headId as string | undefined,
        createdBy: userId,
        correlationId,
      });

      res.status(201).json(successResponse(department, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  listDepartments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as unknown as {
        organizationId: string;
        search?: string;
        page?: number;
        limit?: number;
      };

      const result = await this.listDeptsUseCase.execute({
        organizationId: query.organizationId,
        search: query.search,
        page: query.page,
        limit: query.limit,
      });

      res.status(200).json(paginatedResponse(result, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  updateDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const department = await this.updateDeptUseCase.execute({
        deptId: req.params.id,
        name: req.body.name as string | undefined,
        description: req.body.description as string | undefined,
        headId: req.body.headId as string | undefined,
        updatedBy: userId,
      });

      res.status(200).json(successResponse(department, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  deleteDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      await this.deleteDeptUseCase.execute({
        deptId: req.params.id,
        deletedBy: userId,
      });

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}
