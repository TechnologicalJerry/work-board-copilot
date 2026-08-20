import { InjectionToken } from '@angular/core';

export interface AppEnvironment {
  production: boolean;
  environmentName: string;
  apiGatewayUrl: string;
  version: string;
  featureFlags: Record<string, boolean>;
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    enableConsole: boolean;
  };
}

export const APP_ENVIRONMENT = new InjectionToken<AppEnvironment>('APP_ENVIRONMENT');

export const defaultEnvironment: AppEnvironment = {
  production: false,
  environmentName: 'development',
  apiGatewayUrl: 'http://localhost:3000/api/v1',
  version: '1.0.0-stage1',
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
