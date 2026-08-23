import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { AuthService } from '@features/auth/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <app-page-header
      title="Application Dashboard"
      subtitle="Overview of tenant context, quick navigation, and platform services."
    >
      <a
        routerLink="/projects"
        class="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <span>View Projects</span>
      </a>
    </app-page-header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <!-- Tenant Overview Card -->
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400">
          Organization Context
        </div>
        <h3 class="text-base font-bold text-white">{{ orgName() }}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Active multi-tenant organization context. All downstream queries scope to this tenant boundary.
        </p>
      </div>

      <!-- Workspace Overview Card -->
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
          Workspace Context
        </div>
        <h3 class="text-base font-bold text-white">{{ workspaceName() }}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Active workspace partition under {{ orgName() }}.
        </p>
      </div>

      <!-- User Profile Overview Card -->
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div class="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
          User Identity
        </div>
        <h3 class="text-base font-bold text-white">{{ userName() }}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Authenticated as {{ userEmail() }}.
        </p>
      </div>
    </div>

    <!-- Quick Access Feature Boundaries -->
    <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
      <h3 class="text-sm font-bold text-white">Platform Modules Ready for Feature Stages</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <a routerLink="/projects" class="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/60 border border-slate-800 text-xs font-medium text-slate-200 transition-all flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>Projects</span>
        </a>
        <a routerLink="/boards" class="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/60 border border-slate-800 text-xs font-medium text-slate-200 transition-all flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-blue-500"></span>
          <span>Boards</span>
        </a>
        <a routerLink="/tasks" class="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/60 border border-slate-800 text-xs font-medium text-slate-200 transition-all flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Tasks</span>
        </a>
        <a routerLink="/sprints" class="p-3 rounded-xl bg-slate-950 hover:bg-slate-800/60 border border-slate-800 text-xs font-medium text-slate-200 transition-all flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>Sprints</span>
        </a>
      </div>
    </div>
  `,
})
export class AppHomeComponent {
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);
  private readonly authService = inject(AuthService);

  readonly orgName = computed(() => this.orgContext.currentOrganization()?.name ?? 'No Organization');
  readonly workspaceName = computed(() => this.workspaceContext.currentWorkspace()?.name ?? 'No Workspace');
  readonly user = this.authService.currentUser;
  readonly userName = computed(() => `${this.user()?.firstName ?? ''} ${this.user()?.lastName ?? ''}`.trim() || 'User');
  readonly userEmail = computed(() => this.user()?.email ?? '');
}
