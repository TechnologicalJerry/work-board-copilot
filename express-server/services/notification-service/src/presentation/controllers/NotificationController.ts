import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { BadRequestError } from '@boardpilot/errors';
import { NotificationService } from '../../application/services/NotificationService';
import {
  listNotificationsQuerySchema,
  notificationIdParamSchema,
} from '../validators/notification.validator';

// organizationId is optional on the JWT payload/AuthenticatedUser (e.g. super_admin
// tokens issued before org assignment), so guard it explicitly here.
function requireOrganizationId(organizationId: string | undefined): string {
  if (!organizationId) {
    throw new BadRequestError('An organization context is required for this operation.');
  }
  return organizationId;
}

export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * GET /notifications
   * List notifications for the authenticated user with optional filters.
   */
  getMyNotifications = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const organizationId = requireOrganizationId(req.user!.organizationId);

      const query = listNotificationsQuerySchema.parse(req.query);
      const { page, limit, isRead } = query;

      const result = await this.notificationService.list(
        userId,
        organizationId,
        page,
        limit,
        isRead
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /notifications/:notificationId/read
   * Mark a single notification as read.
   */
  markAsRead = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { notificationId } = notificationIdParamSchema.parse(req.params);

      const notification = await this.notificationService.markAsRead(
        notificationId,
        userId,
        organizationId
      );

      res.status(200).json(successResponse(notification, req.context.requestId));
    } catch (error) {
      next(error);
    }
  };

  /**
   * POST /notifications/read-all
   * Mark all notifications as read for the authenticated user.
   */
  markAllAsRead = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const organizationId = requireOrganizationId(req.user!.organizationId);

      const count = await this.notificationService.markAllAsRead(userId, organizationId);

      res.status(200).json(
        successResponse({ markedAsRead: count }, req.context.requestId)
      );
    } catch (error) {
      next(error);
    }
  };

  /**
   * DELETE /notifications/:notificationId
   * Dismiss (delete) a notification.
   */
  dismiss = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const organizationId = requireOrganizationId(req.user!.organizationId);
      const { notificationId } = notificationIdParamSchema.parse(req.params);

      await this.notificationService.dismiss(notificationId, userId, organizationId);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /notifications/unread-count
   * Get the number of unread notifications for the authenticated user.
   */
  getUnreadCount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = req.user!.id;
      const organizationId = requireOrganizationId(req.user!.organizationId);

      const count = await this.notificationService.getUnreadCount(userId, organizationId);

      res.status(200).json(
        successResponse({ unreadCount: count }, req.context.requestId)
      );
    } catch (error) {
      next(error);
    }
  };
}
