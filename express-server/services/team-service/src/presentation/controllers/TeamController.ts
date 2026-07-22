import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateTeamUseCase } from '../../application/use-cases/team/CreateTeamUseCase';
import { GetTeamUseCase } from '../../application/use-cases/team/GetTeamUseCase';
import { ListTeamsUseCase } from '../../application/use-cases/team/ListTeamsUseCase';
import { UpdateTeamUseCase } from '../../application/use-cases/team/UpdateTeamUseCase';
import { DeleteTeamUseCase } from '../../application/use-cases/team/DeleteTeamUseCase';
import { AddMemberUseCase } from '../../application/use-cases/team/AddMemberUseCase';
import { UpdateMemberUseCase } from '../../application/use-cases/team/UpdateMemberUseCase';
import { RemoveMemberUseCase } from '../../application/use-cases/team/RemoveMemberUseCase';
import { GetCapacityUseCase } from '../../application/use-cases/team/GetCapacityUseCase';

export class TeamController {
  constructor(
    private readonly createTeamUseCase: CreateTeamUseCase,
    private readonly getTeamUseCase: GetTeamUseCase,
    private readonly listTeamsUseCase: ListTeamsUseCase,
    private readonly updateTeamUseCase: UpdateTeamUseCase,
    private readonly deleteTeamUseCase: DeleteTeamUseCase,
    private readonly addMemberUseCase: AddMemberUseCase,
    private readonly updateMemberUseCase: UpdateMemberUseCase,
    private readonly removeMemberUseCase: RemoveMemberUseCase,
    private readonly getCapacityUseCase: GetCapacityUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const correlationId = req.context.correlationId;

      const team = await this.createTeamUseCase.execute({
        organizationId: req.body.organizationId as string,
        workspaceId: req.body.workspaceId as string | undefined,
        name: req.body.name as string,
        description: req.body.description as string | undefined,
        color: req.body.color as string | undefined,
        iconUrl: req.body.icon as string | undefined,
        leadId: req.body.leadId as string | undefined,
        isPrivate: req.body.isPrivate as boolean | undefined,
        capacity: req.body.capacity as number | undefined,
        createdBy: userId,
        correlationId,
      });

      res.status(201).json(successResponse(team, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const team = await this.getTeamUseCase.execute(req.params.id);
      res.status(200).json(successResponse(team, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query as unknown as {
        organizationId: string;
        workspaceId?: string;
        departmentId?: string;
        search?: string;
        isPrivate?: boolean;
        page?: number;
        limit?: number;
      };

      const result = await this.listTeamsUseCase.execute({
        organizationId: query.organizationId,
        workspaceId: query.workspaceId,
        search: query.search,
        isPrivate: query.isPrivate,
        page: query.page,
        limit: query.limit,
      });

      res.status(200).json(paginatedResponse(result, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;

      const team = await this.updateTeamUseCase.execute({
        teamId: req.params.id,
        name: req.body.name as string | undefined,
        description: req.body.description as string | undefined,
        color: req.body.color as string | undefined,
        iconUrl: req.body.icon as string | undefined,
        leadId: req.body.leadId as string | undefined,
        isPrivate: req.body.isPrivate as boolean | undefined,
        capacity: req.body.capacity as number | undefined,
        updatedBy: userId,
      });

      res.status(200).json(successResponse(team, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const correlationId = req.context.correlationId;

      await this.deleteTeamUseCase.execute({
        teamId: req.params.id,
        deletedBy: userId,
        correlationId,
      });

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  addMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const correlationId = req.context.correlationId;

      const member = await this.addMemberUseCase.execute({
        teamId: req.params.id,
        userId: req.body.userId as string,
        role: req.body.role as 'LEAD' | 'MEMBER' | 'VIEWER' | undefined,
        availability: req.body.capacity as number | undefined,
        addedBy: userId,
        correlationId,
      });

      res.status(201).json(successResponse(member, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  updateMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const correlationId = req.context.correlationId;

      const member = await this.updateMemberUseCase.execute({
        teamId: req.params.id,
        userId: req.params.userId,
        role: req.body.role as 'LEAD' | 'MEMBER' | 'VIEWER' | undefined,
        availability: req.body.capacity as number | undefined,
        correlationId,
      });

      res.status(200).json(successResponse(member, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };

  removeMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const correlationId = req.context.correlationId;

      await this.removeMemberUseCase.execute({
        teamId: req.params.id,
        userId: req.params.userId,
        removedBy: userId,
        correlationId,
      });

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  getCapacity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const report = await this.getCapacityUseCase.execute(req.params.id);
      res.status(200).json(successResponse(report, req.context.requestId));
    } catch (err) {
      next(err);
    }
  };
}
