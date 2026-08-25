import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Sprint, CreateSprintRequest } from '../../models/sprint.model';

@Component({
  selector: 'app-sprint-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-white">
              {{ sprintToEdit() ? 'Edit Sprint' : 'Create Sprint' }}
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
              <label for="sprint-name" class="block text-xs font-medium text-slate-300 mb-1">
                Sprint Name <span class="text-rose-400">*</span>
              </label>
              <input
                id="sprint-name"
                type="text"
                formControlName="name"
                placeholder="e.g. Sprint 14 - Q3 Release"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label for="sprint-goal" class="block text-xs font-medium text-slate-300 mb-1">Sprint Goal</label>
              <input
                id="sprint-goal"
                type="text"
                formControlName="goal"
                placeholder="Key objective to deliver..."
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label for="sprint-cap" class="block text-xs font-medium text-slate-300 mb-1">Capacity (Story Points)</label>
              <input
                id="sprint-cap"
                type="number"
                formControlName="capacity"
                placeholder="e.g. 40"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-mono"
              />
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
                {{ isSubmitting() ? 'Saving...' : sprintToEdit() ? 'Update Sprint' : 'Create Sprint' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class SprintFormDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input.required<boolean>();
  readonly sprintToEdit = input<Sprint | null>(null);
  readonly isSubmitting = input<boolean>(false);

  readonly submitForm = output<Omit<CreateSprintRequest, 'projectId'>>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    goal: [''],
    capacity: [null as number | null],
  });

  ngOnChanges(): void {
    const s = this.sprintToEdit();
    if (s) {
      this.form.patchValue({
        name: s.name,
        goal: s.goal ?? '',
        capacity: s.capacity ?? null,
      });
    } else {
      this.form.reset();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.submitForm.emit({
        name: val.name!,
        goal: val.goal || undefined,
        capacity: val.capacity ?? undefined,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
