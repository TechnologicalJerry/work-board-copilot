import { Component, OnInit, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { SprintApiService } from '../../services/sprint-api.service';
import { SprintState } from '../../state/sprint.state';
import { TaskApiService } from '@features/tasks/services/task-api.service';
import { TaskState } from '@features/tasks/state/task.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { SprintFormDialogComponent } from '../../components/sprint-form-dialog/sprint-form-dialog.component';

@Component({
  selector: 'app-sprint-planning-page',
  standalone: true,
  imports: [PageHeaderComponent, SprintFormDialogComponent],
  template: `
    <app-page-header
      title="Sprint Planning"
      subtitle="Organize backlog items into sprints and track iteration velocity."
    >
      <button
        type="button"
        (click)="openCreateModal()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Create Sprint</span>
      </button>
    </app-page-header>

    <!-- Active Sprint Summary Banner -->
    @if (activeSprint(); as active) {
      <div class="mb-8 p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
        <div>
          <div class="flex items-center space-x-2">
            <span class="px-2 py-0.5 text-[9px] font-bold font-mono rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              ACTIVE SPRINT
            </span>
            <h3 class="text-base font-bold text-white">{{ active.name }}</h3>
          </div>
          @if (active.goal) {
            <p class="text-xs text-slate-300 mt-1">Goal: {{ active.goal }}</p>
          }
        </div>

        <div class="flex items-center space-x-3">
          <button
            type="button"
            (click)="onCompleteSprint(active.id)"
            class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg shadow-emerald-600/20 transition-colors"
          >
            Complete Sprint
          </button>
        </div>
      </div>
    }

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Backlog Column -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 class="text-sm font-bold text-white">Backlog Issues ({{ backlogTasks().length }})</h3>
        </div>

        <div class="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          @for (t of backlogTasks(); track t.id) {
            <div class="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
              <div>
                <span class="text-[10px] font-mono text-indigo-400 font-bold uppercase">{{ t.type || 'TASK' }}</span>
                <h4 class="text-xs font-semibold text-white">{{ t.title }}</h4>
              </div>
              <span class="text-xs font-mono text-slate-400">{{ t.storyPoints ?? 0 }} pts</span>
            </div>
          } @empty {
            <div class="py-8 text-center text-xs text-slate-500">Backlog is empty</div>
          }
        </div>
      </div>

      <!-- Sprints Column -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 class="text-sm font-bold text-white">Planned Sprints ({{ plannedSprints().length }})</h3>
        </div>

        <div class="space-y-4">
          @for (s of plannedSprints(); track s.id) {
            <div class="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-xs font-bold text-white">{{ s.name }}</h4>
                <button
                  type="button"
                  (click)="onStartSprint(s.id)"
                  class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
                >
                  Start Sprint
                </button>
              </div>
              @if (s.goal) {
                <p class="text-xs text-slate-400">{{ s.goal }}</p>
              }
            </div>
          } @empty {
            <div class="py-8 text-center text-xs text-slate-500">No planned sprints</div>
          }
        </div>
      </div>
    </div>

    <!-- Create Sprint Dialog -->
    <app-sprint-form-dialog
      [isOpen]="isModalOpen()"
      [isSubmitting]="isSaving()"
      (submitForm)="onCreateSprint($event)"
      (cancel)="closeModal()"
    ></app-sprint-form-dialog>
  `,
})
export class SprintPlanningPageComponent implements OnInit {
  private readonly sprintApi = inject(SprintApiService);
  private readonly sprintState = inject(SprintState);
  private readonly taskApi = inject(TaskApiService);
  private readonly taskState = inject(TaskState);
  private readonly orgContext = inject(OrganizationContextService);

  readonly isModalOpen = signal<boolean>(false);
  readonly isSaving = signal<boolean>(false);

  readonly activeSprint = this.sprintState.activeSprint;
  readonly plannedSprints = this.sprintState.plannedSprints;
  readonly backlogTasks = this.taskState.tasks;

  ngOnInit(): void {
    // Load sprints for demo project ID
    this.sprintApi.getSprints('00000000-0000-0000-0000-000000000000').subscribe({
      next: (res) => this.sprintState.setSprints(res.data),
    });

    const orgId = this.orgContext.organizationId();
    if (orgId) {
      this.taskApi.getTasks(orgId).subscribe({
        next: (res) => this.taskState.setTasks(res.data),
      });
    }
  }

  openCreateModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onCreateSprint(req: { name: string; goal?: string; capacity?: number }): void {
    this.isSaving.set(true);
    this.sprintApi.createSprint({
      ...req,
      projectId: '00000000-0000-0000-0000-000000000000',
    }).subscribe({
      next: (res) => {
        this.sprintState.addSprint(res.data);
        this.isSaving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.sprintState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }

  onStartSprint(id: string): void {
    this.sprintApi.startSprint(id).subscribe({
      next: (res) => this.sprintState.updateSprint(res.data),
    });
  }

  onCompleteSprint(id: string): void {
    this.sprintApi.completeSprint(id).subscribe({
      next: (res) => this.sprintState.updateSprint(res.data),
    });
  }
}
