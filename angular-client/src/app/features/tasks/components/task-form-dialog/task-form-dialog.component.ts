import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Task, CreateTaskRequest, TaskStatus, TaskPriority, TaskType } from '../../models/task.model';

@Component({
  selector: 'app-task-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-white">
              {{ taskToEdit() ? 'Edit Task' : 'Create Task' }}
            </h3>
            <button
              type="button"
              (click)="onCancel()"
              class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="p-6 space-y-4">
            <div>
              <label for="task-title" class="block text-xs font-medium text-slate-300 mb-1">
                Title <span class="text-rose-400">*</span>
              </label>
              <input
                id="task-title"
                type="text"
                formControlName="title"
                placeholder="e.g. Implement OAuth token refresh flow"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="task-status" class="block text-xs font-medium text-slate-300 mb-1">Status</label>
                <select
                  id="task-status"
                  formControlName="status"
                  class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <option value="TODO font-semibold">To Do</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="IN_REVIEW">In Review</option>
                  <option value="DONE">Done</option>
                  <option value="BACKLOG">Backlog</option>
                </select>
              </div>

              <div>
                <label for="task-priority" class="block text-xs font-medium text-slate-300 mb-1">Priority</label>
                <select
                  id="task-priority"
                  formControlName="priority"
                  class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                  <option value="CRITICAL">Critical</option>
                  <option value="NONE">None</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="task-type" class="block text-xs font-medium text-slate-300 mb-1">Issue Type</label>
                <select
                  id="task-type"
                  formControlName="type"
                  class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <option value="TASK">Task</option>
                  <option value="BUG">Bug</option>
                  <option value="STORY">Story</option>
                  <option value="EPIC">Epic</option>
                  <option value="SUBTASK">Subtask</option>
                </select>
              </div>

              <div>
                <label for="task-pts" class="block text-xs font-medium text-slate-300 mb-1">Story Points</label>
                <input
                  id="task-pts"
                  type="number"
                  formControlName="storyPoints"
                  min="0"
                  max="100"
                  placeholder="e.g. 5"
                  class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-mono"
                />
              </div>
            </div>

            <div>
              <label for="task-desc" class="block text-xs font-medium text-slate-300 mb-1">Description</label>
              <textarea
                id="task-desc"
                formControlName="description"
                rows="3"
                placeholder="Detailed acceptance criteria or reproduction steps..."
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
              ></textarea>
            </div>

            <div class="pt-4 flex items-center justify-end space-x-3 border-t border-slate-800">
              <button
                type="button"
                (click)="onCancel()"
                class="px-4 py-2 rounded-xl text-xs text-slate-300 hover:bg-slate-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="form.invalid || isSubmitting()"
                class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
              >
                {{ isSubmitting() ? 'Saving...' : taskToEdit() ? 'Update Task' : 'Create Task' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class TaskFormDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input.required<boolean>();
  readonly taskToEdit = input<Task | null>(null);
  readonly isSubmitting = input<boolean>(false);

  readonly submitForm = output<Omit<CreateTaskRequest, 'organizationId' | 'projectId'>>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2)]],
    status: ['TODO' as TaskStatus],
    priority: ['MEDIUM' as TaskPriority],
    type: ['TASK' as TaskType],
    storyPoints: [null as number | null],
    description: [''],
  });

  ngOnChanges(): void {
    const t = this.taskToEdit();
    if (t) {
      this.form.patchValue({
        title: t.title,
        status: t.status,
        priority: t.priority ?? 'MEDIUM',
        type: t.type ?? 'TASK',
        storyPoints: t.storyPoints ?? null,
        description: t.description ?? '',
      });
    } else {
      this.form.reset({
        status: 'TODO',
        priority: 'MEDIUM',
        type: 'TASK',
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.submitForm.emit({
        title: val.title!,
        status: val.status as TaskStatus,
        priority: val.priority as TaskPriority,
        type: val.type as TaskType,
        storyPoints: val.storyPoints ?? undefined,
        description: val.description || undefined,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
