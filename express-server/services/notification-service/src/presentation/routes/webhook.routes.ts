import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { WebhookController } from '../controllers/WebhookController';
import { WebhookService } from '../../application/services/WebhookService';
import { getPrismaClient } from '../../infrastructure/database/PrismaClient';

const router = Router();

// Dependency injection
const prisma = getPrismaClient();
const webhookService = new WebhookService(prisma);
const webhookController = new WebhookController(webhookService);

// All webhook routes require authentication
router.use(authenticate);

/**
 * POST /webhooks
 * Register a new webhook endpoint.
 */
router.post('/', webhookController.create);

/**
 * GET /webhooks
 * List all webhooks for the organization.
 * Query params: page, limit
 */
router.get('/', webhookController.list);

/**
 * PUT /webhooks/:webhookId
 * Update an existing webhook endpoint.
 */
router.put('/:webhookId', webhookController.update);

/**
 * DELETE /webhooks/:webhookId
 * Soft-delete a webhook endpoint.
 */
router.delete('/:webhookId', webhookController.delete);

/**
 * POST /webhooks/:webhookId/test
 * Send a test delivery to the webhook.
 */
router.post('/:webhookId/test', webhookController.test);

/**
 * GET /webhooks/:webhookId/deliveries
 * Get delivery history for a webhook.
 */
router.get('/:webhookId/deliveries', webhookController.getDeliveries);

export default router;
