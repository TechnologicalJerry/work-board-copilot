import { BaseConsumer } from '@boardpilot/events';
import { ConsumeOptions } from '@boardpilot/events';
import { RabbitMQConnection } from '@boardpilot/events';
import { ROUTING_KEY, DomainEvent } from '@boardpilot/types';
import logger from '@boardpilot/logger';
import { NotificationService } from '../services/NotificationService';
import { NotificationChannel } from '../../domain/entities/Notification';

interface TaskAssignedPayload {
  taskId: string;
  taskTitle: string;
  assigneeId: string;
  assigneeEmail?: string;
  assignerId: string;
  projectId: string;
  organizationId: string;
}

interface CommentCreatedPayload {
  commentId: string;
  content: string;
  authorId: string;
  entityId: string;
  entityType: string;
  organizationId: string;
  watcherIds: string[];
  mentionedUserIds?: string[];
}

interface SprintEventPayload {
  sprintId: string;
  sprintName: string;
  projectId: string;
  organizationId: string;
  memberIds: string[];
}

interface MemberInvitedPayload {
  organizationId: string;
  inviteeEmail: string;
  inviteeId?: string;
  inviterName: string;
  organizationName: string;
  inviteToken: string;
}

interface MentionCreatedPayload {
  mentionedUserId: string;
  mentionedUserEmail?: string;
  authorId: string;
  entityId: string;
  entityType: string;
  organizationId: string;
  content: string;
}

interface TaskStatusChangedPayload {
  taskId: string;
  taskTitle: string;
  oldStatus: string;
  newStatus: string;
  organizationId: string;
  watcherIds: string[];
  changedById: string;
}

export class NotificationConsumer extends BaseConsumer {
  constructor(
    connection: RabbitMQConnection,
    private readonly notificationService: NotificationService
  ) {
    super(connection);
  }

  getConsumeOptions(): ConsumeOptions {
    return {
      exchange: 'boardpilot.notifications',
      exchangeType: 'topic',
      queue: 'notification-service.events',
      routingKeys: [
        ROUTING_KEY.TASK_ASSIGNED,
        ROUTING_KEY.TASK_STATUS_CHANGED,
        ROUTING_KEY.COMMENT_CREATED,
        ROUTING_KEY.MENTION_CREATED,
        ROUTING_KEY.SPRINT_STARTED,
        ROUTING_KEY.SPRINT_COMPLETED,
        ROUTING_KEY.MEMBER_INVITED,
      ],
      prefetch: 20,
      deadLetterExchange: 'boardpilot.dlx',
    };
  }

  async handle(payload: unknown): Promise<void> {
    const event = payload as DomainEvent<unknown>;
    logger.debug({ eventType: event.eventType }, 'Processing notification event');

    switch (event.eventType) {
      case ROUTING_KEY.TASK_ASSIGNED:
        await this.handleTaskAssigned(event.payload as TaskAssignedPayload);
        break;
      case ROUTING_KEY.TASK_STATUS_CHANGED:
        await this.handleTaskStatusChanged(event.payload as TaskStatusChangedPayload);
        break;
      case ROUTING_KEY.COMMENT_CREATED:
        await this.handleCommentCreated(event.payload as CommentCreatedPayload);
        break;
      case ROUTING_KEY.MENTION_CREATED:
        await this.handleMentionCreated(event.payload as MentionCreatedPayload);
        break;
      case ROUTING_KEY.SPRINT_STARTED:
        await this.handleSprintStarted(event.payload as SprintEventPayload);
        break;
      case ROUTING_KEY.SPRINT_COMPLETED:
        await this.handleSprintCompleted(event.payload as SprintEventPayload);
        break;
      case ROUTING_KEY.MEMBER_INVITED:
        await this.handleMemberInvited(event.payload as MemberInvitedPayload);
        break;
      default:
        logger.warn({ eventType: event.eventType }, 'Unhandled notification event type');
    }
  }

  private async handleTaskAssigned(payload: TaskAssignedPayload): Promise<void> {
    const channels: NotificationChannel[] = ['in_app'];
    if (payload.assigneeEmail) channels.push('email');

    await this.notificationService.trigger({
      userId: payload.assigneeId,
      organizationId: payload.organizationId,
      type: 'task.assigned',
      title: 'Task Assigned to You',
      body: `You have been assigned to task: "${payload.taskTitle}"`,
      data: { taskId: payload.taskId, projectId: payload.projectId },
      channels,
      userEmail: payload.assigneeEmail,
    });
  }

  private async handleTaskStatusChanged(payload: TaskStatusChangedPayload): Promise<void> {
    await Promise.all(
      payload.watcherIds.map((watcherId) =>
        this.notificationService.trigger({
          userId: watcherId,
          organizationId: payload.organizationId,
          type: 'task.status_changed',
          title: 'Task Status Updated',
          body: `Task "${payload.taskTitle}" moved from ${payload.oldStatus} to ${payload.newStatus}`,
          data: { taskId: payload.taskId },
          channels: ['in_app'],
        })
      )
    );
  }

  private async handleCommentCreated(payload: CommentCreatedPayload): Promise<void> {
    const watcherNotifications = payload.watcherIds
      .filter((id) => id !== payload.authorId)
      .map((watcherId) =>
        this.notificationService.trigger({
          userId: watcherId,
          organizationId: payload.organizationId,
          type: 'comment.created',
          title: 'New Comment',
          body: payload.content.slice(0, 200),
          data: { commentId: payload.commentId, entityId: payload.entityId, entityType: payload.entityType },
          channels: ['in_app'],
        })
      );

    await Promise.allSettled(watcherNotifications);
  }

  private async handleMentionCreated(payload: MentionCreatedPayload): Promise<void> {
    const channels: NotificationChannel[] = ['in_app'];
    if (payload.mentionedUserEmail) channels.push('email');

    await this.notificationService.trigger({
      userId: payload.mentionedUserId,
      organizationId: payload.organizationId,
      type: 'mention.created',
      title: 'You were mentioned',
      body: payload.content.slice(0, 200),
      data: { entityId: payload.entityId, entityType: payload.entityType },
      channels,
      userEmail: payload.mentionedUserEmail,
    });
  }

  private async handleSprintStarted(payload: SprintEventPayload): Promise<void> {
    await Promise.allSettled(
      payload.memberIds.map((memberId) =>
        this.notificationService.trigger({
          userId: memberId,
          organizationId: payload.organizationId,
          type: 'sprint.started',
          title: 'Sprint Started',
          body: `Sprint "${payload.sprintName}" has started`,
          data: { sprintId: payload.sprintId, projectId: payload.projectId },
          channels: ['in_app'],
        })
      )
    );
  }

  private async handleSprintCompleted(payload: SprintEventPayload): Promise<void> {
    await Promise.allSettled(
      payload.memberIds.map((memberId) =>
        this.notificationService.trigger({
          userId: memberId,
          organizationId: payload.organizationId,
          type: 'sprint.completed',
          title: 'Sprint Completed',
          body: `Sprint "${payload.sprintName}" has been completed`,
          data: { sprintId: payload.sprintId, projectId: payload.projectId },
          channels: ['in_app'],
        })
      )
    );
  }

  private async handleMemberInvited(payload: MemberInvitedPayload): Promise<void> {
    const userId = payload.inviteeId ?? `invite:${payload.inviteeEmail}`;

    await this.notificationService.trigger({
      userId,
      organizationId: payload.organizationId,
      type: 'org.member_invited',
      title: `You're invited to join ${payload.organizationName}`,
      body: `${payload.inviterName} has invited you to join ${payload.organizationName} on BoardPilot`,
      data: { inviteToken: payload.inviteToken, organizationId: payload.organizationId },
      channels: ['email'],
      userEmail: payload.inviteeEmail,
    });
  }
}
