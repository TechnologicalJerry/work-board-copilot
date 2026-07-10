import { Request, Response, NextFunction } from 'express';
import { successResponse } from '@boardpilot/common';
import { UnauthorizedError, NotFoundError, ForbiddenError } from '@boardpilot/errors';
import { getSessionRepository } from '../../infrastructure/repositories/PrismaSessionRepository';

export class SessionController {
  async listSessions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) throw new UnauthorizedError();

      const sessionRepository = getSessionRepository();
      const sessions = await sessionRepository.findAllByUserId(user.id);

      const sanitized = sessions.map((s) => ({
        id: s.id,
        userAgent: s.userAgent,
        ip: s.ip,
        expiresAt: s.expiresAt,
        createdAt: s.createdAt,
        isCurrent: s.id === user.sessionId,
      }));

      res.json(successResponse(sanitized));
    } catch (err) {
      next(err);
    }
  }

  async revokeSession(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) throw new UnauthorizedError();

      const { id } = req.params;
      const sessionRepository = getSessionRepository();

      const session = await sessionRepository.findById(id);
      if (!session) {
        throw new NotFoundError('Session', id);
      }

      // Ensure the session belongs to the authenticated user
      if (session.userId !== user.id) {
        throw new ForbiddenError('You do not have permission to revoke this session');
      }

      await sessionRepository.revoke(id);

      res.json(successResponse({ message: 'Session revoked successfully' }));
    } catch (err) {
      next(err);
    }
  }

  async revokeAllSessions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = req.user;
      if (!user) throw new UnauthorizedError();

      const sessionRepository = getSessionRepository();
      await sessionRepository.revokeAll(user.id);

      res.json(successResponse({ message: 'All sessions revoked successfully' }));
    } catch (err) {
      next(err);
    }
  }
}
