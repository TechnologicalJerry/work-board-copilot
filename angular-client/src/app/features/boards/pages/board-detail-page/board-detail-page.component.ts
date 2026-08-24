import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { BoardApiService } from '../../services/board-api.service';
import { BoardState } from '../../state/board.state';
import { TaskApiService } from '@features/tasks/services/task-api.service';
import { TaskState } from '@features/tasks/state/task.state';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { KanbanBoardComponent } from '../../components/kanban-board/kanban-board.component';
import { BoardFormDialogComponent } from '../../components/board-form-dialog/board-form-dialog.component';
import { TaskFormDialogComponent } from '@features/tasks/components/task-form-dialog/task-form-dialog.component';
import { BoardColumn, BoardType } from '../../models/board.model';
import { TaskStatus } from '@features/tasks/models/task.model';

@Component({
  selector: 'app-board-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, KanbanBoardComponent, BoardFormDialogComponent, TaskFormDialogComponent],
  template: `
    <app-page-header
      title="Project Boards"
      subtitle="Interactive Kanban & Scrum task management boards"
    >
      <div class="flex items-center space-x-3">
        <button
          type="button"
          (click)="openBoardModal()"
          class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
        >
          New Board
        </button>

        <button
          type="button"
          (click)="openTaskModal()"
          class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Create Task</span>
        </button>
      </div>
    </app-page-header>

    <!-- Board Selector & Filter Bar -->
    <div class="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center space-x-3 w-full sm:w-auto">
        <label for="board-select" class="text-xs font-semibold text-slate-300">Board:</label>
        <select
          id="board-select"
          [value]="selectedBoard()?.id"
          (change)="onBoardSelect($event)"
          class="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 min-w-[200px]"
        >
          @for (b of boards(); track b.id) {
            <option [value]="b.id">{{ b.name }} ({{ b.type }})</option>
          }
        </select>
      </div>

      <div class="flex items-center space-x-3">
        <span class="text-xs text-slate-400">Total Tasks: <strong class="text-white">{{ tasks().length }}</strong></span>
      </div>
    </div>

    <!-- Kanban Board View -->
    @if (selectedBoard()) {
      <app-kanban-board
        [columns]="columns()"
        [tasks]="tasks()"
        (moveTask)="onMoveTask($event)"
      ></app-kanban-board>
    } @else {
      <div class="py-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <p class="text-xs text-slate-400">No board selected. Create a new board to get started.</p>
      </div>
    }

    <!-- Dialogs -->
    <app-board-form-dialog
      [isOpen]="isBoardModalOpen()"
      [isSubmitting]="isSavingBoard()"
      (submitForm)="onCreateBoard($event)"
      (cancel)="closeBoardModal()"
    ></app-board-form-dialog>

    <app-task-form-dialog
      [isOpen]="isTaskModalOpen()"
      [isSubmitting]="isSavingTask()"
      (submitForm)="onCreateTask($event)"
      (cancel)="closeTaskModal()"
    ></app-task-form-dialog>
  `,
})
export class BoardDetailPageComponent implements OnInit {
  private readonly boardApi = inject(BoardApiService);
  private readonly boardState = inject(BoardState);
  private readonly taskApi = inject(TaskApiService);
  private readonly taskState = inject(TaskState);
  private readonly orgContext = inject(OrganizationContextService);

  readonly isBoardModalOpen = signal<boolean>(false);
  readonly isTaskModalOpen = signal<boolean>(false);
  readonly isSavingBoard = signal<boolean>(false);
  readonly isSavingTask = signal<boolean>(false);

  readonly boards = this.boardState.boards;
  readonly selectedBoard = this.boardState.selectedBoard;
  readonly columns = computed<BoardColumn[]>(() => {
    const cols = this.boardState.columns();
    if (cols.length > 0) return cols;
    // Default columns fallback
    return [
      { id: 'c-1', boardId: '', name: 'To Do', status: 'TODO', position: 1, color: '#6366f1' },
      { id: 'c-2', boardId: '', name: 'In Progress', status: 'IN_PROGRESS', position: 2, color: '#f59e0b' },
      { id: 'c-3', boardId: '', name: 'In Review', status: 'IN_REVIEW', position: 3, color: '#06b6d4' },
      { id: 'c-4', boardId: '', name: 'Done', status: 'DONE', position: 4, color: '#10b981' },
    ];
  });
  readonly tasks = this.taskState.tasks;

  ngOnInit(): void {
    const orgId = this.orgContext.organizationId();
    if (orgId) {
      this.taskApi.getTasks(orgId).subscribe({
        next: (res) => this.taskState.setTasks(res.data),
      });
    }
  }

  onBoardSelect(event: Event): void {
    const boardId = (event.target as HTMLSelectElement).value;
    const found = this.boards().find((b) => b.id === boardId);
    if (found) {
      this.boardState.setSelectedBoard(found);
    }
  }

  onMoveTask(event: { taskId: string; targetStatus: TaskStatus }): void {
    // Perform status update and update local task state
    this.taskApi.changeStatus(event.taskId, event.targetStatus).subscribe({
      next: (res) => {
        this.taskState.updateTaskStatus(event.taskId, event.targetStatus);
      },
    });
  }

  openBoardModal(): void {
    this.isBoardModalOpen.set(true);
  }

  closeBoardModal(): void {
    this.isBoardModalOpen.set(false);
  }

  onCreateBoard(req: { name: string; type?: BoardType; description?: string }): void {
    // Demo board creation
    const newBoard = {
      id: 'b-' + Date.now(),
      projectId: 'proj-1',
      name: req.name,
      type: req.type || 'KANBAN',
      description: req.description,
      columns: this.columns(),
    };
    this.boardState.addBoard(newBoard);
    this.boardState.setSelectedBoard(newBoard);
    this.closeBoardModal();
  }

  openTaskModal(): void {
    this.isTaskModalOpen.set(true);
  }

  closeTaskModal(): void {
    this.isTaskModalOpen.set(false);
  }

  onCreateTask(payload: any): void {
    const orgId = this.orgContext.organizationId();
    if (!orgId) return;

    this.isSavingTask.set(true);
    this.taskApi.createTask({
      ...payload,
      organizationId: orgId,
      projectId: payload.projectId || '00000000-0000-0000-0000-000000000000',
    }).subscribe({
      next: (res) => {
        this.taskState.addTask(res.data);
        this.isSavingTask.set(false);
        this.closeTaskModal();
      },
      error: () => this.isSavingTask.set(false),
    });
  }
}
