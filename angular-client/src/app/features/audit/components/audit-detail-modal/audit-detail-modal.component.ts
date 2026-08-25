import { Component, input, output } from '@angular/core';
import { AuditLogItem } from '../../models/audit.model';

@Component({
  selector: 'app-audit-detail-modal',
  standalone: true,
  template: `
    @if (log(); as l) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <div class="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 class="text-sm font-bold text-white">{{ l.action }}</h3>
              <p class="text-[10px] text-slate-500 font-mono">Event ID: {{ l.id }}</p>
            </div>
            <button
              type="button"
              (click)="onClose()"
              class="text-slate-400 hover:text-white font-mono text-xs"
            >
              ✕
            </button>
          </div>

          <div class="space-y-3 text-xs">
            <div class="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
              <div>
                <span class="text-slate-500 block">Actor:</span>
                <span class="font-bold text-white">{{ l.userEmail || l.userId || 'System' }}</span>
              </div>
              <div>
                <span class="text-slate-500 block">Severity:</span>
                <span class="font-mono font-bold uppercase text-amber-400">{{ l.severity }}</span>
              </div>
              <div>
                <span class="text-slate-500 block">IP Address:</span>
                <span class="font-mono text-slate-300">{{ l.ip || 'Internal' }}</span>
              </div>
              <div>
                <span class="text-slate-500 block">Timestamp:</span>
                <span class="font-mono text-slate-300">{{ l.createdAt || 'Just now' }}</span>
              </div>
            </div>

            <!-- Diffs -->
            @if (l.changes && l.changes.length > 0) {
              <div>
                <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-mono">Field Changes</h4>
                <div class="space-y-2">
                  @for (c of l.changes; track c.field) {
                    <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] space-y-1">
                      <div class="text-indigo-400 font-bold">{{ c.field }}</div>
                      <div class="text-rose-400">- {{ formatVal(c.oldValue) }}</div>
                      <div class="text-emerald-400">+ {{ formatVal(c.newValue) }}</div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>

          <div class="pt-3 border-t border-slate-800 flex justify-end">
            <button
              type="button"
              (click)="onClose()"
              class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    }
  `,
})
export class AuditDetailModalComponent {
  readonly log = input<AuditLogItem | null>(null);
  readonly closeModal = output<void>();

  formatVal(val: unknown): string {
    if (val === undefined || val === null) return 'null';
    if (typeof val === 'object') return JSON.stringify(val);
    return String(val);
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
