import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationService } from '@core/navigation/navigation.service';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav aria-label="Breadcrumb" class="flex items-center text-xs font-medium text-slate-400 space-x-2">
      <a routerLink="/dashboard" class="hover:text-slate-200 transition-colors flex items-center space-x-1.5">
        <span class="truncate max-w-[120px]">{{ currentOrgName() }}</span>
      </a>

      @if (currentWorkspaceName()) {
        <span class="text-slate-600">/</span>
        <span class="text-slate-300 font-semibold truncate max-w-[140px]">{{ currentWorkspaceName() }}</span>
      }
    </nav>
  `,
})
export class BreadcrumbsComponent {
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly currentOrgName = computed(() => this.orgContext.currentOrganization()?.name ?? 'Work Board');
  readonly currentWorkspaceName = computed(() => this.workspaceContext.currentWorkspace()?.name ?? '');
}
