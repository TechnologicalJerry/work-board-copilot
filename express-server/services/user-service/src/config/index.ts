import dotenv from 'dotenv';
import path from 'path';
import { z } from 'zod';
import { parseBaseConfig, postgresConfigSchema } from '@boardpilot/config';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const userServiceConfigSchema = z
  .object({
    PORT: z.coerce.number().default(3002),
    SERVICE_NAME: z.string().default('user-service'),
  })
  .merge(postgresConfigSchema);

type UserServiceConfig = z.infer<typeof userServiceConfigSchema> & ReturnType<typeof parseBaseConfig>;

function loadConfig(): UserServiceConfig {
  const base = parseBaseConfig();

  const result = userServiceConfigSchema.safeParse({ ...base, ...process.env });
  if (!result.success) {
    const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
    throw new Error(`User service configuration validation failed:\n${errors.join('\n')}`);
  }

  return { ...base, ...result.data };
}

export const config: UserServiceConfig = loadConfig();
