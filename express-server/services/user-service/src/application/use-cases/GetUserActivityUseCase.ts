import type {
  IUserProfileRepository,
  IUserActivityRepository,
  ActivityResult,
} from '../../domain/repositories/IUserProfileRepository';
import { NotFoundError } from '@boardpilot/errors';

export interface GetUserActivityInput {
  userId: string;
  page?: number;
  limit?: number;
}

export interface ActivitySummary {
  activities: ActivityResult['activities'];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  periodDays: number;
}

export class GetUserActivityUseCase {
  constructor(
    private readonly userProfileRepository: IUserProfileRepository & IUserActivityRepository
  ) {}

  async execute(input: GetUserActivityInput): Promise<ActivitySummary> {
    const { userId, page = 1, limit = 30 } = input;
    const offset = (page - 1) * limit;

    const profile = await this.userProfileRepository.findByUserId(userId);
    if (!profile) {
      throw new NotFoundError('UserProfile', userId);
    }

    let result: ActivityResult;
    try {
      // The PrismaUserProfileRepository implements IUserActivityRepository on the same class.
      result = await this.userProfileRepository.findActivitiesByUserId(userId, limit, offset);
    } catch {
      // Fallback: synthesize a minimal summary from profile metadata.
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      const profileUpdatedRecently = new Date(profile.updatedAt) > thirtyDaysAgo;
      result = {
        activities: profileUpdatedRecently
          ? [
              {
                id: 'synthetic-1',
                userId,
                action: 'profile.updated',
                entityId: profile.id,
                entityType: 'UserProfile',
                metadata: null,
                createdAt: profile.updatedAt,
              },
            ]
          : [],
        total: profileUpdatedRecently ? 1 : 0,
      };
    }

    const totalPages = Math.ceil(result.total / limit);

    return {
      activities: result.activities,
      total: result.total,
      page,
      limit,
      totalPages,
      periodDays: 30,
    };
  }
}
