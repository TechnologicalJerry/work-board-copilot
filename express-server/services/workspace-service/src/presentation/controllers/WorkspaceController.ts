import { Request, Response, NextFunction } from 'express';
import { successResponse, buildPaginatedResult, paginatedResponse } from '@boardpilot/common';
import { CreateWorkspaceUseCase } from '../../application/use-cases/CreateWorkspaceUseCase';
import { GetWorkspaceUseCase } from '../../application/use-cases/GetWorkspaceUseCase';
import { ListWorkspacesUseCase } from '../../application/use-cases/ListWorkspacesUseCase';
import { UpdateWorkspaceUseCase } from '../../application/use-cases/UpdateWorkspaceUseCase';
import { DeleteWorkspaceUseCase } from '../../application/use-cases/DeleteWorkspaceUseCase';
import { AddWorkspaceMemberUseCase } from '../../application/use-cases/AddWorkspaceMemberUseCase';
import { RemoveWorkspaceMemberUseCase } from '../../application/use-cases/RemoveWorkspaceMemberUseCase';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';

export class WorkspaceController {
  constructor(
    private readonly createWorkspaceUseCase: CreateWorkspaceUseCase,
    private readonly getWorkspaceUseCase: GetWorkspaceUseCase,
    private readonly listWorkspacesUseCase: ListWorkspacesUseCase,
    private readonly updateWorkspaceUseCase: UpdateWorkspaceUseCase,
    private readonly deleteWorkspaceUseCase: DeleteWorkspaceUseCase,
    private readonly addWorkspaceMemberUseCase: AddWorkspaceMemberUseCase,
    private readonly removeWorkspaceMemberUseCase: RemoveWorkspaceMemberUseCase,
    private readonly workspaceRepository: PrismaWorkspaceRepository
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const createdBy = req.user!.id;
      const workspace = await this.createWorkspaceUseCase.execute({ ...req.body, createdBy });
      res.status(201).json(successResponse(workspace, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as {
        organizationId: string;
        page: string;
        limit: string;
        isArchived?: string;
        visibility?: string;
      };
      const result = await this.listWorkspacesUseCase.execute({
        organizationId: query.organizationId,
        isArchived: query.isArchived === 'true' ? true : query.isArchived === 'false' ? false : undefined,
        visibility: query.visibility as 'PUBLIC' | 'PRIVATE' | undefined,
        pagination: {
          page: Number(query.page) || 1,
          limit: Number(query.limit) || 20,
        },
      });
      const paginated = buildPaginatedResult(result.workspaces, result.total, {
        page: result.page,
        limit: result.limit,
      });
      res.json(paginatedResponse(paginated, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const workspace = await this.getWorkspaceUseCase.execute(id);
      res.json(successResponse(workspace, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const requesterId = req.user!.id;
      const workspace = await this.updateWorkspaceUseCase.execute({
        workspaceId: id,
        requesterId,
        ...req.body,
      });
      res.json(successResponse(workspace, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const requesterId = req.user!.id;
      await this.deleteWorkspaceUseCase.execute({ workspaceId: id, requesterId });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  getMembers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const members = await this.workspaceRepository.getMembers(id);
      res.json(successResponse(members, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  addMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: workspaceId } = req.params;
      const requesterId = req.user!.id;
      const { userId, role } = req.body as { userId: string; role?: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER' };
      const member = await this.addWorkspaceMemberUseCase.execute({
        workspaceId,
        userId,
        role,
        requesterId,
      });
      res.status(201).json(successResponse(member, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  removeMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: workspaceId, userId } = req.params;
      const requesterId = req.user!.id;
      await this.removeWorkspaceMemberUseCase.execute({ workspaceId, userId, requesterId });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
