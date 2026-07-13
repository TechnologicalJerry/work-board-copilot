import { ConflictError, NotFoundError } from '@boardpilot/errors';
import { Label } from '../../../domain/entities/Label';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';
import { ILabelRepository } from '../../../domain/repositories/ILabelRepository';

export interface CreateLabelInput {
  projectId: string;
  name: string;
  color: string;
  description?: string;
  createdBy: string;
}

export class CreateLabelUseCase {
  constructor(
    private readonly projectRepository: IProjectRepository,
    private readonly labelRepository: ILabelRepository
  ) {}

  async execute(input: CreateLabelInput): Promise<Label> {
    const project = await this.projectRepository.findById(input.projectId);
    if (!project) {
      throw new NotFoundError('Project', input.projectId);
    }

    const existing = await this.labelRepository.findByProjectAndName(
      input.projectId,
      input.name
    );
    if (existing) {
      throw new ConflictError(
        `A label with name '${input.name}' already exists in this project`
      );
    }

    return this.labelRepository.create({
      projectId: input.projectId,
      name: input.name,
      color: input.color,
      description: input.description,
      createdBy: input.createdBy,
    });
  }
}
