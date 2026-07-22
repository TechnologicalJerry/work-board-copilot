import { Router } from 'express';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import { DepartmentController } from '../controllers/DepartmentController';
import {
  createDeptSchema,
  updateDeptSchema,
  listDeptQuerySchema,
} from '../validators/team.validators';

export function createDepartmentRouter(controller: DepartmentController): Router {
  const router = Router();

  router.post(
    '/',
    authenticate,
    validateBody(createDeptSchema),
    controller.createDepartment
  );

  router.get(
    '/',
    authenticate,
    validateQuery(listDeptQuerySchema),
    controller.listDepartments
  );

  router.put(
    '/:id',
    authenticate,
    validateBody(updateDeptSchema),
    controller.updateDepartment
  );

  router.delete(
    '/:id',
    authenticate,
    controller.deleteDepartment
  );

  return router;
}
