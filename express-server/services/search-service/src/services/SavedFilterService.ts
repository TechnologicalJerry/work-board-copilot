import { SavedFilterModel, ISavedFilter } from '../models/SavedFilter';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';

export interface CreateSavedFilterDto {
  name: string;
  query: Record<string, unknown>;
  type: 'task' | 'project' | 'global';
  isDefault?: boolean;
}

export async function create(
  dto: CreateSavedFilterDto,
  userId: string,
  organizationId: string
): Promise<ISavedFilter> {
  if (dto.isDefault) {
    // Unset any existing default for same type
    await SavedFilterModel.updateMany({ userId, organizationId, type: dto.type, isDefault: true }, { isDefault: false });
  }
  return SavedFilterModel.create({ ...dto, userId, organizationId });
}

export async function findAll(
  userId: string,
  organizationId: string,
  page: number,
  limit: number
) {
  const filter = { userId, organizationId };
  const skip = calculateSkip(page, limit);
  const [data, total] = await Promise.all([
    SavedFilterModel.find(filter).sort({ isDefault: -1, createdAt: -1 }).skip(skip).limit(limit).lean(),
    SavedFilterModel.countDocuments(filter),
  ]);
  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'desc' });
}

export async function findById(id: string, userId: string): Promise<ISavedFilter> {
  const filter = await SavedFilterModel.findById(id);
  if (!filter) throw new NotFoundError('SavedFilter', id);
  if (filter.userId !== userId) throw new ForbiddenError('Access denied');
  return filter;
}

export async function update(
  id: string,
  userId: string,
  dto: Partial<CreateSavedFilterDto>
): Promise<ISavedFilter> {
  const filter = await SavedFilterModel.findById(id);
  if (!filter) throw new NotFoundError('SavedFilter', id);
  if (filter.userId !== userId) throw new ForbiddenError('Access denied');

  if (dto.isDefault) {
    await SavedFilterModel.updateMany(
      { userId, organizationId: filter.organizationId, type: filter.type, isDefault: true },
      { isDefault: false }
    );
  }

  Object.assign(filter, dto);
  await filter.save();
  return filter;
}

export async function remove(id: string, userId: string): Promise<void> {
  const filter = await SavedFilterModel.findById(id);
  if (!filter) throw new NotFoundError('SavedFilter', id);
  if (filter.userId !== userId) throw new ForbiddenError('Access denied');
  await filter.deleteOne();
}
