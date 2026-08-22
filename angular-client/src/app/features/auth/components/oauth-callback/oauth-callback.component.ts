import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoggerService } from '@core/services/logger.service';

@Component({
  selector: 'app-oauth-callback',
  standalone: true,
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
      <div class="space-y-4 text-center max-w-sm p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400">
          <svg class="animate-spin h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h2 class="text-lg font-bold text-white">Completing OAuth Sign In</h2>
        <p class="text-xs text-slate-400">Please wait while we verify your identity credentials...</p>
      </div>
    </div>
  `,
})
export class OauthCallbackComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly logger = inject(LoggerService);

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.logger.debug('[OAuthCallback] Received query params');
      // Extension point: process OAuth code/token returned from provider backend callback
      this.authService.restoreSession().subscribe({
        next: (authenticated) => {
          if (authenticated) {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/auth/login'], { queryParams: { error: 'oauth_failed' } });
          }
        },
        error: () => {
          this.router.navigate(['/auth/login'], { queryParams: { error: 'oauth_failed' } });
        },
      });
    });
  }
}
