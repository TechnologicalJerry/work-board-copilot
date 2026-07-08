export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  moduleNameMapper: {
    '@boardpilot/types': '<rootDir>/../../shared/packages/types/src',
    '@boardpilot/errors': '<rootDir>/../../shared/packages/errors/src',
    '@boardpilot/logger': '<rootDir>/../../shared/packages/logger/src',
    '@boardpilot/middlewares': '<rootDir>/../../shared/packages/middlewares/src',
    '@boardpilot/common': '<rootDir>/../../shared/packages/common/src',
    '@boardpilot/events': '<rootDir>/../../shared/packages/events/src',
    '@boardpilot/validation': '<rootDir>/../../shared/packages/validation/src',
    '@boardpilot/config': '<rootDir>/../../shared/packages/config/src',
  },
  collectCoverageFrom: ['src/**/*.ts'],
};
