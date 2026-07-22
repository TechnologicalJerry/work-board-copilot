import { Router } from 'express';
import { z, ZodSchema } from 'zod';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import { TeamController } from '../controllers/TeamController';
import {
  createTeamSchema,
  updateTeamSchema,
  addMemberSchema,
  updateMemberSchema,
  listQuerySchema,
} from '../validators/team.validators';

export function createTeamRouter(controller: TeamController): Router {
  const router = Router();

  // Team CRUD
  router.post(
    '/',
    authenticate,
    validateBody(createTeamSchema),
    controller.create
  );

  router.get(
    '/',
    authenticate,
    validateQuery(listQuerySchema as unknown as ZodSchema<z.infer<typeof listQuerySchema>>),
    controller.list
  );

  router.get(
    '/:id',
    authenticate,
    controller.getById
  );

  router.put(
    '/:id',
    authenticate,
    validateBody(updateTeamSchema),
    controller.update
  );

  router.delete(
    '/:id',
    authenticate,
    controller.delete
  );

  // Team capacity
  router.get(
    '/:id/capacity',
    authenticate,
    controller.getCapacity
  );

  // Team members
  router.post(
    '/:id/members',
    authenticate,
    validateBody(addMemberSchema),
    controller.addMember
  );

  router.put(
    '/:id/members/:userId',
    authenticate,
    validateBody(updateMemberSchema),
    controller.updateMember
  );

  router.delete(
    '/:id/members/:userId',
    authenticate,
    controller.removeMember
  );

  return router;
}
