import { Injectable, computed, signal } from '@angular/core';
import { AutomationRule, AutomationExecution } from '../models/automation.model';

@Injectable({
  providedIn: 'root',
})
export class AutomationState {
  private readonly rulesSignal = signal<AutomationRule[]>([]);
  private readonly selectedRuleSignal = signal<AutomationRule | null>(null);
  private readonly executionsSignal = signal<AutomationExecution[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly rules = this.rulesSignal.asReadonly();
  readonly selectedRule = this.selectedRuleSignal.asReadonly();
  readonly executions = this.executionsSignal.asReadonly();
  readonly isLoading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly enabledRules = computed(() =>
    this.rulesSignal().filter((r) => r.isEnabled)
  );

  readonly ruleCount = computed(() => this.rulesSignal().length);

  setRules(rules: AutomationRule[]): void {
    this.rulesSignal.set(rules);
  }

  setSelectedRule(rule: AutomationRule | null): void {
    this.selectedRuleSignal.set(rule);
  }

  setExecutions(executions: AutomationExecution[]): void {
    this.executionsSignal.set(executions);
  }

  addRule(rule: AutomationRule): void {
    this.rulesSignal.update((current) => [rule, ...current]);
  }

  updateRule(updated: AutomationRule): void {
    this.rulesSignal.update((current) =>
      current.map((r) => (r.id === updated.id ? { ...r, ...updated } : r))
    );
    if (this.selectedRuleSignal()?.id === updated.id) {
      this.selectedRuleSignal.set(updated);
    }
  }

  removeRule(id: string): void {
    this.rulesSignal.update((current) => current.filter((r) => r.id !== id));
    if (this.selectedRuleSignal()?.id === id) {
      this.selectedRuleSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
