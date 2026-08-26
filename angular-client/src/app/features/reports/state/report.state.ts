import { Injectable, signal } from '@angular/core';
import {
  VelocityReport,
  BurndownReport,
  WorkloadReport,
  CycleTimeReport,
  SavedReport,
} from '../models/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportState {
  private readonly velocitySignal = signal<VelocityReport | null>(null);
  private readonly burndownSignal = signal<BurndownReport | null>(null);
  private readonly workloadSignal = signal<WorkloadReport | null>(null);
  private readonly cycleTimeSignal = signal<CycleTimeReport | null>(null);
  private readonly savedReportsSignal = signal<SavedReport[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly velocity = this.velocitySignal.asReadonly();
  readonly burndown = this.burndownSignal.asReadonly();
  readonly workload = this.workloadSignal.asReadonly();
  readonly cycleTime = this.cycleTimeSignal.asReadonly();
  readonly savedReports = this.savedReportsSignal.asReadonly();
  readonly isLoading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  setVelocity(report: VelocityReport | null): void {
    this.velocitySignal.set(report);
  }

  setBurndown(report: BurndownReport | null): void {
    this.burndownSignal.set(report);
  }

  setWorkload(report: WorkloadReport | null): void {
    this.workloadSignal.set(report);
  }

  setCycleTime(report: CycleTimeReport | null): void {
    this.cycleTimeSignal.set(report);
  }

  setSavedReports(reports: SavedReport[]): void {
    this.savedReportsSignal.set(reports);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
