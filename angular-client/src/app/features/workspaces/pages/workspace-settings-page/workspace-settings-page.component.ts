import { Component, OnInit, inject, signal, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { WorkspaceApiService } from '../../services/workspace-api.service';
import { WorkspaceState } from '../../state/workspace.state';

@Component({
  selector: 'app-workspace-settings-page',
  standalone: true,
  imports: [PageHeaderComponent, ReactiveFormsModule, RouterLink],
  template: `
    <app-page-header
      title="Workspace Settings"
      subtitle="Configure workspace settings, archiving status, and deletion."
    >
      <a
        [routerLink]="['/workspaces', id()]"
        class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
      >
        Back to Overview
      </a>
    </app-page-header>

    <div class="max-w-2xl space-y-8">
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">Workspace Identity</h3>

        <form [formGroup]="form" (ngSubmit)="onSave()" class="space-y-4">
          <div>
            <label for="ws-settings-name" class="block text-xs font-medium text-slate-300 mb-1">
              Workspace Name <span class="text-rose-400">*</span>
            </label>
            <input
              id="ws-settings-name"
              type="text"
              formControlName="name"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label for="ws-settings-desc" class="block text-xs font-medium text-slate-300 mb-1">Description</label>
            <textarea
              id="ws-settings-desc"
              formControlName="description"
              rows="3"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            ></textarea>
          </div>

          <div class="flex items-center space-x-2 pt-2">
            <input
              id="ws-settings-archived"
              type="checkbox"
              formControlName="isArchived"
              class="rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500/50"
            />
            <label for="ws-settings-archived" class="text-xs text-slate-300">Archive this workspace</label>
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

      <div class="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-4">
        <h3 class="text-sm font-bold text-rose-400">Danger Zone</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Deleting a workspace permanently removes its settings and member assignments.
        </p>

        <button
          type="button"
          (click)="onDeleteWorkspace()"
          class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium transition-colors shadow-lg shadow-rose-600/20"
        >
          Delete Workspace
        </button>
      </div>
    </div>
  `,
})
export class WorkspaceSettingsPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly workspaceApi = inject(WorkspaceApiService);
  private readonly workspaceState = inject(WorkspaceState);
  private readonly router = inject(Router);

  readonly id = input.required<string>();
  readonly isSaving = signal<boolean>(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    isArchived: [false],
  });

  ngOnInit(): void {
    this.workspaceApi.getWorkspaceById(this.id()).subscribe({
      next: (res) => {
        const w = res.data;
        this.form.patchValue({
          name: w.name,
          description: w.description ?? '',
          isArchived: w.isArchived ?? false,
        });
      },
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.isSaving.set(true);
      const val = this.form.value;
      this.workspaceApi.updateWorkspace(this.id(), {
        name: val.name!,
        description: val.description || undefined,
        isArchived: val.isArchived ?? false,
      }).subscribe({
        next: (res) => {
          this.workspaceState.updateWorkspace(res.data);
          this.isSaving.set(false);
        },
        error: (err) => {
          this.workspaceState.setError(err.message);
          this.isSaving.set(false);
        },
      });
    }
  }

  onDeleteWorkspace(): void {
    if (confirm('Are you sure you want to delete this workspace?')) {
      this.workspaceApi.deleteWorkspace(this.id()).subscribe({
        next: () => {
          this.workspaceState.removeWorkspace(this.id());
          this.router.navigate(['/workspaces']);
        },
        error: (err) => this.workspaceState.setError(err.message),
      });
    }
  }
}
