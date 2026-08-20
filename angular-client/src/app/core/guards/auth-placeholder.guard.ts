import { CanActivateFn } from '@angular/router';

/**
 * Stage 1 Auth Guard Placeholder.
 * Always allows navigation during Stage 1 foundation phase.
 * Real JWT & session verification will be implemented in Stage 3.
 */
export const authPlaceholderGuard: CanActivateFn = () => {
  return true;
};
