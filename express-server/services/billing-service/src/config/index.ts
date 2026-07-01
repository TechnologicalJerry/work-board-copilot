import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3020),
  SERVICE_NAME: z.string().default('billing-service'),
  DATABASE_URL: z.string().min(1),
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),
  REDIS_PASSWORD: z.string().optional(),
  RABBITMQ_URL: z.string().default('amqp://localhost:5672'),
  ALLOWED_ORIGINS: z.string().default('http://localhost:3000'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),
  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_'),
  STRIPE_PUBLISHABLE_KEY: z.string().startsWith('pk_'),
});

export type Config = z.infer<typeof schema>;

let _config: Config;

export function getConfig(): Config {
  if (!_config) {
    const result = schema.safeParse(process.env);
    if (!result.success) {
      const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
      throw new Error(`Config validation failed:\n${errors.join('\n')}`);
    }
    _config = result.data;
  }
  return _config;
}
