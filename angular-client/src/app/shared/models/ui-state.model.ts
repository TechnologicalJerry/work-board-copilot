export type LoadingStatus = 'idle' | 'loading' | 'success' | 'error';
export type ThemeMode = 'dark' | 'light' | 'system';

export interface ToastMessage {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message?: string;
  duration?: number;
}
