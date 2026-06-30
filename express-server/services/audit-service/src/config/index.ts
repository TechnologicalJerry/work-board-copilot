import { parseBaseConfig, mongoConfigSchema } from '@boardpilot/config';
import { z } from 'zod';

const auditServiceConfigSchema = mongoConfigSchema.extend({
  AUDIT_LOG_RETENTION_DAYS: z.coerce.number().default(90),
});

const baseConfig = parseBaseConfig();
const result = auditServiceConfigSchema.safeParse(process.env);

if (!result.success) {
  const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
  throw new Error(`Audit Service configuration validation failed:\n${errors.join('\n')}`);
}

export const config = {
  ...baseConfig,
  ...result.data,
};

export type Config = typeof config;
