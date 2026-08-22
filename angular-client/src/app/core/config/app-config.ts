import { InjectionToken } from '@angular/core';

export type EnvironmentName = 'development' | 'test' | 'staging' | 'production';

export interface AppConfig {
  production: boolean;
  environmentName: EnvironmentName;
  apiGatewayUrl: string;
  appName: string;
  appVersion: string;
  featureFlags: Record<string, boolean>;
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    enableConsole: boolean;
  };
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const defaultConfig: AppConfig = {
  production: false,
  environmentName: 'development',
  apiGatewayUrl: 'http://localhost:3000/api/v1',
  appName: 'Work Board Copilot',
  appVersion: '1.0.0',
  featureFlags: {
    enableAiCopilot: true,
    enableRealtimeNotifications: true,
    enableMultiTenancy: true,
  },
  logging: {
    level: 'debug',
    enableConsole: true,
  },
};

export const stagingConfig: AppConfig = {
  ...defaultConfig,
  environmentName: 'staging',
  apiGatewayUrl: 'https://staging-api.workboardcopilot.internal/api/v1',
  logging: {
    level: 'info',
    enableConsole: true,
  },
};

export const productionConfig: AppConfig = {
  ...defaultConfig,
  production: true,
  environmentName: 'production',
  apiGatewayUrl: 'https://api.workboardcopilot.com/api/v1',
  logging: {
    level: 'error',
    enableConsole: false,
  },
};

export const testConfig: AppConfig = {
  ...defaultConfig,
  environmentName: 'test',
  apiGatewayUrl: 'http://localhost:4000/api/v1',
  logging: {
    level: 'debug',
    enableConsole: false,
  },
};
