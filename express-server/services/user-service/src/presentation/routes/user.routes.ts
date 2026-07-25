import { Router } from 'express';
import { authenticate, validateBody, validateQuery, validateParams } from '@boardpilot/middlewares';
import { PrismaClient } from '../../generated/prisma-client';
import { PrismaUserProfileRepository } from '../../infrastructure/repositories/PrismaUserProfileRepository';
import { UserEventPublisher } from '../../infrastructure/events/UserEventPublisher';
import { GetMyProfileUseCase } from '../../application/use-cases/GetMyProfileUseCase';
import { UpdateProfileUseCase } from '../../application/use-cases/UpdateProfileUseCase';
import { GetUserByIdUseCase } from '../../application/use-cases/GetUserByIdUseCase';
import { SearchUsersUseCase } from '../../application/use-cases/SearchUsersUseCase';
import { UpdateAvatarUseCase } from '../../application/use-cases/UpdateAvatarUseCase';
import { DeactivateUserUseCase } from '../../application/use-cases/DeactivateUserUseCase';
import { GetUserActivityUseCase } from '../../application/use-cases/GetUserActivityUseCase';
import { UserController } from '../controllers/UserController';
import {
  updateProfileSchema,
  updateAvatarSchema,
  searchUsersSchema,
  userIdParamSchema,
  activityQuerySchema,
} from '../validators/user.validators';

export function createUserRouter(prisma: PrismaClient): Router {
  const router = Router();

  const repo = new PrismaUserProfileRepository(prisma);
  const eventPublisher = new UserEventPublisher();

  const getMyProfileUseCase = new GetMyProfileUseCase(repo);
  const updateProfileUseCase = new UpdateProfileUseCase(repo, eventPublisher);
  const getUserByIdUseCase = new GetUserByIdUseCase(repo);
  const searchUsersUseCase = new SearchUsersUseCase(repo);
  const updateAvatarUseCase = new UpdateAvatarUseCase(repo);
  const deactivateUserUseCase = new DeactivateUserUseCase(repo);
  const getUserActivityUseCase = new GetUserActivityUseCase(repo);

  const controller = new UserController(
    getMyProfileUseCase,
    updateProfileUseCase,
    getUserByIdUseCase,
    searchUsersUseCase,
    updateAvatarUseCase,
    deactivateUserUseCase,
    getUserActivityUseCase
  );

  // GET /users/me — get own profile
  router.get('/me', authenticate, controller.getMe);

  // PUT /users/me — update own profile
  router.put('/me', authenticate, validateBody(updateProfileSchema), controller.updateMe);

  // PUT /users/me/avatar — update own avatar
  router.put('/me/avatar', authenticate, validateBody(updateAvatarSchema), controller.updateAvatar);

  // GET /users/search — search users
  router.get('/search', authenticate, validateQuery(searchUsersSchema), controller.search);

  // GET /users/:id/activity — get user activity log
  router.get(
    '/:id/activity',
    authenticate,
    validateParams(userIdParamSchema),
    validateQuery(activityQuerySchema),
    controller.getActivity
  );

  // GET /users/:id — get user by profile id (public profile)
  router.get('/:id', authenticate, validateParams(userIdParamSchema), controller.getById);

  // DELETE /users/:id — deactivate user
  router.delete('/:id', authenticate, validateParams(userIdParamSchema), controller.deactivate);

  return router;
}
