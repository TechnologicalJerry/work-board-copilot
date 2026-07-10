import { WebClient, ChatPostMessageArguments } from '@slack/web-api';
import logger from '@boardpilot/logger';
import { config } from '../config';

export interface SlackPayload {
  channel: string;
  text: string;
  blocks?: object[];
}

export class SlackChannel {
  private client: WebClient | null = null;

  private getClient(): WebClient {
    if (!this.client) {
      if (!config.SLACK_BOT_TOKEN) {
        throw new Error('SLACK_BOT_TOKEN is not configured');
      }
      this.client = new WebClient(config.SLACK_BOT_TOKEN);
    }
    return this.client;
  }

  async send(payload: SlackPayload): Promise<void> {
    try {
      const client = this.getClient();
      await client.chat.postMessage({
        channel: payload.channel,
        text: payload.text,
        blocks: payload.blocks,
      } as ChatPostMessageArguments);
      logger.info({ channel: payload.channel }, 'Slack message sent');
    } catch (error) {
      logger.error({ error, channel: payload.channel }, 'Failed to send Slack message');
      throw error;
    }
  }
}

export class TeamsChannel {
  async send(webhookUrl: string, title: string, body: string): Promise<void> {
    const adaptiveCard = {
      type: 'message',
      attachments: [
        {
          contentType: 'application/vnd.microsoft.card.adaptive',
          content: {
            $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
            type: 'AdaptiveCard',
            version: '1.4',
            body: [
              { type: 'TextBlock', size: 'Medium', weight: 'Bolder', text: title },
              { type: 'TextBlock', text: body, wrap: true },
            ],
          },
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adaptiveCard),
    });

    if (!response.ok) {
      const text = await response.text();
      logger.error({ status: response.status, body: text }, 'Failed to send Teams message');
      throw new Error(`Teams delivery failed: ${response.status}`);
    }

    logger.info({ webhookUrl: webhookUrl.slice(0, 50) }, 'Teams message sent');
  }
}
