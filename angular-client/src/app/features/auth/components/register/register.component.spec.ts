import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { RegisterComponent } from './register.component';
import { AuthService } from '../../services/auth.service';
import { ApiError, ErrorCode } from '@core/errors/api-error';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authServiceSpy: { register: ReturnType<typeof vi.fn> };
  let router: Router;
  let navigateSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(async () => {
    authServiceSpy = { register: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        { provide: AuthService, useValue: authServiceSpy },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    navigateSpy = vi.spyOn(router, 'navigate').mockImplementation(() => Promise.resolve(true));

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize empty registration form', () => {
    expect(component.registerForm.valid).toBe(false);
  });

  it('should validate required fields', () => {
    component.registerForm.setValue({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@company.com',
      organizationName: 'Acme',
      password: 'Password123!',
    });

    expect(component.registerForm.valid).toBe(true);
  });

  it('should submit registration and navigate to login on success', () => {
    authServiceSpy.register.mockReturnValue(
      of({
        user: { id: 'u2', email: 'jane@company.com', firstName: 'Jane', lastName: 'Doe' },
      })
    );

    component.registerForm.setValue({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@company.com',
      organizationName: 'Acme',
      password: 'Password123!',
    });

    component.onSubmit();

    expect(authServiceSpy.register).toHaveBeenCalledWith({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@company.com',
      organizationName: 'Acme',
      password: 'Password123!',
    });

    expect(navigateSpy).toHaveBeenCalledWith(['/auth/login'], {
      queryParams: { registered: 'true' },
    });
  });

  it('should display server error message on registration failure', () => {
    authServiceSpy.register.mockReturnValue(
      throwError(() => new ApiError(ErrorCode.CONFLICT, 'User with this email already exists'))
    );

    component.registerForm.setValue({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'existing@company.com',
      organizationName: '',
      password: 'Password123!',
    });

    component.onSubmit();

    expect(component.errorMessage()).toBe('User with this email already exists');
    expect(component.isSubmitting()).toBe(false);
  });
});
