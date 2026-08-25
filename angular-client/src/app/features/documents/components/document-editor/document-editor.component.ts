import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DocumentItem, UpdateDocumentRequest } from '../../models/document.model';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSave()" class="space-y-4">
      <div>
        <input
          type="text"
          formControlName="title"
          placeholder="Untitled Document"
          class="w-full bg-transparent text-xl font-extrabold text-white placeholder-slate-600 focus:outline-none"
        />
      </div>

      <div class="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-3">
        <textarea
          formControlName="contentText"
          rows="14"
          placeholder="Write document content, specs, requirements, or meeting notes here..."
          class="w-full bg-transparent text-xs text-slate-200 placeholder-slate-500 focus:outline-none resize-none leading-relaxed font-mono"
        ></textarea>

        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div class="text-[10px] text-slate-500 font-mono">
            Version {{ document()?.version ?? 1 }} • {{ document()?.isPublished ? 'Published' : 'Draft' }}
          </div>

          <div class="flex items-center space-x-2">
            <button
              type="submit"
              [disabled]="form.invalid || isSaving()"
              class="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-colors"
            >
              {{ isSaving() ? 'Saving Changes...' : 'Save Draft' }}
            </button>
          </div>
        </div>
      </div>
    </form>
  `,
})
export class DocumentEditorComponent {
  private readonly fb = inject(FormBuilder);

  readonly document = input<DocumentItem | null>(null);
  readonly isSaving = input<boolean>(false);

  readonly saveDocument = output<UpdateDocumentRequest>();

  readonly form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1)]],
    contentText: [''],
  });

  ngOnChanges(): void {
    const doc = this.document();
    if (doc) {
      this.form.patchValue({
        title: doc.title,
        contentText: doc.contentText ?? '',
      });
    }
  }

  onSave(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.saveDocument.emit({
        title: val.title!,
        contentText: val.contentText || undefined,
      });
    }
  }
}
