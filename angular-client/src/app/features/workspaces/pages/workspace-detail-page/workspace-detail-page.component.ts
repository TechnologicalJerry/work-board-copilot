import { Component, OnInit, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { WorkspaceApiService } from '../../services/workspace-api.service';
import { WorkspaceState } from '../../state/workspace.state';

@Component({
  selector: 'app-workspace-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    @if (workspace(); as ws) {
      <app-page-header
        [title]="ws.name"
        [subtitle]="ws.description || 'Workspace Overview and Team Partitioning'"
      >
        <div class="flex items-center space-x-3">
          <a
            [routerLink]="['/workspaces', ws.id, 'settings']"
            class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
          >
            Workspace Settings
          </a>
        </div>
      </app-page-header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Members List -->
        <div class="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Workspace Members ({{ members().length }})</h3>

          <div class="divide-y divide-slate-800/80">
            @for (m of members(); track m.id) {
              <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-slate-800 text-emerald-400 font-bold text-xs flex items-center justify-center border border-slate-700">
                    {{ m.user?.firstName?.charAt(0) ?? m.user?.email?.charAt(0) ?? 'W' }}
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-white">
                      {{ m.user?.firstName ? (m.user?.firstName + ' ' + (m.user?.lastName ?? '')) : m.user?.email }}
                    </div>
                    <div class="text-[10px] text-slate-400 font-mono">{{ m.user?.email }}</div>
                  </div>
                </div>
                <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300">
                  {{ m.role }}
                </span>
              </div>
            } @empty {
              <div class="py-6 text-center text-xs text-slate-500">No workspace members loaded</div>
            }
          </div>
        </div>

        <!-- Teams Navigation Card -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Workspace Teams</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Teams organize users and assign capacity for projects and sprint boards.
          </p>
          <a
            routerLink="/teams"
            class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <span>View Teams</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    }
  `,
})
export class WorkspaceDetailPageComponent implements OnInit {
  private readonly workspaceApi = inject(WorkspaceApiService);
  private readonly workspaceState = inject(WorkspaceState);

  readonly id = input.required<string>();

  readonly workspace = this.workspaceState.selectedWorkspaceDetails;
  readonly members = this.workspaceState.members;

  ngOnInit(): void {
    this.workspaceApi.getWorkspaceById(this.id()).subscribe({
      next: (res) => this.workspaceState.setSelectedWorkspaceDetails(res.data),
    });

    this.workspaceApi.getMembers(this.id()).subscribe({
      next: (res) => this.workspaceState.setMembers(res.data),
    });
  }
}
