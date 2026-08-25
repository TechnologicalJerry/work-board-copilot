import { Component, input } from '@angular/core';
import { BurndownReport } from '../../models/report.model';

@Component({
  selector: 'app-burndown-chart',
  standalone: true,
  template: `
    @if (report(); as b) {
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Sprint Burndown</h4>
            <p class="text-xs text-slate-500">{{ b.sprintName }} • {{ b.totalPoints }} total story points</p>
          </div>
          <div class="flex items-center space-x-4 text-xs">
            <div class="flex items-center space-x-1.5">
              <span class="w-3 h-3 rounded-full bg-slate-600"></span>
              <span class="text-slate-400">Ideal Guideline</span>
            </div>
            <div class="flex items-center space-x-1.5">
              <span class="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span class="text-slate-200 font-bold">Actual Remaining</span>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            @for (dp of b.dataPoints; track dp.date) {
              <div class="p-3 rounded-xl bg-slate-900 border border-slate-800/80 text-center space-y-1">
                <span class="text-[10px] text-slate-500 font-mono block">{{ dp.date }}</span>
                <div class="text-xs font-bold text-indigo-400 font-mono">
                  {{ dp.actualRemainingPoints }} pts
                </div>
                <span class="text-[9px] text-slate-600 font-mono">Ideal: {{ dp.idealRemainingPoints }}</span>
              </div>
            } @empty {
              <div class="col-span-full py-6 text-center text-xs text-slate-500">
                No burndown datapoints found for active sprint.
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class BurndownChartComponent {
  readonly report = input<BurndownReport | null>(null);
}
