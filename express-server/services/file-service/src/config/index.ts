import { parseBaseConfig, postgresConfigSchema, awsConfigSchema } from '@boardpilot/config';
import { z } from 'zod';

const fileServiceConfigSchema = postgresConfigSchema.merge(awsConfigSchema).extend({
  MAX_FILE_SIZE_MB: z.coerce.number().default(100),
});

const baseConfig = parseBaseConfig();
const result = fileServiceConfigSchema.safeParse(process.env);

if (!result.success) {
  const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
  throw new Error(`File Service configuration validation failed:\n${errors.join('\n')}`);
}

export const config = {
  ...baseConfig,
  ...result.data,
  MAX_FILE_SIZE_BYTES: result.data.MAX_FILE_SIZE_MB * 1024 * 1024,
};

export type Config = typeof config;
