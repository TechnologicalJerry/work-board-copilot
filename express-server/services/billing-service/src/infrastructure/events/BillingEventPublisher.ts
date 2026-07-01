import { getRabbitMQConnection } from '@boardpilot/events';
import logger from '@boardpilot/logger';

export class BillingEventPublisher {
  async publishSubscriptionUpdated(
    organizationId: string,
    plan: string,
    status: string,
    limits: Record<string, unknown>,
  ): Promise<void> {
    try {
      const connection = getRabbitMQConnection();
      await connection.publish('events', 'subscription.updated', {
        organizationId,
        plan,
        status,
        limits,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      logger.error({ err, organizationId }, 'Failed to publish subscription.updated event');
    }
  }

  async publishPaymentFailed(organizationId: string, invoiceId: string, amount: number): Promise<void> {
    try {
      const connection = getRabbitMQConnection();
      await connection.publish('events', 'billing.payment_failed', {
        organizationId,
        invoiceId,
        amount,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      logger.error({ err, organizationId }, 'Failed to publish billing.payment_failed event');
    }
  }
}
