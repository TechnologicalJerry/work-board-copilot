import nodemailer, { Transporter } from 'nodemailer';
import { logger } from '@boardpilot/logger';
import { getConfig } from '../config';

export class EmailService {
  private readonly transporter: Transporter;
  private readonly from: string;
  private readonly frontendUrl: string;

  constructor() {
    const config = getConfig();
    this.from = config.EMAIL_FROM;
    this.frontendUrl = config.FRONTEND_URL;

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

  async sendVerificationEmail(to: string, name: string, token: string): Promise<void> {
    const verifyUrl = `${this.frontendUrl}/verify-email?token=${token}`;
    const subject = 'Verify your BoardPilot AI account';
    const htmlBody = `
      <h2>Welcome to BoardPilot AI, ${name}!</h2>
      <p>Thank you for registering. Please verify your email address to activate your account.</p>
      <p>
        <a href="${verifyUrl}" style="
          display: inline-block;
          padding: 12px 24px;
          background-color: #4F46E5;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        ">Verify Email Address</a>
      </p>
      <p>Or copy and paste this link into your browser:</p>
      <p><a href="${verifyUrl}">${verifyUrl}</a></p>
      <p>This link expires in 1 hour.</p>
      <p>If you did not create an account, you can safely ignore this email.</p>
    `;

    await this.send(to, subject, this.htmlEmail(subject, htmlBody));
  }

  async sendPasswordResetEmail(to: string, name: string, token: string): Promise<void> {
    const resetUrl = `${this.frontendUrl}/reset-password?token=${token}`;
    const subject = 'Reset your BoardPilot AI password';
    const htmlBody = `
      <h2>Password Reset Request</h2>
      <p>Hi ${name},</p>
      <p>We received a request to reset your password. Click the button below to set a new password:</p>
      <p>
        <a href="${resetUrl}" style="
          display: inline-block;
          padding: 12px 24px;
          background-color: #4F46E5;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        ">Reset Password</a>
      </p>
      <p>Or copy and paste this link into your browser:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>This link expires in 1 hour.</p>
      <p>If you did not request a password reset, please ignore this email. Your password will not be changed.</p>
    `;

    await this.send(to, subject, this.htmlEmail(subject, htmlBody));
  }

  async sendMfaBackupCodes(to: string, backupCodes: string[]): Promise<void> {
    const subject = 'Your BoardPilot AI MFA Backup Codes';
    const codesHtml = backupCodes
      .map(
        (code) =>
          `<li style="font-family: monospace; font-size: 16px; padding: 4px 0;">${code}</li>`
      )
      .join('');

    const htmlBody = `
      <h2>Your MFA Backup Codes</h2>
      <p>Store these backup codes in a safe place. Each code can only be used once to sign in if you lose access to your authenticator app.</p>
      <ul style="list-style: none; padding: 0;">
        ${codesHtml}
      </ul>
      <p><strong>Important:</strong> These codes will not be shown again. Please save them now.</p>
      <p>If you did not enable MFA on your account, please contact support immediately.</p>
    `;

    await this.send(to, subject, this.htmlEmail(subject, htmlBody));
  }

  async sendWelcomeEmail(to: string, name: string): Promise<void> {
    const subject = 'Welcome to BoardPilot AI!';
    const htmlBody = `
      <h2>Welcome aboard, ${name}!</h2>
      <p>Your account has been successfully verified and you are ready to get started with BoardPilot AI.</p>
      <p>BoardPilot AI helps your team collaborate, manage projects, and stay on top of tasks with AI-powered insights.</p>
      <p>
        <a href="${this.frontendUrl}" style="
          display: inline-block;
          padding: 12px 24px;
          background-color: #4F46E5;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
        ">Get Started</a>
      </p>
      <p>If you have any questions, feel free to reach out to our support team.</p>
    `;

    await this.send(to, subject, this.htmlEmail(subject, htmlBody));
  }

  private htmlEmail(subject: string, htmlBody: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="background-color: #4F46E5; padding: 24px 40px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">BoardPilot AI</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px; color: #374151; font-size: 15px; line-height: 1.6;">
              ${htmlBody}
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
              <p style="margin: 0;">This email was sent by BoardPilot AI. If you have concerns about receiving this email, please contact our support team.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();
  }

  private async send(to: string, subject: string, html: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: this.from,
        to,
        subject,
        html,
      });
      logger.info({ to, subject }, 'Email sent');
    } catch (error) {
      logger.error({ error, to, subject }, 'Failed to send email');
      throw error;
    }
  }
}

let _emailService: EmailService | null = null;

export function getEmailService(): EmailService {
  if (!_emailService) {
    _emailService = new EmailService();
  }
  return _emailService;
}
