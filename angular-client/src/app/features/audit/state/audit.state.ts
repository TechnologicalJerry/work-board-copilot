import { Injectable, computed, signal } from '@angular/core';
import { AuditLogItem, AuditStats, AuditSeverity } from '../models/audit.model';

@Injectable({
  providedIn: 'root',
})
export class AuditState {
  private readonly logsSignal = signal<AuditLogItem[]>([]);
  private readonly statsSignal = signal<AuditStats | null>(null);
  private readonly selectedLogSignal = signal<AuditLogItem | null>(null);
  private readonly severityFilterSignal = signal<string>('all');
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly logs = this.logsSignal.asReadonly();
  readonly stats = this.statsSignal.asReadonly();
  readonly selectedLog = this.selectedLogSignal.asReadonly();
  readonly severityFilter = this.severityFilterSignal.asReadonly();
  readonly isLoading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly filteredLogs = computed(() => {
    const sev = this.severityFilterSignal();
    if (sev === 'all') return this.logsSignal();
    return this.logsSignal().filter((l) => l.severity === sev);
  });

  setLogs(logs: AuditLogItem[]): void {
    this.logsSignal.set(logs);
  }

  setStats(stats: AuditStats | null): void {
    this.statsSignal.set(stats);
  }

  setSelectedLog(log: AuditLogItem | null): void {
    this.selectedLogSignal.set(log);
  }

  setSeverityFilter(severity: string): void {
    this.severityFilterSignal.set(severity);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
