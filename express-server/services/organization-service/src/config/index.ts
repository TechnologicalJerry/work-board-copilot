import dotenv from 'dotenv';
dotenv.config();

import { z } from 'zod';

const configSchema = z.object({
  PORT: z.coerce.number().default(3003),
  SERVICE_NAME: z.string().default('organization-service'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  REDIS_URL: z.string().min(1, 'REDIS_URL is required'),
  RABBITMQ_URL: z.string().min(1, 'RABBITMQ_URL is required'),
  JWT_ACCESS_SECRET: z.string().min(1, 'JWT_ACCESS_SECRET is required'),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']).default('info'),
  CORS_ORIGINS: z.string().default('http://localhost:3000'),
  FRONTEND_URL: z.string().url().default('http://localhost:3000'),
});

function loadConfig() {
  const result = configSchema.safeParse(process.env);

  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
    throw new Error(`Configuration validation failed: ${errors}`);
  }

  return result.data;
}

export const config = loadConfig();
export type Config = typeof config;
