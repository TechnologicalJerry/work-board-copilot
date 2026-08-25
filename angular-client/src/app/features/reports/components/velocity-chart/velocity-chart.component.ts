import { Component, input } from '@angular/core';
import { VelocityReport } from '../../models/report.model';

@Component({
  selector: 'app-velocity-chart',
  standalone: true,
  template: `
    @if (report(); as v) {
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Sprint Velocity Breakdown</h4>
            <p class="text-xs text-slate-500">Story points commitment vs actual completed per sprint.</p>
          </div>
          <div class="px-3 py-1 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-bold">
            Average Velocity: {{ v.averageVelocity || 0 }} pts/sprint
          </div>
        </div>

        <div class="space-y-4">
          @for (s of v.sprints; track s.sprintId) {
            <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div class="flex justify-between text-xs">
                <span class="font-bold text-white">{{ s.sprintName }}</span>
                <span class="text-slate-400 font-mono">
                  <strong class="text-emerald-400">{{ s.completedPoints }}</strong> / {{ s.commitmentPoints }} pts
                </span>
              </div>

              <!-- Bar -->
              <div class="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex">
                <div
                  class="h-full bg-emerald-500 transition-all duration-500"
                  [style.width.%]="calcPercent(s.completedPoints, s.commitmentPoints)"
                ></div>
              </div>
            </div>
          } @empty {
            <div class="p-6 text-center text-xs text-slate-500">
              No sprint velocity history available for this project.
            </div>
          }
        </div>
      </div>
    }
  `,
})
export class VelocityChartComponent {
  readonly report = input<VelocityReport | null>(null);

  calcPercent(completed: number, commitment: number): number {
    if (!commitment || commitment <= 0) return 0;
    return Math.min(100, Math.round((completed / commitment) * 100));
  }
}
