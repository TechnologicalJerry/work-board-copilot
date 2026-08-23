import { Injectable, computed, signal } from '@angular/core';
import { NavigationGroup, NavigationItem } from './navigation.model';
import { DEFAULT_NAVIGATION_GROUPS } from './navigation.config';

const SIDEBAR_COLLAPSED_KEY = 'wb_sidebar_collapsed';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly groups = signal<NavigationGroup[]>(DEFAULT_NAVIGATION_GROUPS);

  private readonly collapsedSignal = signal<boolean>(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === 'true'
      : false
  );

  private readonly mobileNavOpenSignal = signal<boolean>(false);

  /** Signal of navigation groups */
  readonly navigationGroups = this.groups.asReadonly();

  /** Signal for desktop sidebar collapse state */
  readonly isSidebarCollapsed = this.collapsedSignal.asReadonly();

  /** Signal for mobile drawer navigation state */
  readonly isMobileNavOpen = this.mobileNavOpenSignal.asReadonly();

  /** Flattened list of all navigation items */
  readonly allNavigationItems = computed(() =>
    this.groups().flatMap((group) => group.items)
  );

  toggleSidebar(): void {
    const nextState = !this.collapsedSignal();
    this.setSidebarCollapsed(nextState);
  }

  setSidebarCollapsed(collapsed: boolean): void {
    this.collapsedSignal.set(collapsed);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(collapsed));
    }
  }

  toggleMobileNav(): void {
    this.mobileNavOpenSignal.update((open) => !open);
  }

  setMobileNavOpen(open: boolean): void {
    this.mobileNavOpenSignal.set(open);
  }

  closeMobileNav(): void {
    this.mobileNavOpenSignal.set(false);
  }
}
