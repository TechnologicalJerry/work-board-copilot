import { serve } from '@hono/node-server';
import { createApp } from './app.js';
import { env } from './config/env.js';

const app = createApp();

console.log(`🚀 Starting Hono Server on port ${env.PORT} (${env.NODE_ENV} mode)...`);

const server = serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`✅ Hono Server is listening at http://localhost:${info.port}`);
    console.log(`🏥 Health check endpoint: http://localhost:${info.port}/health`);
    console.log(`🔗 API Base route: http://localhost:${info.port}${env.API_PREFIX}`);
  }
);

// Graceful shutdown handling
const shutdown = () => {
  console.log('\n🛑 Shutdown signal received, closing server...');
  server.close(() => {
    console.log('⚡ Server closed gracefully.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
