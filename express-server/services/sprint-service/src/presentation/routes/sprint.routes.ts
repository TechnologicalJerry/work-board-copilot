import { Router } from 'express';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import { SprintController } from '../controllers/SprintController';
import {
  createSprintSchema,
  updateSprintSchema,
  addSprintItemSchema,
  listSprintsQuerySchema,
  velocityQuerySchema,
} from '../validators/sprint.validators';

export function createSprintRouter(controller: SprintController): Router {
  const router = Router();

  // Sprint CRUD
  router.post(
    '/',
    authenticate,
    validateBody(createSprintSchema),
    controller.create
  );

  router.get(
    '/',
    authenticate,
    validateQuery(listSprintsQuerySchema),
    controller.list
  );

  // Velocity endpoint — must be defined BEFORE /:id to avoid param conflicts
  router.get(
    '/project/:projectId/velocity',
    authenticate,
    validateQuery(velocityQuerySchema),
    controller.getVelocity
  );

  router.get(
    '/:id',
    authenticate,
    controller.getById
  );

  router.put(
    '/:id',
    authenticate,
    validateBody(updateSprintSchema),
    controller.update
  );

  router.delete(
    '/:id',
    authenticate,
    controller.delete
  );

  // Sprint lifecycle transitions
  router.post(
    '/:id/start',
    authenticate,
    controller.start
  );

  router.post(
    '/:id/complete',
    authenticate,
    controller.complete
  );

  // Sprint analytics
  router.get(
    '/:id/burndown',
    authenticate,
    controller.getBurndown
  );

  // Sprint items
  router.post(
    '/:id/items',
    authenticate,
    validateBody(addSprintItemSchema),
    controller.addItem
  );

  router.delete(
    '/:id/items/:taskId',
    authenticate,
    controller.removeItem
  );

  return router;
}
