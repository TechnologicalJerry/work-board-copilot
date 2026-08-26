import { Injectable, computed, signal } from '@angular/core';
import { TimeEntry, Timesheet } from '../models/time-tracking.model';

@Injectable({
  providedIn: 'root',
})
export class TimeTrackingState {
  private readonly activeTimerSignal = signal<TimeEntry | null>(null);
  private readonly entriesSignal = signal<TimeEntry[]>([]);
  private readonly timesheetsSignal = signal<Timesheet[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Active running timer signal */
  readonly activeTimer = this.activeTimerSignal.asReadonly();

  /** List of time entries */
  readonly entries = this.entriesSignal.asReadonly();

  /** List of timesheets */
  readonly timesheets = this.timesheetsSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Total logged seconds computed signal */
  readonly totalLoggedSeconds = computed(() =>
    this.entriesSignal().reduce((acc, curr) => acc + (curr.durationSeconds ?? 0), 0)
  );

  setActiveTimer(timer: TimeEntry | null): void {
    this.activeTimerSignal.set(timer);
  }

  setEntries(entries: TimeEntry[]): void {
    this.entriesSignal.set(entries);
  }

  setTimesheets(timesheets: Timesheet[]): void {
    this.timesheetsSignal.set(timesheets);
  }

  addEntry(entry: TimeEntry): void {
    this.entriesSignal.update((current) => [entry, ...current]);
  }

  updateEntry(updated: TimeEntry): void {
    this.entriesSignal.update((current) =>
      current.map((e) => (e.id === updated.id ? { ...e, ...updated } : e))
    );
    if (this.activeTimerSignal()?.id === updated.id) {
      if (updated.status !== 'RUNNING') {
        this.activeTimerSignal.set(null);
      } else {
        this.activeTimerSignal.set(updated);
      }
    }
  }

  removeEntry(id: string): void {
    this.entriesSignal.update((current) => current.filter((e) => e.id !== id));
    if (this.activeTimerSignal()?.id === id) {
      this.activeTimerSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
