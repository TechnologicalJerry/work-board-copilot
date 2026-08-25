import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { AuditApiService } from '../../services/audit-api.service';
import { AuditState } from '../../state/audit.state';
import { AuditDetailModalComponent } from '../../components/audit-detail-modal/audit-detail-modal.component';
import { AuditLogItem } from '../../models/audit.model';

@Component({
  selector: 'app-audit-log-page',
  standalone: true,
  imports: [PageHeaderComponent, AuditDetailModalComponent],
  template: `
    <app-page-header
      title="Security & Compliance Audit Log"
      subtitle="Read-only immutable log of organization system events, permissions changes, and data updates."
    >
      <button
        type="button"
        (click)="onExportCsv()"
        class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>Export CSV</span>
      </button>
    </app-page-header>

    <!-- Severity Filter Bar -->
    <div class="mb-6 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <span class="text-xs text-slate-400 font-mono mr-2">Severity:</span>
        @for (sev of ['all', 'low', 'medium', 'high', 'critical']; track sev) {
          <button
            type="button"
            (click)="onFilterSeverity(sev)"
            [class]="severityFilter() === sev ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'"
            class="px-3 py-1.5 rounded-xl text-xs uppercase tracking-wider font-mono transition-colors"
          >
            {{ sev }}
          </button>
        }
      </div>

      <div class="text-xs text-slate-400">
        Showing <span class="font-bold text-white">{{ filteredLogs().length }}</span> events
      </div>
    </div>

    <!-- Audit Events Table -->
    <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 mb-6">
      <table class="w-full text-left text-xs text-slate-300">
        <thead class="bg-slate-950/80 text-[10px] text-slate-400 uppercase tracking-wider font-mono">
          <tr>
            <th class="p-3.5">Action</th>
            <th class="p-3.5">Actor</th>
            <th class="p-3.5">Resource</th>
            <th class="p-3.5">Severity</th>
            <th class="p-3.5">Timestamp</th>
            <th class="p-3.5 text-right">Details</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/80">
          @for (log of filteredLogs(); track log.id) {
            <tr class="hover:bg-slate-800/40 transition-colors">
              <td class="p-3.5 font-bold text-white">{{ log.action }}</td>
              <td class="p-3.5 text-slate-300 font-mono">{{ log.userEmail || log.userId || 'System' }}</td>
              <td class="p-3.5 text-slate-400 font-mono">{{ log.entityType ? (log.entityType + ':' + (log.entityName || log.entityId || '')) : '-' }}</td>
              <td class="p-3.5">
                <span
                  [class]="log.severity === 'critical' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : log.severity === 'high' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-slate-800 text-slate-300 border-slate-700'"
                  class="px-2 py-0.5 text-[9px] font-mono rounded font-bold uppercase border"
                >
                  {{ log.severity }}
                </span>
              </td>
              <td class="p-3.5 text-slate-400 font-mono">{{ log.createdAt || 'Recent' }}</td>
              <td class="p-3.5 text-right">
                <button
                  type="button"
                  (click)="onSelectLog(log)"
                  class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors"
                >
                  View Diff
                </button>
              </td>
            </tr>
          } @empty {
            <tr>
              <td colspan="6" class="p-12 text-center text-xs text-slate-500">
                No audit events recorded for current severity filter.
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Audit Detail Modal -->
    <app-audit-detail-modal
      [log]="selectedLog()"
      (closeModal)="onSelectLog(null)"
    ></app-audit-detail-modal>
  `,
})
export class AuditLogPageComponent implements OnInit {
  private readonly auditApi = inject(AuditApiService);
  private readonly auditState = inject(AuditState);

  readonly filteredLogs = this.auditState.filteredLogs;
  readonly severityFilter = this.auditState.severityFilter;
  readonly selectedLog = this.auditState.selectedLog;

  ngOnInit(): void {
    this.auditApi.getAuditLogs().subscribe({
      next: (res) => this.auditState.setLogs(res.data),
    });
  }

  onFilterSeverity(sev: string): void {
    this.auditState.setSeverityFilter(sev);
  }

  onSelectLog(log: AuditLogItem | null): void {
    this.auditState.setSelectedLog(log);
  }

  onExportCsv(): void {
    window.open(this.auditApi.exportCsvUrl(), '_blank');
  }
}
