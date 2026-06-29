import http from 'http';
import { createApp } from './app';
import { config } from './config';
import { logger } from '@boardpilot/logger';

const app = createApp();
const server = http.createServer(app);

/**
 * Graceful shutdown handler.
 *
 * On SIGTERM or SIGINT:
 *  1. Stop accepting new connections.
 *  2. Wait for in-flight requests to complete (up to 10 s).
 *  3. Exit cleanly.
 */
function shutdown(signal: string): void {
  logger.info({ signal }, 'Shutdown signal received — starting graceful shutdown');

  server.close((err?: Error) => {
    if (err) {
      logger.error({ err }, 'Error while closing HTTP server');
      process.exit(1);
    }

    logger.info('HTTP server closed — all connections drained');
    process.exit(0);
  });

  // Force-exit if drain takes too long
  setTimeout(() => {
    logger.warn('Graceful shutdown timed out — forcing exit');
    process.exit(1);
  }, 10_000).unref();
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason: unknown) => {
  logger.error({ reason }, 'Unhandled promise rejection');
  // Do not exit — let the process continue; log and alert monitoring
});

// Handle uncaught exceptions (these are fatal)
process.on('uncaughtException', (err: Error) => {
  logger.fatal({ err }, 'Uncaught exception — shutting down');
  process.exit(1);
});

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Start listening
server.listen(config.PORT, () => {
  logger.info(
    {
      port: config.PORT,
      env: config.NODE_ENV,
      service: config.SERVICE_NAME,
      pid: process.pid,
      nodeVersion: process.version,
    },
    'BoardPilot API Gateway started'
  );
});

export { server };
