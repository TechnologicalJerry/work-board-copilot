import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { OrganizationApiService } from '../../services/organization-api.service';
import { OrganizationState } from '../../state/organization.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { OrganizationFormDialogComponent } from '../../components/organization-form-dialog/organization-form-dialog.component';
import { CreateOrganizationRequest, Organization } from '../../models/organization.model';

@Component({
  selector: 'app-organization-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, OrganizationFormDialogComponent],
  template: `
    <app-page-header
      title="Organizations"
      subtitle="Manage your enterprise organizations, workspaces, and team access."
    >
      <button
        type="button"
        (click)="openCreateModal()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>New Organization</span>
      </button>
    </app-page-header>

    <!-- Search & Filter Controls -->
    <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="relative w-full sm:w-80">
        <input
          type="text"
          [value]="searchQuery()"
          (input)="onSearch($event)"
          placeholder="Filter organizations..."
          class="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div class="text-xs text-slate-400">
        Showing <span class="font-bold text-white">{{ filteredOrgs().length }}</span> organizations
      </div>
    </div>

    <!-- Organizations List Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      @for (org of filteredOrgs(); track org.id) {
        <div
          class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group"
          [class.ring-2]="org.id === activeOrgId()"
          [class.ring-indigo-500]="org.id === activeOrgId()"
        >
          <div class="space-y-3">
            <div class="flex items-start justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-bold text-sm flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
                  {{ org.name.charAt(0) }}
                </div>
                <div>
                  <h3 class="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{{ org.name }}</h3>
                  @if (org.slug) {
                    <p class="text-[11px] text-slate-500 font-mono">{{ org.slug }}</p>
                  }
                </div>
              </div>

              @if (org.id === activeOrgId()) {
                <span class="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  ACTIVE
                </span>
              }
            </div>

            <div class="flex items-center space-x-4 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
              <div class="flex items-center space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>{{ org.workspaceCount ?? 0 }} Workspaces</span>
              </div>
              <div class="flex items-center space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{{ org.memberCount ?? 1 }} Members</span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              (click)="selectOrganization(org)"
              class="text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              {{ org.id === activeOrgId() ? 'Currently Selected' : 'Switch Context' }}
            </button>

            <a
              [routerLink]="['/organizations', org.id]"
              class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium transition-colors"
            >
              Details & Settings
            </a>
          </div>
        </div>
      } @empty {
        <div class="col-span-full py-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h3 class="text-sm font-bold text-white">No organizations found</h3>
          <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            You don't have any active organizations yet. Create an organization to start managing workspaces and team projects.
          </p>
          <button
            type="button"
            (click)="openCreateModal()"
            class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
          >
            Create Organization
          </button>
        </div>
      }
    </div>

    <!-- Create Org Form Dialog -->
    <app-organization-form-dialog
      [isOpen]="isModalOpen()"
      [isSubmitting]="isSaving()"
      (submitForm)="onCreateOrg($event)"
      (cancel)="closeModal()"
    ></app-organization-form-dialog>
  `,
})
export class OrganizationListPageComponent implements OnInit {
  private readonly orgApi = inject(OrganizationApiService);
  private readonly orgState = inject(OrganizationState);
  private readonly orgContext = inject(OrganizationContextService);

  readonly searchQuery = signal<string>('');
  readonly isModalOpen = signal<boolean>(false);
  readonly isSaving = signal<boolean>(false);

  readonly organizations = this.orgState.organizations;
  readonly activeOrgId = this.orgContext.organizationId;

  readonly filteredOrgs = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.organizations();
    return this.organizations().filter(
      (o) => o.name.toLowerCase().includes(q) || o.slug?.toLowerCase().includes(q)
    );
  });

  ngOnInit(): void {
    this.loadOrganizations();
  }

  loadOrganizations(): void {
    this.orgState.setLoading(true);
    this.orgApi.getOrganizations().subscribe({
      next: (res) => {
        this.orgState.setOrganizations(res.data);
        this.orgState.setLoading(false);
      },
      error: (err) => {
        this.orgState.setError(err.message);
        this.orgState.setLoading(false);
      },
    });
  }

  onSearch(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  selectOrganization(org: Organization): void {
    this.orgContext.setOrganization(org);
  }

  openCreateModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onCreateOrg(req: CreateOrganizationRequest): void {
    this.isSaving.set(true);
    this.orgApi.createOrganization(req).subscribe({
      next: (res) => {
        this.orgState.addOrganization(res.data);
        this.isSaving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.orgState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }
}
