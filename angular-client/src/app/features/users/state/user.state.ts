import { Injectable, inject, signal } from '@angular/core';
import { AuthService } from '@features/auth/services/auth.service';
import { UserProfile, UserActivityLog } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserState {
  private readonly authService = inject(AuthService);

  private readonly profileSignal = signal<UserProfile | null>(null);
  private readonly activityLogsSignal = signal<UserActivityLog[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** User profile signal */
  readonly profile = this.profileSignal.asReadonly();

  /** Activity log signal */
  readonly activityLogs = this.activityLogsSignal.asReadonly();

  /** Loading signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error signal */
  readonly error = this.errorSignal.asReadonly();

  setProfile(profile: UserProfile): void {
    this.profileSignal.set(profile);
    // Keep auth service user state updated
    const currentUser = this.authService.currentUser();
    if (currentUser) {
      this.authService.updateCurrentUser({
        ...currentUser,
        firstName: profile.firstName,
        lastName: profile.lastName,
      });
    }
  }

  setActivityLogs(logs: UserActivityLog[]): void {
    this.activityLogsSignal.set(logs);
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
