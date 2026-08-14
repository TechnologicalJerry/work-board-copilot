export interface DomainEvent<T = unknown> {
  eventId: string;
  eventType: string;
  aggregateId: string;
  aggregateType: string;
  payload: T;
  metadata: EventMetadata;
  occurredAt: string;
  version: number;
}

export interface EventMetadata {
  correlationId: string;
  causationId?: string;
  userId?: string;
  organizationId?: string;
  workspaceId?: string;
}

export interface IntegrationEvent<T = unknown> {
  eventId: string;
  eventType: string;
  source: string;
  payload: T;
  metadata: EventMetadata;
  publishedAt: string;
  version: number;
}

export type EventHandler<T = unknown> = (event: DomainEvent<T>) => Promise<void>;

export interface EventBus {
  publish<T>(event: DomainEvent<T>): Promise<void>;
  subscribe<T>(eventType: string, handler: EventHandler<T>): void;
}

export const EXCHANGE = {
  IDENTITY: 'identity.exchange',
  USER: 'user.exchange',
  ORGANIZATION: 'organization.exchange',
  WORKSPACE: 'workspace.exchange',
  PROJECT: 'project.exchange',
  TASK: 'task.exchange',
  SPRINT: 'sprint.exchange',
  NOTIFICATION: 'notification.exchange',
  AUDIT: 'audit.exchange',
  BILLING: 'billing.exchange',
} as const;

export const ROUTING_KEY = {
  USER_CREATED: 'user.created',
  USER_UPDATED: 'user.updated',
  USER_DELETED: 'user.deleted',
  TASK_CREATED: 'task.created',
  TASK_UPDATED: 'task.updated',
  TASK_DELETED: 'task.deleted',
  TASK_ASSIGNED: 'task.assigned',
  TASK_STATUS_CHANGED: 'task.status_changed',
  SPRINT_STARTED: 'sprint.started',
  SPRINT_COMPLETED: 'sprint.completed',
  PROJECT_CREATED: 'project.created',
  PROJECT_ARCHIVED: 'project.archived',
  ORG_CREATED: 'organization.created',
  MEMBER_INVITED: 'organization.member_invited',
  MEMBER_JOINED: 'organization.member_joined',
  COMMENT_CREATED: 'comment.created',
  MENTION_CREATED: 'mention.created',
  NOTIFICATION_SEND: 'notification.send',
  AUDIT_LOG: 'audit.log',
  BILLING_SUBSCRIPTION_UPDATED: 'billing.subscription_updated',
} as const;
