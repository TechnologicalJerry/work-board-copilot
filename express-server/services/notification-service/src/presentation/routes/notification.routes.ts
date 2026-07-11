import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { NotificationController } from '../controllers/NotificationController';
import { NotificationService } from '../../application/services/NotificationService';
import { MongoNotificationRepository } from '../../infrastructure/database/NotificationRepository';

const router = Router();

// Dependency injection
const notificationRepo = new MongoNotificationRepository();
const notificationService = new NotificationService(notificationRepo);
const notificationController = new NotificationController(notificationService);

// All notification routes require authentication
router.use(authenticate);

/**
 * GET /notifications/unread-count
 * Must be defined BEFORE /:notificationId routes to avoid param conflicts
 */
router.get('/unread-count', notificationController.getUnreadCount);

/**
 * GET /notifications
 * List notifications for the authenticated user.
 * Query params: isRead (boolean), type (string), page (number), limit (number)
 */
router.get('/', notificationController.getMyNotifications);

/**
 * POST /notifications/read-all
 * Mark all notifications as read for the authenticated user.
 */
router.post('/read-all', notificationController.markAllAsRead);

/**
 * POST /notifications/:notificationId/read
 * Mark a single notification as read.
 */
router.post('/:notificationId/read', notificationController.markAsRead);

/**
 * DELETE /notifications/:notificationId
 * Dismiss (delete) a notification.
 */
router.delete('/:notificationId', notificationController.dismiss);

export default router;
