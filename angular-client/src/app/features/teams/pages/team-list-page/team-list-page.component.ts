import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { TeamApiService } from '../../services/team-api.service';
import { TeamState } from '../../state/team.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { TeamFormDialogComponent } from '../../components/team-form-dialog/team-form-dialog.component';

@Component({
  selector: 'app-team-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, TeamFormDialogComponent],
  template: `
    <app-page-header
      title="Teams & Users"
      [subtitle]="'Teams scoped to ' + (currentOrgName() || 'selected organization')"
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
        <span>New Team</span>
      </button>
    </app-page-header>

    <!-- Search Input -->
    <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="relative w-full sm:w-80">
        <input
          type="text"
          [value]="searchQuery()"
          (input)="onSearch($event)"
          placeholder="Search teams..."
          class="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="text-xs text-slate-400">
        Showing <span class="font-bold text-white">{{ filteredTeams().length }}</span> teams
      </div>
    </div>

    <!-- Teams Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      @for (t of filteredTeams(); track t.id) {
        <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group">
          <div class="space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold text-sm flex items-center justify-center shrink-0">
                  {{ t.name.charAt(0) }}
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{{ t.name }}</h3>
                  @if (t.capacity) {
                    <p class="text-[11px] text-slate-500">{{ t.capacity }} hrs/wk capacity</p>
                  }
                </div>
              </div>
            </div>

            @if (t.description) {
              <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">{{ t.description }}</p>
            }
          </div>

          <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span class="text-[11px] text-slate-500">{{ t.memberCount ?? 0 }} Members</span>
            <a
              [routerLink]="['/teams', t.id]"
              class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              View Details
            </a>
          </div>
        </div>
      } @empty {
        <div class="col-span-full py-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 class="text-sm font-bold text-white">No teams created yet</h3>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Create a team to organize users, assign leads, and manage sprint workload.
          </p>
          <button
            type="button"
            (click)="openCreateModal()"
            class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
          >
            Create Team
          </button>
        </div>
      }
    </div>

    <!-- Create Team Form Dialog -->
    <app-team-form-dialog
      [isOpen]="isModalOpen()"
      [isSubmitting]="isSaving()"
      (submitForm)="onCreateTeam($event)"
      (cancel)="closeModal()"
    ></app-team-form-dialog>
  `,
})
export class TeamListPageComponent implements OnInit {
  private readonly teamApi = inject(TeamApiService);
  private readonly teamState = inject(TeamState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly searchQuery = signal<string>('');
  readonly isModalOpen = signal<boolean>(false);
  readonly isSaving = signal<boolean>(false);

  readonly teams = this.teamState.teams;
  readonly currentOrgId = this.orgContext.organizationId;
  readonly currentOrgName = computed(() => this.orgContext.currentOrganization()?.name);
  readonly currentWorkspaceId = this.workspaceContext.workspaceId;

  readonly filteredTeams = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.teams();
    return this.teams().filter((t) => t.name.toLowerCase().includes(q));
  });

  ngOnInit(): void {
    const orgId = this.currentOrgId();
    if (orgId) {
      this.loadTeams(orgId, this.currentWorkspaceId() ?? undefined);
    }
  }

  loadTeams(orgId: string, workspaceId?: string): void {
    this.teamState.setLoading(true);
    this.teamApi.getTeams(orgId, workspaceId).subscribe({
      next: (res) => {
        this.teamState.setTeams(res.data);
        this.teamState.setLoading(false);
      },
      error: (err) => {
        this.teamState.setError(err.message);
        this.teamState.setLoading(false);
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

  onCreateTeam(req: { name: string; description?: string; capacity?: number }): void {
    const orgId = this.currentOrgId();
    if (!orgId) return;

    this.isSaving.set(true);
    this.teamApi.createTeam({
      ...req,
      organizationId: orgId,
      workspaceId: this.currentWorkspaceId() ?? undefined,
    }).subscribe({
      next: (res) => {
        this.teamState.addTeam(res.data);
        this.isSaving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.teamState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }
}
