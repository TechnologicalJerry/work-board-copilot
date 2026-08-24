import { Component, input, output } from '@angular/core';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { BoardColumn } from '../../models/board.model';
import { Task, TaskStatus } from '@features/tasks/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [DragDropModule, TaskCardComponent],
  template: `
    <div class="flex gap-4 overflow-x-auto pb-6 items-start min-h-[500px]">
      @for (col of columns(); track col.id) {
        <div class="w-72 shrink-0 rounded-2xl bg-slate-900/90 border border-slate-800 p-4 flex flex-col max-h-[calc(100vh-220px)]">
          <!-- Column Header -->
          <div class="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div class="flex items-center space-x-2">
              <div
                class="w-2.5 h-2.5 rounded-full"
                [style.background-color]="col.color || '#6366f1'"
              ></div>
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">{{ col.name }}</h4>
            </div>
            <span class="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-slate-800 text-slate-400">
              {{ getTasksForColumn(col.status).length }}
              @if (col.wipLimit) {
                / {{ col.wipLimit }}
              }
            </span>
          </div>

          <!-- Tasks List Drop Zone -->
          <div
            [id]="'col-' + col.status"
            cdkDropList
            [cdkDropListData]="getTasksForColumn(col.status)"
            [cdkDropListConnectedTo]="connectedDropLists"
            (cdkDropListDropped)="onDrop($event, col.status)"
            class="space-y-3 overflow-y-auto flex-1 pr-1 min-h-[150px]"
          >
            @for (t of getTasksForColumn(col.status); track t.id) {
              <div cdkDrag [cdkDragData]="t">
                <app-task-card
                  [task]="t"
                  (statusChange)="onStatusChange($event)"
                ></app-task-card>
              </div>
            } @empty {
              <div class="h-24 rounded-xl border border-dashed border-slate-800/80 flex items-center justify-center text-[11px] text-slate-600">
                Drop tasks here
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class KanbanBoardComponent {
  readonly columns = input.required<BoardColumn[]>();
  readonly tasks = input.required<Task[]>();

  readonly moveTask = output<{ taskId: string; targetStatus: TaskStatus }>();

  get connectedDropLists(): string[] {
    return this.columns().map((c) => 'col-' + c.status);
  }

  getTasksForColumn(status: string): Task[] {
    return this.tasks().filter((t) => t.status === status);
  }

  onDrop(event: CdkDragDrop<Task[]>, targetStatus: string): void {
    if (event.previousContainer === event.container) {
      return;
    }
    const task = event.item.data as Task;
    if (task && task.status !== targetStatus) {
      this.moveTask.emit({ taskId: task.id, targetStatus: targetStatus as TaskStatus });
    }
  }

  onStatusChange(event: { taskId: string; newStatus: TaskStatus }): void {
    this.moveTask.emit({ taskId: event.taskId, targetStatus: event.newStatus });
  }
}
