import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom, Observable } from 'rxjs';
import { authGuard } from './auth.guard';
import { guestGuard } from './guest.guard';
import { AuthService } from '../services/auth.service';
import { AuthState } from '../state/auth.state';

describe('Auth Guards', () => {
  let authState: AuthState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, AuthState, provideHttpClient(), provideHttpClientTesting()],
    });

    authState = TestBed.inject(AuthState);
  });

  describe('authGuard', () => {
    it('should allow navigation when user is authenticated', async () => {
      authState.setAuthenticated({ id: 'u1', email: 'a@b.com', firstName: 'A', lastName: 'B' }, 'token-123');

      const route: any = {};
      const state: any = { url: '/projects/123' };

      const res = await TestBed.runInInjectionContext(() => {
        return firstValueFrom(authGuard(route, state) as Observable<boolean | UrlTree>);
      });

      expect(res).toBe(true);
    });

    it('should redirect unauthenticated user to login and save returnUrl', async () => {
      authState.setUnauthenticated();

      const route: any = {};
      const state: any = { url: '/projects/123' };

      const res = await TestBed.runInInjectionContext(() => {
        return firstValueFrom(authGuard(route, state) as Observable<boolean | UrlTree>);
      });

      expect(res instanceof UrlTree).toBe(true);
      expect((res as UrlTree).toString()).toBe('/auth/login');
      expect(authState.returnUrl()).toBe('/projects/123');
    });
  });

  describe('guestGuard', () => {
    it('should allow access to login/register for unauthenticated users', async () => {
      authState.setUnauthenticated();

      const route: any = {};
      const state: any = { url: '/auth/login' };

      const res = await TestBed.runInInjectionContext(() => {
        return firstValueFrom(guestGuard(route, state) as Observable<boolean | UrlTree>);
      });

      expect(res).toBe(true);
    });

    it('should redirect authenticated user to /dashboard', async () => {
      authState.setAuthenticated({ id: 'u1', email: 'a@b.com', firstName: 'A', lastName: 'B' }, 'token-123');

      const route: any = {};
      const state: any = { url: '/auth/login' };

      const res = await TestBed.runInInjectionContext(() => {
        return firstValueFrom(guestGuard(route, state) as Observable<boolean | UrlTree>);
      });

      expect(res instanceof UrlTree).toBe(true);
      expect((res as UrlTree).toString()).toBe('/dashboard');
    });
  });
});
