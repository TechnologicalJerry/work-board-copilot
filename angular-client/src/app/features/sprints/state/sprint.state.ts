import { Injectable, computed, signal } from '@angular/core';
import { Sprint, SprintBurndown } from '../models/sprint.model';

@Injectable({
  providedIn: 'root',
})
export class SprintState {
  private readonly sprintsSignal = signal<Sprint[]>([]);
  private readonly selectedSprintSignal = signal<Sprint | null>(null);
  private readonly burndownSignal = signal<SprintBurndown | null>(null);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of sprints list */
  readonly sprints = this.sprintsSignal.asReadonly();

  /** Signal of active selected sprint */
  readonly selectedSprint = this.selectedSprintSignal.asReadonly();

  /** Signal of active sprint burndown */
  readonly burndown = this.burndownSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Currently ACTIVE sprint */
  readonly activeSprint = computed(() =>
    this.sprintsSignal().find((s) => s.status === 'ACTIVE')
  );

  /** PLANNED sprints */
  readonly plannedSprints = computed(() =>
    this.sprintsSignal().filter((s) => s.status === 'PLANNED')
  );

  setSprints(sprints: Sprint[]): void {
    this.sprintsSignal.set(sprints);
  }

  setSelectedSprint(sprint: Sprint | null): void {
    this.selectedSprintSignal.set(sprint);
  }

  setBurndown(burndown: SprintBurndown | null): void {
    this.burndownSignal.set(burndown);
  }

  addSprint(sprint: Sprint): void {
    this.sprintsSignal.update((current) => [sprint, ...current]);
  }

  updateSprint(updated: Sprint): void {
    this.sprintsSignal.update((current) =>
      current.map((s) => (s.id === updated.id ? { ...s, ...updated } : s))
    );
    if (this.selectedSprintSignal()?.id === updated.id) {
      this.selectedSprintSignal.set(updated);
    }
  }

  removeSprint(id: string): void {
    this.sprintsSignal.update((current) => current.filter((s) => s.id !== id));
    if (this.selectedSprintSignal()?.id === id) {
      this.selectedSprintSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
