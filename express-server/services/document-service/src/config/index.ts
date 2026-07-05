import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';
import { parseBaseConfig, mongoConfigSchema } from '@boardpilot/config';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const documentServiceSchema = mongoConfigSchema.merge(
  z.object({
    PORT: z.coerce.number().default(3012),
    SERVICE_NAME: z.string().default('document-service'),
    REDIS_HOST: z.string().default('localhost'),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional(),
    REDIS_TTL: z.coerce.number().default(300),
  })
);

type DocumentServiceConfig = z.infer<typeof documentServiceSchema>;

function loadConfig(): DocumentServiceConfig & ReturnType<typeof parseBaseConfig> {
  const base = parseBaseConfig();
  const result = documentServiceSchema.safeParse({ ...base, ...process.env });
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Document service configuration validation failed:\n${errors.join('\n')}`);
  }
  return { ...base, ...result.data };
}

export const config = loadConfig();
