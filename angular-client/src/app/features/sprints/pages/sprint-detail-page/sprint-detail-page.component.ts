import { Component, OnInit, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { SprintApiService } from '../../services/sprint-api.service';
import { SprintState } from '../../state/sprint.state';

@Component({
  selector: 'app-sprint-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    @if (sprint(); as s) {
      <app-page-header
        [title]="s.name"
        [subtitle]="s.goal || 'Sprint Overview & Burndown Progress'"
      >
        <div class="flex items-center space-x-3">
          <a
            routerLink="/sprints"
            class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
          >
            Back to Planning
          </a>
        </div>
      </app-page-header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Sprint Summary</h3>
          <div class="space-y-3 text-xs">
            <div class="flex justify-between text-slate-400">
              <span>Status:</span>
              <span class="font-bold text-indigo-400 font-mono">{{ s.status }}</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Capacity:</span>
              <span class="font-bold text-white font-mono">{{ s.capacity ?? 0 }} pts</span>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Sprint Burndown Chart</h3>
          <div class="h-48 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-xs text-slate-500">
            Sprint burndown progress visualization
          </div>
        </div>
      </div>
    }
  `,
})
export class SprintDetailPageComponent implements OnInit {
  private readonly sprintApi = inject(SprintApiService);
  private readonly sprintState = inject(SprintState);

  readonly id = input.required<string>();

  readonly sprint = this.sprintState.selectedSprint;

  ngOnInit(): void {
    this.sprintApi.getSprintById(this.id()).subscribe({
      next: (res) => this.sprintState.setSelectedSprint(res.data),
    });
  }
}
