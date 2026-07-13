import { NotFoundError } from '@boardpilot/errors';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { ProjectMember } from '../../../domain/entities/ProjectMember';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { IProjectMemberRepository } from '../../../domain/repositories/IProjectMemberRepository';

export interface GetMembersInput {
  projectId: string;
  page: number;
  limit: number;
}

export class GetMembersUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly memberRepository: IProjectMemberRepository
  ) {}

  async execute(input: GetMembersInput): Promise<PaginatedResult<ProjectMember>> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    const options: PaginationOptions = {
      page: input.page,
      limit: input.limit,
      sortBy: 'createdAt',
      sortOrder: 'asc',
    };

    return this.memberRepository.findAll(input.projectId, options);
  }
}
