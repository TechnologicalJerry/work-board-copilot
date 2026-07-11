import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import { WebhookService } from '../../application/services/WebhookService';
import {
  createWebhookSchema,
  updateWebhookSchema,
  webhookIdParamSchema,
  paginationQuerySchema,
} from '../validators/notification.validator';

// organizationId is optional on the JWT payload/AuthenticatedUser (e.g. super_admin
// tokens issued before org assignment), so guard it explicitly here.
function requireOrganizationId(organizationId: string | undefined): string {
  if (!organizationId) {
    throw new BadRequestError('An organization context is required for this operation.');
  }
  return organizationId;
}

export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  /**
   * POST /webhooks
   * Register a new webhook endpoint for the organization.
   */
  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const createdBy = req.user!.id;

      const body = createWebhookSchema.parse(req.body);

      const webhook = await this.webhookService.create({
        organizationId,
        url: body.url,
        events: body.events,
        createdBy,
      });

      res.status(201).json(successResponse(webhook, req.context.requestId));
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /webhooks
   * List all webhooks for the organization.
   */
  list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { page, limit } = paginationQuerySchema.parse(req.query);

      const result = await this.webhookService.list(organizationId, page, limit);

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  /**
   * PUT /webhooks/:webhookId
   * Update an existing webhook endpoint.
   */
  update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { webhookId } = webhookIdParamSchema.parse(req.params);
      const body = updateWebhookSchema.parse(req.body);

      const webhook = await this.webhookService.update(webhookId, organizationId, body);

      res.status(200).json(successResponse(webhook, req.context.requestId));
    } catch (error) {
      next(error);
    }
  };

  /**
   * DELETE /webhooks/:webhookId
   * Delete (soft-delete) a webhook endpoint.
   */
  delete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { webhookId } = webhookIdParamSchema.parse(req.params);

      await this.webhookService.delete(webhookId, organizationId);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /webhooks/:webhookId/test
   * Send a test delivery to the webhook endpoint.
   */
  test = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { webhookId } = webhookIdParamSchema.parse(req.params);

      const result = await this.webhookService.test(webhookId, organizationId);

      res.status(200).json(successResponse(result, req.context.requestId));
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /webhooks/:webhookId/deliveries
   * Retrieve delivery history for a webhook endpoint.
   */
  getDeliveries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { webhookId } = webhookIdParamSchema.parse(req.params);
      const { page, limit } = paginationQuerySchema.parse(req.query);

      const result = await this.webhookService.getDeliveries(
        webhookId,
        organizationId,
        page,
        limit
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
