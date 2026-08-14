import pino, { Logger, LoggerOptions } from 'pino';

export interface LogContext {
  requestId?: string;
  correlationId?: string;
  userId?: string;
  organizationId?: string;
  service?: string;
  [key: string]: unknown;
}

const isDevelopment = process.env.NODE_ENV === 'development';

const baseOptions: LoggerOptions = {
  level: process.env.LOG_LEVEL ?? 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level(label) {
      return { level: label };
    },
    bindings(bindings) {
      return {
        pid: bindings.pid,
        host: bindings.hostname,
        service: process.env.SERVICE_NAME ?? 'boardpilot',
      };
    },
  },
  redact: {
    paths: ['password', 'confirmPassword', 'accessToken', 'refreshToken', 'creditCard', 'cvv'],
    censor: '[REDACTED]',
  },
};

const developmentOptions: LoggerOptions = {
  ...baseOptions,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  },
};

export const logger: Logger = isDevelopment
  ? pino(developmentOptions)
  : pino(baseOptions);

export function createLogger(context: LogContext): Logger {
  return logger.child(context);
}

export function createRequestLogger(
  requestId: string,
  correlationId: string,
  context?: Partial<LogContext>
): Logger {
  return logger.child({ requestId, correlationId, ...context });
}

export { Logger };
export default logger;
