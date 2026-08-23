import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap, finalize, share } from 'rxjs/operators';
import { AuthApiService } from './auth-api.service';
import { AuthState } from '../state/auth.state';
import {
  AuthenticatedUser,
  LoginRequest,
  LoginResponseData,
  RegisterRequest,
  RegisterResponseData,
} from '../models/auth.models';
import { LoggerService } from '@core/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authApi = inject(AuthApiService);
  private readonly state = inject(AuthState);
  private readonly router = inject(Router);
  private readonly logger = inject(LoggerService);

  // Readonly signals exposed to application components
  readonly status = this.state.status.asReadonly();
  readonly isAuthenticated = this.state.isAuthenticated;
  readonly currentUser = this.state.currentUser;
  readonly accessToken = this.state.accessToken.asReadonly();
  readonly isLoading = this.state.isLoading;
  readonly isInitializing = this.state.isInitializing;

  // Single-flight refresh subject/observable to prevent duplicate refresh requests
  private refreshInProgress$?: Observable<string>;

  /**
   * Execute user login
   */
  login(credentials: LoginRequest): Observable<LoginResponseData> {
    this.state.setStatus('initializing');

    return this.authApi.login(credentials).pipe(
      map((res) => res.data),
      tap((data) => {
        if (data.accessToken && data.user) {
          this.state.setAuthenticated(data.user, data.accessToken);
          const targetUrl = this.state.returnUrl() || '/dashboard';
          this.state.setReturnUrl(null);
          this.router.navigateByUrl(targetUrl);
        }
      }),
      catchError((err) => {
        this.state.setUnauthenticated();
        return throwError(() => err);
      })
    );
  }

  /**
   * Register a new account
   */
  register(payload: RegisterRequest): Observable<RegisterResponseData> {
    return this.authApi.register(payload).pipe(map((res) => res.data));
  }

  /**
   * Single-flight token refresh operation
   */
  refresh(): Observable<string> {
    if (this.refreshInProgress$) {
      return this.refreshInProgress$;
    }

    this.state.setStatus('refreshing');

    this.refreshInProgress$ = this.authApi.refresh().pipe(
      map((res) => res.data.accessToken),
      tap((newToken) => {
        this.logger.debug('[AuthService] Token refresh successful');
        this.state.setAccessToken(newToken);
        if (this.state.user()) {
          this.state.setStatus('authenticated');
        }
      }),
      catchError((err) => {
        this.logger.warn('[AuthService] Token refresh failed', err);
        this.state.setUnauthenticated();
        return throwError(() => err);
      }),
      finalize(() => {
        this.refreshInProgress$ = undefined;
      }),
      share()
    );

    return this.refreshInProgress$;
  }

  /**
   * Perform application bootstrap session restoration
   */
  restoreSession(): Observable<boolean> {
    this.state.setStatus('initializing');

    return this.refresh().pipe(
      switchMap(() => this.authApi.getCurrentUser()),
      map((res) => {
        const user = res.data;
        const currentToken = this.state.accessToken();
        if (user && currentToken) {
          this.state.setAuthenticated(user, currentToken);
          return true;
        }
        this.state.setUnauthenticated();
        return false;
      }),
      catchError(() => {
        this.state.setUnauthenticated();
        return of(false);
      })
    );
  }

  /**
   * Log out user and clear authentication state
   */
  logout(): Observable<void> {
    return this.authApi.logout().pipe(
      catchError((err) => {
        this.logger.warn('[AuthService] Backend logout endpoint failed, continuing local cleanup', err);
        return of({ success: true, data: { message: 'Cleared' } });
      }),
      map(() => undefined),
      finalize(() => {
        this.state.setUnauthenticated();
        this.router.navigate(['/auth/login']);
      })
    );
  }

  /**
   * Store intended destination URL prior to login redirect
   */
  setReturnUrl(url: string | null): void {
    // Validate return URL to prevent open redirect vulnerabilities
    if (url && (url.startsWith('/') && !url.startsWith('//'))) {
      this.state.setReturnUrl(url);
    } else {
      this.state.setReturnUrl(null);
    }
  }
}
