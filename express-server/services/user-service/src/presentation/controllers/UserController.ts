import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse, buildPaginatedResult } from '@boardpilot/common';
import { GetMyProfileUseCase } from '../../application/use-cases/GetMyProfileUseCase';
import { UpdateProfileUseCase } from '../../application/use-cases/UpdateProfileUseCase';
import { GetUserByIdUseCase } from '../../application/use-cases/GetUserByIdUseCase';
import { SearchUsersUseCase } from '../../application/use-cases/SearchUsersUseCase';
import { UpdateAvatarUseCase } from '../../application/use-cases/UpdateAvatarUseCase';
import { DeactivateUserUseCase } from '../../application/use-cases/DeactivateUserUseCase';
import { GetUserActivityUseCase } from '../../application/use-cases/GetUserActivityUseCase';

export class UserController {
  constructor(
    private readonly getMyProfileUseCase: GetMyProfileUseCase,
    private readonly updateProfileUseCase: UpdateProfileUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly searchUsersUseCase: SearchUsersUseCase,
    private readonly updateAvatarUseCase: UpdateAvatarUseCase,
    private readonly deactivateUserUseCase: DeactivateUserUseCase,
    private readonly getUserActivityUseCase: GetUserActivityUseCase
  ) {}

  getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const profile = await this.getMyProfileUseCase.execute(userId);
      res.json(successResponse(profile, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  updateMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const updated = await this.updateProfileUseCase.execute({
        userId,
        ...req.body,
      });
      res.json(successResponse(updated, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const profile = await this.getUserByIdUseCase.execute(id);
      res.json(successResponse(profile, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  search = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { q, page, limit } = req.query as { q: string; page: string; limit: string };
      const result = await this.searchUsersUseCase.execute({
        query: q,
        page: Number(page) || 1,
        limit: Number(limit) || 20,
      });

      const paginated = buildPaginatedResult(result.profiles, result.total, {
        page: result.page,
        limit: result.limit,
      });
      res.json(paginatedResponse(paginated, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  updateAvatar = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const { avatarUrl } = req.body as { avatarUrl: string };
      const updated = await this.updateAvatarUseCase.execute({ userId, avatarUrl });
      res.json(successResponse(updated, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };

  deactivate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const requesterId = req.user!.id;
      const requesterRole = req.user!.role;
      await this.deactivateUserUseCase.execute({ userId: id, requesterId, requesterRole });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  getActivity = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { id } = req.params;
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 30;
      const summary = await this.getUserActivityUseCase.execute({ userId: id, page, limit });
      res.json(successResponse(summary, req.context?.requestId));
    } catch (error) {
      next(error);
    }
  };
}
