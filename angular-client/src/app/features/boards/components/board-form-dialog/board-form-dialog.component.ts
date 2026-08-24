import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Board, CreateBoardRequest, BoardType } from '../../models/board.model';

@Component({
  selector: 'app-board-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-white">
              {{ boardToEdit() ? 'Edit Board' : 'Create Board' }}
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
              <label for="board-name" class="block text-xs font-medium text-slate-300 mb-1">
                Board Name <span class="text-rose-400">*</span>
              </label>
              <input
                id="board-name"
                type="text"
                formControlName="name"
                placeholder="e.g. Main Kanban Board"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label for="board-type" class="block text-xs font-medium text-slate-300 mb-1">Board Type</label>
              <select
                id="board-type"
                formControlName="type"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <option value="KANBAN">Kanban (Continuous Flow)</option>
                <option value="SCRUM">Scrum (Sprint Based)</option>
                <option value="BUG_TRACKER">Bug Tracker</option>
              </select>
            </div>

            <div>
              <label for="board-desc" class="block text-xs font-medium text-slate-300 mb-1">Description</label>
              <textarea
                id="board-desc"
                formControlName="description"
                rows="3"
                placeholder="Board scope or workflow notes..."
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
                {{ isSubmitting() ? 'Saving...' : boardToEdit() ? 'Update' : 'Create Board' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class BoardFormDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input.required<boolean>();
  readonly boardToEdit = input<Board | null>(null);
  readonly isSubmitting = input<boolean>(false);

  readonly submitForm = output<Omit<CreateBoardRequest, 'projectId'>>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    type: ['KANBAN' as BoardType],
    description: [''],
  });

  ngOnChanges(): void {
    const b = this.boardToEdit();
    if (b) {
      this.form.patchValue({
        name: b.name,
        type: b.type ?? 'KANBAN',
        description: b.description ?? '',
      });
    } else {
      this.form.reset({ type: 'KANBAN' });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.submitForm.emit({
        name: val.name!,
        type: val.type as BoardType,
        description: val.description || undefined,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
