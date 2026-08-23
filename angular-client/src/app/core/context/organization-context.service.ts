import { Injectable, computed, signal } from '@angular/core';

export interface OrganizationContext {
  id: string;
  name: string;
  slug?: string;
  logoUrl?: string;
  role?: string;
}

const ORG_STORAGE_KEY = 'wb_selected_org_id';

const DEFAULT_MOCK_ORGS: OrganizationContext[] = [
  { id: 'org-acme-1', name: 'Acme Corporation', slug: 'acme-corp', role: 'owner' },
  { id: 'org-stark-2', name: 'Stark Industries', slug: 'stark-ind', role: 'admin' },
  { id: 'org-wayne-3', name: 'Wayne Enterprises', slug: 'wayne-ent', role: 'member' },
];

@Injectable({
  providedIn: 'root',
})
export class OrganizationContextService {
  private readonly orgsSignal = signal<OrganizationContext[]>(DEFAULT_MOCK_ORGS);
  private readonly selectedOrgSignal = signal<OrganizationContext | null>(null);

  /** Signal of currently selected Organization */
  readonly currentOrganization = this.selectedOrgSignal.asReadonly();

  /** Signal of current Organization ID */
  readonly organizationId = computed(() => this.selectedOrgSignal()?.id ?? null);

  /** Signal indicating if an Organization is selected */
  readonly hasOrganization = computed(() => !!this.selectedOrgSignal());

  /** Signal of available Organizations for current user */
  readonly availableOrganizations = this.orgsSignal.asReadonly();

  constructor() {
    this.restorePersistedOrg();
  }

  setOrganization(orgOrId: OrganizationContext | string | null): void {
    if (!orgOrId) {
      this.clearOrganization();
      return;
    }

    let targetOrg: OrganizationContext | undefined;
    if (typeof orgOrId === 'string') {
      targetOrg = this.orgsSignal().find((o) => o.id === orgOrId);
    } else {
      targetOrg = orgOrId;
    }

    if (targetOrg) {
      this.selectedOrgSignal.set(targetOrg);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(ORG_STORAGE_KEY, targetOrg.id);
      }
    }
  }

  clearOrganization(): void {
    this.selectedOrgSignal.set(null);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(ORG_STORAGE_KEY);
    }
  }

  setAvailableOrganizations(orgs: OrganizationContext[]): void {
    this.orgsSignal.set(orgs);
    // Validate currently selected org exists in new list
    const currentId = this.organizationId();
    if (currentId) {
      const match = orgs.find((o) => o.id === currentId);
      if (match) {
        this.selectedOrgSignal.set(match);
      } else if (orgs.length > 0) {
        this.setOrganization(orgs[0]);
      } else {
        this.clearOrganization();
      }
    } else if (orgs.length > 0) {
      this.setOrganization(orgs[0]);
    }
  }

  private restorePersistedOrg(): void {
    if (typeof localStorage !== 'undefined') {
      const savedId = localStorage.getItem(ORG_STORAGE_KEY);
      if (savedId) {
        const match = this.orgsSignal().find((o) => o.id === savedId);
        if (match) {
          this.selectedOrgSignal.set(match);
          return;
        }
      }
    }
    // Fallback to first available organization if any
    const first = this.orgsSignal()[0];
    if (first) {
      this.selectedOrgSignal.set(first);
    }
  }
}
