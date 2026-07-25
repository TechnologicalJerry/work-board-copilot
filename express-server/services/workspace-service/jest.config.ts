import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '@boardpilot/errors': '<rootDir>/../../shared/packages/errors/src/index.ts',
    '@boardpilot/common': '<rootDir>/../../shared/packages/common/src/index.ts',
    '@boardpilot/middlewares': '<rootDir>/../../shared/packages/middlewares/src/index.ts',
    '@boardpilot/events': '<rootDir>/../../shared/packages/events/src/index.ts',
    '@boardpilot/logger': '<rootDir>/../../shared/packages/logger/src/index.ts',
    '@boardpilot/types': '<rootDir>/../../shared/packages/types/src/index.ts',
    '@boardpilot/config': '<rootDir>/../../shared/packages/config/src/index.ts',
    '@boardpilot/validation': '<rootDir>/../../shared/packages/validation/src/index.ts',
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: {
        paths: {
          '@boardpilot/errors': ['../../shared/packages/errors/src/index.ts'],
          '@boardpilot/common': ['../../shared/packages/common/src/index.ts'],
          '@boardpilot/middlewares': ['../../shared/packages/middlewares/src/index.ts'],
          '@boardpilot/events': ['../../shared/packages/events/src/index.ts'],
          '@boardpilot/logger': ['../../shared/packages/logger/src/index.ts'],
          '@boardpilot/types': ['../../shared/packages/types/src/index.ts'],
          '@boardpilot/config': ['../../shared/packages/config/src/index.ts'],
          '@boardpilot/validation': ['../../shared/packages/validation/src/index.ts'],
        },
      },
    }],
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/server.ts',
    '!src/infrastructure/database/prisma.ts',
  ],
};

export default config;
