import { AppConfig, defaultConfig } from '../app/core/config/app-config';

export const environment: AppConfig = {
  ...defaultConfig,
  production: false,
  environmentName: 'development',
  apiGatewayUrl: 'http://localhost:3000/api/v1',
};
