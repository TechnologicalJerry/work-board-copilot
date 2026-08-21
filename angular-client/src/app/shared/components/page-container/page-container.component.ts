import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  standalone: true,
  template: `
    <div class="space-y-6">
      @if (title()) {
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 class="text-2xl font-bold text-white tracking-tight">{{ title() }}</h1>
            @if (subtitle()) {
              <p class="text-xs text-slate-400 mt-1">{{ subtitle() }}</p>
            }
          </div>
          <div class="flex items-center gap-3">
            <ng-content select="[actions]"></ng-content>
          </div>
        </div>
      }
      <ng-content></ng-content>
    </div>
  `,
})
export class PageContainerComponent {
  title = input<string>('');
  subtitle = input<string>('');
}
