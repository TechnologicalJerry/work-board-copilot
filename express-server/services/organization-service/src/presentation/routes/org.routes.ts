import { Router } from 'express';
import { authenticate, validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import { PrismaOrgRepository } from '../../infrastructure/repositories/PrismaOrgRepository';
import { PrismaOrgMemberRepository } from '../../infrastructure/repositories/PrismaOrgMemberRepository';
import { OrgEventPublisher } from '../../infrastructure/events/OrgEventPublisher';
import { CreateOrgUseCase } from '../../application/use-cases/CreateOrgUseCase';
import { GetOrgUseCase } from '../../application/use-cases/GetOrgUseCase';
import { ListOrgsUseCase } from '../../application/use-cases/ListOrgsUseCase';
import { UpdateOrgUseCase } from '../../application/use-cases/UpdateOrgUseCase';
import { DeleteOrgUseCase } from '../../application/use-cases/DeleteOrgUseCase';
import { InviteMemberUseCase } from '../../application/use-cases/InviteMemberUseCase';
import { UpdateMemberRoleUseCase } from '../../application/use-cases/UpdateMemberRoleUseCase';
import { RemoveMemberUseCase } from '../../application/use-cases/RemoveMemberUseCase';
import { GetOrgMembersUseCase } from '../../application/use-cases/GetOrgMembersUseCase';
import { OrgController } from '../controllers/OrgController';
import {
  createOrgSchema,
  updateOrgSchema,
  inviteMemberSchema,
  updateMemberRoleSchema,
  orgIdParamSchema,
  orgMemberParamSchema,
  listMembersQuerySchema,
} from '../validators/org.validators';

export function createOrgRouter(): Router {
  const router = Router();

  const orgRepo = new PrismaOrgRepository();
  const memberRepo = new PrismaOrgMemberRepository();
  const eventPublisher = new OrgEventPublisher();

  const createOrgUseCase = new CreateOrgUseCase(orgRepo, memberRepo, eventPublisher);
  const getOrgUseCase = new GetOrgUseCase(orgRepo);
  const listOrgsUseCase = new ListOrgsUseCase(orgRepo, memberRepo);
  const updateOrgUseCase = new UpdateOrgUseCase(orgRepo, memberRepo);
  const deleteOrgUseCase = new DeleteOrgUseCase(orgRepo);
  const inviteMemberUseCase = new InviteMemberUseCase(orgRepo, memberRepo, eventPublisher);
  const updateMemberRoleUseCase = new UpdateMemberRoleUseCase(memberRepo);
  const removeMemberUseCase = new RemoveMemberUseCase(orgRepo, memberRepo, eventPublisher);
  const getOrgMembersUseCase = new GetOrgMembersUseCase(memberRepo);

  const controller = new OrgController(
    createOrgUseCase,
    getOrgUseCase,
    listOrgsUseCase,
    updateOrgUseCase,
    deleteOrgUseCase,
    inviteMemberUseCase,
    updateMemberRoleUseCase,
    removeMemberUseCase,
    getOrgMembersUseCase
  );

  // POST /orgs — create organization
  router.post('/', authenticate, validateBody(createOrgSchema), controller.create);

  // GET /orgs — list user's organizations
  router.get('/', authenticate, controller.list);

  // GET /orgs/:id — get organization by id
  router.get('/:id', authenticate, validateParams(orgIdParamSchema), controller.getById);

  // PUT /orgs/:id — update organization
  router.put(
    '/:id',
    authenticate,
    validateParams(orgIdParamSchema),
    validateBody(updateOrgSchema),
    controller.update
  );

  // DELETE /orgs/:id — delete organization
  router.delete('/:id', authenticate, validateParams(orgIdParamSchema), controller.delete);

  // GET /orgs/:id/members — list members
  router.get(
    '/:id/members',
    authenticate,
    validateParams(orgIdParamSchema),
    validateQuery(listMembersQuerySchema),
    controller.getMembers
  );

  // POST /orgs/:id/members — invite member
  router.post(
    '/:id/members',
    authenticate,
    validateParams(orgIdParamSchema),
    validateBody(inviteMemberSchema),
    controller.inviteMember
  );

  // PUT /orgs/:id/members/:userId/role — update member role
  router.put(
    '/:id/members/:userId/role',
    authenticate,
    validateParams(orgMemberParamSchema),
    validateBody(updateMemberRoleSchema),
    controller.updateMemberRole
  );

  // DELETE /orgs/:id/members/:userId — remove member
  router.delete(
    '/:id/members/:userId',
    authenticate,
    validateParams(orgMemberParamSchema),
    controller.removeMember
  );

  return router;
}
