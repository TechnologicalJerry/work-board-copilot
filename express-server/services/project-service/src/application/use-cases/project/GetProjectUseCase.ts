import { NotFoundError } from '@boardpilot/errors';
import { Project } from '../../../domain/entities/Project';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';

export class GetProjectUseCase {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<Project> {
    const project = await this.projectRepository.findByIdWithCounts(id);
    if (!project) {
      throw new NotFoundError('Project', id);
    }
    return project;
  }
}
