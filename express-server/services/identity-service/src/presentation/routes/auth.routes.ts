import { Router } from 'express';
import { authenticate, validateBody, validateQuery } from '@boardpilot/middlewares';
import { AuthController } from '../controllers/AuthController';
import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from '../validators/auth.validators';

const router = Router();
const controller = new AuthController();

// Public routes
router.post('/register', validateBody(registerSchema), (req, res, next) =>
  controller.register(req, res, next)
);

router.post('/login', validateBody(loginSchema), (req, res, next) =>
  controller.login(req, res, next)
);

router.post('/forgot-password', validateBody(forgotPasswordSchema), (req, res, next) =>
  controller.forgotPassword(req, res, next)
);

router.post('/reset-password', validateBody(resetPasswordSchema), (req, res, next) =>
  controller.resetPassword(req, res, next)
);

// GET /verify-email?token=... (link from email)
router.get('/verify-email', validateQuery(verifyEmailSchema), (req, res, next) =>
  controller.verifyEmail(req, res, next)
);

// POST /verify-email (programmatic, token in body)
router.post('/verify-email', validateBody(verifyEmailSchema), (req, res, next) =>
  controller.verifyEmail(req, res, next)
);

// Authenticated routes
router.post('/logout', authenticate, (req, res, next) =>
  controller.logout(req, res, next)
);

router.post('/refresh', (req, res, next) =>
  controller.refresh(req, res, next)
);

export { router as authRouter };
