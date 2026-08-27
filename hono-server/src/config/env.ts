import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)).default('3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  JWT_SECRET: z.string().default('super-secret-boardpilot-jwt-key'),
  API_PREFIX: z.string().default('/api/v1'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;
