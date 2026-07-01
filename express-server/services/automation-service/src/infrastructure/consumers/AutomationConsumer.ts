import { getRabbitMQConnection } from '@boardpilot/events';
import { AutomationService } from '../../services/AutomationService';
import logger from '@boardpilot/logger';

const TRIGGER_EVENTS = [
  'task.created',
  'task.updated',
  'task.status_changed',
  'task.assigned',
  'sprint.started',
  'sprint.completed',
];

export class AutomationConsumer {
  private automationService: AutomationService;

  constructor() {
    this.automationService = new AutomationService();
  }

  async start(): Promise<void> {
    const connection = getRabbitMQConnection();

    for (const event of TRIGGER_EVENTS) {
      await connection.consume(
        'automation.events',
        event,
        async (data: Record<string, unknown>) => {
          try {
            const projectId = data.projectId as string;
            const organizationId = data.organizationId as string;

            if (!projectId || !organizationId) {
              logger.warn({ event, data }, 'Missing projectId or organizationId in event data');
              return;
            }

            await this.automationService.processEvent(event, projectId, organizationId, data);
          } catch (err) {
            logger.error({ err, event }, 'Automation consumer processing error');
          }
        },
      );
      logger.info({ event }, 'Subscribed to automation trigger event');
    }
  }
}
