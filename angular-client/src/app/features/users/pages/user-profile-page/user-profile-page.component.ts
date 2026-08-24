import { Component, OnInit, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { UserApiService } from '../../services/user-api.service';
import { UserState } from '../../state/user.state';
import { AuthService } from '@features/auth/services/auth.service';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <app-page-header
      title="User Profile"
      subtitle="View your identity, role assignments, and personal details."
    >
      <a
        routerLink="/settings"
        class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span>Edit Account Settings</span>
      </a>
    </app-page-header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Profile Card -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 flex flex-col items-center text-center">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-black text-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20">
          {{ userInitials() }}
        </div>

        <div>
          <h3 class="text-base font-bold text-white">{{ userName() }}</h3>
          <p class="text-xs text-slate-400 font-mono mt-0.5">{{ userEmail() }}</p>
          @if (profile()?.title) {
            <span class="inline-block mt-2 px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300">
              {{ profile()?.title }}
            </span>
          }
        </div>

        <div class="w-full pt-4 border-t border-slate-800 text-xs space-y-2 text-left">
          @if (profile()?.location) {
            <div class="flex justify-between text-slate-400">
              <span>Location:</span>
              <span class="font-medium text-slate-200">{{ profile()?.location }}</span>
            </div>
          }
          @if (profile()?.timezone) {
            <div class="flex justify-between text-slate-400">
              <span>Timezone:</span>
              <span class="font-medium text-slate-200">{{ profile()?.timezone }}</span>
            </div>
          }
        </div>
      </div>

      <!-- Bio & Activity Card -->
      <div class="lg:col-span-2 space-y-6">
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h3 class="text-sm font-bold text-white">About / Biography</h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            {{ profile()?.bio || 'No biography details provided yet. Add your bio in account settings.' }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Recent Account Activity</h3>
          <div class="divide-y divide-slate-800/80">
            @for (log of activityLogs(); track log.id) {
              <div class="py-2.5 flex items-center justify-between text-xs">
                <div>
                  <div class="font-medium text-slate-200">{{ log.action }}</div>
                  @if (log.description) {
                    <div class="text-[11px] text-slate-400">{{ log.description }}</div>
                  }
                </div>
                <span class="text-[10px] text-slate-500 font-mono">{{ log.createdAt }}</span>
              </div>
            } @empty {
              <div class="py-4 text-center text-xs text-slate-500">No activity logs recorded</div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UserProfilePageComponent implements OnInit {
  private readonly userApi = inject(UserApiService);
  private readonly userState = inject(UserState);
  private readonly authService = inject(AuthService);

  readonly profile = this.userState.profile;
  readonly activityLogs = this.userState.activityLogs;

  readonly user = this.authService.currentUser;

  readonly userName = computed(() => {
    const p = this.profile();
    if (p && (p.firstName || p.lastName)) {
      return `${p.firstName ?? ''} ${p.lastName ?? ''}`.trim();
    }
    const u = this.user();
    if (!u) return 'User';
    return `${u.firstName} ${u.lastName}`.trim() || u.email;
  });

  readonly userEmail = computed(() => this.profile()?.email ?? this.user()?.email ?? '');

  readonly userInitials = computed(() => {
    const p = this.profile();
    if (p?.firstName) {
      return (p.firstName.charAt(0) + (p.lastName?.charAt(0) ?? '')).toUpperCase();
    }
    return (this.userEmail().charAt(0) ?? 'U').toUpperCase();
  });

  ngOnInit(): void {
    this.userApi.getMyProfile().subscribe({
      next: (res) => {
        this.userState.setProfile(res.data);
        if (res.data.id) {
          this.userApi.getUserActivity(res.data.id).subscribe({
            next: (actRes) => this.userState.setActivityLogs(actRes.data),
          });
        }
      },
    });
  }
}
