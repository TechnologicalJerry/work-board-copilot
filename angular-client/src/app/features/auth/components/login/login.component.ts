import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiError } from '@core/errors/api-error';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div class="w-full max-w-md space-y-8 bg-slate-900/90 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl">
        <div class="text-center space-y-2">
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold tracking-tight text-white">Sign in to Work Board Copilot</h1>
          <p class="text-xs text-slate-400">Enter your credentials to access your workspaces</p>
        </div>

        @if (errorMessage()) {
          <div role="alert" class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium flex items-start space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-rose-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ errorMessage() }}</span>
          </div>
        }

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-5" aria-label="Login Form">
          <div class="space-y-1.5">
            <label for="login-email" class="block text-xs font-medium text-slate-300">Email Address</label>
            <input
              id="login-email"
              type="email"
              formControlName="email"
              autocomplete="email"
              placeholder="you@company.com"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              [class.border-rose-500]="isFieldInvalid('email')"
            />
            @if (isFieldInvalid('email')) {
              <p class="text-[11px] text-rose-400">Please enter a valid email address.</p>
            }
          </div>

          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <label for="login-password" class="block text-xs font-medium text-slate-300">Password</label>
            </div>
            <input
              id="login-password"
              type="password"
              formControlName="password"
              autocomplete="current-password"
              placeholder="••••••••"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              [class.border-rose-500]="isFieldInvalid('password')"
            />
            @if (isFieldInvalid('password')) {
              <p class="text-[11px] text-rose-400">Password is required (minimum 6 characters).</p>
            }
          </div>

          <button
            type="submit"
            [disabled]="loginForm.invalid || isSubmitting()"
            class="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2"
          >
            @if (isSubmitting()) {
              <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Signing in...</span>
            } @else {
              <span>Sign In</span>
            }
          </button>
        </form>

        <div class="pt-4 border-t border-slate-800/80 text-center text-xs text-slate-400">
          Don't have an account?
          <a routerLink="/auth/register" class="font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-all ml-1">
            Create account
          </a>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  readonly isSubmitting = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    const credentials = this.loginForm.getRawValue() as { email: string; password: string };

    this.authService.login(credentials).subscribe({
      next: () => {
        this.isSubmitting.set(false);
      },
      error: (err: unknown) => {
        this.isSubmitting.set(false);
        if (err instanceof ApiError) {
          this.errorMessage.set(err.message);
        } else if (err instanceof Error) {
          this.errorMessage.set(err.message);
        } else {
          this.errorMessage.set('Invalid login credentials. Please try again.');
        }
      },
    });
  }
}
