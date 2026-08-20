import { Injectable, computed, inject, signal } from '@angular/core';
import { APP_ENVIRONMENT, AppEnvironment, defaultEnvironment } from '../config/app-environment.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly initialEnv = inject(APP_ENVIRONMENT, { optional: true }) ?? defaultEnvironment;

  // Signal state for environment config
  readonly environment = signal<AppEnvironment>(this.initialEnv);

  // Computed signals
  readonly apiGatewayUrl = computed(() => this.environment().apiGatewayUrl);
  readonly isProduction = computed(() => this.environment().production);
  readonly featureFlags = computed(() => this.environment().featureFlags);

  isFeatureEnabled(flagName: string): boolean {
    return !!this.environment().featureFlags[flagName];
  }

  updateFeatureFlags(flags: Record<string, boolean>): void {
    this.environment.update((env) => ({
      ...env,
      featureFlags: {
        ...env.featureFlags,
        ...flags,
      },
    }));
  }
}
