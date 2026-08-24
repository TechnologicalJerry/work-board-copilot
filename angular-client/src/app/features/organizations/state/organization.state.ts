import { Injectable, computed, inject, signal } from '@angular/core';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { Organization, OrganizationMember } from '../models/organization.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationState {
  private readonly orgContext = inject(OrganizationContextService);

  private readonly orgsSignal = signal<Organization[]>([]);
  private readonly selectedOrgDetailsSignal = signal<Organization | null>(null);
  private readonly membersSignal = signal<OrganizationMember[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of organizations list */
  readonly organizations = this.orgsSignal.asReadonly();

  /** Signal of currently loaded org details */
  readonly selectedOrgDetails = this.selectedOrgDetailsSignal.asReadonly();

  /** Signal of current organization members */
  readonly members = this.membersSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Count of organizations */
  readonly organizationCount = computed(() => this.orgsSignal().length);

  setOrganizations(orgs: Organization[]): void {
    this.orgsSignal.set(orgs);
    // Sync with global context service
    this.orgContext.setAvailableOrganizations(orgs);
  }

  setSelectedOrgDetails(org: Organization | null): void {
    this.selectedOrgDetailsSignal.set(org);
  }

  setMembers(members: OrganizationMember[]): void {
    this.membersSignal.set(members);
  }

  addOrganization(org: Organization): void {
    this.orgsSignal.update((current) => [org, ...current]);
    this.orgContext.setAvailableOrganizations(this.orgsSignal());
    this.orgContext.setOrganization(org);
  }

  updateOrganization(updated: Organization): void {
    this.orgsSignal.update((current) =>
      current.map((o) => (o.id === updated.id ? { ...o, ...updated } : o))
    );
    if (this.selectedOrgDetailsSignal()?.id === updated.id) {
      this.selectedOrgDetailsSignal.set(updated);
    }
  }

  removeOrganization(id: string): void {
    this.orgsSignal.update((current) => current.filter((o) => o.id !== id));
    if (this.selectedOrgDetailsSignal()?.id === id) {
      this.selectedOrgDetailsSignal.set(null);
    }
    this.orgContext.setAvailableOrganizations(this.orgsSignal());
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
