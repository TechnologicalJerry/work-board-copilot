import axios from 'axios';
import { getRabbitMQConnection } from '@boardpilot/events';
import logger from '@boardpilot/logger';
import type { IAction } from '../models/AutomationRule';
import { getConfig } from '../config';

function interpolate(template: string, context: Record<string, unknown>): string {
  return template.replace(/\{\{(.+?)\}\}/g, (_, path: string) => {
    const value = path.trim().split('.').reduce((acc: unknown, key) => {
      if (acc === null || acc === undefined) return '';
      return (acc as Record<string, unknown>)[key];
    }, context as unknown);
    return value !== undefined && value !== null ? String(value) : '';
  });
}

export async function executeActions(
  actions: IAction[],
  context: Record<string, unknown>,
): Promise<{ executed: number; errors: string[] }> {
  const config = getConfig();
  const connection = getRabbitMQConnection();
  let executed = 0;
  const errors: string[] = [];

  for (const action of actions) {
    try {
      switch (action.type) {
        case 'set_status': {
          const taskId = action.config.taskId as string ?? (context.task as Record<string, unknown>)?.id as string;
          const status = action.config.status as string;
          await connection.publish('events', 'task.updated', { taskId, status, source: 'automation' });
          break;
        }

        case 'assign_user': {
          const taskId = action.config.taskId as string ?? (context.task as Record<string, unknown>)?.id as string;
          const userId = interpolate(action.config.userId as string ?? '', context);
          await connection.publish('events', 'task.assigned', { taskId, assigneeId: userId, source: 'automation' });
          break;
        }

        case 'add_label': {
          const taskId = action.config.taskId as string ?? (context.task as Record<string, unknown>)?.id as string;
          const label = action.config.label as string;
          await connection.publish('events', 'task.updated', { taskId, addLabel: label, source: 'automation' });
          break;
        }

        case 'send_notification': {
          const message = interpolate(action.config.message as string ?? '', context);
          const recipientId = action.config.recipientId as string;
          await connection.publish('notifications', 'notification.send', {
            recipientId,
            message,
            type: 'AUTOMATION',
            metadata: context,
          });
          break;
        }

        case 'call_webhook': {
          const url = action.config.url as string;
          const method = (action.config.method as string ?? 'POST').toUpperCase();
          const payload = action.config.payload ?? context;

          let attempt = 0;
          let lastErr: Error | null = null;
          while (attempt < 3) {
            try {
              await axios.request({
                url,
                method,
                data: payload,
                timeout: config.WEBHOOK_TIMEOUT_MS,
                headers: { 'Content-Type': 'application/json', 'X-BoardPilot-Automation': '1' },
              });
              lastErr = null;
              break;
            } catch (err) {
              lastErr = err as Error;
              attempt++;
              if (attempt < 3) await new Promise((r) => setTimeout(r, 1000 * Math.pow(2, attempt)));
            }
          }
          if (lastErr) throw lastErr;
          break;
        }

        case 'post_comment': {
          const entityId = action.config.entityId as string ?? (context.task as Record<string, unknown>)?.id as string;
          const content = interpolate(action.config.content as string ?? '', context);
          await connection.publish('events', 'comment.create', {
            entityId,
            entityType: 'task',
            content,
            authorId: 'automation-bot',
          });
          break;
        }

        default:
          logger.warn({ action }, 'Unknown action type — skipping');
          continue;
      }
      executed++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      logger.error({ err, action }, 'Action execution failed');
      errors.push(`${action.type}: ${msg}`);
    }
  }

  return { executed, errors };
}
