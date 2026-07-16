import amqplib, { ChannelModel, Channel } from 'amqplib';
import { config } from '../config';
import logger from '@boardpilot/logger';
import { indexTask, updateTask, deleteTask } from '../services/SearchService';

let connection: ChannelModel | null = null;
let channel: Channel | null = null;

const EXCHANGE = 'task.exchange';
const QUEUE = 'search.index.queue';
const ROUTING_KEYS = ['task.created', 'task.updated', 'task.deleted'];

export async function startIndexConsumer(): Promise<void> {
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      connection = await amqplib.connect(config.RABBITMQ_URL);
      channel = await connection.createChannel();

      await channel.assertExchange(EXCHANGE, 'topic', { durable: true });
      const q = await channel.assertQueue(QUEUE, { durable: true });

      for (const key of ROUTING_KEYS) {
        await channel.bindQueue(q.queue, EXCHANGE, key);
      }

      channel.prefetch(10);
      channel.consume(q.queue, async (msg) => {
        if (!msg) return;

        try {
          const routingKey = msg.fields.routingKey;
          const payload = JSON.parse(msg.content.toString());

          logger.debug({ routingKey, id: payload.id }, 'Received index event');

          if (routingKey === 'task.created') {
            await indexTask(payload);
          } else if (routingKey === 'task.updated') {
            await updateTask(payload.id, payload);
          } else if (routingKey === 'task.deleted') {
            await deleteTask(payload.id);
          }

          channel!.ack(msg);
        } catch (err) {
          logger.error({ err }, 'Failed to process index event');
          channel!.nack(msg, false, false); // dead-letter
        }
      });

      connection.on('error', (err) => logger.error({ err }, 'RabbitMQ connection error'));
      connection.on('close', () => logger.warn('RabbitMQ connection closed'));

      logger.info('Index consumer started');
      return;
    } catch (err) {
      attempts++;
      if (attempts >= maxAttempts) {
        logger.error({ err }, 'Failed to start index consumer after max retries');
        throw err;
      }
      logger.warn({ attempt: attempts }, 'Index consumer connection failed, retrying...');
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

export async function stopIndexConsumer(): Promise<void> {
  try {
    if (channel) await channel.close();
    if (connection) await connection.close();
  } catch (err) {
    logger.error({ err }, 'Error stopping index consumer');
  }
}
