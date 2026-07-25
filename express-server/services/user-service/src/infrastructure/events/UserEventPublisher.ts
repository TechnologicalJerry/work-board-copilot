import { EventPublisher, getRabbitMQConnection } from '@boardpilot/events';
import { EXCHANGE } from '@boardpilot/types';
import logger from '@boardpilot/logger';

interface ProfileUpdatedPayload {
  userId: string;
  [key: string]: unknown;
}

interface OnboardingCompletedPayload {
  userId: string;
  [key: string]: unknown;
}

export class UserEventPublisher {
  private readonly publisher: EventPublisher;

  constructor() {
    const connection = getRabbitMQConnection();
    this.publisher = new EventPublisher(connection);
  }

  async publishProfileUpdated(
    userId: string,
    metadata: Record<string, unknown> = {}
  ): Promise<void> {
    try {
      const payload: ProfileUpdatedPayload = { userId, ...metadata };
      await this.publisher.publishDomainEvent<ProfileUpdatedPayload>(
        EXCHANGE.USER,
        'user.profile_updated',
        userId,
        'UserProfile',
        'user.profile_updated',
        payload,
        {
          correlationId: (metadata.correlationId as string) ?? userId,
          userId,
        }
      );
      logger.debug({ userId }, 'Published user.profile_updated event');
    } catch (error) {
      logger.error({ error, userId }, 'Failed to publish profile_updated event');
      // Non-fatal: do not rethrow — event failure should not break the HTTP response
    }
  }

  async publishOnboardingCompleted(
    userId: string,
    metadata: Record<string, unknown> = {}
  ): Promise<void> {
    try {
      const payload: OnboardingCompletedPayload = { userId, ...metadata };
      await this.publisher.publishDomainEvent<OnboardingCompletedPayload>(
        EXCHANGE.USER,
        'user.onboarding_completed',
        userId,
        'UserProfile',
        'user.onboarding_completed',
        payload,
        {
          correlationId: (metadata.correlationId as string) ?? userId,
          userId,
        }
      );
      logger.debug({ userId }, 'Published user.onboarding_completed event');
    } catch (error) {
      logger.error({ error, userId }, 'Failed to publish onboarding_completed event');
      // Non-fatal
    }
  }
}
