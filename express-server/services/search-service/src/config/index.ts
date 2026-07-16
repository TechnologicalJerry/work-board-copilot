import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';
import { parseBaseConfig, mongoConfigSchema, elasticsearchConfigSchema } from '@boardpilot/config';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const searchServiceSchema = mongoConfigSchema.merge(elasticsearchConfigSchema).merge(
  z.object({
    PORT: z.coerce.number().default(3013),
    SERVICE_NAME: z.string().default('search-service'),
    REDIS_HOST: z.string().default('localhost'),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional(),
    REDIS_TTL: z.coerce.number().default(300),
  })
);

type SearchServiceConfig = z.infer<typeof searchServiceSchema>;

function loadConfig(): SearchServiceConfig & ReturnType<typeof parseBaseConfig> {
  const base = parseBaseConfig();
  const result = searchServiceSchema.safeParse({ ...base, ...process.env });
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Search service configuration validation failed:\n${errors.join('\n')}`);
  }
  return { ...base, ...result.data };
}

export const config = loadConfig();
