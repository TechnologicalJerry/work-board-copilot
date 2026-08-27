import { AppConfig, productionConfig } from '../app/core/config/app-config';

export const environment: AppConfig = {
  ...productionConfig,
  production: true,
  environmentName: 'production',
  apiGatewayUrl: '/api/v1',
};
