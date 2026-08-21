import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div class="flex flex-col items-center justify-center p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800">
      <div class="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 mb-4">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
      </div>
      <h3 class="text-base font-semibold text-white mb-1">{{ title() }}</h3>
      <p class="text-xs text-slate-400 max-w-sm mb-6">{{ description() }}</p>
      <div class="flex items-center gap-3">
        <ng-content select="[actions]"></ng-content>
      </div>
    </div>
  `,
})
export class EmptyStateComponent {
  title = input<string>('No Data Available');
  description = input<string>('There are no items to display at this time.');
}
