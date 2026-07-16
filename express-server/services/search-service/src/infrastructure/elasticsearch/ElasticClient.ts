import { Client } from '@elastic/elasticsearch';
import logger from '@boardpilot/logger';
import { config } from '../../config';

let client: Client | null = null;

export function getElasticClient(): Client {
  if (!client) {
    client = new Client({
      node: config.ELASTICSEARCH_NODE,
      auth: config.ELASTICSEARCH_USERNAME
        ? {
            username: config.ELASTICSEARCH_USERNAME,
            password: config.ELASTICSEARCH_PASSWORD ?? '',
          }
        : undefined,
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  return client;
}

export async function connectToElasticsearch(): Promise<void> {
  const es = getElasticClient();
  let attempts = 0;
  const maxAttempts = 5;

  while (attempts < maxAttempts) {
    try {
      const health = await es.cluster.health({});
      logger.info({ status: health.status }, 'Connected to Elasticsearch');
      return;
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        logger.error({ error }, 'Failed to connect to Elasticsearch');
        throw error;
      }
      logger.warn({ attempt: attempts }, 'Elasticsearch connection failed, retrying...');
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}
