import mongoose from 'mongoose';
import { AISession, IAISessionDocument, SessionType, IMessage } from '../models/AISession';
import { buildPaginatedResult, calculateSkip } from '@boardpilot/common';
import { NotFoundError, ForbiddenError } from '@boardpilot/errors';
import { cacheGet, cacheSet, cacheDel } from './redis.service';
import logger from '@boardpilot/logger';

const SESSION_CACHE_TTL = 300; // 5 minutes

export async function createSession(data: {
  userId: string;
  organizationId: string;
  sessionType: SessionType;
  title?: string;
  messages: IMessage[];
  context?: Record<string, unknown>;
  result?: Record<string, unknown>;
  tokensUsed: number;
  model: string;
}): Promise<IAISessionDocument> {
  const session = await AISession.create(data);
  logger.debug({ sessionId: session._id.toString(), type: data.sessionType }, 'AI session created');
  return session;
}

export async function getSessionById(
  sessionId: string,
  userId: string
): Promise<IAISessionDocument> {
  if (!mongoose.Types.ObjectId.isValid(sessionId)) {
    throw new NotFoundError('AISession', sessionId);
  }

  const cacheKey = `ai:session:${sessionId}`;
  const cached = await cacheGet<IAISessionDocument>(cacheKey);
  if (cached) return cached;

  const session = await AISession.findById(sessionId).lean();
  if (!session) {
    throw new NotFoundError('AISession', sessionId);
  }

  if (session.userId !== userId) {
    throw new ForbiddenError('Access denied to this session');
  }

  await cacheSet(cacheKey, session, SESSION_CACHE_TTL);
  return session as unknown as IAISessionDocument;
}

export async function listSessions(
  userId: string,
  organizationId: string,
  query: {
    page: number;
    limit: number;
    sessionType?: SessionType;
    status?: string;
  }
) {
  const filter: Record<string, unknown> = { userId, organizationId };
  if (query.sessionType) filter.sessionType = query.sessionType;
  if (query.status) filter.status = query.status;

  const skip = calculateSkip(query.page, query.limit);

  const [data, total] = await Promise.all([
    AISession.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(query.limit)
      .select('-messages') // Exclude messages for list view
      .lean(),
    AISession.countDocuments(filter),
  ]);

  return buildPaginatedResult(data, total, query);
}

export async function addMessageToSession(
  sessionId: string,
  userId: string,
  messages: IMessage[],
  tokensUsed: number,
  result?: Record<string, unknown>
): Promise<IAISessionDocument> {
  if (!mongoose.Types.ObjectId.isValid(sessionId)) {
    throw new NotFoundError('AISession', sessionId);
  }

  const session = await AISession.findOne({ _id: sessionId, userId });
  if (!session) {
    throw new NotFoundError('AISession', sessionId);
  }

  session.messages.push(...messages);
  session.tokensUsed += tokensUsed;
  if (result) session.result = result;

  await session.save();

  // Invalidate cache
  await cacheDel(`ai:session:${sessionId}`);

  return session;
}

export async function markSessionCompleted(
  sessionId: string,
  result?: Record<string, unknown>
): Promise<void> {
  await AISession.findByIdAndUpdate(sessionId, {
    status: 'completed',
    ...(result && { result }),
  });
  await cacheDel(`ai:session:${sessionId}`);
}

export async function markSessionFailed(sessionId: string): Promise<void> {
  await AISession.findByIdAndUpdate(sessionId, { status: 'failed' });
  await cacheDel(`ai:session:${sessionId}`);
}

export async function deleteSession(sessionId: string, userId: string): Promise<void> {
  if (!mongoose.Types.ObjectId.isValid(sessionId)) {
    throw new NotFoundError('AISession', sessionId);
  }

  const result = await AISession.findOneAndDelete({ _id: sessionId, userId });
  if (!result) {
    throw new NotFoundError('AISession', sessionId);
  }

  await cacheDel(`ai:session:${sessionId}`);
}
