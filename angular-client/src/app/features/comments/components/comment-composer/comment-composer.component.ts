import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-composer',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-3">
      <div class="relative rounded-2xl bg-slate-950 border border-slate-800 p-3 focus-within:border-indigo-500/50 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
        <textarea
          formControlName="content"
          rows="3"
          [placeholder]="placeholder()"
          class="w-full bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none resize-none"
        ></textarea>

        <div class="flex items-center justify-between pt-2 border-t border-slate-800/60">
          <div class="flex items-center space-x-2 text-slate-500 text-xs font-mono">
            <span>Tip: type @ to mention member</span>
          </div>

          <div class="flex items-center space-x-2">
            @if (showCancel()) {
              <button
                type="button"
                (click)="onCancel()"
                class="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
            }
            <button
              type="submit"
              [disabled]="form.invalid || isSubmitting()"
              class="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-colors"
            >
              {{ isSubmitting() ? 'Sending...' : buttonLabel() }}
            </button>
          </div>
        </div>
      </div>
    </form>
  `,
})
export class CommentComposerComponent {
  private readonly fb = inject(FormBuilder);

  readonly placeholder = input<string>('Write a comment or discussion note...');
  readonly buttonLabel = input<string>('Comment');
  readonly showCancel = input<boolean>(false);
  readonly isSubmitting = input<boolean>(false);

  readonly submitComment = output<string>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    content: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10000)]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value.content!.trim();
      this.submitComment.emit(val);
      this.form.reset();
    }
  }

  onCancel(): void {
    this.cancel.emit();
    this.form.reset();
  }
}
