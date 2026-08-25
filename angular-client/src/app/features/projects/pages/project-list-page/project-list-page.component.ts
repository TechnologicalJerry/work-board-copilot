import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { ProjectApiService } from '../../services/project-api.service';
import { ProjectState } from '../../state/project.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { ProjectFormDialogComponent } from '../../components/project-form-dialog/project-form-dialog.component';
import { Project, ProjectType } from '../../models/project.model';

@Component({
  selector: 'app-project-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, ProjectFormDialogComponent],
  template: `
    <app-page-header
      title="Projects"
      [subtitle]="'Projects in ' + (currentOrgName() || 'selected organization')"
    >
      <button
        type="button"
        (click)="openCreateModal()"
        [disabled]="!currentOrgId() || !currentWorkspaceId()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>New Project</span>
      </button>
    </app-page-header>

    <!-- Search Input -->
    <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="relative w-full sm:w-80">
        <input
          type="text"
          [value]="searchQuery()"
          (input)="onSearch($event)"
          placeholder="Filter projects by name or key..."
          class="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="text-xs text-slate-400">
        Showing <span class="font-bold text-white">{{ filteredProjects().length }}</span> projects
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      @for (p of filteredProjects(); track p.id) {
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group">
          <div class="space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-bold text-xs flex items-center justify-center shrink-0 font-mono">
                  {{ p.key }}
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{{ p.name }}</h3>
                  <span class="inline-block mt-0.5 px-2 py-0.5 text-[9px] font-mono font-bold rounded bg-slate-800 text-slate-300">
                    {{ p.type || 'SOFTWARE' }}
                  </span>
                </div>
              </div>
            </div>

            @if (p.description) {
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">{{ p.description }}</p>
            }
          </div>

          <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span class="text-[11px] text-slate-500">{{ p.boardCount ?? 1 }} Boards</span>
            <a
              [routerLink]="['/projects', p.id]"
              class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              Open Project
            </a>
          </div>
        </div>
      } @empty {
        <div class="col-span-full py-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h3 class="text-sm font-bold text-white">No projects found</h3>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            No projects have been created in this workspace yet. Create a project to start planning boards, tasks, and sprints.
          </p>
          <button
            type="button"
            (click)="openCreateModal()"
            class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
          >
            Create Project
          </button>
        </div>
      }
    </div>

    <!-- Create Project Dialog -->
    <app-project-form-dialog
      [isOpen]="isModalOpen()"
      [isSubmitting]="isSaving()"
      (submitForm)="onCreateProject($event)"
      (cancel)="closeModal()"
    ></app-project-form-dialog>
  `,
})
export class ProjectListPageComponent implements OnInit {
  private readonly projectApi = inject(ProjectApiService);
  private readonly projectState = inject(ProjectState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly searchQuery = signal<string>('');
  readonly isModalOpen = signal<boolean>(false);
  readonly isSaving = signal<boolean>(false);

  readonly projects = this.projectState.projects;
  readonly currentOrgId = this.orgContext.organizationId;
  readonly currentOrgName = computed(() => this.orgContext.currentOrganization()?.name);
  readonly currentWorkspaceId = this.workspaceContext.workspaceId;

  readonly filteredProjects = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.projects();
    return this.projects().filter(
      (p) => p.name.toLowerCase().includes(q) || p.key.toLowerCase().includes(q)
    );
  });

  ngOnInit(): void {
    const orgId = this.currentOrgId();
    if (orgId) {
      this.loadProjects(orgId, this.currentWorkspaceId() ?? undefined);
    }
  }

  loadProjects(orgId: string, workspaceId?: string): void {
    this.projectState.setLoading(true);
    this.projectApi.getProjects(orgId, workspaceId).subscribe({
      next: (res) => {
        this.projectState.setProjects(res.data);
        this.projectState.setLoading(false);
      },
      error: (err) => {
        this.projectState.setError(err.message);
        this.projectState.setLoading(false);
      },
    });
  }

  onSearch(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  openCreateModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onCreateProject(req: { name: string; key: string; type?: ProjectType; description?: string }): void {
    const orgId = this.currentOrgId();
    const wsId = this.currentWorkspaceId();
    if (!orgId || !wsId) return;

    this.isSaving.set(true);
    this.projectApi.createProject({
      ...req,
      organizationId: orgId,
      workspaceId: wsId,
    }).subscribe({
      next: (res) => {
        this.projectState.addProject(res.data);
        this.isSaving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.projectState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }
}
