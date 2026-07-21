import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().default('3005').transform(Number),
  SERVICE_NAME: z.string().default('team-service'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  REDIS_URL: z.string().min(1, 'REDIS_URL is required'),
  REDIS_TTL_DEFAULT: z.string().default('300').transform(Number),
  RABBITMQ_URL: z.string().min(1, 'RABBITMQ_URL is required'),
  JWT_ACCESS_SECRET: z.string().min(1, 'JWT_ACCESS_SECRET is required'),
  CORS_ORIGINS: z.string().default('http://localhost:3000'),
});

function loadConfig() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Configuration validation failed:\n${errors}`);
  }
  return result.data;
}

export const config = loadConfig();

export type Config = typeof config;
