import { NotFoundError } from '@boardpilot/errors';
import { ILabelRepository } from '../../../domain/repositories/ILabelRepository';

export interface DeleteLabelInput {
  labelId: string;
  projectId: string;
}

export class DeleteLabelUseCase {
  constructor(private readonly labelRepository: ILabelRepository) {}

  async execute(input: DeleteLabelInput): Promise<void> {
    const label = await this.labelRepository.findById(input.labelId);
    if (!label || label.projectId !== input.projectId) {
      throw new NotFoundError('Label', input.labelId);
    }

    await this.labelRepository.delete(input.labelId);
  }
}
