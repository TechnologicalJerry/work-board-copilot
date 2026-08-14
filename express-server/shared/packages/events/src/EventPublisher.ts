import { v4 as uuidv4 } from 'uuid';
import { DomainEvent, IntegrationEvent, EventMetadata } from '@boardpilot/types';
import { RabbitMQConnection } from './RabbitMQConnection';
import logger from '@boardpilot/logger';

export class EventPublisher {
  constructor(private readonly connection: RabbitMQConnection) {}

  async publishDomainEvent<T>(
    exchange: string,
    routingKey: string,
    aggregateId: string,
    aggregateType: string,
    eventType: string,
    payload: T,
    metadata: EventMetadata
  ): Promise<void> {
    const event: DomainEvent<T> = {
      eventId: uuidv4(),
      eventType,
      aggregateId,
      aggregateType,
      payload,
      metadata,
      occurredAt: new Date().toISOString(),
      version: 1,
    };

    await this.publish(exchange, routingKey, event);
  }

  async publishIntegrationEvent<T>(
    exchange: string,
    routingKey: string,
    source: string,
    eventType: string,
    payload: T,
    metadata: EventMetadata
  ): Promise<void> {
    const event: IntegrationEvent<T> = {
      eventId: uuidv4(),
      eventType,
      source,
      payload,
      metadata,
      publishedAt: new Date().toISOString(),
      version: 1,
    };

    await this.publish(exchange, routingKey, event);
  }

  private async publish(exchange: string, routingKey: string, event: unknown): Promise<void> {
    const channel = this.connection.getChannel();
    const content = Buffer.from(JSON.stringify(event));

    try {
      await channel.assertExchange(exchange, 'topic', { durable: true });

      await new Promise<void>((resolve, reject) => {
        channel.publish(exchange, routingKey, content, {
          persistent: true,
          contentType: 'application/json',
          messageId: (event as { eventId: string }).eventId,
          timestamp: Date.now(),
        }, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });

      logger.debug({ exchange, routingKey, eventId: (event as { eventId: string }).eventId }, 'Event published');
    } catch (error) {
      logger.error({ error, exchange, routingKey }, 'Failed to publish event');
      throw error;
    }
  }
}
