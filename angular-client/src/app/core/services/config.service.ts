import { Injectable, inject } from '@angular/core';
import { AppConfigService } from '../config/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly appConfigService = inject(AppConfigService);

  readonly config = this.appConfigService.config;
  readonly apiGatewayUrl = this.appConfigService.apiGatewayUrl;
  readonly isProduction = this.appConfigService.isProduction;
  readonly featureFlags = this.appConfigService.featureFlags;

  isFeatureEnabled(flagName: string): boolean {
    return this.appConfigService.isFeatureEnabled(flagName);
  }

  updateFeatureFlags(flags: Record<string, boolean>): void {
    this.appConfigService.updateFeatureFlags(flags);
  }
}
