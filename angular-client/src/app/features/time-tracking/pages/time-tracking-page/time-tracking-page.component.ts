import { Component, OnInit, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { TimeTrackingApiService } from '../../services/time-tracking-api.service';
import { TimeTrackingState } from '../../state/time-tracking.state';
import { ActiveTimerBannerComponent } from '../../components/active-timer-banner/active-timer-banner.component';
import { LogTimeDialogComponent } from '../../components/log-time-dialog/log-time-dialog.component';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { CreateTimeEntryRequest } from '../../models/time-tracking.model';

@Component({
  selector: 'app-time-tracking-page',
  standalone: true,
  imports: [PageHeaderComponent, ActiveTimerBannerComponent, LogTimeDialogComponent],
  template: `
    <app-page-header
      title="Time Tracking & Worklogs"
      subtitle="Track active timers, log billable hours, and manage project timesheets."
    >
      <button
        type="button"
        (click)="isDialogOpen.set(true)"
        [disabled]="!currentOrgId()"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Start Timer / Log Time</span>
      </button>
    </app-page-header>

    <!-- Active Running Timer Banner -->
    <div class="mb-6 rounded-2xl overflow-hidden shadow-xl border border-indigo-500/20">
      <app-active-timer-banner
        [timer]="activeTimer()"
        (stopTimer)="onStopTimer($event)"
      ></app-active-timer-banner>
    </div>

    <!-- Stats Summary Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
        <span class="text-xs text-slate-400 font-mono">Total Time Logged</span>
        <div class="text-xl font-extrabold text-white font-mono">
          {{ formatHours(totalLoggedSeconds()) }}
        </div>
      </div>
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
        <span class="text-xs text-slate-400 font-mono">Total Worklogs</span>
        <div class="text-xl font-extrabold text-indigo-400 font-mono">
          {{ entries().length }}
        </div>
      </div>
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
        <span class="text-xs text-slate-400 font-mono">Timesheets Status</span>
        <div class="text-xl font-extrabold text-emerald-400 font-mono">
          {{ timesheets().length }} Active
        </div>
      </div>
    </div>

    <!-- Worklogs Table -->
    <div class="space-y-4">
      <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-2">Recent Worklogs</h3>
      <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
        <table class="w-full text-left text-xs text-slate-300">
          <thead class="bg-slate-950/80 text-[10px] text-slate-400 uppercase tracking-wider font-mono">
            <tr>
              <th class="p-3.5">Description</th>
              <th class="p-3.5">Status</th>
              <th class="p-3.5">Started At</th>
              <th class="p-3.5">Duration</th>
              <th class="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80">
            @for (e of entries(); track e.id) {
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="p-3.5 font-medium text-white">{{ e.description || 'Task session' }}</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 text-[9px] font-mono rounded bg-slate-800 text-indigo-400 font-bold border border-slate-700">
                    {{ e.status }}
                  </span>
                </td>
                <td class="p-3.5 text-slate-400 font-mono">{{ e.startTime || '-' }}</td>
                <td class="p-3.5 font-mono font-bold text-emerald-400">
                  {{ formatHours(e.durationSeconds ?? 0) }}
                </td>
                <td class="p-3.5 text-right">
                  <button
                    type="button"
                    (click)="onDeleteEntry(e.id)"
                    class="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            } @empty {
              <tr>
                <td colspan="5" class="p-8 text-center text-xs text-slate-500">
                  No worklog entries logged yet. Click "Start Timer / Log Time" to log your work.
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>

    <!-- Log Time Modal -->
    <app-log-time-dialog
      [isOpen]="isDialogOpen()"
      [organizationId]="currentOrgId() || '00000000-0000-0000-0000-000000000000'"
      [projectId]="defaultProjectId"
      (submitEntry)="onCreateTimeEntry($event)"
      (closeDialog)="isDialogOpen.set(false)"
    ></app-log-time-dialog>
  `,
})
export class TimeTrackingPageComponent implements OnInit {
  private readonly timeApi = inject(TimeTrackingApiService);
  private readonly timeState = inject(TimeTrackingState);
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly isDialogOpen = signal<boolean>(false);
  readonly defaultProjectId = '00000000-0000-0000-0000-000000000000';

  readonly activeTimer = this.timeState.activeTimer;
  readonly entries = this.timeState.entries;
  readonly timesheets = this.timeState.timesheets;
  readonly totalLoggedSeconds = this.timeState.totalLoggedSeconds;
  readonly currentOrgId = this.orgContext.organizationId;

  ngOnInit(): void {
    this.timeApi.getActiveTimer().subscribe({
      next: (res) => this.timeState.setActiveTimer(res.data),
    });

    this.timeApi.getTimeEntries().subscribe({
      next: (res) => this.timeState.setEntries(res.data),
    });

    this.timeApi.getTimesheets().subscribe({
      next: (res) => this.timeState.setTimesheets(res.data),
    });
  }

  formatHours(sec: number): string {
    const hours = (sec / 3600).toFixed(1);
    return `${hours} hrs`;
  }

  onCreateTimeEntry(req: CreateTimeEntryRequest): void {
    this.timeApi.createTimeEntry(req).subscribe({
      next: (res) => {
        this.timeState.addEntry(res.data);
        if (res.data.status === 'RUNNING') {
          this.timeState.setActiveTimer(res.data);
        }
        this.isDialogOpen.set(false);
      },
    });
  }

  onStopTimer(id: string): void {
    this.timeApi.stopTimer(id).subscribe({
      next: (res) => this.timeState.updateEntry(res.data),
    });
  }

  onDeleteEntry(id: string): void {
    if (confirm('Delete this worklog entry?')) {
      this.timeApi.deleteTimeEntry(id).subscribe({
        next: () => this.timeState.removeEntry(id),
      });
    }
  }
}
