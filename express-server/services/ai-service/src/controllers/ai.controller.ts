import { Request, Response, NextFunction } from 'express';
import { successResponse, paginatedResponse } from '@boardpilot/common';
import { BadRequestError, TooManyRequestsError } from '@boardpilot/errors';
import logger from '@boardpilot/logger';
import { config } from '../config';
import {
  streamChatCompletion,
  getChatCompletion,
  buildMessages,
  SYSTEM_PROMPTS,
} from '../services/openai.service';
import {
  createSession,
  getSessionById,
  listSessions,
  addMessageToSession,
  deleteSession,
} from '../services/ai-session.service';
import { getTokenUsage } from '../services/redis.service';
import {
  ChatRequest,
  SprintPlanningRequest,
  TaskBreakdownRequest,
  StandupRequest,
  ReleaseNotesRequest,
  BugAnalysisRequest,
  MeetingNotesRequest,
  SessionQuery,
  SessionMessage,
} from '../schemas/ai.schema';
import { IMessage } from '../models/AISession';

// ── Chat (streaming SSE) ─────────────────────────────────────────────────────
export async function chat(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as ChatRequest;

    // Load prior session messages if sessionId provided
    let priorMessages: IMessage[] = [];
    let existingSessionId = body.sessionId;

    if (existingSessionId) {
      const session = await getSessionById(existingSessionId, userId);
      priorMessages = session.messages;
    }

    const messages = buildMessages(
      SYSTEM_PROMPTS.CHAT,
      body.message,
      priorMessages.map((m) => ({ role: m.role, content: m.content }))
    );

    let accumulatedContent = '';

    await streamChatCompletion({
      messages,
      userId,
      res,
      onComplete: async (content, usage) => {
        accumulatedContent = content;
        const tokensUsed = usage?.total_tokens ?? 0;

        const sessionMessages: IMessage[] = [
          { role: 'user', content: body.message, createdAt: new Date() },
          { role: 'assistant', content: accumulatedContent, createdAt: new Date() },
        ];

        if (existingSessionId) {
          await addMessageToSession(existingSessionId, userId, sessionMessages, tokensUsed);
        } else {
          const newSession = await createSession({
            userId,
            organizationId,
            sessionType: 'chat',
            title: body.message.slice(0, 80),
            messages: [
              { role: 'system', content: SYSTEM_PROMPTS.CHAT, createdAt: new Date() },
              ...sessionMessages,
            ],
            context: body.context,
            tokensUsed,
            model: config.OPENAI_MODEL,
          });
          // Write session ID header so client can link follow-ups
          res.setHeader('X-Session-Id', newSession._id.toString());
        }
      },
    });
  } catch (error) {
    next(error);
  }
}

// ── Sprint Planning ──────────────────────────────────────────────────────────
export async function sprintPlanning(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as SprintPlanningRequest;

    const userContent = `
Team Velocity: ${body.teamVelocity} story points per sprint
Sprint Duration: ${body.sprintDurationDays} days
${body.teamSize ? `Team Size: ${body.teamSize} members` : ''}
${body.sprintGoalHint ? `Sprint Goal Hint: ${body.sprintGoalHint}` : ''}
${body.previousSprintContext ? `Previous Sprint Context: ${body.previousSprintContext}` : ''}

Backlog Items:
${body.backlogItems
  .map(
    (item) =>
      `- [${item.id}] ${item.title}${item.storyPoints ? ` (${item.storyPoints} pts)` : ''} | Priority: ${item.priority ?? 'medium'} | Type: ${item.type ?? 'feature'}${item.description ? `\n  Description: ${item.description}` : ''}`
  )
  .join('\n')}
`;

    const messages = buildMessages(SYSTEM_PROMPTS.SPRINT_PLANNING, userContent);
    const { content, usage } = await getChatCompletion(messages, userId, {
      responseFormat: 'json',
      temperature: 0.3,
    });

    let result: Record<string, unknown>;
    try {
      result = JSON.parse(content) as Record<string, unknown>;
    } catch {
      throw new BadRequestError('AI returned invalid JSON response. Please retry.');
    }

    const session = await createSession({
      userId,
      organizationId,
      sessionType: 'sprint_planning',
      title: `Sprint Planning - ${new Date().toLocaleDateString()}`,
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS.SPRINT_PLANNING, createdAt: new Date() },
        { role: 'user', content: userContent, createdAt: new Date() },
        { role: 'assistant', content, createdAt: new Date() },
      ],
      context: { backlogItems: body.backlogItems, teamVelocity: body.teamVelocity },
      result,
      tokensUsed: usage?.total_tokens ?? 0,
      model: config.OPENAI_MODEL,
    });

    res
      .status(200)
      .json(
        successResponse(
          { sessionId: session._id, result },
          req.context.requestId
        )
      );
  } catch (error) {
    next(error);
  }
}

// ── Task Breakdown ───────────────────────────────────────────────────────────
export async function taskBreakdown(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as TaskBreakdownRequest;

    const userContent = `
Epic Title: ${body.epicTitle}

Description:
${body.epicDescription}

${body.acceptanceCriteria ? `Acceptance Criteria:\n${body.acceptanceCriteria}` : ''}
${body.techStack?.length ? `Tech Stack: ${body.techStack.join(', ')}` : ''}
${body.teamContext ? `Team Context: ${body.teamContext}` : ''}
`;

    const messages = buildMessages(SYSTEM_PROMPTS.TASK_BREAKDOWN, userContent);
    const { content, usage } = await getChatCompletion(messages, userId, {
      responseFormat: 'json',
      temperature: 0.3,
    });

    let result: Record<string, unknown>;
    try {
      result = JSON.parse(content) as Record<string, unknown>;
    } catch {
      throw new BadRequestError('AI returned invalid JSON response. Please retry.');
    }

    const session = await createSession({
      userId,
      organizationId,
      sessionType: 'task_breakdown',
      title: `Task Breakdown: ${body.epicTitle}`,
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS.TASK_BREAKDOWN, createdAt: new Date() },
        { role: 'user', content: userContent, createdAt: new Date() },
        { role: 'assistant', content, createdAt: new Date() },
      ],
      context: { epicTitle: body.epicTitle },
      result,
      tokensUsed: usage?.total_tokens ?? 0,
      model: config.OPENAI_MODEL,
    });

    res
      .status(200)
      .json(successResponse({ sessionId: session._id, result }, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

// ── Standup Summary ──────────────────────────────────────────────────────────
export async function standupSummary(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as StandupRequest;

    const formatTasks = (tasks: typeof body.completedYesterday) =>
      tasks.map((t) => `  - ${t.title}${t.assignee ? ` (${t.assignee})` : ''}${t.notes ? `: ${t.notes}` : ''}`).join('\n');

    const userContent = `
${body.teamMember ? `Team Member: ${body.teamMember}` : ''}
${body.sprintName ? `Sprint: ${body.sprintName}` : ''}
Date: ${new Date().toLocaleDateString()}

Completed Yesterday:
${body.completedYesterday.length ? formatTasks(body.completedYesterday) : '  (none)'}

In Progress Today:
${body.inProgressToday.length ? formatTasks(body.inProgressToday) : '  (none)'}

Blocked:
${body.blocked.length ? body.blocked.map((t) => `  - ${t.title}: ${t.blockerReason ?? 'Blocker not specified'}`).join('\n') : '  (none)'}
`;

    const messages = buildMessages(SYSTEM_PROMPTS.STANDUP, userContent);
    const { content, usage } = await getChatCompletion(messages, userId, { temperature: 0.5 });

    const session = await createSession({
      userId,
      organizationId,
      sessionType: 'standup',
      title: `Standup - ${new Date().toLocaleDateString()}`,
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS.STANDUP, createdAt: new Date() },
        { role: 'user', content: userContent, createdAt: new Date() },
        { role: 'assistant', content, createdAt: new Date() },
      ],
      result: { summary: content },
      tokensUsed: usage?.total_tokens ?? 0,
      model: config.OPENAI_MODEL,
    });

    res
      .status(200)
      .json(successResponse({ sessionId: session._id, summary: content }, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

// ── Release Notes ────────────────────────────────────────────────────────────
export async function releaseNotes(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as ReleaseNotesRequest;

    const userContent = `
Sprint: ${body.sprintName}
${body.version ? `Version: ${body.version}` : ''}
${body.releaseDate ? `Release Date: ${body.releaseDate}` : `Release Date: ${new Date().toLocaleDateString()}`}

Completed Tasks:
${body.tasks
  .map(
    (t) =>
      `- [${t.type.toUpperCase()}] ${t.title}${t.description ? `: ${t.description}` : ''}${t.jiraId ? ` (${t.jiraId})` : ''}`
  )
  .join('\n')}

${body.additionalNotes ? `Additional Notes:\n${body.additionalNotes}` : ''}
`;

    const messages = buildMessages(SYSTEM_PROMPTS.RELEASE_NOTES, userContent);
    const { content, usage } = await getChatCompletion(messages, userId, { temperature: 0.4 });

    const session = await createSession({
      userId,
      organizationId,
      sessionType: 'release_notes',
      title: `Release Notes: ${body.sprintName}${body.version ? ` v${body.version}` : ''}`,
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS.RELEASE_NOTES, createdAt: new Date() },
        { role: 'user', content: userContent, createdAt: new Date() },
        { role: 'assistant', content, createdAt: new Date() },
      ],
      result: { notes: content, version: body.version, sprintName: body.sprintName },
      tokensUsed: usage?.total_tokens ?? 0,
      model: config.OPENAI_MODEL,
    });

    res
      .status(200)
      .json(successResponse({ sessionId: session._id, notes: content }, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

// ── Bug Analysis ─────────────────────────────────────────────────────────────
export async function bugAnalysis(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as BugAnalysisRequest;

    const userContent = `
Bug Title: ${body.title}
Affected Version: ${body.affectedVersion ?? 'Not specified'}

Description:
${body.description}

${body.stepsToReproduce?.length ? `Steps to Reproduce:\n${body.stepsToReproduce.map((s, i) => `${i + 1}. ${s}`).join('\n')}` : ''}

${body.expectedBehavior ? `Expected Behavior: ${body.expectedBehavior}` : ''}
${body.actualBehavior ? `Actual Behavior: ${body.actualBehavior}` : ''}

${body.errorLogs ? `Error Logs:\n\`\`\`\n${body.errorLogs}\n\`\`\`` : ''}

${body.environment ? `Environment: ${JSON.stringify(body.environment, null, 2)}` : ''}
`;

    const messages = buildMessages(SYSTEM_PROMPTS.BUG_ANALYSIS, userContent);
    const { content, usage } = await getChatCompletion(messages, userId, {
      responseFormat: 'json',
      temperature: 0.2,
    });

    let result: Record<string, unknown>;
    try {
      result = JSON.parse(content) as Record<string, unknown>;
    } catch {
      throw new BadRequestError('AI returned invalid JSON response. Please retry.');
    }

    const session = await createSession({
      userId,
      organizationId,
      sessionType: 'bug_analysis',
      title: `Bug Analysis: ${body.title}`,
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS.BUG_ANALYSIS, createdAt: new Date() },
        { role: 'user', content: userContent, createdAt: new Date() },
        { role: 'assistant', content, createdAt: new Date() },
      ],
      context: { bugTitle: body.title },
      result,
      tokensUsed: usage?.total_tokens ?? 0,
      model: config.OPENAI_MODEL,
    });

    res
      .status(200)
      .json(successResponse({ sessionId: session._id, result }, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

// ── Meeting Notes ────────────────────────────────────────────────────────────
export async function meetingNotes(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const body = req.body as MeetingNotesRequest;

    const userContent = `
${body.meetingTitle ? `Meeting: ${body.meetingTitle}` : ''}
${body.meetingDate ? `Date: ${body.meetingDate}` : `Date: ${new Date().toLocaleDateString()}`}
${body.meetingType ? `Type: ${body.meetingType.replace('_', ' ')}` : ''}
${body.attendees?.length ? `Attendees: ${body.attendees.join(', ')}` : ''}

Raw Notes:
${body.rawNotes}
`;

    const messages = buildMessages(SYSTEM_PROMPTS.MEETING_NOTES, userContent);
    const { content, usage } = await getChatCompletion(messages, userId, {
      responseFormat: 'json',
      temperature: 0.3,
    });

    let result: Record<string, unknown>;
    try {
      result = JSON.parse(content) as Record<string, unknown>;
    } catch {
      throw new BadRequestError('AI returned invalid JSON response. Please retry.');
    }

    const session = await createSession({
      userId,
      organizationId,
      sessionType: 'meeting_notes',
      title: body.meetingTitle ?? `Meeting Notes - ${new Date().toLocaleDateString()}`,
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS.MEETING_NOTES, createdAt: new Date() },
        { role: 'user', content: userContent, createdAt: new Date() },
        { role: 'assistant', content, createdAt: new Date() },
      ],
      result,
      tokensUsed: usage?.total_tokens ?? 0,
      model: config.OPENAI_MODEL,
    });

    res
      .status(200)
      .json(successResponse({ sessionId: session._id, result }, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

// ── Session Management ────────────────────────────────────────────────────────
export async function getSessions(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const organizationId = req.user!.organizationId;
    const query = req.query as unknown as SessionQuery;

    const result = await listSessions(userId, organizationId, {
      page: query.page ?? 1,
      limit: query.limit ?? 20,
      sessionType: query.sessionType,
      status: query.status,
    });

    res.status(200).json(paginatedResponse(result, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

export async function getSession(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const { sessionId } = req.params;

    const session = await getSessionById(sessionId, userId);
    res.status(200).json(successResponse(session, req.context.requestId));
  } catch (error) {
    next(error);
  }
}

export async function removeSession(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const { sessionId } = req.params;

    await deleteSession(sessionId, userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

export async function continueSession(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = req.user!.id;
    const { sessionId } = req.params;
    const body = req.body as SessionMessage;

    const session = await getSessionById(sessionId, userId);

    const history = session.messages.map((m) => ({ role: m.role, content: m.content }));
    const messages = buildMessages(
      SYSTEM_PROMPTS.CHAT,
      body.message,
      history
    );

    await streamChatCompletion({
      messages,
      userId,
      res,
      onComplete: async (content, usage) => {
        const newMessages: IMessage[] = [
          { role: 'user', content: body.message, createdAt: new Date() },
          { role: 'assistant', content, createdAt: new Date() },
        ];
        await addMessageToSession(sessionId, userId, newMessages, usage?.total_tokens ?? 0);
      },
    });
  } catch (error) {
    next(error);
  }
}

// ── Token Usage ───────────────────────────────────────────────────────────────
export async function getTokenUsageHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.user!.id;
    const usage = await getTokenUsage(userId);
    res.status(200).json(successResponse(usage, req.context.requestId));
  } catch (error) {
    next(error);
  }
}
