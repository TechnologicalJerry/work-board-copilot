import logger from '@boardpilot/logger';

export interface TeamsNotificationPayload {
  title: string;
  body: string;
  data?: object;
}

/**
 * Microsoft Teams channel — delivers notifications via an Incoming Webhook
 * using the Adaptive Card format supported by Teams.
 */
export class TeamsChannel {
  /**
   * Send a notification to a Microsoft Teams channel via an Incoming Webhook URL.
   *
   * @param webhookUrl  The Teams Incoming Webhook URL configured for the channel.
   * @param notification  The notification content to send.
   */
  async send(webhookUrl: string, notification: TeamsNotificationPayload): Promise<void> {
    const { title, body, data } = notification;

    const adaptiveCard: object = {
      type: 'message',
      attachments: [
        {
          contentType: 'application/vnd.microsoft.card.adaptive',
          contentUrl: null,
          content: {
            $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
            type: 'AdaptiveCard',
            version: '1.4',
            body: [
              {
                type: 'TextBlock',
                size: 'Medium',
                weight: 'Bolder',
                text: title,
                wrap: true,
              },
              {
                type: 'TextBlock',
                text: body,
                wrap: true,
                spacing: 'Medium',
              },
              ...(data && Object.keys(data).length > 0
                ? [
                    {
                      type: 'FactSet',
                      facts: Object.entries(data).map(([key, value]) => ({
                        title: key,
                        value: String(value),
                      })),
                      spacing: 'Medium',
                    },
                  ]
                : []),
            ],
            actions: [],
          },
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BoardPilot-Notifications/1.0',
      },
      body: JSON.stringify(adaptiveCard),
    });

    if (!response.ok) {
      const responseText = await response.text().catch(() => '');
      logger.error(
        { status: response.status, body: responseText, webhookUrl: webhookUrl.slice(0, 60) },
        'Failed to send Teams notification'
      );
      throw new Error(`Teams webhook delivery failed with status ${response.status}: ${responseText}`);
    }

    logger.info(
      { webhookUrl: webhookUrl.slice(0, 60), title },
      'Teams notification sent successfully'
    );
  }
}
