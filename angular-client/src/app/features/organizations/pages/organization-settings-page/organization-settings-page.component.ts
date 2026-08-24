import { Component, OnInit, inject, signal, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { OrganizationApiService } from '../../services/organization-api.service';
import { OrganizationState } from '../../state/organization.state';

@Component({
  selector: 'app-organization-settings-page',
  standalone: true,
  imports: [PageHeaderComponent, ReactiveFormsModule, RouterLink],
  template: `
    <app-page-header
      title="Organization Settings"
      subtitle="Update organization identity, branding, and administrative options."
    >
      <a
        [routerLink]="['/organizations', id()]"
        class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
      >
        Back to Overview
      </a>
    </app-page-header>

    <div class="max-w-2xl space-y-8">
      <!-- General Settings Form -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">General Settings</h3>

        <form [formGroup]="form" (ngSubmit)="onSave()" class="space-y-4">
          <div>
            <label for="settings-name" class="block text-xs font-medium text-slate-300 mb-1">
              Organization Name <span class="text-rose-400">*</span>
            </label>
            <input
              id="settings-name"
              type="text"
              formControlName="name"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label for="settings-slug" class="block text-xs font-medium text-slate-300 mb-1">Slug / URL Identifier</label>
            <input
              id="settings-slug"
              type="text"
              formControlName="slug"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label for="settings-logo" class="block text-xs font-medium text-slate-300 mb-1">Logo Image URL</label>
            <input
              id="settings-logo"
              type="url"
              formControlName="logoUrl"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div class="pt-4 flex items-center justify-end">
            <button
              type="submit"
              [disabled]="form.invalid || isSaving()"
              class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
            >
              {{ isSaving() ? 'Saving Changes...' : 'Save Changes' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Danger Zone -->
      <div class="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4">
        <h3 class="text-sm font-bold text-rose-400">Danger Zone</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Deleting an organization permanently removes all associated workspaces, projects, boards, and member access. This action cannot be undone.
        </p>

        <button
          type="button"
          (click)="onDeleteOrg()"
          class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium transition-colors shadow-lg shadow-rose-600/20"
        >
          Delete Organization
        </button>
      </div>
    </div>
  `,
})
export class OrganizationSettingsPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly orgApi = inject(OrganizationApiService);
  private readonly orgState = inject(OrganizationState);
  private readonly router = inject(Router);

  readonly id = input.required<string>();
  readonly isSaving = signal<boolean>(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    slug: [''],
    logoUrl: [''],
  });

  ngOnInit(): void {
    this.orgApi.getOrganizationById(this.id()).subscribe({
      next: (res) => {
        const o = res.data;
        this.form.patchValue({
          name: o.name,
          slug: o.slug ?? '',
          logoUrl: o.logoUrl ?? '',
        });
      },
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.isSaving.set(true);
      const val = this.form.value;
      this.orgApi.updateOrganization(this.id(), {
        name: val.name!,
        slug: val.slug || undefined,
        logoUrl: val.logoUrl || undefined,
      }).subscribe({
        next: (res) => {
          this.orgState.updateOrganization(res.data);
          this.isSaving.set(false);
        },
        error: (err) => {
          this.orgState.setError(err.message);
          this.isSaving.set(false);
        },
      });
    }
  }

  onDeleteOrg(): void {
    if (confirm('Are you absolutely sure you want to delete this organization? All associated workspace data will be removed.')) {
      this.orgApi.deleteOrganization(this.id()).subscribe({
        next: () => {
          this.orgState.removeOrganization(this.id());
          this.router.navigate(['/organizations']);
        },
        error: (err) => this.orgState.setError(err.message),
      });
    }
  }
}
