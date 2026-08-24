import { Injectable, computed, inject, signal } from '@angular/core';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { Workspace, WorkspaceMember } from '../models/workspace.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceState {
  private readonly workspaceContext = inject(WorkspaceContextService);

  private readonly workspacesSignal = signal<Workspace[]>([]);
  private readonly selectedWorkspaceDetailsSignal = signal<Workspace | null>(null);
  private readonly membersSignal = signal<WorkspaceMember[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of workspaces for current org */
  readonly workspaces = this.workspacesSignal.asReadonly();

  /** Signal of currently loaded workspace details */
  readonly selectedWorkspaceDetails = this.selectedWorkspaceDetailsSignal.asReadonly();

  /** Signal of members for selected workspace */
  readonly members = this.membersSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Workspace count */
  readonly workspaceCount = computed(() => this.workspacesSignal().length);

  setWorkspaces(workspaces: Workspace[]): void {
    this.workspacesSignal.set(workspaces);
    // Sync with global workspace context service
    this.workspaceContext.setAvailableWorkspaces(workspaces);
  }

  setSelectedWorkspaceDetails(ws: Workspace | null): void {
    this.selectedWorkspaceDetailsSignal.set(ws);
  }

  setMembers(members: WorkspaceMember[]): void {
    this.membersSignal.set(members);
  }

  addWorkspace(ws: Workspace): void {
    this.workspacesSignal.update((current) => [ws, ...current]);
    this.workspaceContext.setAvailableWorkspaces(this.workspacesSignal());
    this.workspaceContext.setWorkspace(ws);
  }

  updateWorkspace(updated: Workspace): void {
    this.workspacesSignal.update((current) =>
      current.map((w) => (w.id === updated.id ? { ...w, ...updated } : w))
    );
    if (this.selectedWorkspaceDetailsSignal()?.id === updated.id) {
      this.selectedWorkspaceDetailsSignal.set(updated);
    }
  }

  removeWorkspace(id: string): void {
    this.workspacesSignal.update((current) => current.filter((w) => w.id !== id));
    if (this.selectedWorkspaceDetailsSignal()?.id === id) {
      this.selectedWorkspaceDetailsSignal.set(null);
    }
    this.workspaceContext.setAvailableWorkspaces(this.workspacesSignal());
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
