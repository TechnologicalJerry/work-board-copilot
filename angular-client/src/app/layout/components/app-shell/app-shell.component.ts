import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { AppSidebarComponent } from '../app-sidebar/app-sidebar.component';
import { MobileNavigationComponent } from '../mobile-navigation/mobile-navigation.component';
import { LoadingService } from '@core/services/loading.service';
import { ConnectivityService } from '@core/services/connectivity.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppSidebarComponent,
    MobileNavigationComponent,
  ],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased font-sans">
      <!-- Global Connectivity Offline Banner -->
      @if (!isOnline()) {
        <div role="alert" class="bg-amber-500/10 border-b border-amber-500/20 text-amber-300 text-xs px-4 py-1.5 text-center font-medium flex items-center justify-center space-x-2 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364" />
          </svg>
          <span>You are currently offline. Changes will sync once connectivity is restored.</span>
        </div>
      }

      <!-- Top Application Header -->
      <app-header></app-header>

      <!-- Main Body: Sidebar + Main Content Area -->
      <div class="flex flex-1 overflow-hidden relative">
        <!-- Desktop Collapsible Sidebar -->
        <app-sidebar></app-sidebar>

        <!-- Mobile Drawer Navigation -->
        <app-mobile-navigation></app-mobile-navigation>

        <!-- Main Content Area -->
        <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950 relative">
          <!-- Global Top Request Loading Progress Bar -->
          @if (isLoading()) {
            <div class="absolute top-0 left-0 right-0 h-1 bg-indigo-500/20 overflow-hidden z-40">
              <div class="h-full bg-indigo-500 animate-pulse w-2/3"></div>
            </div>
          }

          <div class="max-w-7xl mx-auto">
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class AppShellComponent {
  private readonly loadingService = inject(LoadingService);
  private readonly connectivityService = inject(ConnectivityService);

  readonly isLoading = this.loadingService.isLoading;
  readonly isOnline = this.connectivityService.isOnline;
}
