import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { DocumentApiService } from '../../services/document-api.service';
import { DocumentState } from '../../state/document.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';

@Component({
  selector: 'app-document-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <app-page-header
      title="Documents & Wiki"
      subtitle="Workspace documentation, specs, meeting notes, and knowledge base."
    >
      <button
        type="button"
        (click)="onCreateNew()"
        [disabled]="!currentOrgId() || !currentWorkspaceId()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>New Document</span>
      </button>
    </app-page-header>

    <!-- Search Bar -->
    <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="relative w-full sm:w-80">
        <input
          type="text"
          [value]="searchQuery()"
          (input)="onSearch($event)"
          placeholder="Filter documents by title..."
          class="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="text-xs text-slate-400">
        Showing <span class="font-bold text-white">{{ filteredDocuments().length }}</span> documents
      </div>
    </div>

    <!-- Documents Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      @for (d of filteredDocuments(); track d.id) {
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group">
          <div class="space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-bold text-xs flex items-center justify-center shrink-0">
                  📄
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">{{ d.title }}</h3>
                  <span class="inline-block mt-0.5 px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-slate-800 text-slate-300">
                    {{ d.type || 'general' }}
                  </span>
                </div>
              </div>
            </div>

            @if (d.contentText) {
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">{{ d.contentText }}</p>
            }
          </div>

          <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span class="text-[10px] text-slate-500 font-mono">v{{ d.version ?? 1 }}</span>
            <a
              [routerLink]="['/documents', d.id]"
              class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              Open Document
            </a>
          </div>
        </div>
      } @empty {
        <div class="col-span-full py-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 class="text-sm font-bold text-white">No documents found</h3>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            No document pages have been created in this workspace yet. Create a document to document your project architecture and specs.
          </p>
          <button
            type="button"
            (click)="onCreateNew()"
            class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
          >
            Create Document
          </button>
        </div>
      }
    </div>
  `,
})
export class DocumentListPageComponent implements OnInit {
  private readonly documentApi = inject(DocumentApiService);
  private readonly documentState = inject(DocumentState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly searchQuery = signal<string>('');

  readonly documents = this.documentState.documents;
  readonly currentOrgId = this.orgContext.organizationId;
  readonly currentWorkspaceId = this.workspaceContext.workspaceId;

  readonly filteredDocuments = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.documents();
    return this.documents().filter((d) => d.title.toLowerCase().includes(q));
  });

  ngOnInit(): void {
    const wsId = this.currentWorkspaceId();
    if (wsId) {
      this.loadDocuments(wsId);
    }
  }

  loadDocuments(wsId: string): void {
    this.documentState.setLoading(true);
    this.documentApi.getDocuments(wsId).subscribe({
      next: (res) => {
        this.documentState.setDocuments(res.data);
        this.documentState.setLoading(false);
      },
      error: (err) => {
        this.documentState.setError(err.message);
        this.documentState.setLoading(false);
      },
    });
  }

  onSearch(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  onCreateNew(): void {
    const orgId = this.currentOrgId();
    const wsId = this.currentWorkspaceId();
    if (!orgId || !wsId) return;

    this.documentApi.createDocument({
      organizationId: orgId,
      workspaceId: wsId,
      title: 'New Specification Document',
      contentText: 'Start typing document specification...',
    }).subscribe({
      next: (res) => this.documentState.addDocument(res.data),
    });
  }
}
