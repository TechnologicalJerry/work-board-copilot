import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';
import { CommentModel, IComment } from '../models/Comment';
import { publishEvent } from '../infrastructure/EventPublisher';
import { NotFoundError, ForbiddenError, BadRequestError } from '@boardpilot/errors';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { CreateCommentDto, UpdateCommentDto } from '../validators/comment.validators';
import logger from '@boardpilot/logger';

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'code', 'pre', 'br', 'blockquote'],
  allowedAttributes: { a: ['href', 'target'] },
};

const MENTION_REGEX = /@\[(.+?)\]\((.+?)\)/g;

function extractMentions(content: string): Array<{ userId: string; displayName: string; offset: number }> {
  const mentions: Array<{ userId: string; displayName: string; offset: number }> = [];
  let match: RegExpExecArray | null;
  MENTION_REGEX.lastIndex = 0;
  while ((match = MENTION_REGEX.exec(content)) !== null) {
    mentions.push({
      displayName: match[1],
      userId: match[2],
      offset: match.index,
    });
  }
  return mentions;
}

async function renderContent(raw: string): Promise<{ contentHtml: string; sanitized: string }> {
  const sanitized = sanitizeHtml(raw, SANITIZE_OPTIONS);
  const rendered = await Promise.resolve(marked.parse(sanitized));
  const contentHtml = sanitizeHtml(rendered, SANITIZE_OPTIONS);
  return { contentHtml, sanitized };
}

export async function create(dto: CreateCommentDto, authorId: string): Promise<IComment> {
  const { contentHtml, sanitized } = await renderContent(dto.content);
  const mentions = extractMentions(dto.content);

  const comment = await CommentModel.create({
    entityId: dto.entityId,
    entityType: dto.entityType,
    projectId: dto.projectId,
    organizationId: dto.organizationId,
    authorId,
    parentId: dto.parentId ?? null,
    content: sanitized,
    contentHtml,
    mentions,
  });

  // If this is a reply, increment parent reply count
  if (dto.parentId) {
    await CommentModel.findByIdAndUpdate(dto.parentId, { $inc: { replyCount: 1 } });
  }

  // Publish comment.created event
  await publishEvent('comment.created', {
    commentId: comment._id.toString(),
    entityId: dto.entityId,
    entityType: dto.entityType,
    projectId: dto.projectId,
    organizationId: dto.organizationId,
    authorId,
    content: sanitized,
    parentId: dto.parentId ?? null,
    createdAt: comment.createdAt.toISOString(),
  });

  // Publish mention events
  for (const mention of mentions) {
    await publishEvent('mention.created', {
      commentId: comment._id.toString(),
      entityId: dto.entityId,
      entityType: dto.entityType,
      projectId: dto.projectId,
      organizationId: dto.organizationId,
      mentionedUserId: mention.userId,
      mentionedDisplayName: mention.displayName,
      authorId,
      createdAt: comment.createdAt.toISOString(),
    });
  }

  logger.info({ commentId: comment._id.toString(), authorId }, 'Comment created');
  return comment;
}

export async function update(
  id: string,
  authorId: string,
  dto: UpdateCommentDto
): Promise<IComment> {
  const comment = await CommentModel.findById(id);
  if (!comment) throw new NotFoundError('Comment', id);
  if (comment.deletedAt) throw new BadRequestError('Comment has been deleted');
  if (comment.authorId !== authorId) throw new ForbiddenError('You can only edit your own comments');

  const { contentHtml, sanitized } = await renderContent(dto.content);
  const mentions = extractMentions(dto.content);

  // Store current content in edit history (keep last 10)
  const editEntry = { content: comment.content, editedAt: new Date() };
  const editHistory = [...comment.editHistory, editEntry].slice(-10);

  comment.content = sanitized;
  comment.contentHtml = contentHtml;
  comment.mentions = mentions;
  comment.isEdited = true;
  comment.editedAt = new Date();
  comment.editHistory = editHistory as typeof comment.editHistory;

  await comment.save();
  logger.info({ commentId: id, authorId }, 'Comment updated');
  return comment;
}

export async function softDelete(id: string, authorId: string): Promise<IComment> {
  const comment = await CommentModel.findById(id);
  if (!comment) throw new NotFoundError('Comment', id);
  if (comment.authorId !== authorId) throw new ForbiddenError('You can only delete your own comments');

  comment.deletedAt = new Date();
  comment.content = '[deleted]';
  comment.contentHtml = '<p>[deleted]</p>';
  comment.mentions = [];
  await comment.save();

  logger.info({ commentId: id, authorId }, 'Comment soft-deleted');
  return comment;
}

export async function addReaction(
  id: string,
  userId: string,
  emoji: string
): Promise<IComment> {
  const comment = await CommentModel.findById(id);
  if (!comment) throw new NotFoundError('Comment', id);
  if (comment.deletedAt) throw new BadRequestError('Cannot react to a deleted comment');

  const reactions = comment.reactions as Array<{ emoji: string; userIds: string[]; count: number }>;
  const existing = reactions.find((r) => r.emoji === emoji);

  if (existing) {
    const idx = existing.userIds.indexOf(userId);
    if (idx !== -1) {
      // Remove reaction
      existing.userIds.splice(idx, 1);
      existing.count = existing.userIds.length;
      if (existing.count === 0) {
        comment.reactions = reactions.filter((r) => r.emoji !== emoji) as typeof comment.reactions;
      }
    } else {
      // Add reaction
      existing.userIds.push(userId);
      existing.count = existing.userIds.length;
    }
  } else {
    // New emoji
    (comment.reactions as Array<{ emoji: string; userIds: string[]; count: number }>).push({
      emoji,
      userIds: [userId],
      count: 1,
    });
  }

  comment.markModified('reactions');
  await comment.save();
  return comment;
}

export async function resolve(id: string, resolvedBy: string): Promise<IComment> {
  const comment = await CommentModel.findById(id);
  if (!comment) throw new NotFoundError('Comment', id);

  comment.isResolved = true;
  comment.resolvedBy = resolvedBy;
  comment.resolvedAt = new Date();
  await comment.save();

  logger.info({ commentId: id, resolvedBy }, 'Comment resolved');
  return comment;
}

export async function pin(id: string): Promise<IComment> {
  const comment = await CommentModel.findById(id);
  if (!comment) throw new NotFoundError('Comment', id);

  comment.isPinned = !comment.isPinned;
  await comment.save();
  return comment;
}

export async function listForEntity(
  entityId: string,
  entityType: string,
  page: number,
  limit: number
) {
  const filter = { entityId, entityType, parentId: null };
  const skip = calculateSkip(page, limit);

  const [data, total] = await Promise.all([
    CommentModel.find(filter)
      .sort({ isPinned: -1, createdAt: 1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    CommentModel.countDocuments(filter),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'asc' });
}

export async function listReplies(commentId: string, page: number, limit: number) {
  const filter = { parentId: commentId };
  const skip = calculateSkip(page, limit);

  const [data, total] = await Promise.all([
    CommentModel.find(filter).sort({ createdAt: 1 }).skip(skip).limit(limit).lean(),
    CommentModel.countDocuments(filter),
  ]);

  return buildPaginatedResult(data, total, { page, limit, sortBy: 'createdAt', sortOrder: 'asc' });
}
