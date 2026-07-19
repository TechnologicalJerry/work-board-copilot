import { getRabbitMQConnection, EventPublisher } from '@boardpilot/events';
import { Task, TaskStatus } from '../../domain/entities/Task';
import logger from '@boardpilot/logger';

const EXCHANGE = 'events';
const AGGREGATE_TYPE = 'Task';

function getPublisher(): EventPublisher {
  const connection = getRabbitMQConnection();
  return new EventPublisher(connection);
}

export async function publishTaskCreated(task: Task): Promise<void> {
  try {
    const publisher = getPublisher();
    await publisher.publishDomainEvent(
      EXCHANGE,
      'task.created',
      task.id,
      AGGREGATE_TYPE,
      'TaskCreated',
      {
        taskId: task.id,
        organizationId: task.organizationId,
        projectId: task.projectId,
        sprintId: task.sprintId,
        boardId: task.boardId,
        title: task.title,
        status: task.status,
        priority: task.priority,
        type: task.type,
        assigneeId: task.assigneeId,
        reporterId: task.reporterId,
        createdBy: task.createdBy,
      },
      {
        userId: task.createdBy,
        organizationId: task.organizationId,
        correlationId: task.id,
      }
    );
  } catch (error) {
    logger.error({ error, taskId: task.id }, 'Failed to publish task.created event');
  }
}

export async function publishTaskUpdated(
  task: Task,
  changes: Record<string, { old: unknown; new: unknown }>
): Promise<void> {
  try {
    const publisher = getPublisher();
    await publisher.publishDomainEvent(
      EXCHANGE,
      'task.updated',
      task.id,
      AGGREGATE_TYPE,
      'TaskUpdated',
      {
        taskId: task.id,
        organizationId: task.organizationId,
        projectId: task.projectId,
        changes,
      },
      {
        userId: task.updatedBy ?? task.createdBy,
        organizationId: task.organizationId,
        correlationId: task.id,
      }
    );
  } catch (error) {
    logger.error({ error, taskId: task.id }, 'Failed to publish task.updated event');
  }
}

export async function publishTaskAssigned(task: Task, assigneeId: string | null): Promise<void> {
  try {
    const publisher = getPublisher();
    await publisher.publishDomainEvent(
      EXCHANGE,
      'task.assigned',
      task.id,
      AGGREGATE_TYPE,
      'TaskAssigned',
      {
        taskId: task.id,
        organizationId: task.organizationId,
        projectId: task.projectId,
        assigneeId,
        title: task.title,
      },
      {
        userId: task.updatedBy ?? task.createdBy,
        organizationId: task.organizationId,
        correlationId: task.id,
      }
    );
  } catch (error) {
    logger.error({ error, taskId: task.id }, 'Failed to publish task.assigned event');
  }
}

export async function publishTaskStatusChanged(
  task: Task,
  oldStatus: TaskStatus,
  newStatus: TaskStatus
): Promise<void> {
  try {
    const publisher = getPublisher();
    await publisher.publishDomainEvent(
      EXCHANGE,
      'task.status_changed',
      task.id,
      AGGREGATE_TYPE,
      'TaskStatusChanged',
      {
        taskId: task.id,
        organizationId: task.organizationId,
        projectId: task.projectId,
        sprintId: task.sprintId,
        assigneeId: task.assigneeId,
        title: task.title,
        oldStatus,
        newStatus,
        completedAt: task.completedAt,
      },
      {
        userId: task.updatedBy ?? task.createdBy,
        organizationId: task.organizationId,
        correlationId: task.id,
      }
    );
  } catch (error) {
    logger.error({ error, taskId: task.id }, 'Failed to publish task.status_changed event');
  }
}

export async function publishTaskDeleted(
  taskId: string,
  projectId: string,
  orgId: string,
  deletedBy: string
): Promise<void> {
  try {
    const publisher = getPublisher();
    await publisher.publishDomainEvent(
      EXCHANGE,
      'task.deleted',
      taskId,
      AGGREGATE_TYPE,
      'TaskDeleted',
      {
        taskId,
        organizationId: orgId,
        projectId,
        deletedBy,
      },
      {
        userId: deletedBy,
        organizationId: orgId,
        correlationId: taskId,
      }
    );
  } catch (error) {
    logger.error({ error, taskId }, 'Failed to publish task.deleted event');
  }
}
