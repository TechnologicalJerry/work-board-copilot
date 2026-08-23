import { TestBed } from '@angular/core/testing';
import { OrganizationContextService } from './organization-context.service';
import { WorkspaceContextService, WorkspaceContext } from './workspace-context.service';

describe('WorkspaceContextService', () => {
  let orgService: OrganizationContextService;
  let workspaceService: WorkspaceContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationContextService, WorkspaceContextService],
    });

    orgService = TestBed.inject(OrganizationContextService);
    workspaceService = TestBed.inject(WorkspaceContextService);
  });

  it('should initialize workspace context corresponding to active organization', () => {
    expect(workspaceService.hasWorkspace()).toBe(true);
    expect(workspaceService.currentWorkspace()).toBeTruthy();
    expect(workspaceService.currentWorkspace()?.organizationId).toBe(orgService.organizationId()!);
  });

  it('should filter available workspaces by currently selected organization', () => {
    const orgId = orgService.organizationId();
    const available = workspaceService.availableWorkspaces();
    expect(available.every((ws) => ws.organizationId === orgId)).toBe(true);
  });

  it('should automatically reset workspace when organization switches to another org', () => {
    const availableOrgs = orgService.availableOrganizations();
    if (availableOrgs.length > 1) {
      const secondOrg = availableOrgs[1];

      // Switch Organization
      orgService.setOrganization(secondOrg);

      TestBed.flushEffects();

      // Workspace context should automatically update to belong to secondOrg
      expect(workspaceService.currentWorkspace()?.organizationId).toBe(secondOrg.id);
    }
  });
});
