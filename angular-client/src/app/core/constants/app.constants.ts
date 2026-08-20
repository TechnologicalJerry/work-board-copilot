export const APP_CONSTANTS = {
  NAME: 'Work Board Copilot',
  STORAGE_KEYS: {
    ACCESS_TOKEN: 'wbc_access_token',
    REFRESH_TOKEN: 'wbc_refresh_token',
    ACTIVE_ORG: 'wbc_active_org',
    ACTIVE_WORKSPACE: 'wbc_active_workspace',
    THEME: 'wbc_theme',
    SIDEBAR_COLLAPSED: 'wbc_sidebar_collapsed',
  },
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 20,
    MAX_LIMIT: 100,
  },
  HTTP_TIMEOUT_MS: 30000,
} as const;
