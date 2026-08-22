import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly activeRequestCount = signal<number>(0);
  private readonly featureLoadingStates = signal<Record<string, boolean>>({});

  /** Signal indicating if any global HTTP request is currently active */
  readonly isLoading = computed(() => this.activeRequestCount() > 0);

  /** Signal returning active request count */
  readonly requestCount = computed(() => this.activeRequestCount());

  /** Start a global loading request */
  startLoading(): void {
    this.activeRequestCount.update((count) => count + 1);
  }

  /** Stop a global loading request */
  stopLoading(): void {
    this.activeRequestCount.update((count) => Math.max(0, count - 1));
  }

  /** Force reset all loading states */
  resetLoading(): void {
    this.activeRequestCount.set(0);
    this.featureLoadingStates.set({});
  }

  /** Set feature or component-specific loading state */
  setFeatureLoading(featureKey: string, loading: boolean): void {
    this.featureLoadingStates.update((states) => ({
      ...states,
      [featureKey]: loading,
    }));
  }

  /** Check if a specific feature is loading */
  isFeatureLoading(featureKey: string): boolean {
    return !!this.featureLoadingStates()[featureKey];
  }
}
