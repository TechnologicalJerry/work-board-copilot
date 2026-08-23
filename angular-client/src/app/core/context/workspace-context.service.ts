import { Injectable, computed, inject, signal, effect } from '@angular/core';
import { OrganizationContextService } from './organization-context.service';

export interface WorkspaceContext {
  id: string;
  organizationId: string;
  name: string;
  slug?: string;
  isDefault?: boolean;
}

const WORKSPACE_STORAGE_KEY = 'wb_selected_workspace_id';

const DEFAULT_MOCK_WORKSPACES: WorkspaceContext[] = [
  { id: 'ws-eng-1', organizationId: 'org-acme-1', name: 'Engineering Workspace', slug: 'engineering', isDefault: true },
  { id: 'ws-product-2', organizationId: 'org-acme-1', name: 'Product & Design', slug: 'product' },
  { id: 'ws-stark-core-3', organizationId: 'org-stark-2', name: 'Arc Reactor R&D', slug: 'arc-reactor', isDefault: true },
  { id: 'ws-wayne-tech-4', organizationId: 'org-wayne-3', name: 'Applied Sciences', slug: 'applied-sciences', isDefault: true },
];

@Injectable({
  providedIn: 'root',
})
export class WorkspaceContextService {
  private readonly orgContext = inject(OrganizationContextService);
  private readonly workspacesSignal = signal<WorkspaceContext[]>(DEFAULT_MOCK_WORKSPACES);
  private readonly selectedWorkspaceSignal = signal<WorkspaceContext | null>(null);

  /** Signal of workspaces available under the currently selected Organization */
  readonly availableWorkspaces = computed(() => {
    const orgId = this.orgContext.organizationId();
    if (!orgId) return [];
    return this.workspacesSignal().filter((ws) => ws.organizationId === orgId);
  });

  /** Signal of currently selected Workspace */
  readonly currentWorkspace = this.selectedWorkspaceSignal.asReadonly();

  /** Signal of current Workspace ID */
  readonly workspaceId = computed(() => this.selectedWorkspaceSignal()?.id ?? null);

  /** Signal indicating if a Workspace is selected */
  readonly hasWorkspace = computed(() => !!this.selectedWorkspaceSignal());

  constructor() {
    // Automatically revalidate and update workspace when Organization changes
    effect(
      () => {
        const available = this.availableWorkspaces();
        const current = this.selectedWorkspaceSignal();

        if (!current || !available.some((ws) => ws.id === current.id)) {
          // Current workspace doesn't belong to selected organization, reset to default/first
          const fallback = available.find((ws) => ws.isDefault) ?? available[0] ?? null;
          this.setWorkspace(fallback);
        }
      },
      { allowSignalWrites: true }
    );

    this.restorePersistedWorkspace();
  }

  setWorkspace(wsOrId: WorkspaceContext | string | null): void {
    if (!wsOrId) {
      this.clearWorkspace();
      return;
    }

    let targetWs: WorkspaceContext | undefined;
    if (typeof wsOrId === 'string') {
      targetWs = this.availableWorkspaces().find((w) => w.id === wsOrId);
    } else {
      targetWs = wsOrId;
    }

    if (targetWs && targetWs.organizationId === this.orgContext.organizationId()) {
      this.selectedWorkspaceSignal.set(targetWs);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(WORKSPACE_STORAGE_KEY, targetWs.id);
      }
    } else {
      this.clearWorkspace();
    }
  }

  clearWorkspace(): void {
    this.selectedWorkspaceSignal.set(null);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(WORKSPACE_STORAGE_KEY);
    }
  }

  setAvailableWorkspaces(workspaces: WorkspaceContext[]): void {
    this.workspacesSignal.set(workspaces);
  }

  private restorePersistedWorkspace(): void {
    if (typeof localStorage !== 'undefined') {
      const savedId = localStorage.getItem(WORKSPACE_STORAGE_KEY);
      if (savedId) {
        const match = this.availableWorkspaces().find((w) => w.id === savedId);
        if (match) {
          this.selectedWorkspaceSignal.set(match);
          return;
        }
      }
    }
    const fallback = this.availableWorkspaces().find((w) => w.isDefault) ?? this.availableWorkspaces()[0] ?? null;
    if (fallback) {
      this.selectedWorkspaceSignal.set(fallback);
    }
  }
}
