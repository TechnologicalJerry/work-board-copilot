import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '@boardpilot/common': '<rootDir>/../../shared/packages/common/src',
    '@boardpilot/config': '<rootDir>/../../shared/packages/config/src',
    '@boardpilot/errors': '<rootDir>/../../shared/packages/errors/src',
    '@boardpilot/events': '<rootDir>/../../shared/packages/events/src',
    '@boardpilot/logger': '<rootDir>/../../shared/packages/logger/src',
    '@boardpilot/middlewares': '<rootDir>/../../shared/packages/middlewares/src',
    '@boardpilot/types': '<rootDir>/../../shared/packages/types/src',
    '@boardpilot/validation': '<rootDir>/../../shared/packages/validation/src',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
};

export default config;
