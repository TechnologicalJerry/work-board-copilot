import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="relative inline-block text-left">
      <button
        type="button"
        (click)="toggleOpen()"
        aria-haspopup="menu"
        [attr.aria-expanded]="isOpen()"
        class="flex items-center space-x-2.5 p-1.5 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      >
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-indigo-500/20">
          {{ userInitials() }}
        </div>
        <div class="hidden md:block text-left text-xs leading-tight">
          <div class="font-semibold text-slate-200 truncate max-w-[120px]">{{ userName() }}</div>
          <div class="text-[10px] text-slate-400 truncate max-w-[120px]">{{ userEmail() }}</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200" [class.rotate-180]="isOpen()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      @if (isOpen()) {
        <div class="fixed inset-0 z-40" (click)="close()"></div>

        <div class="absolute right-0 mt-2 w-60 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl z-50 py-2 divide-y divide-slate-800/80">
          <div class="px-4 py-2.5">
            <p class="text-xs font-bold text-white truncate">{{ userName() }}</p>
            <p class="text-[11px] text-slate-400 truncate mt-0.5">{{ userEmail() }}</p>
            @if (userRole()) {
              <span class="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {{ userRole() }}
              </span>
            }
          </div>

          <div class="py-1">
            <a
              routerLink="/settings"
              (click)="close()"
              class="w-full px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800/80 flex items-center space-x-2.5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Account Settings</span>
            </a>
          </div>

          <div class="py-1">
            <button
              type="button"
              (click)="onLogout()"
              class="w-full px-4 py-2 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 flex items-center space-x-2.5 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      }
    </div>
  `,
})
export class UserMenuComponent {
  private readonly authService = inject(AuthService);

  readonly isOpen = signal<boolean>(false);
  readonly user = this.authService.currentUser;

  readonly userName = computed(() => {
    const u = this.user();
    if (!u) return 'User';
    return `${u.firstName} ${u.lastName}`.trim() || u.email;
  });

  readonly userEmail = computed(() => this.user()?.email ?? '');
  readonly userRole = computed(() => this.user()?.role ?? '');

  readonly userInitials = computed(() => {
    const u = this.user();
    if (!u) return 'U';
    const first = u.firstName?.charAt(0) ?? '';
    const last = u.lastName?.charAt(0) ?? '';
    return (first + last).toUpperCase() || u.email.charAt(0).toUpperCase();
  });

  toggleOpen(): void {
    this.isOpen.update((open) => !open);
  }

  close(): void {
    this.isOpen.set(false);
  }

  onLogout(): void {
    this.close();
    this.authService.logout().subscribe();
  }
}
