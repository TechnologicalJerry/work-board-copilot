import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';
import { parseBaseConfig, postgresConfigSchema } from '@boardpilot/config';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const boardServiceSchema = postgresConfigSchema.merge(
  z.object({
    PORT: z.coerce.number().default(3008),
    SERVICE_NAME: z.string().default('board-service'),
    MONGODB_URI: z.string().optional(),
    REDIS_HOST: z.string().default('localhost'),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional(),
    REDIS_TTL: z.coerce.number().default(300),
  })
);

type BoardServiceConfig = z.infer<typeof boardServiceSchema>;

function loadConfig(): BoardServiceConfig & ReturnType<typeof parseBaseConfig> {
  const base = parseBaseConfig();
  const result = boardServiceSchema.safeParse({ ...base, ...process.env });
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Board service configuration validation failed:\n${errors.join('\n')}`);
  }
  return { ...base, ...result.data };
}

export const config = loadConfig();
