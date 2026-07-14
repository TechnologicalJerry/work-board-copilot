import dotenv from 'dotenv';

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function optionalEnv(name: string, defaultValue: string): string {
  return process.env[name] ?? defaultValue;
}

export interface Config {
  nodeEnv: string;
  port: number;
  serviceName: string;
  databaseUrl: string;
  redisUrl: string;
  rabbitmqUrl: string;
  jwtAccessSecret: string;
  logLevel: string;
}

function loadConfig(): Config {
  return {
    nodeEnv: optionalEnv('NODE_ENV', 'development'),
    port: parseInt(optionalEnv('PORT', '3006'), 10),
    serviceName: optionalEnv('SERVICE_NAME', 'project-service'),
    databaseUrl: requireEnv('DATABASE_URL'),
    redisUrl: requireEnv('REDIS_URL'),
    rabbitmqUrl: requireEnv('RABBITMQ_URL'),
    jwtAccessSecret: requireEnv('JWT_ACCESS_SECRET'),
    logLevel: optionalEnv('LOG_LEVEL', 'info'),
  };
}

export const config = loadConfig();
