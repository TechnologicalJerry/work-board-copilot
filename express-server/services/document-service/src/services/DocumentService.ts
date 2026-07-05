import { DocumentModel, IDocument } from '../models/Document';
import { DocumentTemplateModel, IDocumentTemplate } from '../models/DocumentTemplate';
import { NotFoundError, ForbiddenError, ConflictError } from '@boardpilot/errors';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { generateSlug } from '@boardpilot/common';
import mongoose from 'mongoose';
import logger from '@boardpilot/logger';

const MAX_VERSIONS = 50;

export interface CreateDocumentDto {
  organizationId: string;
  workspaceId: string;
  projectId?: string;
  title: string;
  content?: unknown;
  contentText?: string;
  contentHtml?: string;
  type?: 'wiki' | 'spec' | 'runbook' | 'meeting_notes' | 'template' | 'general';
  visibility?: 'public' | 'private' | 'team';
  icon?: string;
  parentId?: string;
  tags?: string[];
}

export interface UpdateDocumentDto {
  title?: string;
  content?: unknown;
  contentText?: string;
  contentHtml?: string;
  visibility?: 'public' | 'private' | 'team';
  icon?: string;
  tags?: string[];
  changeDescription?: string;
}

export async function create(dto: CreateDocumentDto, authorId: string): Promise<IDocument> {
  const baseSlug = generateSlug(dto.title);
  let slug = baseSlug;
  let attempt = 0;

  // Ensure unique slug within organization
  while (true) {
    const exists = await DocumentModel.findOne({ organizationId: dto.organizationId, slug });
    if (!exists) break;
    attempt++;
    slug = `${baseSlug}-${attempt}`;
  }

  const doc = await DocumentModel.create({
    ...dto,
    slug,
    authorId,
    version: 1,
    versions: [],
    collaborators: [],
    tags: dto.tags ?? [],
    parentId: dto.parentId ? new mongoose.Types.ObjectId(dto.parentId) : undefined,
  });

  logger.info({ docId: doc._id.toString(), authorId }, 'Document created');
  return doc;
}

export async function update(
  id: string,
  userId: string,
  dto: UpdateDocumentDto
): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);
  if (doc.deletedAt) throw new NotFoundError('Document', id);

  const contentChanged = dto.content !== undefined;

  if (contentChanged) {
    // Save current version snapshot before overwriting
    const versionEntry = {
      version: doc.version,
      contentSnapshot: doc.content,
      savedBy: userId,
      savedAt: new Date(),
      changeDescription: dto.changeDescription,
    };

    const versions = [...doc.versions, versionEntry].slice(-MAX_VERSIONS);
    doc.versions = versions as typeof doc.versions;
    doc.version = doc.version + 1;
    doc.content = dto.content;
  }

  if (dto.contentText !== undefined) doc.contentText = dto.contentText;
  if (dto.contentHtml !== undefined) doc.contentHtml = dto.contentHtml;
  if (dto.title !== undefined) doc.title = dto.title;
  if (dto.visibility !== undefined) doc.visibility = dto.visibility;
  if (dto.icon !== undefined) doc.icon = dto.icon;
  if (dto.tags !== undefined) doc.tags = dto.tags;
  doc.lastEditedBy = userId;
  doc.lastEditedAt = new Date();

  await doc.save();
  logger.info({ docId: id, userId, version: doc.version }, 'Document updated');
  return doc;
}

export async function publish(id: string, userId: string): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);
  doc.status = 'published';
  doc.lastEditedBy = userId;
  doc.lastEditedAt = new Date();
  await doc.save();
  return doc;
}

export async function archive(id: string, userId: string): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);
  doc.status = 'archived';
  doc.lastEditedBy = userId;
  doc.lastEditedAt = new Date();
  await doc.save();
  return doc;
}

export async function restoreVersion(
  id: string,
  versionNum: number,
  userId: string
): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);

  const versionEntry = doc.versions.find((v) => v.version === versionNum);
  if (!versionEntry) throw new NotFoundError('Version', String(versionNum));

  // Save current state before restoring
  const currentSnapshot = {
    version: doc.version,
    contentSnapshot: doc.content,
    savedBy: userId,
    savedAt: new Date(),
    changeDescription: `Restored from version ${versionNum}`,
  };

  const versions = [...doc.versions, currentSnapshot].slice(-MAX_VERSIONS);
  doc.versions = versions as typeof doc.versions;
  doc.version = doc.version + 1;
  doc.content = versionEntry.contentSnapshot;
  doc.lastEditedBy = userId;
  doc.lastEditedAt = new Date();
  await doc.save();

  logger.info({ docId: id, restoredVersion: versionNum, userId }, 'Document version restored');
  return doc;
}

export async function addCollaborator(
  id: string,
  userId: string,
  permission: 'view' | 'comment' | 'edit'
): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);

  const collaborators = doc.collaborators as Array<{ userId: string; permission: string }>;
  const existing = collaborators.find((c) => c.userId === userId);
  if (existing) {
    existing.permission = permission;
    doc.markModified('collaborators');
  } else {
    collaborators.push({ userId, permission });
  }

  await doc.save();
  return doc;
}

export async function removeCollaborator(id: string, userId: string): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);

  doc.collaborators = (doc.collaborators as Array<{ userId: string; permission: string }>).filter(
    (c) => c.userId !== userId
  ) as typeof doc.collaborators;

  await doc.save();
  return doc;
}

export async function getTree(workspaceId: string): Promise<unknown[]> {
  const docs = await DocumentModel.find({
    workspaceId,
    deletedAt: { $exists: false },
    status: { $ne: 'archived' },
  })
    .select('_id title parentId type status icon')
    .sort({ createdAt: 1 })
    .lean();

  // Build tree
  const map = new Map<string, (typeof docs)[0] & { children: unknown[] }>();
  const roots: unknown[] = [];

  for (const doc of docs) {
    map.set(doc._id.toString(), { ...doc, children: [] });
  }

  for (const doc of docs) {
    const node = map.get(doc._id.toString())!;
    if (doc.parentId) {
      const parent = map.get(doc.parentId.toString());
      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    } else {
      roots.push(node);
    }
  }

  return roots;
}

export async function listTemplates(orgId: string): Promise<IDocumentTemplate[]> {
  return DocumentTemplateModel.find({
    $or: [{ organizationId: orgId }, { isGlobal: true }],
  }).lean();
}

export async function createFromTemplate(
  templateId: string,
  dto: Omit<CreateDocumentDto, 'content'>,
  userId: string
): Promise<IDocument> {
  const template = await DocumentTemplateModel.findById(templateId);
  if (!template) throw new NotFoundError('DocumentTemplate', templateId);

  return create({ ...dto, content: template.content, type: template.type }, userId);
}

export async function findById(id: string): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc || doc.deletedAt) throw new NotFoundError('Document', id);
  // Increment view count
  DocumentModel.updateOne({ _id: id }, { $inc: { viewCount: 1 } }).exec().catch(() => {});
  return doc;
}

export async function list(
  filters: { workspaceId?: string; projectId?: string; authorId?: string; organizationId: string },
  page: number,
  limit: number
) {
  const filter: Record<string, unknown> = {
    organizationId: filters.organizationId,
    deletedAt: { $exists: false },
  };
  if (filters.workspaceId) filter.workspaceId = filters.workspaceId;
  if (filters.projectId) filter.projectId = filters.projectId;
  if (filters.authorId) filter.authorId = filters.authorId;

  const skip = calculateSkip(page, limit);
  const [data, total] = await Promise.all([
    DocumentModel.find(filter).sort({ updatedAt: -1 }).skip(skip).limit(limit).lean(),
    DocumentModel.countDocuments(filter),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'updatedAt', sortOrder: 'desc' });
}

export async function softDelete(id: string, userId: string): Promise<IDocument> {
  const doc = await DocumentModel.findById(id);
  if (!doc) throw new NotFoundError('Document', id);
  doc.deletedAt = new Date();
  await doc.save();
  logger.info({ docId: id, userId }, 'Document soft-deleted');
  return doc;
}
