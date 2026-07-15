import { parseBaseConfig, postgresConfigSchema } from '@boardpilot/config';
import { z } from 'zod';

const reportServiceConfigSchema = postgresConfigSchema.extend({
  TASK_SERVICE_URL: z.string().url().default('http://localhost:3002'),
  SPRINT_SERVICE_URL: z.string().url().default('http://localhost:3005'),
  PROJECT_SERVICE_URL: z.string().url().default('http://localhost:3003'),
  REPORT_CACHE_TTL_SECONDS: z.coerce.number().default(300),
});

const baseConfig = parseBaseConfig();
const result = reportServiceConfigSchema.safeParse(process.env);

if (!result.success) {
  const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
  throw new Error(`Report Service configuration validation failed:\n${errors.join('\n')}`);
}

export const config = {
  ...baseConfig,
  ...result.data,
};

export type Config = typeof config;
