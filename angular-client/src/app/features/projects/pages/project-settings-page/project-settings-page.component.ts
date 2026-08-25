import { Component, OnInit, inject, signal, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { ProjectApiService } from '../../services/project-api.service';
import { ProjectState } from '../../state/project.state';

@Component({
  selector: 'app-project-settings-page',
  standalone: true,
  imports: [PageHeaderComponent, ReactiveFormsModule, RouterLink],
  template: `
    <app-page-header
      title="Project Settings"
      subtitle="Configure project properties, archiving, and deletion."
    >
      <a
        [routerLink]="['/projects', id()]"
        class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
      >
        Back to Overview
      </a>
    </app-page-header>

    <div class="max-w-2xl space-y-8">
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">Project General Settings</h3>

        <form [formGroup]="form" (ngSubmit)="onSave()" class="space-y-4">
          <div>
            <label for="p-settings-name" class="block text-xs font-medium text-slate-300 mb-1">
              Project Name <span class="text-rose-400">*</span>
            </label>
            <input
              id="p-settings-name"
              type="text"
              formControlName="name"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label for="p-settings-desc" class="block text-xs font-medium text-slate-300 mb-1">Description</label>
            <textarea
              id="p-settings-desc"
              formControlName="description"
              rows="3"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            ></textarea>
          </div>

          <div class="flex items-center space-x-2 pt-2">
            <input
              id="p-settings-archived"
              type="checkbox"
              formControlName="isArchived"
              class="rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500/50"
            />
            <label for="p-settings-archived" class="text-xs text-slate-300">Archive this project</label>
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
          Deleting a project permanently removes associated boards, tasks, and sprints.
        </p>

        <button
          type="button"
          (click)="onDeleteProject()"
          class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium transition-colors shadow-lg shadow-rose-600/20"
        >
          Delete Project
        </button>
      </div>
    </div>
  `,
})
export class ProjectSettingsPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly projectApi = inject(ProjectApiService);
  private readonly projectState = inject(ProjectState);
  private readonly router = inject(Router);

  readonly id = input.required<string>();
  readonly isSaving = signal<boolean>(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: [''],
    isArchived: [false],
  });

  ngOnInit(): void {
    this.projectApi.getProjectById(this.id()).subscribe({
      next: (res) => {
        const p = res.data;
        this.form.patchValue({
          name: p.name,
          description: p.description ?? '',
          isArchived: p.isArchived ?? false,
        });
      },
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.isSaving.set(true);
      const val = this.form.value;
      this.projectApi.updateProject(this.id(), {
        name: val.name!,
        description: val.description || undefined,
        isArchived: val.isArchived ?? false,
      }).subscribe({
        next: (res) => {
          this.projectState.updateProject(res.data);
          this.isSaving.set(false);
        },
        error: (err) => {
          this.projectState.setError(err.message);
          this.isSaving.set(false);
        },
      });
    }
  }

  onDeleteProject(): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectApi.deleteProject(this.id()).subscribe({
        next: () => {
          this.projectState.removeProject(this.id());
          this.router.navigate(['/projects']);
        },
        error: (err) => this.projectState.setError(err.message),
      });
    }
  }
}
