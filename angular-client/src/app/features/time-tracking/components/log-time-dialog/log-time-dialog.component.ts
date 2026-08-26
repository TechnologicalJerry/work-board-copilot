import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreateTimeEntryRequest } from '../../models/time-tracking.model';

@Component({
  selector: 'app-log-time-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 class="text-sm font-bold text-white">Log Work & Time</h3>
            <button
              type="button"
              (click)="onClose()"
              class="text-slate-400 hover:text-white text-xs font-mono"
            >
              ✕
            </button>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-slate-300 mb-1">Description</label>
              <textarea
                formControlName="description"
                rows="3"
                placeholder="What did you work on?"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
              ></textarea>
            </div>

            <div class="flex items-center justify-between pt-2 border-t border-slate-800">
              <button
                type="button"
                (click)="onClose()"
                class="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="form.invalid"
                class="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all"
              >
                Start Timer / Log Time
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class LogTimeDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input<boolean>(false);
  readonly organizationId = input.required<string>();
  readonly projectId = input.required<string>();

  readonly submitEntry = output<CreateTimeEntryRequest>();
  readonly closeDialog = output<void>();

  readonly form = this.fb.group({
    description: ['', [Validators.maxLength(500)]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      this.submitEntry.emit({
        organizationId: this.organizationId(),
        projectId: this.projectId(),
        description: this.form.value.description || undefined,
        startTime: new Date().toISOString(),
      });
      this.form.reset();
    }
  }

  onClose(): void {
    this.closeDialog.emit();
    this.form.reset();
  }
}
