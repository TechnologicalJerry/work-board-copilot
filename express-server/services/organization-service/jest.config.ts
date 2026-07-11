import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/tests/**/*.test.ts'],
  moduleNameMapper: {
    '@boardpilot/common': '<rootDir>/../../shared/packages/common/src/index.ts',
    '@boardpilot/errors': '<rootDir>/../../shared/packages/errors/src/index.ts',
    '@boardpilot/types': '<rootDir>/../../shared/packages/types/src/index.ts',
    '@boardpilot/logger': '<rootDir>/../../shared/packages/logger/src/index.ts',
    '@boardpilot/events': '<rootDir>/../../shared/packages/events/src/index.ts',
    '@boardpilot/middlewares': '<rootDir>/../../shared/packages/middlewares/src/index.ts',
    '@boardpilot/validation': '<rootDir>/../../shared/packages/validation/src/index.ts',
    '@boardpilot/config': '<rootDir>/../../shared/packages/config/src/index.ts',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/server.ts',
    '!src/infrastructure/database/prisma.ts',
  ],
  coverageDirectory: 'coverage',
  passWithNoTests: true,
};

export default config;
