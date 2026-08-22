import { TestBed } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { APP_CONFIG, defaultConfig, stagingConfig } from './app-config';

describe('AppConfigService', () => {
  let service: AppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConfigService, { provide: APP_CONFIG, useValue: defaultConfig }],
    });
    service = TestBed.inject(AppConfigService);
  });

  it('should be created and return default configuration signals', () => {
    expect(service).toBeTruthy();
    expect(service.apiGatewayUrl()).toBe(defaultConfig.apiGatewayUrl);
    expect(service.isProduction()).toBe(false);
    expect(service.environmentName()).toBe('development');
  });

  it('should check feature flags correctly', () => {
    expect(service.isFeatureEnabled('enableAiCopilot')).toBe(true);
    expect(service.isFeatureEnabled('nonExistentFlag')).toBe(false);
  });

  it('should update feature flags reactively', () => {
    service.updateFeatureFlags({ enableAiCopilot: false, newFeature: true });
    expect(service.isFeatureEnabled('enableAiCopilot')).toBe(false);
    expect(service.isFeatureEnabled('newFeature')).toBe(true);
  });

  it('should update API Gateway base URL dynamically', () => {
    service.setApiGatewayUrl('https://custom-gateway.local/api');
    expect(service.apiGatewayUrl()).toBe('https://custom-gateway.local/api');
  });

  it('should support alternative custom config injection', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [AppConfigService, { provide: APP_CONFIG, useValue: stagingConfig }],
    });
    const customService = TestBed.inject(AppConfigService);
    expect(customService.environmentName()).toBe('staging');
    expect(customService.apiGatewayUrl()).toBe(stagingConfig.apiGatewayUrl);
  });
});
