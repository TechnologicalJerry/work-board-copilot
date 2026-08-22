import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { ApiError, ErrorCode } from '@core/errors/api-error';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: { login: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    authServiceSpy = { login: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize empty login form with invalid status', () => {
    expect(component.loginForm.valid).toBe(false);
    expect(component.loginForm.get('email')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('should validate email format and password min length', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    emailControl?.setValue('invalid-email');
    passwordControl?.setValue('123');

    expect(emailControl?.valid).toBe(false);
    expect(passwordControl?.valid).toBe(false);

    emailControl?.setValue('valid@example.com');
    passwordControl?.setValue('Password123');

    expect(emailControl?.valid).toBe(true);
    expect(passwordControl?.valid).toBe(true);
    expect(component.loginForm.valid).toBe(true);
  });

  it('should call AuthService.login on valid form submission', () => {
    authServiceSpy.login.mockReturnValue(
      of({
        accessToken: 'jwt-123',
        user: { id: 'u1', email: 'valid@example.com', firstName: 'User', lastName: 'Test' },
      })
    );

    component.loginForm.setValue({
      email: 'valid@example.com',
      password: 'Password123',
    });

    component.onSubmit();

    expect(authServiceSpy.login).toHaveBeenCalledWith({
      email: 'valid@example.com',
      password: 'Password123',
    });
  });

  it('should display error message on login failure', () => {
    authServiceSpy.login.mockReturnValue(
      throwError(() => new ApiError(ErrorCode.UNAUTHORIZED, 'Invalid email or password'))
    );

    component.loginForm.setValue({
      email: 'valid@example.com',
      password: 'WrongPassword',
    });

    component.onSubmit();

    expect(component.errorMessage()).toBe('Invalid email or password');
    expect(component.isSubmitting()).toBe(false);
  });
});
