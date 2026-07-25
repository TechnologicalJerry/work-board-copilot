import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';
import { parseBaseConfig, postgresConfigSchema } from '@boardpilot/config';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const workspaceServiceSchema = postgresConfigSchema.merge(
  z.object({
    PORT: z.coerce.number().default(3004),
    SERVICE_NAME: z.string().default('workspace-service'),
    REDIS_HOST: z.string().default('localhost'),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_PASSWORD: z.string().optional(),
    REDIS_TTL: z.coerce.number().default(300),
  })
);

type WorkspaceServiceConfig = z.infer<typeof workspaceServiceSchema>;

function loadConfig(): WorkspaceServiceConfig & ReturnType<typeof parseBaseConfig> {
  const base = parseBaseConfig();
  const result = workspaceServiceSchema.safeParse({ ...base, ...process.env });
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`Workspace service configuration validation failed:\n${errors.join('\n')}`);
  }
  return { ...base, ...result.data };
}

export const config = loadConfig();
