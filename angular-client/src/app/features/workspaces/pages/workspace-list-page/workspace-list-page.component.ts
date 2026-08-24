import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { WorkspaceApiService } from '../../services/workspace-api.service';
import { WorkspaceState } from '../../state/workspace.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { WorkspaceFormDialogComponent } from '../../components/workspace-form-dialog/workspace-form-dialog.component';
import { Workspace } from '../../models/workspace.model';

@Component({
  selector: 'app-workspace-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, WorkspaceFormDialogComponent],
  template: `
    <app-page-header
      title="Workspaces"
      [subtitle]="'Workspaces scoped to ' + (currentOrgName() || 'selected organization')"
    >
      <button
        type="button"
        (click)="openCreateModal()"
        [disabled]="!currentOrgId()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>New Workspace</span>
      </button>
    </app-page-header>

    <!-- Search Input -->
    <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="relative w-full sm:w-80">
        <input
          type="text"
          [value]="searchQuery()"
          (input)="onSearch($event)"
          placeholder="Filter workspaces..."
          class="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="text-xs text-slate-400">
        Showing <span class="font-bold text-white">{{ filteredWorkspaces().length }}</span> workspaces
      </div>
    </div>

    <!-- Workspace Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      @for (ws of filteredWorkspaces(); track ws.id) {
        <div
          class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
          [class.ring-2]="ws.id === activeWorkspaceId()"
          [class.ring-emerald-500]="ws.id === activeWorkspaceId()"
        >
          <div class="space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-sm flex items-center justify-center shrink-0">
                  {{ ws.name.charAt(0) }}
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{{ ws.name }}</h3>
                  @if (ws.slug) {
                    <p class="text-[11px] text-slate-500 font-mono">{{ ws.slug }}</p>
                  }
                </div>
              </div>

              @if (ws.id === activeWorkspaceId()) {
                <span class="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ACTIVE
                </span>
              }
            </div>

            @if (ws.description) {
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">{{ ws.description }}</p>
            }
          </div>

          <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              (click)="selectWorkspace(ws)"
              class="text-xs text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              {{ ws.id === activeWorkspaceId() ? 'Currently Selected' : 'Select Workspace' }}
            </button>

            <a
              [routerLink]="['/workspaces', ws.id]"
              class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              Overview & Settings
            </a>
          </div>
        </div>
      } @empty {
        <div class="col-span-full py-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h3 class="text-sm font-bold text-white">No workspaces found</h3>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            There are no workspaces created under {{ currentOrgName() || 'this organization' }} yet.
          </p>
          <button
            type="button"
            (click)="openCreateModal()"
            class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
          >
            Create Workspace
          </button>
        </div>
      }
    </div>

    <!-- Create Workspace Form Dialog -->
    <app-workspace-form-dialog
      [isOpen]="isModalOpen()"
      [isSubmitting]="isSaving()"
      (submitForm)="onCreateWorkspace($event)"
      (cancel)="closeModal()"
    ></app-workspace-form-dialog>
  `,
})
export class WorkspaceListPageComponent implements OnInit {
  private readonly workspaceApi = inject(WorkspaceApiService);
  private readonly workspaceState = inject(WorkspaceState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly searchQuery = signal<string>('');
  readonly isModalOpen = signal<boolean>(false);
  readonly isSaving = signal<boolean>(false);

  readonly workspaces = this.workspaceState.workspaces;
  readonly currentOrgId = this.orgContext.organizationId;
  readonly currentOrgName = computed(() => this.orgContext.currentOrganization()?.name);
  readonly activeWorkspaceId = this.workspaceContext.workspaceId;

  readonly filteredWorkspaces = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.workspaces();
    return this.workspaces().filter(
      (w) => w.name.toLowerCase().includes(q) || w.slug?.toLowerCase().includes(q)
    );
  });

  ngOnInit(): void {
    const orgId = this.currentOrgId();
    if (orgId) {
      this.loadWorkspaces(orgId);
    }
  }

  loadWorkspaces(orgId: string): void {
    this.workspaceState.setLoading(true);
    this.workspaceApi.getWorkspaces(orgId).subscribe({
      next: (res) => {
        this.workspaceState.setWorkspaces(res.data);
        this.workspaceState.setLoading(false);
      },
      error: (err) => {
        this.workspaceState.setError(err.message);
        this.workspaceState.setLoading(false);
      },
    });
  }

  onSearch(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  selectWorkspace(ws: Workspace): void {
    this.workspaceContext.setWorkspace(ws);
  }

  openCreateModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onCreateWorkspace(req: { name: string; slug?: string; description?: string }): void {
    const orgId = this.currentOrgId();
    if (!orgId) return;

    this.isSaving.set(true);
    this.workspaceApi.createWorkspace({ ...req, organizationId: orgId }).subscribe({
      next: (res) => {
        this.workspaceState.addWorkspace(res.data);
        this.isSaving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.workspaceState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }
}
