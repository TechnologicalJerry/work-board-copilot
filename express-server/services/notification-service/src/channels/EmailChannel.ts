import nodemailer, { Transporter } from 'nodemailer';
import Handlebars from 'handlebars';
import logger from '@boardpilot/logger';
import { config } from '../config';

export interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  html?: string;
  from?: string;
}

export class EmailChannel {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: config.SMTP_PORT === 465,
      auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASSWORD,
      },
    });
  }

  renderTemplate(template: string, variables: Record<string, unknown>): string {
    const compiled = Handlebars.compile(template);
    return compiled(variables);
  }

  async send(payload: EmailPayload): Promise<void> {
    const fromAddress = payload.from ?? config.EMAIL_FROM;

    try {
      const info = await this.transporter.sendMail({
        from: fromAddress,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      });

      logger.info({ messageId: info.messageId, to: payload.to }, 'Email sent successfully');
    } catch (error) {
      logger.error({ error, to: payload.to }, 'Failed to send email');
      throw error;
    }
  }

  async verify(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch {
      return false;
    }
  }
}

let emailChannelInstance: EmailChannel | null = null;

export function getEmailChannel(): EmailChannel {
  if (!emailChannelInstance) {
    emailChannelInstance = new EmailChannel();
  }
  return emailChannelInstance;
}
