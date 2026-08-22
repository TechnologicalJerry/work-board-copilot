import { Injectable, computed, inject, signal } from '@angular/core';
import { APP_CONFIG, AppConfig, defaultConfig } from './app-config';
import { APP_ENVIRONMENT } from './app-environment.interface';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly configToken = inject(APP_CONFIG, { optional: true });
  private readonly envToken = inject(APP_ENVIRONMENT, { optional: true });

  private readonly initialConfig: AppConfig = this.configToken ?? {
    ...defaultConfig,
    ...(this.envToken ? { apiGatewayUrl: this.envToken.apiGatewayUrl } : {}),
  };

  // Reactive Signal State
  readonly config = signal<AppConfig>(this.initialConfig);

  // Computed signals
  readonly apiGatewayUrl = computed(() => this.config().apiGatewayUrl);
  readonly isProduction = computed(() => this.config().production);
  readonly environmentName = computed(() => this.config().environmentName);
  readonly appName = computed(() => this.config().appName);
  readonly appVersion = computed(() => this.config().appVersion);
  readonly featureFlags = computed(() => this.config().featureFlags);
  readonly loggingConfig = computed(() => this.config().logging);

  isFeatureEnabled(flagName: string): boolean {
    return !!this.config().featureFlags[flagName];
  }

  updateFeatureFlags(flags: Record<string, boolean>): void {
    this.config.update((cfg) => ({
      ...cfg,
      featureFlags: {
        ...cfg.featureFlags,
        ...flags,
      },
    }));
  }

  setApiGatewayUrl(url: string): void {
    this.config.update((cfg) => ({
      ...cfg,
      apiGatewayUrl: url,
    }));
  }
}
