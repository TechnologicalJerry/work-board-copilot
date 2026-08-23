import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { OrganizationContextService } from '../../context/organization-context.service';
import { WorkspaceContextService } from '../../context/workspace-context.service';

export const TENANT_ORG_HEADER = 'X-Organization-ID';
export const TENANT_WORKSPACE_HEADER = 'X-Workspace-ID';

export const tenantContextInterceptor: HttpInterceptorFn = (req, next) => {
  const orgContext = inject(OrganizationContextService);
  const workspaceContext = inject(WorkspaceContextService);

  const orgId = orgContext.organizationId();
  const workspaceId = workspaceContext.workspaceId();

  let tenantReq = req;

  if (orgId && !req.headers.has(TENANT_ORG_HEADER)) {
    tenantReq = tenantReq.clone({
      headers: tenantReq.headers.set(TENANT_ORG_HEADER, orgId),
    });
  }

  if (workspaceId && !req.headers.has(TENANT_WORKSPACE_HEADER)) {
    tenantReq = tenantReq.clone({
      headers: tenantReq.headers.set(TENANT_WORKSPACE_HEADER, workspaceId),
    });
  }

  return next(tenantReq);
};
