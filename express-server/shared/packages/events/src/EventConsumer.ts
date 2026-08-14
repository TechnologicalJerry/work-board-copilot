import { ConsumeMessage } from 'amqplib';
import { RabbitMQConnection } from './RabbitMQConnection';
import logger from '@boardpilot/logger';

export interface ConsumeOptions {
  exchange: string;
  exchangeType?: string;
  queue: string;
  routingKeys: string[];
  prefetch?: number;
  deadLetterExchange?: string;
}

export type MessageHandler<T = unknown> = (
  payload: T,
  msg: ConsumeMessage
) => Promise<void>;

export class EventConsumer {
  constructor(private readonly connection: RabbitMQConnection) {}

  async consume<T>(
    options: ConsumeOptions,
    handler: MessageHandler<T>
  ): Promise<void> {
    const channel = await this.connection.createChannel();
    const {
      exchange,
      exchangeType = 'topic',
      queue,
      routingKeys,
      prefetch = 10,
      deadLetterExchange,
    } = options;

    await channel.assertExchange(exchange, exchangeType, { durable: true });

    const queueArgs: Record<string, unknown> = {};
    if (deadLetterExchange) {
      await channel.assertExchange(deadLetterExchange, 'fanout', { durable: true });
      queueArgs['x-dead-letter-exchange'] = deadLetterExchange;
    }

    await channel.assertQueue(queue, { durable: true, arguments: queueArgs });
    await channel.prefetch(prefetch);

    for (const routingKey of routingKeys) {
      await channel.bindQueue(queue, exchange, routingKey);
    }

    await channel.consume(queue, async (msg) => {
      if (!msg) return;

      try {
        const payload = JSON.parse(msg.content.toString()) as T;
        await handler(payload, msg);
        channel.ack(msg);
      } catch (error) {
        logger.error({ error, queue }, 'Error processing message');

        const redelivered = msg.fields.redelivered;
        if (redelivered) {
          channel.nack(msg, false, false);
        } else {
          channel.nack(msg, false, true);
        }
      }
    });

    logger.info({ queue, routingKeys }, 'Started consuming events');
  }
}
