import { TestBed } from '@angular/core/testing';
import { OrganizationContextService, OrganizationContext } from './organization-context.service';

describe('OrganizationContextService', () => {
  let service: OrganizationContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationContextService],
    });
    service = TestBed.inject(OrganizationContextService);
  });

  it('should initialize with a default organization context', () => {
    expect(service.hasOrganization()).toBe(true);
    expect(service.currentOrganization()).toBeTruthy();
    expect(service.organizationId()).toBeTruthy();
  });

  it('should update selected organization by object or ID', () => {
    const available = service.availableOrganizations();
    if (available.length > 1) {
      const secondOrg = available[1];
      service.setOrganization(secondOrg.id);

      expect(service.organizationId()).toBe(secondOrg.id);
      expect(service.currentOrganization()?.name).toBe(secondOrg.name);
    }
  });

  it('should clear organization state when null is passed', () => {
    service.clearOrganization();
    expect(service.hasOrganization()).toBe(false);
    expect(service.currentOrganization()).toBeNull();
    expect(service.organizationId()).toBeNull();
  });

  it('should revalidate current organization when available organizations change', () => {
    const newOrgs: OrganizationContext[] = [
      { id: 'custom-1', name: 'Custom Org 1' },
      { id: 'custom-2', name: 'Custom Org 2' },
    ];

    service.setAvailableOrganizations(newOrgs);
    expect(service.availableOrganizations().length).toBe(2);
    expect(service.organizationId()).toBe('custom-1');
  });
});
