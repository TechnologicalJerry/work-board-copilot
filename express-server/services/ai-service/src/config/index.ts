import { parseBaseConfig, mongoConfigSchema, openaiConfigSchema } from '@boardpilot/config';
import { z } from 'zod';

const aiServiceConfigSchema = mongoConfigSchema.merge(openaiConfigSchema).extend({
  AI_TOKEN_LIMIT_PER_HOUR: z.coerce.number().default(100000),
  AI_MAX_TOKENS_PER_REQUEST: z.coerce.number().default(4096),
  AI_SESSION_RETENTION_DAYS: z.coerce.number().default(90),
});

const baseConfig = parseBaseConfig();
const aiResult = aiServiceConfigSchema.safeParse(process.env);

if (!aiResult.success) {
  const errors = aiResult.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
  throw new Error(`AI Service configuration validation failed:\n${errors.join('\n')}`);
}

export const config = {
  ...baseConfig,
  ...aiResult.data,
};

export type Config = typeof config;
