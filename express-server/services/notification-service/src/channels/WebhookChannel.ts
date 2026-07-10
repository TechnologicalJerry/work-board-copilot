import crypto from 'crypto';
import logger from '@boardpilot/logger';

export interface WebhookPayload {
  eventType: string;
  data: unknown;
  timestamp: string;
  deliveryId: string;
}

export interface WebhookDeliveryResult {
  success: boolean;
  statusCode?: number;
  response?: string;
  duration: number;
  error?: string;
}

export class WebhookChannel {
  signPayload(secret: string, body: string): string {
    return crypto.createHmac('sha256', secret).update(body).digest('hex');
  }

  async deliver(
    url: string,
    secret: string,
    payload: WebhookPayload,
    timeoutMs = 10000
  ): Promise<WebhookDeliveryResult> {
    const body = JSON.stringify(payload);
    const signature = this.signPayload(secret, body);
    const startTime = Date.now();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-BoardPilot-Signature': `sha256=${signature}`,
          'X-BoardPilot-Event': payload.eventType,
          'X-BoardPilot-Delivery': payload.deliveryId,
          'User-Agent': 'BoardPilot-Webhook/1.0',
        },
        body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const duration = Date.now() - startTime;
      const responseText = await response.text().catch(() => '');

      const success = response.status >= 200 && response.status < 300;

      logger.info(
        { url, eventType: payload.eventType, statusCode: response.status, duration, success },
        'Webhook delivered'
      );

      return {
        success,
        statusCode: response.status,
        response: responseText.slice(0, 1000),
        duration,
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      logger.error({ error, url, eventType: payload.eventType }, 'Webhook delivery failed');

      return {
        success: false,
        duration,
        error: errorMessage,
      };
    }
  }
}
