import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { CreateOrgUseCase } from '../../application/use-cases/CreateOrgUseCase';
import { GetOrgUseCase } from '../../application/use-cases/GetOrgUseCase';
import { ListOrgsUseCase } from '../../application/use-cases/ListOrgsUseCase';
import { UpdateOrgUseCase } from '../../application/use-cases/UpdateOrgUseCase';
import { DeleteOrgUseCase } from '../../application/use-cases/DeleteOrgUseCase';
import { InviteMemberUseCase } from '../../application/use-cases/InviteMemberUseCase';
import { UpdateMemberRoleUseCase } from '../../application/use-cases/UpdateMemberRoleUseCase';
import { RemoveMemberUseCase } from '../../application/use-cases/RemoveMemberUseCase';
import { GetOrgMembersUseCase } from '../../application/use-cases/GetOrgMembersUseCase';
import { OrgRole } from '../../domain/entities/Organization';

export class OrgController {
  constructor(
    private readonly createOrgUseCase: CreateOrgUseCase,
    private readonly getOrgUseCase: GetOrgUseCase,
    private readonly listOrgsUseCase: ListOrgsUseCase,
    private readonly updateOrgUseCase: UpdateOrgUseCase,
    private readonly deleteOrgUseCase: DeleteOrgUseCase,
    private readonly inviteMemberUseCase: InviteMemberUseCase,
    private readonly updateMemberRoleUseCase: UpdateMemberRoleUseCase,
    private readonly removeMemberUseCase: RemoveMemberUseCase,
    private readonly getOrgMembersUseCase: GetOrgMembersUseCase
  ) {}

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const ownerId = req.user!.id;
      const org = await this.createOrgUseCase.execute({ ...req.body, ownerId });
      res.status(201).json(successResponse(org, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const result = await this.listOrgsUseCase.execute(userId);
      res.json(successResponse(result.organizations, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const org = await this.getOrgUseCase.execute(id);
      res.json(successResponse(org, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const requesterId = req.user!.id;
      const org = await this.updateOrgUseCase.execute({ orgId: id, requesterId, ...req.body });
      res.json(successResponse(org, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const requesterId = req.user!.id;
      await this.deleteOrgUseCase.execute({ orgId: id, requesterId });
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
      const result = await this.getOrgMembersUseCase.execute({
        orgId: id,
        pagination: { page, limit },
      });
      res.json(paginatedResponse(result, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  inviteMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: orgId } = req.params;
      const invitedBy = req.user!.id;
      const { userId, role } = req.body as { userId: string; role: OrgRole };
      const member = await this.inviteMemberUseCase.execute({ orgId, userId, role, invitedBy });
      res.status(201).json(successResponse(member, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  updateMemberRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: orgId, userId } = req.params;
      const requesterId = req.user!.id;
      const { role: newRole } = req.body as { role: OrgRole };
      const member = await this.updateMemberRoleUseCase.execute({ orgId, userId, newRole, requesterId });
      res.json(successResponse(member, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  removeMember = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id: orgId, userId } = req.params;
      const requesterId = req.user!.id;
      await this.removeMemberUseCase.execute({ orgId, userId, requesterId });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}
