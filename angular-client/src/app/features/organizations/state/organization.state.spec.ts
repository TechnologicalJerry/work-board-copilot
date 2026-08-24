import { TestBed } from '@angular/core/testing';
import { OrganizationState } from './organization.state';
import { OrganizationContextService } from '@core/context/organization-context.service';

describe('OrganizationState', () => {
  let state: OrganizationState;
  let contextService: OrganizationContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationState, OrganizationContextService],
    });

    state = TestBed.inject(OrganizationState);
    contextService = TestBed.inject(OrganizationContextService);
  });

  it('should store and synchronize organizations with context service', () => {
    const orgs = [
      { id: 'o-1', name: 'Org One' },
      { id: 'o-2', name: 'Org Two' },
    ];

    state.setOrganizations(orgs);
    expect(state.organizationCount()).toBe(2);
    expect(contextService.availableOrganizations().length).toBe(2);
  });

  it('should add a new organization and sync with active context', () => {
    state.addOrganization({ id: 'o-new', name: 'New Org' });
    expect(state.organizationCount()).toBe(1);
    expect(contextService.organizationId()).toBe('o-new');
  });
});
