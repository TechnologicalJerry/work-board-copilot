import { buildApp } from './app';
import { env } from './config/env';
import { connectDb, disconnectDb } from './db/prisma';

async function start() {
  const app = buildApp();

  try {
    await connectDb();
    app.log.info('Connected to Database successfully');

    await app.listen({ port: env.PORT, host: env.HOST });
    app.log.info(`🚀 Fastify Auth Server running on http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    app.log.error(err, 'Failed to start Fastify Auth Server');
    process.exit(1);
  }

  // Graceful Shutdown
  const shutdown = async (signal: string) => {
    app.log.info(`Received ${signal}. Shutting down gracefully...`);
    try {
      await app.close();
      await disconnectDb();
      app.log.info('Server and DB connection closed.');
      process.exit(0);
    } catch (err) {
      app.log.error(err, 'Error during graceful shutdown');
      process.exit(1);
    }
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

start();
