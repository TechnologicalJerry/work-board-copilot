import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiError } from '@core/errors/api-error';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div class="w-full max-w-md space-y-6 bg-slate-900/90 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl">
        <div class="text-center space-y-2">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold tracking-tight text-white">Create an Account</h1>
          <p class="text-xs text-slate-400">Join Work Board Copilot to manage projects and teams</p>
        </div>

        @if (errorMessage()) {
          <div role="alert" class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium flex items-start space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ errorMessage() }}</span>
          </div>
        }

        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4" aria-label="Registration Form">
          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label for="reg-firstname" class="block text-xs font-medium text-slate-300">First Name</label>
              <input
                id="reg-firstname"
                type="text"
                formControlName="firstName"
                placeholder="Jane"
                class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                [class.border-rose-500]="isFieldInvalid('firstName')"
              />
            </div>
            <div class="space-y-1">
              <label for="reg-lastname" class="block text-xs font-medium text-slate-300">Last Name</label>
              <input
                id="reg-lastname"
                type="text"
                formControlName="lastName"
                placeholder="Doe"
                class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                [class.border-rose-500]="isFieldInvalid('lastName')"
              />
            </div>
          </div>

          <div class="space-y-1">
            <label for="reg-email" class="block text-xs font-medium text-slate-300">Work Email</label>
            <input
              id="reg-email"
              type="email"
              formControlName="email"
              autocomplete="email"
              placeholder="jane@company.com"
              class="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              [class.border-rose-500]="isFieldInvalid('email')"
            />
            @if (isFieldInvalid('email')) {
              <p class="text-[11px] text-rose-400">A valid email address is required.</p>
            }
          </div>

          <div class="space-y-1">
            <label for="reg-org" class="block text-xs font-medium text-slate-300">Organization Name (Optional)</label>
            <input
              id="reg-org"
              type="text"
              formControlName="organizationName"
              placeholder="Acme Corp"
              class="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div class="space-y-1">
            <label for="reg-password" class="block text-xs font-medium text-slate-300">Password</label>
            <input
              id="reg-password"
              type="password"
              formControlName="password"
              autocomplete="new-password"
              placeholder="••••••••"
              class="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              [class.border-rose-500]="isFieldInvalid('password')"
            />
            @if (isFieldInvalid('password')) {
              <p class="text-[11px] text-rose-400">Password must be at least 6 characters.</p>
            }
          </div>

          <button
            type="submit"
            [disabled]="registerForm.invalid || isSubmitting()"
            class="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2 mt-2"
          >
            @if (isSubmitting()) {
              <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Creating account...</span>
            } @else {
              <span>Create Account</span>
            }
          </button>
        </form>

        <div class="pt-3 border-t border-slate-800/80 text-center text-xs text-slate-400">
          Already have an account?
          <a routerLink="/auth/login" class="font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-all ml-1">
            Sign in
          </a>
        </div>
      </div>
    </div>
  `,
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly isSubmitting = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  readonly registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    organizationName: [''],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    const payload = this.registerForm.getRawValue() as {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      organizationName?: string;
    };

    this.authService.register(payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.router.navigate(['/auth/login'], {
          queryParams: { registered: 'true' },
        });
      },
      error: (err: unknown) => {
        this.isSubmitting.set(false);
        if (err instanceof ApiError) {
          this.errorMessage.set(err.message);
        } else if (err instanceof Error) {
          this.errorMessage.set(err.message);
        } else {
          this.errorMessage.set('Registration failed. Please try again.');
        }
      },
    });
  }
}
