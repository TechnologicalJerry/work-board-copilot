import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return toObservable(authService.isInitializing).pipe(
    filter((isInitializing) => !isInitializing),
    take(1),
    map(() => {
      if (authService.isAuthenticated()) {
        return router.createUrlTree(['/dashboard']);
      }
      return true;
    })
  );
};
