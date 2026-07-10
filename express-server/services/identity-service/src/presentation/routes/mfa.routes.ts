import { Router } from 'express';
import { authenticate, validateBody } from '@boardpilot/middlewares';
import { MfaController } from '../controllers/MfaController';
import { verifyMfaSchema, disableMfaSchema } from '../validators/auth.validators';

const router = Router();
const controller = new MfaController();

// All MFA routes require authentication
router.get('/setup', authenticate, (req, res, next) =>
  controller.setupMfa(req, res, next)
);

router.post('/verify', authenticate, validateBody(verifyMfaSchema), (req, res, next) =>
  controller.verifyMfa(req, res, next)
);

router.post('/disable', authenticate, validateBody(disableMfaSchema), (req, res, next) =>
  controller.disableMfa(req, res, next)
);

router.get('/backup-codes', authenticate, (req, res, next) =>
  controller.getBackupCodes(req, res, next)
);

export { router as mfaRouter };
