import { Component, OnInit, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { AutomationApiService } from '../../services/automation-api.service';
import { AutomationState } from '../../state/automation.state';
import { RuleBuilderDialogComponent } from '../../components/rule-builder-dialog/rule-builder-dialog.component';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { CreateRuleRequest, AutomationRule } from '../../models/automation.model';

@Component({
  selector: 'app-automation-list-page',
  standalone: true,
  imports: [PageHeaderComponent, RuleBuilderDialogComponent],
  template: `
    <app-page-header
      title="Workflow Rules & Automation"
      subtitle="Automate repetitive tasks, status transitions, user assignments, and webhooks."
    >
      <button
        type="button"
        (click)="isDialogOpen.set(true)"
        [disabled]="!currentOrgId()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Create Rule</span>
      </button>
    </app-page-header>

    <!-- Stats Summary -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
        <span class="text-xs text-slate-400 font-mono">Total Rules</span>
        <div class="text-xl font-extrabold text-white font-mono">{{ rules().length }}</div>
      </div>
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
        <span class="text-xs text-slate-400 font-mono">Active Automations</span>
        <div class="text-xl font-extrabold text-emerald-400 font-mono">{{ enabledRules().length }} Enabled</div>
      </div>
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
        <span class="text-xs text-slate-400 font-mono">Executions</span>
        <div class="text-xl font-extrabold text-indigo-400 font-mono">Active Monitoring</div>
      </div>
    </div>

    <!-- Rules List -->
    <div class="space-y-4">
      <div class="divide-y divide-slate-800/80 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        @for (r of rules(); track r.id) {
          <div class="p-5 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div class="space-y-2">
              <div class="flex items-center space-x-3">
                <h3 class="text-sm font-bold text-white">{{ r.name }}</h3>
                <span
                  [class]="r.isEnabled ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'"
                  class="px-2 py-0.5 text-[9px] font-mono font-bold rounded uppercase border"
                >
                  {{ r.isEnabled ? 'Enabled' : 'Disabled' }}
                </span>
              </div>
              @if (r.description) {
                <p class="text-xs text-slate-400">{{ r.description }}</p>
              }

              <div class="flex items-center space-x-3 pt-1 text-[11px] font-mono text-slate-400">
                <span>WHEN <strong class="text-indigo-400">{{ r.trigger?.type }}</strong></span>
                <span>•</span>
                <span>THEN <strong class="text-emerald-400">{{ r.actions?.[0]?.type }}</strong></span>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <button
                type="button"
                (click)="onToggleRule(r)"
                class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
              >
                {{ r.isEnabled ? 'Disable' : 'Enable' }}
              </button>

              <button
                type="button"
                (click)="onDeleteRule(r.id)"
                class="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        } @empty {
          <div class="p-12 text-center text-xs text-slate-500">
            No workflow automation rules configured yet. Create a rule to automate your task transitions and assignments.
          </div>
        }
      </div>
    </div>

    <!-- Create Rule Dialog -->
    <app-rule-builder-dialog
      [isOpen]="isDialogOpen()"
      [organizationId]="currentOrgId() || '00000000-0000-0000-0000-000000000000'"
      [projectId]="defaultProjectId"
      (submitRule)="onCreateRule($event)"
      (closeDialog)="isDialogOpen.set(false)"
    ></app-rule-builder-dialog>
  `,
})
export class AutomationListPageComponent implements OnInit {
  private readonly autoApi = inject(AutomationApiService);
  private readonly autoState = inject(AutomationState);
  private readonly orgContext = inject(OrganizationContextService);

  readonly isDialogOpen = signal<boolean>(false);
  readonly defaultProjectId = '00000000-0000-0000-0000-000000000000';

  readonly rules = this.autoState.rules;
  readonly enabledRules = this.autoState.enabledRules;
  readonly currentOrgId = this.orgContext.organizationId;

  ngOnInit(): void {
    const orgId = this.currentOrgId();
    if (orgId) {
      this.autoApi.getRules(this.defaultProjectId, orgId).subscribe({
        next: (res) => this.autoState.setRules(res.data),
      });
    }
  }

  onCreateRule(req: CreateRuleRequest): void {
    this.autoApi.createRule(req).subscribe({
      next: (res) => {
        this.autoState.addRule(res.data);
        this.isDialogOpen.set(false);
      },
    });
  }

  onToggleRule(rule: AutomationRule): void {
    const action = rule.isEnabled ? this.autoApi.disableRule(rule.id) : this.autoApi.enableRule(rule.id);
    action.subscribe({
      next: (res) => this.autoState.updateRule(res.data),
    });
  }

  onDeleteRule(id: string): void {
    if (confirm('Delete this automation rule?')) {
      this.autoApi.deleteRule(id).subscribe({
        next: () => this.autoState.removeRule(id),
      });
    }
  }
}
