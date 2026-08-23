import { TestBed, ComponentFixture } from '@angular/core';
import { OrganizationSwitcherComponent } from './organization-switcher.component';
import { OrganizationContextService } from '@core/context/organization-context.service';

describe('OrganizationSwitcherComponent', () => {
  let component: OrganizationSwitcherComponent;
  let fixture: ComponentFixture<OrganizationSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizationSwitcherComponent],
      providers: [OrganizationContextService],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render selected organization button', () => {
    expect(component).toBeTruthy();
    expect(component.currentOrg()).toBeTruthy();
  });

  it('should toggle dropdown open and close', () => {
    expect(component.isOpen()).toBe(false);
    component.toggleOpen();
    expect(component.isOpen()).toBe(true);
    component.close();
    expect(component.isOpen()).toBe(false);
  });
});
