import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateProjectUseCase } from '../../application/use-cases/project/CreateProjectUseCase';
import { GetProjectUseCase } from '../../application/use-cases/project/GetProjectUseCase';
import { ListProjectsUseCase } from '../../application/use-cases/project/ListProjectsUseCase';
import { UpdateProjectUseCase } from '../../application/use-cases/project/UpdateProjectUseCase';
import { DeleteProjectUseCase } from '../../application/use-cases/project/DeleteProjectUseCase';
import { GetMembersUseCase } from '../../application/use-cases/project/GetMembersUseCase';
import { AddMemberUseCase } from '../../application/use-cases/project/AddMemberUseCase';
import { UpdateMemberRoleUseCase } from '../../application/use-cases/project/UpdateMemberRoleUseCase';
import { RemoveMemberUseCase } from '../../application/use-cases/project/RemoveMemberUseCase';

export class ProjectController {
  constructor(
    private readonly createProjectUseCase: CreateProjectUseCase,
    private readonly getProjectUseCase: GetProjectUseCase,
    private readonly listProjectsUseCase: ListProjectsUseCase,
    private readonly updateProjectUseCase: UpdateProjectUseCase,
    private readonly deleteProjectUseCase: DeleteProjectUseCase,
    private readonly getMembersUseCase: GetMembersUseCase,
    private readonly addMemberUseCase: AddMemberUseCase,
    private readonly updateMemberRoleUseCase: UpdateMemberRoleUseCase,
    private readonly removeMemberUseCase: RemoveMemberUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const createdBy = req.user!.id;
      const ownerId = createdBy;

      const project = await this.createProjectUseCase.execute({
        ...req.body,
        ownerId,
        createdBy,
      });

      res.status(201).json(successResponse(project, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const project = await this.getProjectUseCase.execute(id);
      res.json(successResponse(project, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as {
        organizationId: string;
        workspaceId?: string;
        status?: string;
        page?: string;
        limit?: string;
      };

      const result = await this.listProjectsUseCase.execute({
        organizationId: query.organizationId,
        workspaceId: query.workspaceId,
        status: query.status as Parameters<typeof this.listProjectsUseCase.execute>[0]['status'],
        page: Number(query.page) || 1,
        limit: Number(query.limit) || 20,
      });

      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const updatedBy = req.user!.id;

      const project = await this.updateProjectUseCase.execute({
        projectId: id,
        updatedBy,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        color: req.body.color,
        iconUrl: req.body.icon,
        type: req.body.type,
        visibility: req.body.visibility,
        leadId: req.body.leadId,
        startDate: req.body.startDate ? new Date(req.body.startDate) : undefined,
        targetDate: req.body.targetDate ? new Date(req.body.targetDate) : undefined,
        settings: req.body.settings,
      });

      res.json(successResponse(project, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const deletedBy = req.user!.id;

      await this.deleteProjectUseCase.execute({ projectId: id, deletedBy });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  getMembers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 20;

      const result = await this.getMembersUseCase.execute({ projectId: id, page, limit });
      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  addMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId } = req.params;
      const addedBy = req.user!.id;
      const { userId, role } = req.body;

      const member = await this.addMemberUseCase.execute({ projectId, userId, role, addedBy });
      res.status(201).json(successResponse(member, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  updateMemberRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId, userId } = req.params;
      const updatedBy = req.user!.id;
      const { role } = req.body;

      const member = await this.updateMemberRoleUseCase.execute({
        projectId,
        userId,
        role,
        updatedBy,
      });

      res.json(successResponse(member, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  removeMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: projectId, userId } = req.params;
      const requestedBy = req.user!.id;

      await this.removeMemberUseCase.execute({ projectId, userId, requestedBy });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
