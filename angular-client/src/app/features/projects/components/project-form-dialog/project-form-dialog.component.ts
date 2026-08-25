import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Project, CreateProjectRequest, ProjectType } from '../../models/project.model';

@Component({
  selector: 'app-project-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-white">
              {{ projectToEdit() ? 'Edit Project' : 'Create Project' }}
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
              <label for="proj-name" class="block text-xs font-medium text-slate-300 mb-1">
                Project Name <span class="text-rose-400">*</span>
              </label>
              <input
                id="proj-name"
                type="text"
                formControlName="name"
                placeholder="e.g. Mobile App Redesign"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label for="proj-key" class="block text-xs font-medium text-slate-300 mb-1">
                Project Key <span class="text-rose-400">*</span>
              </label>
              <input
                id="proj-key"
                type="text"
                formControlName="key"
                placeholder="e.g. MAR"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 font-mono uppercase"
              />
              <p class="text-[10px] text-slate-500 mt-1">Short uppercase prefix for task IDs (2-10 chars).</p>
            </div>

            <div>
              <label for="proj-type" class="block text-xs font-medium text-slate-300 mb-1">Project Type</label>
              <select
                id="proj-type"
                formControlName="type"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <option value="SOFTWARE">Software Development</option>
                <option value="BUSINESS">Business & Ops</option>
                <option value="MARKETING">Marketing & Creative</option>
              </select>
            </div>

            <div>
              <label for="proj-desc" class="block text-xs font-medium text-slate-300 mb-1">Description</label>
              <textarea
                id="proj-desc"
                formControlName="description"
                rows="3"
                placeholder="Overview of goals and scope..."
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
                {{ isSubmitting() ? 'Saving...' : projectToEdit() ? 'Update' : 'Create Project' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class ProjectFormDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input.required<boolean>();
  readonly projectToEdit = input<Project | null>(null);
  readonly isSubmitting = input<boolean>(false);

  readonly submitForm = output<Omit<CreateProjectRequest, 'organizationId' | 'workspaceId'>>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    key: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    type: ['SOFTWARE' as ProjectType],
    description: [''],
  });

  ngOnChanges(): void {
    const p = this.projectToEdit();
    if (p) {
      this.form.patchValue({
        name: p.name,
        key: p.key,
        type: p.type ?? 'SOFTWARE',
        description: p.description ?? '',
      });
    } else {
      this.form.reset({ type: 'SOFTWARE' });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.submitForm.emit({
        name: val.name!,
        key: val.key!.toUpperCase(),
        type: val.type as ProjectType,
        description: val.description || undefined,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
