import { RabbitMQConnection } from './RabbitMQConnection';
import { EventConsumer, ConsumeOptions } from './EventConsumer';

export abstract class BaseConsumer {
  protected readonly consumer: EventConsumer;

  constructor(protected readonly connection: RabbitMQConnection) {
    this.consumer = new EventConsumer(connection);
  }

  abstract getConsumeOptions(): ConsumeOptions;
  abstract handle(payload: unknown): Promise<void>;

  async start(): Promise<void> {
    await this.consumer.consume(this.getConsumeOptions(), this.handle.bind(this));
  }
}
