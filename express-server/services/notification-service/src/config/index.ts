import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';
import { parseBaseConfig, mongoConfigSchema, postgresConfigSchema, smtpConfigSchema } from '@boardpilot/config';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const notificationConfigSchema = z.object({
  PORT: z.coerce.number().default(3010),
  SERVICE_NAME: z.string().default('notification-service'),

  SLACK_BOT_TOKEN: z.string().optional(),

  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),

  WEBHOOK_SIGNATURE_TTL_SECONDS: z.coerce.number().default(300),
  NOTIFICATION_BATCH_SIZE: z.coerce.number().default(50),
  NOTIFICATION_TTL_DAYS: z.coerce.number().default(90),

  MAX_WEBHOOK_RETRIES: z.coerce.number().default(3),
  WEBHOOK_RETRY_DELAY_MS: z.coerce.number().default(5000),
}).merge(mongoConfigSchema).merge(postgresConfigSchema).merge(smtpConfigSchema);

type NotificationConfig = z.infer<typeof notificationConfigSchema>;

function loadConfig(): NotificationConfig {
  const base = parseBaseConfig();
  const result = notificationConfigSchema.safeParse({ ...base, ...process.env });
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Notification service configuration validation failed:\n${errors.join('\n')}`);
  }
  return result.data;
}

export const config: NotificationConfig = loadConfig();
