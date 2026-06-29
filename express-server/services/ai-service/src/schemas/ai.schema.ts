import { z } from 'zod';

// ---- Chat ----
export const chatRequestSchema = z.object({
  message: z.string().min(1, 'Message is required').max(10000, 'Message too long'),
  sessionId: z.string().optional(),
  context: z.record(z.unknown()).optional(),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

// ---- Sprint Planning ----
export const backlogItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  storyPoints: z.number().optional(),
  priority: z.enum(['critical', 'high', 'medium', 'low']).optional(),
  type: z.enum(['feature', 'bug', 'chore', 'spike']).optional(),
  labels: z.array(z.string()).optional(),
});

export const sprintPlanningRequestSchema = z.object({
  backlogItems: z.array(backlogItemSchema).min(1, 'At least one backlog item required'),
  teamVelocity: z.number().positive('Team velocity must be positive'),
  sprintDurationDays: z.number().int().min(1).max(30).default(14),
  teamSize: z.number().int().positive().optional(),
  sprintGoalHint: z.string().max(500).optional(),
  previousSprintContext: z.string().max(2000).optional(),
});

export type SprintPlanningRequest = z.infer<typeof sprintPlanningRequestSchema>;

// ---- Task Breakdown ----
export const taskBreakdownRequestSchema = z.object({
  epicTitle: z.string().min(1).max(255),
  epicDescription: z.string().min(1, 'Epic description is required').max(5000),
  acceptanceCriteria: z.string().max(2000).optional(),
  techStack: z.array(z.string()).optional(),
  teamContext: z.string().max(1000).optional(),
});

export type TaskBreakdownRequest = z.infer<typeof taskBreakdownRequestSchema>;

// ---- Standup Summary ----
export const taskUpdateSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  status: z.enum(['completed', 'in_progress', 'blocked', 'todo']),
  assignee: z.string().optional(),
  blockerReason: z.string().optional(),
  notes: z.string().optional(),
});

export const standupRequestSchema = z.object({
  completedYesterday: z.array(taskUpdateSchema).default([]),
  inProgressToday: z.array(taskUpdateSchema).default([]),
  blocked: z.array(taskUpdateSchema).default([]),
  teamMember: z.string().optional(),
  sprintName: z.string().optional(),
});

export type StandupRequest = z.infer<typeof standupRequestSchema>;

// ---- Release Notes ----
export const completedTaskSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  type: z.enum(['feature', 'bug', 'improvement', 'breaking', 'chore']),
  labels: z.array(z.string()).optional(),
  jiraId: z.string().optional(),
  prNumber: z.string().optional(),
});

export const releaseNotesRequestSchema = z.object({
  sprintName: z.string(),
  version: z.string().optional(),
  tasks: z.array(completedTaskSchema).min(1),
  releaseDate: z.string().optional(),
  additionalNotes: z.string().max(2000).optional(),
});

export type ReleaseNotesRequest = z.infer<typeof releaseNotesRequestSchema>;

// ---- Bug Analysis ----
export const bugAnalysisRequestSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1, 'Bug description is required').max(5000),
  stepsToReproduce: z.array(z.string()).optional(),
  expectedBehavior: z.string().max(1000).optional(),
  actualBehavior: z.string().max(1000).optional(),
  errorLogs: z.string().max(10000).optional(),
  environment: z.record(z.string()).optional(),
  affectedVersion: z.string().optional(),
});

export type BugAnalysisRequest = z.infer<typeof bugAnalysisRequestSchema>;

// ---- Meeting Notes ----
export const meetingNotesRequestSchema = z.object({
  rawNotes: z.string().min(1, 'Meeting notes are required').max(20000),
  meetingTitle: z.string().max(255).optional(),
  meetingDate: z.string().optional(),
  attendees: z.array(z.string()).optional(),
  meetingType: z
    .enum(['sprint_planning', 'retrospective', 'standup', 'review', 'general'])
    .optional(),
});

export type MeetingNotesRequest = z.infer<typeof meetingNotesRequestSchema>;

// ---- Session Message (continue conversation) ----
export const sessionMessageSchema = z.object({
  message: z.string().min(1).max(10000),
  context: z.record(z.unknown()).optional(),
});

export type SessionMessage = z.infer<typeof sessionMessageSchema>;

// ---- Session Query ----
export const sessionQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  sessionType: z
    .enum(['chat', 'sprint_planning', 'task_breakdown', 'standup', 'release_notes', 'bug_analysis', 'meeting_notes'])
    .optional(),
  status: z.enum(['active', 'completed', 'failed']).optional(),
});

export type SessionQuery = z.infer<typeof sessionQuerySchema>;
