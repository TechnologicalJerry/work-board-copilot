import { Router } from 'express';
import { ZodSchema } from 'zod';
import { authenticate, validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { CreateWorkspaceUseCase } from '../../application/use-cases/CreateWorkspaceUseCase';
import { GetWorkspaceUseCase } from '../../application/use-cases/GetWorkspaceUseCase';
import { ListWorkspacesUseCase } from '../../application/use-cases/ListWorkspacesUseCase';
import { UpdateWorkspaceUseCase } from '../../application/use-cases/UpdateWorkspaceUseCase';
import { DeleteWorkspaceUseCase } from '../../application/use-cases/DeleteWorkspaceUseCase';
import { AddWorkspaceMemberUseCase } from '../../application/use-cases/AddWorkspaceMemberUseCase';
import { RemoveWorkspaceMemberUseCase } from '../../application/use-cases/RemoveWorkspaceMemberUseCase';
import { WorkspaceController } from '../controllers/WorkspaceController';
import {
  createWorkspaceSchema,
  updateWorkspaceSchema,
  listWorkspacesQuerySchema,
  addMemberSchema,
  workspaceIdParamSchema,
  workspaceMemberParamSchema,
  ListWorkspacesQuery,
} from '../validators/workspace.validators';

export function createWorkspaceRouter(): Router {
  const router = Router();

  const repo = new PrismaWorkspaceRepository();

  const createWorkspaceUseCase = new CreateWorkspaceUseCase(repo);
  const getWorkspaceUseCase = new GetWorkspaceUseCase(repo);
  const listWorkspacesUseCase = new ListWorkspacesUseCase(repo);
  const updateWorkspaceUseCase = new UpdateWorkspaceUseCase(repo);
  const deleteWorkspaceUseCase = new DeleteWorkspaceUseCase(repo);
  const addWorkspaceMemberUseCase = new AddWorkspaceMemberUseCase(repo);
  const removeWorkspaceMemberUseCase = new RemoveWorkspaceMemberUseCase(repo);

  const controller = new WorkspaceController(
    createWorkspaceUseCase,
    getWorkspaceUseCase,
    listWorkspacesUseCase,
    updateWorkspaceUseCase,
    deleteWorkspaceUseCase,
    addWorkspaceMemberUseCase,
    removeWorkspaceMemberUseCase,
    repo
  );

  // POST /workspaces — create workspace
  router.post('/', authenticate, validateBody(createWorkspaceSchema), controller.create);

  // GET /workspaces — list workspaces for an org
  router.get(
    '/',
    authenticate,
    // listWorkspacesQuerySchema coerces/transforms its input (e.g. isArchived,
    // page, limit), so its Zod input type differs from its output type.
    // validateQuery only cares about the parsed (output) shape, so assert
    // that here rather than widening the shared ZodSchema<T> signature.
    validateQuery(listWorkspacesQuerySchema as unknown as ZodSchema<ListWorkspacesQuery>),
    controller.list
  );

  // GET /workspaces/:id — get workspace by id
  router.get('/:id', authenticate, validateParams(workspaceIdParamSchema), controller.getById);

  // PUT /workspaces/:id — update workspace
  router.put(
    '/:id',
    authenticate,
    validateParams(workspaceIdParamSchema),
    validateBody(updateWorkspaceSchema),
    controller.update
  );

  // DELETE /workspaces/:id — delete workspace
  router.delete('/:id', authenticate, validateParams(workspaceIdParamSchema), controller.delete);

  // GET /workspaces/:id/members — list members
  router.get('/:id/members', authenticate, validateParams(workspaceIdParamSchema), controller.getMembers);

  // POST /workspaces/:id/members — add member
  router.post(
    '/:id/members',
    authenticate,
    validateParams(workspaceIdParamSchema),
    validateBody(addMemberSchema),
    controller.addMember
  );

  // DELETE /workspaces/:id/members/:userId — remove member
  router.delete(
    '/:id/members/:userId',
    authenticate,
    validateParams(workspaceMemberParamSchema),
    controller.removeMember
  );

  return router;
}
