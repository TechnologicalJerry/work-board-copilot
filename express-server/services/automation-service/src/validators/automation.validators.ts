import { z } from 'zod';

const conditionSchema = z.object({
  field: z.string().min(1),
  operator: z.enum(['equals', 'not_equals', 'contains', 'not_contains', 'greater_than', 'less_than', 'in', 'not_in', 'is_empty', 'is_not_empty']),
  value: z.unknown().optional(),
});

const actionSchema = z.object({
  type: z.enum(['set_status', 'assign_user', 'add_label', 'send_notification', 'call_webhook', 'post_comment']),
  config: z.record(z.unknown()),
});

const triggerSchema = z.object({
  type: z.enum(['task.status_changed', 'task.assigned', 'task.created', 'task.updated', 'sprint.started', 'sprint.completed']),
  conditions: z.array(conditionSchema).default([]),
});

export const createRuleSchema = z.object({
  organizationId: z.string().uuid(),
  projectId: z.string().uuid(),
  name: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
  trigger: triggerSchema,
  actions: z.array(actionSchema).min(1),
});

export const updateRuleSchema = z.object({
  name: z.string().min(1).max(200).optional(),
  description: z.string().max(1000).optional(),
  isEnabled: z.boolean().optional(),
  trigger: triggerSchema.optional(),
  actions: z.array(actionSchema).min(1).optional(),
});

export const listRulesSchema = z.object({
  projectId: z.string().uuid(),
  organizationId: z.string().uuid(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const testRuleSchema = z.object({
  eventData: z.record(z.unknown()),
});
