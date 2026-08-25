import { Component, OnInit, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { ReportApiService } from '../../services/report-api.service';
import { ReportState } from '../../state/report.state';
import { VelocityChartComponent } from '../../components/velocity-chart/velocity-chart.component';
import { BurndownChartComponent } from '../../components/burndown-chart/burndown-chart.component';
import { WorkspaceContextService } from '@core/context/workspace-context.service';

@Component({
  selector: 'app-report-dashboard-page',
  standalone: true,
  imports: [PageHeaderComponent, VelocityChartComponent, BurndownChartComponent],
  template: `
    <app-page-header
      title="Reports & Project Analytics"
      subtitle="Sprint velocity, burndown, workload distribution, and lead/cycle time performance."
    ></app-page-header>

    <!-- Tab Navigation -->
    <div class="flex items-center space-x-2 border-b border-slate-800 pb-3 mb-6">
      <button
        type="button"
        (click)="activeTab.set('velocity')"
        [class]="activeTab() === 'velocity' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'"
        class="px-4 py-2 rounded-xl text-xs transition-colors"
      >
        Velocity Chart
      </button>
      <button
        type="button"
        (click)="activeTab.set('burndown')"
        [class]="activeTab() === 'burndown' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'"
        class="px-4 py-2 rounded-xl text-xs transition-colors"
      >
        Burndown Chart
      </button>
      <button
        type="button"
        (click)="activeTab.set('workload')"
        [class]="activeTab() === 'workload' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-900 text-slate-400 hover:text-white'"
        class="px-4 py-2 rounded-xl text-xs transition-colors"
      >
        Team Workload
      </button>
    </div>

    <!-- Active Tab Panel -->
    <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800">
      @if (activeTab() === 'velocity') {
        <app-velocity-chart [report]="velocity()"></app-velocity-chart>
      } @else if (activeTab() === 'burndown') {
        <app-burndown-chart [report]="burndown()"></app-burndown-chart>
      } @else if (activeTab() === 'workload') {
        <div class="space-y-4">
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Team Workload Distribution</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            @for (w of workload()?.workload || []; track w.userId) {
              <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-white">{{ w.userName }}</div>
                  <div class="text-[10px] text-slate-500 font-mono">{{ w.assignedTasksCount }} tasks assigned</div>
                </div>
                <div class="text-sm font-bold text-indigo-400 font-mono">
                  {{ w.totalStoryPoints }} pts
                </div>
              </div>
            } @empty {
              <div class="col-span-full py-8 text-center text-xs text-slate-500">
                No workload distribution metrics available for current project.
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class ReportDashboardPageComponent implements OnInit {
  private readonly reportApi = inject(ReportApiService);
  private readonly reportState = inject(ReportState);
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly activeTab = signal<'velocity' | 'burndown' | 'workload'>('velocity');
  readonly defaultProjectId = '00000000-0000-0000-0000-000000000000';
  readonly defaultSprintId = '00000000-0000-0000-0000-000000000000';

  readonly velocity = this.reportState.velocity;
  readonly burndown = this.reportState.burndown;
  readonly workload = this.reportState.workload;

  ngOnInit(): void {
    this.reportApi.getVelocity(this.defaultProjectId).subscribe({
      next: (res) => this.reportState.setVelocity(res.data),
    });

    this.reportApi.getBurndown(this.defaultSprintId).subscribe({
      next: (res) => this.reportState.setBurndown(res.data),
    });

    this.reportApi.getWorkload(this.defaultProjectId).subscribe({
      next: (res) => this.reportState.setWorkload(res.data),
    });
  }
}
