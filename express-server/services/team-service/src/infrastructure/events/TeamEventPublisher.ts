import { EventPublisher, getRabbitMQConnection } from '@boardpilot/events';
import { EXCHANGE } from '@boardpilot/types';
import logger from '@boardpilot/logger';

export class TeamEventPublisher {
  private publisher: EventPublisher;

  constructor() {
    const connection = getRabbitMQConnection();
    this.publisher = new EventPublisher(connection);
  }

  async publishTeamCreated(
    teamId: string,
    payload: { teamId: string; organizationId: string; name: string; createdBy: string },
    metadata: { correlationId: string; userId: string; organizationId?: string }
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.PROJECT,
        'team.created',
        teamId,
        'Team',
        'TEAM_CREATED',
        payload,
        metadata
      );
    } catch (err) {
      logger.error({ err, teamId }, 'Failed to publish team.created event');
    }
  }

  async publishTeamDeleted(
    teamId: string,
    payload: { teamId: string; organizationId: string; deletedBy: string },
    metadata: { correlationId: string; userId: string; organizationId?: string }
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.PROJECT,
        'team.deleted',
        teamId,
        'Team',
        'TEAM_DELETED',
        payload,
        metadata
      );
    } catch (err) {
      logger.error({ err, teamId }, 'Failed to publish team.deleted event');
    }
  }

  async publishMemberAdded(
    teamId: string,
    payload: { teamId: string; userId: string; role: string; addedBy: string },
    metadata: { correlationId: string; userId: string; organizationId?: string }
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.PROJECT,
        'team.member_added',
        teamId,
        'Team',
        'TEAM_MEMBER_ADDED',
        payload,
        metadata
      );
    } catch (err) {
      logger.error({ err, teamId }, 'Failed to publish team.member_added event');
    }
  }

  async publishMemberRemoved(
    teamId: string,
    payload: { teamId: string; userId: string; removedBy: string },
    metadata: { correlationId: string; userId: string; organizationId?: string }
  ): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.PROJECT,
        'team.member_removed',
        teamId,
        'Team',
        'TEAM_MEMBER_REMOVED',
        payload,
        metadata
      );
    } catch (err) {
      logger.error({ err, teamId }, 'Failed to publish team.member_removed event');
    }
  }
}
