import { Injectable, OnDestroy, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectivityService implements OnDestroy {
  private readonly onlineSignal = signal<boolean>(
    typeof window !== 'undefined' && typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  /** Signal indicating online/offline network status */
  readonly isOnline = this.onlineSignal.asReadonly();

  private onlineHandler?: () => void;
  private offlineHandler?: () => void;

  constructor() {
    if (typeof window !== 'undefined') {
      this.onlineHandler = () => this.onlineSignal.set(true);
      this.offlineHandler = () => this.onlineSignal.set(false);

      window.addEventListener('online', this.onlineHandler);
      window.addEventListener('offline', this.offlineHandler);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      if (this.onlineHandler) {
        window.removeEventListener('online', this.onlineHandler);
      }
      if (this.offlineHandler) {
        window.removeEventListener('offline', this.offlineHandler);
      }
    }
  }
}
