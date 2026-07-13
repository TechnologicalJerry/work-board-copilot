import { EventPublisher, getRabbitMQConnection } from '@boardpilot/events';
import { EXCHANGE, ROUTING_KEY } from '@boardpilot/types';
import logger from '@boardpilot/logger';
import { Organization } from '../../domain/entities/Organization';

export class OrgEventPublisher {
  private readonly publisher: EventPublisher;

  constructor() {
    const connection = getRabbitMQConnection();
    this.publisher = new EventPublisher(connection);
  }

  async publishOrgCreated(org: Organization, creatorId: string): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.ORGANIZATION,
        ROUTING_KEY.ORG_CREATED,
        org.id,
        'Organization',
        ROUTING_KEY.ORG_CREATED,
        {
          orgId: org.id,
          name: org.name,
          slug: org.slug,
          ownerId: org.ownerId,
          plan: org.plan,
          creatorId,
        },
        { correlationId: org.id, userId: creatorId }
      );
      logger.debug({ orgId: org.id }, 'Published org.created event');
    } catch (error) {
      logger.error({ error, orgId: org.id }, 'Failed to publish org.created event');
    }
  }

  async publishMemberAdded(orgId: string, userId: string, role: string, invitedBy?: string): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.ORGANIZATION,
        ROUTING_KEY.MEMBER_INVITED,
        orgId,
        'OrgMember',
        ROUTING_KEY.MEMBER_INVITED,
        { orgId, userId, role, invitedBy: invitedBy ?? null },
        { correlationId: orgId, userId: invitedBy ?? userId }
      );
      logger.debug({ orgId, userId }, 'Published organization.member_invited event');
    } catch (error) {
      logger.error({ error, orgId, userId }, 'Failed to publish member_invited event');
    }
  }

  async publishMemberRemoved(orgId: string, userId: string, removedBy: string): Promise<void> {
    try {
      await this.publisher.publishDomainEvent(
        EXCHANGE.ORGANIZATION,
        'organization.member_removed',
        orgId,
        'OrgMember',
        'organization.member_removed',
        { orgId, userId, removedBy },
        { correlationId: orgId, userId: removedBy }
      );
      logger.debug({ orgId, userId }, 'Published organization.member_removed event');
    } catch (error) {
      logger.error({ error, orgId, userId }, 'Failed to publish member_removed event');
    }
  }
}
