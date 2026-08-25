import { Component, OnInit, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { ProjectApiService } from '../../services/project-api.service';
import { ProjectState } from '../../state/project.state';

@Component({
  selector: 'app-project-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    @if (project(); as p) {
      <app-page-header
        [title]="p.name + ' (' + p.key + ')'"
        [subtitle]="p.description || 'Project Workspace Dashboard'"
      >
        <div class="flex items-center space-x-3">
          <a
            [routerLink]="['/projects', p.id, 'settings']"
            class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
          >
            Project Settings
          </a>
        </div>
      </app-page-header>

      <!-- Quick Feature Links Navigation Bar -->
      <div class="mb-8 flex items-center space-x-2 border-b border-slate-800 pb-3">
        <a
          routerLink="/boards"
          class="px-4 py-2 rounded-xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold hover:bg-indigo-600/20 transition-colors flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
          <span>Kanban & Scrum Boards</span>
        </a>

        <a
          routerLink="/tasks"
          class="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span>Task Backlog</span>
        </a>

        <a
          routerLink="/sprints"
          class="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>Sprint Planning</span>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Project Metadata</h3>
          <div class="space-y-3 text-xs">
            <div class="flex justify-between text-slate-400">
              <span>Project Key:</span>
              <span class="font-mono font-bold text-white">{{ p.key }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Type:</span>
              <span class="font-bold text-slate-200">{{ p.type || 'SOFTWARE' }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Members:</span>
              <span class="font-bold text-white">{{ members().length }}</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Project Members ({{ members().length }})</h3>
          <div class="divide-y divide-slate-800/80">
            @for (m of members(); track m.id) {
              <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-slate-800 text-indigo-400 font-bold text-xs flex items-center justify-center border border-slate-700">
                    {{ m.user?.firstName?.charAt(0) ?? m.user?.email?.charAt(0) ?? 'P' }}
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
              <div class="py-6 text-center text-xs text-slate-500">No project members assigned yet</div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class ProjectDetailPageComponent implements OnInit {
  private readonly projectApi = inject(ProjectApiService);
  private readonly projectState = inject(ProjectState);

  readonly id = input.required<string>();

  readonly project = this.projectState.selectedProject;
  readonly members = this.projectState.members;

  ngOnInit(): void {
    this.projectApi.getProjectById(this.id()).subscribe({
      next: (res) => this.projectState.setSelectedProject(res.data),
    });

    this.projectApi.getMembers(this.id()).subscribe({
      next: (res) => this.projectState.setMembers(res.data),
    });
  }
}
