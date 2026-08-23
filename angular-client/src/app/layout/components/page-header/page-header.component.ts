import { Component, input } from '@angular/core';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [BreadcrumbsComponent],
  template: `
    <div class="mb-6 space-y-2">
      @if (showBreadcrumbs()) {
        <app-breadcrumbs></app-breadcrumbs>
      }
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 class="text-xl sm:text-2xl font-bold tracking-tight text-white">{{ title() }}</h1>
          @if (subtitle()) {
            <p class="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{{ subtitle() }}</p>
          }
        </div>
        <div class="flex items-center space-x-3 shrink-0">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class PageHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly showBreadcrumbs = input<boolean>(true);
}
