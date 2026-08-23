import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthState } from '../state/auth.state';
import { AppConfigService } from '@core/config/app-config.service';

describe('AuthService', () => {
  let service: AuthService;
  let state: AuthState;
  let httpMock: HttpTestingController;
  let routerSpy: { navigate: ReturnType<typeof vi.fn>; navigateByUrl: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    routerSpy = { navigate: vi.fn(), navigateByUrl: vi.fn() };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        AuthState,
        AppConfigService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: Router, useValue: routerSpy },
      ],
    });

    service = TestBed.inject(AuthService);
    state = TestBed.inject(AuthState);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should initialize with status unknown and unauthenticated state', () => {
    expect(service.status()).toBe('unknown');
    expect(service.isAuthenticated()).toBe(false);
    expect(service.currentUser()).toBeNull();
    expect(service.accessToken()).toBeNull();
  });

  it('should process login successfully and navigate to target URL', () => {
    const credentials = { email: 'test@example.com', password: 'Password123!' };
    const mockUser = { id: 'u1', email: 'test@example.com', firstName: 'Test', lastName: 'User' };

    service.login(credentials).subscribe();

    const req = httpMock.expectOne('/auth/login');
    req.flush({
      success: true,
      data: { accessToken: 'jwt-123', user: mockUser },
    });

    expect(service.isAuthenticated()).toBe(true);
    expect(service.currentUser()).toEqual(mockUser);
    expect(service.accessToken()).toBe('jwt-123');
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/dashboard');
  });

  it('should reset state on login failure', () => {
    service.login({ email: 'test@example.com', password: 'wrong' }).subscribe({
      error: () => {
        expect(service.isAuthenticated()).toBe(false);
        expect(service.status()).toBe('unauthenticated');
      },
    });

    const req = httpMock.expectOne('/auth/login');
    req.flush({ message: 'Invalid credentials' }, { status: 401, statusText: 'Unauthorized' });
  });

  it('should perform single-flight refresh', () => {
    let tokenResult: string | undefined;

    const ref1 = service.refresh();
    const ref2 = service.refresh();

    // Verify ref1 and ref2 return the exact same in-flight Observable
    expect(ref1).toBe(ref2);

    ref1.subscribe((t) => (tokenResult = t));
    ref2.subscribe();

    const req = httpMock.expectOne('/auth/refresh');
    req.flush({ success: true, data: { accessToken: 'new-token-456' } });

    expect(tokenResult).toBe('new-token-456');
    expect(service.accessToken()).toBe('new-token-456');
  });

  it('should restore session successfully on application startup', () => {
    const mockUser = { id: 'u1', email: 'test@example.com', firstName: 'Test', lastName: 'User' };

    service.restoreSession().subscribe((success) => {
      expect(success).toBe(true);
      expect(service.isAuthenticated()).toBe(true);
      expect(service.currentUser()).toEqual(mockUser);
    });

    const refreshReq = httpMock.expectOne('/auth/refresh');
    refreshReq.flush({ success: true, data: { accessToken: 'restored-token' } });

    const userReq = httpMock.expectOne('/users/me');
    userReq.flush({ success: true, data: mockUser });
  });

  it('should set unauthenticated state if session restoration fails', () => {
    service.restoreSession().subscribe((success) => {
      expect(success).toBe(false);
      expect(service.isAuthenticated()).toBe(false);
      expect(service.status()).toBe('unauthenticated');
    });

    const refreshReq = httpMock.expectOne('/auth/refresh');
    refreshReq.flush({ message: 'No session' }, { status: 401, statusText: 'Unauthorized' });
  });

  it('should clear state and navigate to login on logout', () => {
    state.setAuthenticated({ id: 'u1', email: 'a@b.com', firstName: 'A', lastName: 'B' }, 'token-123');
    expect(service.isAuthenticated()).toBe(true);

    service.logout().subscribe();

    const req = httpMock.expectOne('/auth/logout');
    req.flush({ success: true, data: { message: 'Logged out' } });

    expect(service.isAuthenticated()).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});
