import { Router } from 'express';
import { authenticate } from '@boardpilot/middlewares';
import { SessionController } from '../controllers/SessionController';

const router = Router();
const controller = new SessionController();

// All session routes require authentication
router.get('/', authenticate, (req, res, next) =>
  controller.listSessions(req, res, next)
);

router.delete('/:id', authenticate, (req, res, next) =>
  controller.revokeSession(req, res, next)
);

router.delete('/', authenticate, (req, res, next) =>
  controller.revokeAllSessions(req, res, next)
);

export { router as sessionsRouter };
