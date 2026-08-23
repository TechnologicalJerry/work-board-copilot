import { Component, input, output, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Organization, CreateOrganizationRequest } from '../../models/organization.model';

@Component({
  selector: 'app-organization-form-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-white">
              {{ orgToEdit() ? 'Edit Organization' : 'Create Organization' }}
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
              <label for="org-name" class="block text-xs font-medium text-slate-300 mb-1">
                Organization Name <span class="text-rose-400">*</span>
              </label>
              <input
                id="org-name"
                type="text"
                formControlName="name"
                placeholder="e.g. Acme Corporation"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              @if (form.controls.name.touched && form.controls.name.invalid) {
                <p class="text-[11px] text-rose-400 mt-1">Name is required (min 2 characters).</p>
              }
            </div>

            <div>
              <label for="org-slug" class="block text-xs font-medium text-slate-300 mb-1">Slug / Identifier</label>
              <input
                id="org-slug"
                type="text"
                formControlName="slug"
                placeholder="e.g. acme-corp"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label for="org-logo" class="block text-xs font-medium text-slate-300 mb-1">Logo URL</label>
              <input
                id="org-logo"
                type="url"
                formControlName="logoUrl"
                placeholder="https://example.com/logo.png"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
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
                {{ isSubmitting() ? 'Saving...' : orgToEdit() ? 'Update' : 'Create Organization' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class OrganizationFormDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input.required<boolean>();
  readonly orgToEdit = input<Organization | null>(null);
  readonly isSubmitting = input<boolean>(false);

  readonly submitForm = output<CreateOrganizationRequest>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    slug: [''],
    logoUrl: [''],
  });

  ngOnChanges(): void {
    const org = this.orgToEdit();
    if (org) {
      this.form.patchValue({
        name: org.name,
        slug: org.slug ?? '',
        logoUrl: org.logoUrl ?? '',
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
        slug: val.slug || undefined,
        logoUrl: val.logoUrl || undefined,
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
