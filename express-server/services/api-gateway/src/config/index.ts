import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const gatewayConfigSchema = z.object({
  // Base config fields
  NODE_ENV: z.enum(['development', 'test', 'staging', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']).default('info'),
  SERVICE_NAME: z.string().default('api-gateway'),

  JWT_ACCESS_SECRET: z.string().min(32, 'JWT_ACCESS_SECRET must be at least 32 characters'),
  JWT_REFRESH_SECRET: z.string().min(32, 'JWT_REFRESH_SECRET must be at least 32 characters'),
  JWT_ACCESS_EXPIRY: z.string().default('15m'),
  JWT_REFRESH_EXPIRY: z.string().default('7d'),

  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),

  RABBITMQ_URL: z.string().url().default('amqp://localhost:5672'),

  ALLOWED_ORIGINS: z.string().default('http://localhost:3000'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),

  ENCRYPTION_KEY: z.string().length(32, 'ENCRYPTION_KEY must be exactly 32 characters'),

  // Gateway-specific config
  PROXY_TIMEOUT: z.coerce.number().default(30000),
  CIRCUIT_BREAKER_THRESHOLD: z.coerce.number().default(5),
  CIRCUIT_BREAKER_TIMEOUT: z.coerce.number().default(60000),

  // Downstream service URLs
  IDENTITY_SERVICE_URL: z.string().url().default('http://localhost:3001'),
  USER_SERVICE_URL: z.string().url().default('http://localhost:3002'),
  ORGANIZATION_SERVICE_URL: z.string().url().default('http://localhost:3003'),
  WORKSPACE_SERVICE_URL: z.string().url().default('http://localhost:3004'),
  PROJECT_SERVICE_URL: z.string().url().default('http://localhost:3005'),
  TASK_SERVICE_URL: z.string().url().default('http://localhost:3006'),
  SPRINT_SERVICE_URL: z.string().url().default('http://localhost:3007'),
  BOARD_SERVICE_URL: z.string().url().default('http://localhost:3008'),
  COMMENT_SERVICE_URL: z.string().url().default('http://localhost:3009'),
  NOTIFICATION_SERVICE_URL: z.string().url().default('http://localhost:3010'),
  AUDIT_SERVICE_URL: z.string().url().default('http://localhost:3011'),
  BILLING_SERVICE_URL: z.string().url().default('http://localhost:3012'),
  ANALYTICS_SERVICE_URL: z.string().url().default('http://localhost:3013'),
  SEARCH_SERVICE_URL: z.string().url().default('http://localhost:3014'),
  FILE_SERVICE_URL: z.string().url().default('http://localhost:3015'),
  AI_SERVICE_URL: z.string().url().default('http://localhost:3016'),
  WEBHOOK_SERVICE_URL: z.string().url().default('http://localhost:3017'),
  INTEGRATION_SERVICE_URL: z.string().url().default('http://localhost:3018'),
  REPORT_SERVICE_URL: z.string().url().default('http://localhost:3019'),
  REALTIME_SERVICE_URL: z.string().url().default('http://localhost:3020'),
});

export type Config = z.infer<typeof gatewayConfigSchema>;

function loadConfig(): Config {
  const result = gatewayConfigSchema.safeParse(process.env);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`API Gateway configuration validation failed:\n${errors.join('\n')}`);
  }
  return result.data;
}

export const config: Config = loadConfig();
