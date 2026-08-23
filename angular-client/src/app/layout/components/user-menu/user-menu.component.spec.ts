import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { UserMenuComponent } from './user-menu.component';
import { AuthService } from '@features/auth/services/auth.service';
import { AuthState } from '@features/auth/state/auth.state';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;
  let authState: AuthState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserMenuComponent],
      providers: [
        AuthService,
        AuthState,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    }).compileComponents();

    authState = TestBed.inject(AuthState);
    authState.setAuthenticated(
      { id: 'usr-1', email: 'john@example.com', firstName: 'John', lastName: 'Doe', role: 'admin' },
      'mock-jwt'
    );

    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render user initials and details', () => {
    expect(component.userName()).toBe('John Doe');
    expect(component.userEmail()).toBe('john@example.com');
    expect(component.userInitials()).toBe('JD');
  });

  it('should toggle user menu dropdown visibility', () => {
    expect(component.isOpen()).toBe(false);
    component.toggleOpen();
    expect(component.isOpen()).toBe(true);
    component.close();
    expect(component.isOpen()).toBe(false);
  });
});
