import amqplib, { Connection, Channel } from 'amqplib';
import { config } from '../config';
import logger from '@boardpilot/logger';
import { AuditLog } from '../models/AuditLog';

let connection: Connection | null = null;
let channel: Channel | null = null;

const EXCHANGE = 'audit.exchange';
const QUEUE = 'audit.log.queue';
const ROUTING_KEY = 'audit.log';

export async function startAuditConsumer(): Promise<void> {
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      connection = await amqplib.connect(config.RABBITMQ_URL);
      channel = await connection.createChannel();

      await channel.assertExchange(EXCHANGE, 'topic', { durable: true });
      const q = await channel.assertQueue(QUEUE, { durable: true });
      await channel.bindQueue(q.queue, EXCHANGE, ROUTING_KEY);
      // Also listen for wildcard
      await channel.bindQueue(q.queue, EXCHANGE, 'audit.#');

      channel.prefetch(20);
      channel.consume(q.queue, async (msg) => {
        if (!msg) return;

        try {
          const payload = JSON.parse(msg.content.toString());
          logger.debug({ action: payload.action, entityType: payload.entityType }, 'Audit event received');

          await AuditLog.create({
            organizationId: payload.organizationId,
            workspaceId: payload.workspaceId,
            projectId: payload.projectId,
            userId: payload.userId,
            userEmail: payload.userEmail,
            userRole: payload.userRole,
            action: payload.action,
            entityId: payload.entityId,
            entityType: payload.entityType,
            entityName: payload.entityName,
            changes: payload.changes ?? [],
            ip: payload.ip,
            userAgent: payload.userAgent,
            requestId: payload.requestId,
            correlationId: payload.correlationId,
            severity: payload.severity ?? 'low',
            category: payload.category ?? 'data',
            metadata: payload.metadata,
          });

          channel!.ack(msg);
        } catch (err) {
          logger.error({ err }, 'Failed to process audit event');
          channel!.nack(msg, false, false); // dead-letter, don't requeue
        }
      });

      connection.on('error', (err) => logger.error({ err }, 'RabbitMQ connection error'));
      connection.on('close', () => logger.warn('RabbitMQ connection closed'));

      logger.info('Audit event consumer started');
      return;
    } catch (err) {
      attempts++;
      if (attempts >= maxAttempts) {
        logger.error({ err }, 'Failed to start audit consumer after max retries');
        throw err;
      }
      logger.warn({ attempt: attempts }, 'Audit consumer connection failed, retrying in 5s...');
      await new Promise((r) => setTimeout(r, 5000));
    }
  }
}

export async function stopAuditConsumer(): Promise<void> {
  try {
    if (channel) await channel.close();
    if (connection) await connection.close();
  } catch (err) {
    logger.error({ err }, 'Error stopping audit consumer');
  }
}
