import { WorkspaceEntity } from '../../domain/entities/Workspace';
import { PrismaWorkspaceRepository } from '../../infrastructure/repositories/PrismaWorkspaceRepository';
import { NotFoundError } from '@boardpilot/errors';

export class GetWorkspaceUseCase {
  constructor(private readonly workspaceRepository: PrismaWorkspaceRepository) {}

  async execute(workspaceId: string): Promise<WorkspaceEntity> {
    const workspace = await this.workspaceRepository.findById(workspaceId);
    if (!workspace) {
      throw new NotFoundError('Workspace', workspaceId);
    }
    return workspace;
  }
}
