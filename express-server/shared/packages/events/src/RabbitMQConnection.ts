import amqp, { ChannelModel, Channel, ConfirmChannel } from 'amqplib';
import logger from '@boardpilot/logger';

export class RabbitMQConnection {
  private connection: ChannelModel | null = null;
  private channel: ConfirmChannel | null = null;
  private readonly url: string;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 10;
  private readonly reconnectDelay = 5000;
  private readonly assertedExchanges = new Set<string>();

  constructor(url: string) {
    this.url = url;
  }

  async connect(): Promise<void> {
    try {
      this.connection = await amqp.connect(this.url);
      this.channel = await this.connection.createConfirmChannel();
      this.reconnectAttempts = 0;

      this.connection.on('error', (err) => {
        logger.error({ err }, 'RabbitMQ connection error');
        void this.reconnect();
      });

      this.connection.on('close', () => {
        logger.warn('RabbitMQ connection closed');
        void this.reconnect();
      });

      logger.info('Connected to RabbitMQ');
    } catch (error) {
      logger.error({ error }, 'Failed to connect to RabbitMQ');
      throw error;
    }
  }

  private async reconnect(): Promise<void> {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      logger.error('Max RabbitMQ reconnect attempts reached');
      process.exit(1);
    }

    this.reconnectAttempts++;
    const delay = this.reconnectDelay * this.reconnectAttempts;
    logger.info({ attempt: this.reconnectAttempts, delay }, 'Reconnecting to RabbitMQ');

    await new Promise((resolve) => setTimeout(resolve, delay));
    await this.connect();
  }

  getChannel(): ConfirmChannel {
    if (!this.channel) {
      throw new Error('RabbitMQ channel not initialized. Call connect() first.');
    }
    return this.channel;
  }

  async createChannel(): Promise<Channel> {
    if (!this.connection) {
      throw new Error('RabbitMQ not connected');
    }
    return this.connection.createChannel();
  }

  async close(): Promise<void> {
    await this.channel?.close();
    await this.connection?.close();
    this.channel = null;
    this.connection = null;
  }

  isConnected(): boolean {
    return this.connection !== null && this.channel !== null;
  }

  private async ensureExchange(exchange: string): Promise<void> {
    if (this.assertedExchanges.has(exchange)) return;
    await this.getChannel().assertExchange(exchange, 'topic', { durable: true });
    this.assertedExchanges.add(exchange);
  }

  async publish(
    exchange: string,
    routingKey: string,
    message: Record<string, unknown>,
  ): Promise<void> {
    await this.ensureExchange(exchange);
    this.getChannel().publish(exchange, routingKey, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
  }

  async consume(
    queueName: string,
    routingKey: string,
    handler: (data: Record<string, unknown>) => Promise<void>,
    exchange = 'events',
  ): Promise<void> {
    await this.ensureExchange(exchange);
    const channel = this.getChannel();
    const { queue } = await channel.assertQueue(queueName, { durable: true });
    await channel.bindQueue(queue, exchange, routingKey);
    await channel.consume(queue, (msg) => {
      if (!msg) return;
      void (async () => {
        try {
          const data = JSON.parse(msg.content.toString()) as Record<string, unknown>;
          await handler(data);
          channel.ack(msg);
        } catch (err) {
          logger.error({ err }, 'Error processing RabbitMQ message');
          channel.nack(msg, false, false);
        }
      })();
    });
  }
}

let instance: RabbitMQConnection | null = null;

export function getRabbitMQConnection(): RabbitMQConnection {
  if (!instance) {
    const url = process.env.RABBITMQ_URL;
    if (!url) throw new Error('RABBITMQ_URL environment variable not set');
    instance = new RabbitMQConnection(url);
  }
  return instance;
}
