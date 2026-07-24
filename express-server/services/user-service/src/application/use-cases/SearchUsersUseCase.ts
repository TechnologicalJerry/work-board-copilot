import { UserProfile } from '../../domain/entities/UserProfile';
import type { IUserProfileRepository } from '../../domain/repositories/IUserProfileRepository';

export interface SearchUsersInput {
  query: string;
  page: number;
  limit: number;
}

export interface SearchUsersResult {
  profiles: UserProfile[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export class SearchUsersUseCase {
  constructor(private readonly userProfileRepository: IUserProfileRepository) {}

  async execute(input: SearchUsersInput): Promise<SearchUsersResult> {
    const { query, page, limit } = input;
    const offset = (page - 1) * limit;

    const result = await this.userProfileRepository.search(query, limit, offset);
    const totalPages = Math.ceil(result.total / limit);

    return {
      profiles: result.profiles,
      total: result.total,
      page,
      limit,
      totalPages,
    };
  }
}
