import { NotFoundError } from '@boardpilot/errors';
import { Label } from '../../../domain/entities/Label';
import { ILabelRepository } from '../../../domain/repositories/ILabelRepository';

export interface UpdateLabelInput {
  labelId: string;
  projectId: string;
  name?: string;
  color?: string;
  description?: string | null;
}

export class UpdateLabelUseCase {
  constructor(private readonly labelRepository: ILabelRepository) {}

  async execute(input: UpdateLabelInput): Promise<Label> {
    const label = await this.labelRepository.findById(input.labelId);
    if (!label || label.projectId !== input.projectId) {
      throw new NotFoundError('Label', input.labelId);
    }

    return this.labelRepository.update(input.labelId, {
      name: input.name,
      color: input.color,
      description: input.description,
    });
  }
}
