import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="py-16 flex flex-col items-center justify-center text-center space-y-4">
      <div class="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center text-xl font-mono font-bold">
        403
      </div>
      <h1 class="text-2xl font-bold text-white">Access Denied</h1>
      <p class="text-xs text-slate-400 max-w-sm">
        You do not have the required permissions to access this tenant resource or feature.
      </p>
      <a
        routerLink="/dashboard"
        class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
      >
        Return to Safety
      </a>
    </div>
  `,
})
export class AccessDeniedComponent {}
