import { EventPublisher, RabbitMQConnection } from '@boardpilot/events';
import { EXCHANGE, EventMetadata } from '@boardpilot/types';

export class ProjectEventPublisher {
  private readonly publisher: EventPublisher;

  constructor(connection: RabbitMQConnection) {
    this.publisher = new EventPublisher(connection);
  }

  async publishProjectCreated(
    projectId: string,
    payload: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    await this.publisher.publishDomainEvent(
      EXCHANGE.PROJECT,
      'project.created',
      projectId,
      'Project',
      'project.created',
      payload,
      metadata
    );
  }

  async publishProjectArchived(
    projectId: string,
    payload: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    await this.publisher.publishDomainEvent(
      EXCHANGE.PROJECT,
      'project.archived',
      projectId,
      'Project',
      'project.archived',
      payload,
      metadata
    );
  }

  async publishMemberAdded(
    projectId: string,
    payload: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    await this.publisher.publishDomainEvent(
      EXCHANGE.PROJECT,
      'project.member_added',
      projectId,
      'Project',
      'project.member_added',
      payload,
      metadata
    );
  }

  async publishMemberRemoved(
    projectId: string,
    payload: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    await this.publisher.publishDomainEvent(
      EXCHANGE.PROJECT,
      'project.member_removed',
      projectId,
      'Project',
      'project.member_removed',
      payload,
      metadata
    );
  }

  async publishProjectUpdated(
    projectId: string,
    payload: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    await this.publisher.publishDomainEvent(
      EXCHANGE.PROJECT,
      'project.updated',
      projectId,
      'Project',
      'project.updated',
      payload,
      metadata
    );
  }

  async publishProjectDeleted(
    projectId: string,
    payload: Record<string, unknown>,
    metadata: EventMetadata
  ): Promise<void> {
    await this.publisher.publishDomainEvent(
      EXCHANGE.PROJECT,
      'project.deleted',
      projectId,
      'Project',
      'project.deleted',
      payload,
      metadata
    );
  }
}
