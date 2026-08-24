import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task, TaskStatus } from '@features/tasks/models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-md transition-all space-y-2.5 group cursor-pointer relative">
      <div class="flex items-center justify-between">
        <span class="px-1.5 py-0.5 text-[9px] font-mono font-bold rounded bg-slate-800 text-indigo-400 border border-slate-700">
          {{ task().type || 'TASK' }}
        </span>

        <div class="flex items-center space-x-1.5">
          @if (task().priority; as prio) {
            <span
              [class]="priorityColor(prio)"
              class="px-1.5 py-0.5 text-[9px] font-mono font-bold rounded"
            >
              {{ prio }}
            </span>
          }
          @if (task().storyPoints !== undefined && task().storyPoints !== null) {
            <span class="px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-800 text-slate-300">
              {{ task().storyPoints }} pts
            </span>
          }
        </div>
      </div>

      <a
        [routerLink]="['/tasks', task().id]"
        class="block text-xs font-semibold text-slate-100 hover:text-indigo-400 transition-colors line-clamp-2"
      >
        {{ task().title }}
      </a>

      <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between">
        <div class="flex items-center space-x-1">
          @for (lbl of task().labels || []; track lbl) {
            <span class="px-1.5 py-0.5 text-[8px] rounded bg-slate-800 text-slate-400 font-mono">
              #{{ lbl }}
            </span>
          }
        </div>

        <!-- Accessible Status Quick Select Dropdown (Fallback for drag-and-drop) -->
        <select
          [value]="task().status"
          (change)="onStatusChange($event)"
          (click)="$event.stopPropagation()"
          aria-label="Change Task Status"
          class="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-[9px] text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
        >
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="IN_REVIEW">In Review</option>
          <option value="DONE">Done</option>
          <option value="BACKLOG">Backlog</option>
        </select>
      </div>
    </div>
  `,
})
export class TaskCardComponent {
  readonly task = input.required<Task>();

  readonly statusChange = output<{ taskId: string; newStatus: TaskStatus }>();

  priorityColor(prio: string): string {
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

  onStatusChange(event: Event): void {
    const newStatus = (event.target as HTMLSelectElement).value as TaskStatus;
    this.statusChange.emit({ taskId: this.task().id, newStatus });
  }
}
