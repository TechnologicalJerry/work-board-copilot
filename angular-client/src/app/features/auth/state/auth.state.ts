import { Injectable, computed, signal } from '@angular/core';
import { AuthStatus, AuthenticatedUser } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthState {
  // Primary state signals
  readonly status = signal<AuthStatus>('unknown');
  readonly user = signal<AuthenticatedUser | null>(null);
  readonly accessToken = signal<string | null>(null);
  readonly returnUrl = signal<string | null>(null);

  // Derived computed signals
  readonly isAuthenticated = computed(
    () => this.status() === 'authenticated' && !!this.user() && !!this.accessToken()
  );
  readonly currentUser = computed(() => this.user());
  readonly isInitializing = computed(
    () => this.status() === 'unknown' || this.status() === 'initializing'
  );
  readonly isLoading = computed(
    () => this.status() === 'initializing' || this.status() === 'refreshing'
  );

  setAuthenticated(user: AuthenticatedUser, accessToken: string): void {
    this.user.set(user);
    this.accessToken.set(accessToken);
    this.status.set('authenticated');
  }

  updateUser(partialUser: Partial<AuthenticatedUser>): void {
    const current = this.user();
    if (current) {
      this.user.set({ ...current, ...partialUser });
    }
  }

  setUnauthenticated(): void {
    this.user.set(null);
    this.accessToken.set(null);
    this.status.set('unauthenticated');
  }

  setAccessToken(accessToken: string): void {
    this.accessToken.set(accessToken);
  }

  setStatus(status: AuthStatus): void {
    this.status.set(status);
  }

  setReturnUrl(url: string | null): void {
    this.returnUrl.set(url);
  }
}
