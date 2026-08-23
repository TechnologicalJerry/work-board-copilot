import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NavigationService } from '@core/navigation/navigation.service';
import { OrganizationSwitcherComponent } from '../organization-switcher/organization-switcher.component';
import { WorkspaceSwitcherComponent } from '../workspace-switcher/workspace-switcher.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    LucideAngularModule,
    OrganizationSwitcherComponent,
    WorkspaceSwitcherComponent,
    UserMenuComponent,
  ],
  template: `
    <header class="h-16 bg-slate-900 border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between z-30 shrink-0 select-none">
      <!-- Left side: Mobile menu toggle + Tenant Context Switchers -->
      <div class="flex items-center space-x-3">
        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          (click)="toggleMobileNav()"
          class="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Organization & Workspace Switchers (hidden on small screens, shown in header on md+) -->
        <div class="hidden sm:flex items-center space-x-2.5">
          <app-organization-switcher></app-organization-switcher>
          <span class="text-slate-700 font-light">/</span>
          <app-workspace-switcher></app-workspace-switcher>
        </div>
      </div>

      <!-- Right side: Global Search Placeholder, Notifications Placeholder, User Menu -->
      <div class="flex items-center space-x-3">
        <!-- Global Search Trigger Placeholder -->
        <button
          type="button"
          routerLink="/search"
          class="hidden lg:flex items-center space-x-2.5 px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/60 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs transition-all"
        >
          <lucide-icon name="Search" class="w-3.5 h-3.5"></lucide-icon>
          <span>Search resources...</span>
          <kbd class="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-400 border border-slate-700">⌘K</kbd>
        </button>

        <!-- Notification Bell Placeholder -->
        <a
          routerLink="/notifications"
          class="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Notifications"
        >
          <lucide-icon name="Bell" class="w-4 h-4"></lucide-icon>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-slate-900"></span>
        </a>

        <!-- Vertical Divider -->
        <div class="h-5 w-px bg-slate-800"></div>

        <!-- User Menu Component -->
        <app-user-menu></app-user-menu>
      </div>
    </header>
  `,
})
export class AppHeaderComponent {
  private readonly navService = inject(NavigationService);

  toggleMobileNav(): void {
    this.navService.toggleMobileNav();
  }
}
