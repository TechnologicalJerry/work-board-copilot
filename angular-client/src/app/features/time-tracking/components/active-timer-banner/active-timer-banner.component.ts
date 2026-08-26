import { Component, input, output, signal, OnDestroy, OnInit } from '@angular/core';
import { TimeEntry } from '../../models/time-tracking.model';

@Component({
  selector: 'app-active-timer-banner',
  standalone: true,
  template: `
    @if (timer(); as t) {
      <div class="bg-indigo-950/60 border-b border-indigo-500/30 px-4 py-2 flex items-center justify-between text-xs text-slate-200">
        <div class="flex items-center space-x-3">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div class="font-medium text-white">
            <span>Timer Running:</span>
            <span class="text-slate-300 ml-1 font-mono">{{ t.description || 'Task Session' }}</span>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="font-mono text-sm font-bold text-indigo-400 tracking-wider">
            {{ formattedElapsedTime() }}
          </div>
          <button
            type="button"
            (click)="onStopTimer()"
            class="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs shadow transition-colors"
          >
            Stop Timer
          </button>
        </div>
      </div>
    }
  `,
})
export class ActiveTimerBannerComponent implements OnInit, OnDestroy {
  readonly timer = input<TimeEntry | null>(null);
  readonly stopTimer = output<string>();

  readonly formattedElapsedTime = signal<string>('00:00:00');
  private intervalId: any = null;

  ngOnInit(): void {
    this.startCounter();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCounter(): void {
    this.intervalId = setInterval(() => {
      const t = this.timer();
      if (t && t.startTime) {
        const start = new Date(t.startTime).getTime();
        const now = new Date().getTime();
        const diffSeconds = Math.max(0, Math.floor((now - start) / 1000));
        this.formattedElapsedTime.set(this.formatSeconds(diffSeconds));
      } else {
        this.formattedElapsedTime.set('00:00:00');
      }
    }, 1000);
  }

  private formatSeconds(sec: number): string {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    const pad = (n: number) => (n < 10 ? '0' + n : String(n));
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  onStopTimer(): void {
    const t = this.timer();
    if (t) {
      this.stopTimer.emit(t.id);
    }
  }
}
