import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="py-16 flex flex-col items-center justify-center text-center space-y-4">
      <div class="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-xl font-mono font-bold">
        404
      </div>
      <h1 class="text-2xl font-bold text-white">Page Not Found</h1>
      <p class="text-xs text-slate-400 max-w-sm">
        The requested resource or page does not exist or has been moved.
      </p>
      <a
        routerLink="/dashboard"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
      >
        Return to Dashboard
      </a>
    </div>
  `,
})
export class NotFoundComponent {}
