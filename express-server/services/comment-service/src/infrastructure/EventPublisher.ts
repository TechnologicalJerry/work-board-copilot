import amqplib, { ChannelModel, Channel } from 'amqplib';
import { config } from '../config';
import logger from '@boardpilot/logger';

let connection: ChannelModel | null = null;
let channel: Channel | null = null;

const NOTIFICATION_EXCHANGE = config.RABBITMQ_NOTIFICATION_EXCHANGE;

export async function connectRabbitMQ(): Promise<void> {
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      connection = await amqplib.connect(config.RABBITMQ_URL);
      channel = await connection.createChannel();
      await channel.assertExchange(NOTIFICATION_EXCHANGE, 'topic', { durable: true });

      connection.on('error', (err) => logger.error({ err }, 'RabbitMQ connection error'));
      connection.on('close', () => logger.warn('RabbitMQ connection closed'));

      logger.info('Connected to RabbitMQ');
      return;
    } catch (err) {
      attempts++;
      if (attempts >= maxAttempts) {
        logger.error({ err }, 'Failed to connect to RabbitMQ after max retries');
        throw err;
      }
      logger.warn({ attempt: attempts }, 'RabbitMQ connection failed, retrying in 5s...');
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

export async function disconnectRabbitMQ(): Promise<void> {
  try {
    if (channel) await channel.close();
    if (connection) await connection.close();
  } catch (err) {
    logger.error({ err }, 'Error closing RabbitMQ connection');
  }
}

export async function publishEvent(
  routingKey: string,
  payload: Record<string, unknown>
): Promise<void> {
  if (!channel) {
    logger.warn({ routingKey }, 'RabbitMQ channel not ready, skipping event publish');
    return;
  }

  try {
    const content = Buffer.from(JSON.stringify(payload));
    channel.publish(NOTIFICATION_EXCHANGE, routingKey, content, {
      persistent: true,
      contentType: 'application/json',
      timestamp: Date.now(),
    });
    logger.debug({ routingKey }, 'Event published');
  } catch (err) {
    logger.error({ err, routingKey }, 'Failed to publish event');
  }
}
