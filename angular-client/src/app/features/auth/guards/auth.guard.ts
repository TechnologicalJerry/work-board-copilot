import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If session is still initializing during app startup, wait until initialization finishes
  return toObservable(authService.isInitializing).pipe(
    filter((isInitializing) => !isInitializing),
    take(1),
    map(() => {
      if (authService.isAuthenticated()) {
        return true;
      }

      authService.setReturnUrl(state.url);
      return router.createUrlTree(['/auth/login']);
    })
  );
};
