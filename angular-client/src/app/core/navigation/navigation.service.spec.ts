import { TestBed } from '@angular/core/testing';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationService],
    });
    service = TestBed.inject(NavigationService);
  });

  it('should initialize with navigation groups and default sidebar/mobile states', () => {
    expect(service.navigationGroups().length).toBeGreaterThan(0);
    expect(service.allNavigationItems().length).toBeGreaterThan(0);
    expect(service.isMobileNavOpen()).toBe(false);
  });

  it('should toggle sidebar collapse state', () => {
    const initial = service.isSidebarCollapsed();
    service.toggleSidebar();
    expect(service.isSidebarCollapsed()).toBe(!initial);

    service.setSidebarCollapsed(true);
    expect(service.isSidebarCollapsed()).toBe(true);
  });

  it('should toggle and close mobile navigation drawer', () => {
    service.toggleMobileNav();
    expect(service.isMobileNavOpen()).toBe(true);

    service.closeMobileNav();
    expect(service.isMobileNavOpen()).toBe(false);
  });
});
