import { Component, input, output, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SearchApiService } from '../../services/search-api.service';
import { SearchResultItem, SearchEntityType } from '../../models/search.model';

@Component({
  selector: 'app-global-search-modal',
  standalone: true,
  template: `
    @if (isOpen()) {
      <div
        (click)="onBackdropClick($event)"
        class="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-sm"
      >
        <div class="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
          <!-- Input Bar -->
          <div class="p-4 border-b border-slate-800 flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              #searchInput
              type="text"
              [value]="query()"
              (input)="onInput($event)"
              placeholder="Search tasks, projects, documents, or wiki..."
              class="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              autofocus
            />
            <button
              type="button"
              (click)="onClose()"
              class="px-2 py-1 rounded bg-slate-800 text-[10px] text-slate-400 font-mono"
            >
              ESC
            </button>
          </div>

          <!-- Filter Scopes -->
          <div class="px-4 py-2 bg-slate-950/60 border-b border-slate-800 flex items-center space-x-2 text-xs">
            @for (t of ['global', 'task', 'project', 'document']; track t) {
              <button
                type="button"
                (click)="onSelectScope(t)"
                [class]="selectedScope() === t ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-white'"
                class="px-3 py-1 rounded-lg text-[11px] capitalize transition-colors"
              >
                {{ t }}
              </button>
            }
          </div>

          <!-- Results Box -->
          <div class="p-4 overflow-y-auto space-y-2 flex-1">
            @if (isLoading()) {
              <div class="py-8 text-center text-xs text-slate-500 font-mono">
                Searching across workspace index...
              </div>
            } @else {
              @for (r of results(); track r.id) {
                <div
                  (click)="onSelectResult(r)"
                  class="p-3 rounded-xl bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800/80 cursor-pointer transition-all flex items-center justify-between group"
                >
                  <div class="flex items-center space-x-3">
                    <span class="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-400 text-xs flex items-center justify-center font-bold">
                      {{ r.type === 'task' ? '☑' : r.type === 'project' ? '📁' : '📄' }}
                    </span>
                    <div>
                      <div class="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">{{ r.title }}</div>
                      @if (r.description) {
                        <div class="text-[10px] text-slate-400 line-clamp-1">{{ r.description }}</div>
                      }
                    </div>
                  </div>
                  <span class="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-900 text-slate-400 uppercase border border-slate-800">
                    {{ r.type }}
                  </span>
                </div>
              } @empty {
                @if (query().trim().length > 0) {
                  <div class="py-8 text-center text-xs text-slate-500">
                    No results found matching "{{ query() }}".
                  </div>
                } @else {
                  <div class="py-8 text-center text-xs text-slate-500">
                    Type a query above to search tasks, documents, and projects.
                  </div>
                }
              }
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class GlobalSearchModalComponent {
  private readonly searchApi = inject(SearchApiService);
  private readonly router = inject(Router);

  readonly isOpen = input<boolean>(false);
  readonly closeModal = output<void>();

  readonly query = signal<string>('');
  readonly selectedScope = signal<string>('global');
  readonly results = signal<SearchResultItem[]>([]);
  readonly isLoading = signal<boolean>(false);

  private debounceTimer: any = null;

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.query.set(val);

    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    if (!val.trim()) {
      this.results.set([]);
      return;
    }

    this.debounceTimer = setTimeout(() => {
      this.performSearch(val.trim());
    }, 250);
  }

  onSelectScope(scope: string): void {
    this.selectedScope.set(scope);
    if (this.query().trim()) {
      this.performSearch(this.query().trim());
    }
  }

  private performSearch(q: string): void {
    this.isLoading.set(true);
    this.searchApi.globalSearch(q, this.selectedScope() as SearchEntityType).subscribe({
      next: (res) => {
        this.results.set(res.data.results || []);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false),
    });
  }

  onSelectResult(r: SearchResultItem): void {
    this.onClose();
    if (r.type === 'task') {
      this.router.navigate(['/tasks', r.id]);
    } else if (r.type === 'document') {
      this.router.navigate(['/documents', r.id]);
    } else if (r.type === 'project') {
      this.router.navigate(['/projects', r.id]);
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('backdrop-blur-sm')) {
      this.onClose();
    }
  }

  onClose(): void {
    this.closeModal.emit();
    this.query.set('');
    this.results.set([]);
  }
}
