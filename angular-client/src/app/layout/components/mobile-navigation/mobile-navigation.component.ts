import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NavigationService } from '@core/navigation/navigation.service';
import { OrganizationSwitcherComponent } from '../organization-switcher/organization-switcher.component';
import { WorkspaceSwitcherComponent } from '../workspace-switcher/workspace-switcher.component';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, OrganizationSwitcherComponent, WorkspaceSwitcherComponent],
  template: `
    @if (isOpen()) {
      <!-- Backdrop -->
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden" (click)="close()"></div>

      <!-- Drawer -->
      <div
        class="fixed inset-y-0 left-0 w-72 max-w-[80vw] bg-slate-900 border-r border-slate-800 shadow-2xl z-50 flex flex-col md:hidden transform transition-transform duration-300 ease-in-out select-none"
        aria-label="Mobile Navigation"
      >
        <!-- Drawer Header -->
        <div class="h-16 px-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-black text-sm flex items-center justify-center">
              W
            </div>
            <span class="font-bold text-sm tracking-tight text-white">Work Board</span>
          </div>

          <button
            type="button"
            (click)="close()"
            class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Tenant Context Selectors in Mobile Drawer -->
        <div class="p-4 border-b border-slate-800 space-y-3 shrink-0">
          <div>
            <div class="text-[10px] uppercase font-bold text-slate-500 mb-1">Organization</div>
            <app-organization-switcher></app-organization-switcher>
          </div>
          <div>
            <div class="text-[10px] uppercase font-bold text-slate-500 mb-1">Workspace</div>
            <app-workspace-switcher></app-workspace-switcher>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          @for (group of groups(); track group.id) {
            <div class="space-y-1">
              @if (group.title) {
                <h3 class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {{ group.title }}
                </h3>
              }

              @for (item of group.items; track item.id) {
                <a
                  [routerLink]="item.route"
                  routerLinkActive="bg-indigo-600/10 text-indigo-400 border-indigo-500/30 font-semibold"
                  [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
                  (click)="close()"
                  class="flex items-center px-3 py-2.5 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent transition-all"
                >
                  @if (item.icon) {
                    <lucide-icon [name]="item.icon" class="w-4 h-4 shrink-0 mr-3"></lucide-icon>
                  }
                  <span class="truncate font-medium flex-1">{{ item.label }}</span>
                  @if (item.badge) {
                    <span class="ml-auto px-1.5 py-0.5 text-[9px] font-mono font-bold rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {{ item.badge.text }}
                    </span>
                  }
                </a>
              }
            </div>
          }
        </div>
      </div>
    }
  `,
})
export class MobileNavigationComponent {
  private readonly navService = inject(NavigationService);

  readonly isOpen = this.navService.isMobileNavOpen;
  readonly groups = this.navService.navigationGroups;

  close(): void {
    this.navService.closeMobileNav();
  }
}
