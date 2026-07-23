import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3016),
  SERVICE_NAME: z.string().default('time-tracking-service'),
  DATABASE_URL: z.string().min(1),
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),
  RABBITMQ_URL: z.string().default('amqp://localhost:5672'),
  ALLOWED_ORIGINS: z.string().default('http://localhost:3000'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),
});

export type Config = z.infer<typeof schema>;

let _config: Config;

export function getConfig(): Config {
  if (!_config) {
    const result = schema.safeParse(process.env);
    if (!result.success) {
      throw new Error(`Config error: ${result.error.message}`);
    }
    _config = result.data;
  }
  return _config;
}
