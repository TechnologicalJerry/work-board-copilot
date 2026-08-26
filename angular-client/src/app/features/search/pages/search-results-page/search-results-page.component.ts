import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { SearchState } from '../../state/search.state';

@Component({
  selector: 'app-search-results-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <app-page-header
      title="Global Search Results"
      [subtitle]="'Showing results for: ' + (query() || 'All')"
    ></app-page-header>

    <div class="space-y-4">
      <div class="divide-y divide-slate-800 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        @for (r of results(); track r.id) {
          <div class="p-4 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-400 text-xs flex items-center justify-center font-bold">
                {{ r.type === 'task' ? '☑' : r.type === 'project' ? '📁' : '📄' }}
              </div>
              <div>
                <h4 class="text-xs font-bold text-white">{{ r.title }}</h4>
                <p class="text-[10px] text-slate-400 font-mono">{{ r.type }} • ID: {{ r.id }}</p>
              </div>
            </div>

            <a
              [routerLink]="r.type === 'task' ? ['/tasks', r.id] : r.type === 'document' ? ['/documents', r.id] : ['/projects', r.id]"
              class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
            >
              Open Result
            </a>
          </div>
        } @empty {
          <div class="p-12 text-center text-xs text-slate-500">
            No matching entities found in global search index.
          </div>
        }
      </div>
    </div>
  `,
})
export class SearchResultsPageComponent {
  private readonly searchState = inject(SearchState);

  readonly query = this.searchState.query;
  readonly results = this.searchState.results;
}
