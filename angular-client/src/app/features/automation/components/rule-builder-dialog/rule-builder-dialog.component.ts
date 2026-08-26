import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreateRuleRequest, TriggerType, ActionType } from '../../models/automation.model';

@Component({
  selector: 'app-rule-builder-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <div class="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 class="text-sm font-bold text-white">Create Workflow Automation Rule</h3>
            <button
              type="button"
              (click)="onClose()"
              class="text-slate-400 hover:text-white font-mono text-xs"
            >
              ✕
            </button>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-4">
            <div>
              <label class="block text-xs font-medium text-slate-300 mb-1">Rule Name</label>
              <input
                type="text"
                formControlName="name"
                placeholder="e.g. Move critical bugs to In Progress"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-300 mb-1">Description (Optional)</label>
              <input
                type="text"
                formControlName="description"
                placeholder="Brief summary of workflow rule"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <label class="block text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider">WHEN (Trigger)</label>
              <select
                formControlName="triggerType"
                class="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
              >
                <option value="task.status_changed">Task status is changed</option>
                <option value="task.created">Task is created</option>
                <option value="task.assigned">Task is assigned</option>
                <option value="sprint.started">Sprint is started</option>
              </select>
            </div>

            <div class="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <label class="block text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider">THEN (Action)</label>
              <select
                formControlName="actionType"
                class="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
              >
                <option value="set_status">Set Task Status</option>
                <option value="assign_user">Assign User</option>
                <option value="add_label">Add Label</option>
                <option value="post_comment">Post Automated Comment</option>
              </select>
            </div>

            <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
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
                Save & Enable Rule
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class RuleBuilderDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input<boolean>(false);
  readonly organizationId = input.required<string>();
  readonly projectId = input.required<string>();

  readonly submitRule = output<CreateRuleRequest>();
  readonly closeDialog = output<void>();

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
    description: [''],
    triggerType: ['task.status_changed' as TriggerType, [Validators.required]],
    actionType: ['set_status' as ActionType, [Validators.required]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.submitRule.emit({
        organizationId: this.organizationId(),
        projectId: this.projectId(),
        name: val.name!,
        description: val.description || undefined,
        trigger: {
          type: val.triggerType as TriggerType,
          conditions: [],
        },
        actions: [
          {
            type: val.actionType as ActionType,
            config: {},
          },
        ],
      });
      this.form.reset();
    }
  }

  onClose(): void {
    this.closeDialog.emit();
    this.form.reset();
  }
}
