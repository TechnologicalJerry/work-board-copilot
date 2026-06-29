import { Request, Response, NextFunction } from 'express';
import { requestContextMiddleware } from '@boardpilot/middlewares';

const GATEWAY_ID = `api-gateway-${process.pid}`;
const GATEWAY_VERSION = process.env.npm_package_version ?? '1.0.0';

/**
 * correlationMiddleware wraps the shared requestContextMiddleware and additionally
 * sets gateway-specific response headers:
 *   - X-Gateway-Id: identifies this gateway instance
 *   - X-Gateway-Version: current gateway version
 *
 * The underlying requestContextMiddleware handles:
 *   - X-Request-Id generation / propagation
 *   - X-Correlation-Id generation / propagation
 *   - req.context attachment
 *   - req.log attachment
 */
export function correlationMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Delegate to shared middleware first so req.context and headers are set
  requestContextMiddleware(req, res, (err?: unknown) => {
    if (err) {
      return next(err);
    }

    // Attach gateway-specific headers
    res.setHeader('X-Gateway-Id', GATEWAY_ID);
    res.setHeader('X-Gateway-Version', GATEWAY_VERSION);

    next();
  });
}
