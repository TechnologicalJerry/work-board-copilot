import { getRabbitMQConnection, EventPublisher } from '@boardpilot/events';
import logger from '@boardpilot/logger';
import { SprintEntity } from '../../domain/entities/Sprint';

const EXCHANGE = 'events';

export class SprintEventPublisher {
  private publisher: EventPublisher;

  constructor() {
    const connection = getRabbitMQConnection();
    this.publisher = new EventPublisher(connection);
  }

  async publishSprintStarted(sprint: SprintEntity): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE,
        'sprint.started',
        sprint.id,
        'Sprint',
        'SPRINT_STARTED',
        {
          sprintId: sprint.id,
          projectId: sprint.projectId,
          name: sprint.name,
          startedAt: sprint.startedAt,
        },
        {
          correlationId: sprint.id,
          userId: sprint.updatedBy,
          organizationId: undefined,
        }
      );
    } catch (err) {
      logger.error({ err, sprintId: sprint.id }, 'Failed to publish sprint.started event');
    }
  }

  async publishSprintCompleted(
    sprint: SprintEntity,
    stats: { total: number; completed: number; totalPoints: number; completedPoints: number }
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE,
        'sprint.completed',
        sprint.id,
        'Sprint',
        'SPRINT_COMPLETED',
        {
          sprintId: sprint.id,
          projectId: sprint.projectId,
          name: sprint.name,
          completedAt: sprint.completedAt,
          stats,
        },
        {
          correlationId: sprint.id,
          userId: sprint.updatedBy,
          organizationId: undefined,
        }
      );
    } catch (err) {
      logger.error({ err, sprintId: sprint.id }, 'Failed to publish sprint.completed event');
    }
  }

  async publishItemAdded(sprintId: string, taskId: string, addedBy: string): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE,
        'sprint.item_added',
        sprintId,
        'Sprint',
        'SPRINT_ITEM_ADDED',
        { sprintId, taskId, addedBy },
        {
          correlationId: sprintId,
          userId: addedBy,
          organizationId: undefined,
        }
      );
    } catch (err) {
      logger.error({ err, sprintId, taskId }, 'Failed to publish sprint.item_added event');
    }
  }
}
