import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { TaskApiService } from '../../services/task-api.service';
import { TaskState } from '../../state/task.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { TaskFormDialogComponent } from '../../components/task-form-dialog/task-form-dialog.component';
import { TaskStatus, TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-task-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, TaskFormDialogComponent],
  template: `
    <app-page-header
      title="Tasks & Backlog"
      subtitle="Manage, filter, and track all project issues and backlog tasks."
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
        <span>Create Task</span>
      </button>
    </app-page-header>

    <!-- Filters Bar -->
    <div class="mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div class="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
        <button
          type="button"
          (click)="onFilterStatus('ALL')"
          [class]="statusFilter() === 'ALL' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'"
          class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 border border-slate-800"
        >
          All Tasks
        </button>
        <button
          type="button"
          (click)="onFilterStatus('TODO')"
          [class]="statusFilter() === 'TODO' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'"
          class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 border border-slate-800"
        >
          To Do
        </button>
        <button
          type="button"
          (click)="onFilterStatus('IN_PROGRESS')"
          [class]="statusFilter() === 'IN_PROGRESS' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'"
          class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 border border-slate-800"
        >
          In Progress
        </button>
        <button
          type="button"
          (click)="onFilterStatus('DONE')"
          [class]="statusFilter() === 'DONE' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'"
          class="px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 border border-slate-800"
        >
          Done
        </button>
      </div>

      <div class="relative w-full md:w-72">
        <input
          type="text"
          [value]="searchQuery()"
          (input)="onSearch($event)"
          placeholder="Filter by title..."
          class="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    <!-- Tasks Table -->
    <div class="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-950/60 border-b border-slate-800 text-slate-400 font-mono uppercase text-[10px] tracking-wider">
            <tr>
              <th scope="col" class="px-6 py-3.5">Type & Key</th>
              <th scope="col" class="px-6 py-3.5">Title</th>
              <th scope="col" class="px-6 py-3.5">Status</th>
              <th scope="col" class="px-6 py-3.5">Priority</th>
              <th scope="col" class="px-6 py-3.5 text-right">Story Points</th>
              <th scope="col" class="px-6 py-3.5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-800/80">
            @for (t of filteredTasks(); track t.id) {
              <tr class="hover:bg-slate-800/40 transition-colors group">
                <td class="px-6 py-4 font-mono">
                  <span class="px-1.5 py-0.5 text-[9px] font-bold rounded bg-slate-800 text-indigo-400 border border-slate-700">
                    {{ t.type || 'TASK' }}
                  </span>
                </td>
                <td class="px-6 py-4 font-medium text-slate-100">
                  <a [routerLink]="['/tasks', t.id]" class="hover:text-indigo-400 transition-colors">
                    {{ t.title }}
                  </a>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2.5 py-1 text-[10px] font-semibold font-mono rounded-lg bg-slate-800 text-slate-200">
                    {{ t.status }}
                  </span>
                </td>
                <td class="px-6 py-4 font-mono">
                  <span [class]="priorityBadge(t.priority)" class="px-2 py-0.5 text-[9px] font-bold rounded">
                    {{ t.priority || 'NONE' }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right font-mono text-slate-400">
                  {{ t.storyPoints ?? '-' }} pts
                </td>
                <td class="px-6 py-4 text-right space-x-2">
                  <button
                    type="button"
                    (click)="onDeleteTask(t.id)"
                    class="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                    aria-label="Delete Task"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </td>
              </tr>
            } @empty {
              <tr>
                <td colspan="6" class="px-6 py-12 text-center text-slate-500">
                  No tasks found matching your filter criteria.
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- Create Task Dialog -->
    <app-task-form-dialog
      [isOpen]="isModalOpen()"
      [isSubmitting]="isSaving()"
      (submitForm)="onCreateTask($event)"
      (cancel)="closeModal()"
    ></app-task-form-dialog>
  `,
})
export class TaskListPageComponent implements OnInit {
  private readonly taskApi = inject(TaskApiService);
  private readonly taskState = inject(TaskState);
  private readonly orgContext = inject(OrganizationContextService);

  readonly isModalOpen = signal<boolean>(false);
  readonly isSaving = signal<boolean>(false);

  readonly filteredTasks = this.taskState.filteredTasks;
  readonly statusFilter = this.taskState.statusFilter;
  readonly searchQuery = this.taskState.searchQuery;
  readonly currentOrgId = this.orgContext.organizationId;

  ngOnInit(): void {
    const orgId = this.currentOrgId();
    if (orgId) {
      this.loadTasks(orgId);
    }
  }

  loadTasks(orgId: string): void {
    this.taskState.setLoading(true);
    this.taskApi.getTasks(orgId).subscribe({
      next: (res) => {
        this.taskState.setTasks(res.data);
        this.taskState.setLoading(false);
      },
      error: (err) => {
        this.taskState.setError(err.message);
        this.taskState.setLoading(false);
      },
    });
  }

  onFilterStatus(status: TaskStatus | 'ALL'): void {
    this.taskState.setStatusFilter(status);
  }

  onSearch(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.taskState.setSearchQuery(val);
  }

  priorityBadge(prio?: TaskPriority): string {
    switch (prio) {
      case 'CRITICAL':
        return 'bg-rose-500/20 text-rose-400 border border-rose-500/30';
      case 'HIGH':
        return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
      case 'MEDIUM':
        return 'bg-sky-500/20 text-sky-400 border border-sky-500/30';
      default:
        return 'bg-slate-800 text-slate-400';
    }
  }

  openCreateModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  onCreateTask(payload: any): void {
    const orgId = this.currentOrgId();
    if (!orgId) return;

    this.isSaving.set(true);
    this.taskApi.createTask({
      ...payload,
      organizationId: orgId,
      projectId: '00000000-0000-0000-0000-000000000000',
    }).subscribe({
      next: (res) => {
        this.taskState.addTask(res.data);
        this.isSaving.set(false);
        this.closeModal();
      },
      error: (err) => {
        this.taskState.setError(err.message);
        this.isSaving.set(false);
      },
    });
  }

  onDeleteTask(id: string): void {
    if (confirm('Delete this task?')) {
      this.taskApi.deleteTask(id).subscribe({
        next: () => this.taskState.removeTask(id),
      });
    }
  }
}
