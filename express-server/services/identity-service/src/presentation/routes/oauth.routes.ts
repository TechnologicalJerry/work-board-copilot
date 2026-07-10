import { Router } from 'express';
import { OAuthController } from '../controllers/OAuthController';

const router = Router();
const controller = new OAuthController();

router.get('/google', (req, res) => controller.initiateGoogle(req, res));

router.get('/google/callback', (req, res, next) =>
  controller.googleCallback(req, res, next)
);

router.get('/github', (req, res) => controller.initiateGithub(req, res));

router.get('/github/callback', (req, res, next) =>
  controller.githubCallback(req, res, next)
);

export { router as oauthRouter };
