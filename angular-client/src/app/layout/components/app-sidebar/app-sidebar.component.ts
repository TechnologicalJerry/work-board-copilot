import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NavigationService } from '@core/navigation/navigation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <aside
      class="hidden md:flex flex-col bg-slate-900 border-r border-slate-800/80 transition-all duration-300 ease-in-out shrink-0 z-20 select-none"
      [class.w-64]="!isCollapsed()"
      [class.w-16]="isCollapsed()"
      aria-label="Sidebar Navigation"
    >
      <!-- Sidebar Header / Logo -->
      <div class="h-16 px-4 flex items-center justify-between border-b border-slate-800/80 shrink-0">
        <a routerLink="/dashboard" class="flex items-center space-x-3 overflow-hidden">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white font-black text-sm flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
            W
          </div>
          @if (!isCollapsed()) {
            <span class="font-bold text-sm tracking-tight text-white truncate">Work Board</span>
          }
        </a>

        <button
          type="button"
          (click)="toggleSidebar()"
          class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          [title]="isCollapsed() ? 'Expand Sidebar' : 'Collapse Sidebar'"
        >
          <lucide-icon [name]="isCollapsed() ? 'ChevronRight' : 'ChevronLeft'" class="w-4 h-4"></lucide-icon>
        </button>
      </div>

      <!-- Navigation Content -->
      <div class="flex-1 overflow-y-auto overflow-x-hidden py-4 px-2 space-y-6">
        @for (group of groups(); track group.id) {
          <div class="space-y-1">
            @if (group.title && !isCollapsed()) {
              <h3 class="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 truncate">
                {{ group.title }}
              </h3>
            }

            @for (item of group.items; track item.id) {
              <a
                [routerLink]="item.route"
                routerLinkActive="bg-indigo-600/10 text-indigo-400 border-indigo-500/30 font-semibold"
                [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
                class="flex items-center px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-transparent transition-all group relative"
                [title]="isCollapsed() ? item.label : ''"
              >
                @if (item.icon) {
                  <lucide-icon [name]="item.icon" class="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"></lucide-icon>
                }

                @if (!isCollapsed()) {
                  <span class="ml-3 truncate font-medium flex-1">{{ item.label }}</span>
                  @if (item.badge) {
                    <span
                      class="ml-auto px-1.5 py-0.5 text-[9px] font-mono font-bold rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {{ item.badge.text }}
                    </span>
                  }
                }
              </a>
            }
          </div>
        }
      </div>

      <!-- Sidebar Footer -->
      <div class="p-3 border-t border-slate-800/80 shrink-0">
        <div class="flex items-center justify-between text-[11px] text-slate-500 px-2">
          @if (!isCollapsed()) {
            <span class="truncate">Work Board v1.0.0</span>
          }
          <div class="w-2 h-2 rounded-full bg-emerald-500" title="System Operational"></div>
        </div>
      </div>
    </aside>
  `,
})
export class AppSidebarComponent {
  private readonly navService = inject(NavigationService);

  readonly groups = this.navService.navigationGroups;
  readonly isCollapsed = this.navService.isSidebarCollapsed;

  toggleSidebar(): void {
    this.navService.toggleSidebar();
  }
}
