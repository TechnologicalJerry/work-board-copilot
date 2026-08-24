import { Component, OnInit, inject, signal, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { OrganizationApiService } from '../../services/organization-api.service';
import { OrganizationState } from '../../state/organization.state';
import { OrganizationMember, OrgRole } from '../../models/organization.model';
import { OrganizationInviteDialogComponent } from '../../components/organization-invite-dialog/organization-invite-dialog.component';

@Component({
  selector: 'app-organization-detail-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink, OrganizationInviteDialogComponent],
  template: `
    @if (org(); as organization) {
      <app-page-header
        [title]="organization.name"
        [subtitle]="'Organization Overview and Members Management (' + (organization.slug ?? 'id: ' + organization.id) + ')'"
      >
        <div class="flex items-center space-x-3">
          <a
            [routerLink]="['/organizations', organization.id, 'settings']"
            class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors flex items-center space-x-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
            <span>Organization Settings</span>
          </a>
          <button
            type="button"
            (click)="openInviteModal()"
            class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center space-x-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span>Invite Member</span>
          </button>
        </div>
      </app-page-header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Members List Card -->
        <div class="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-white">Organization Members ({{ members().length }})</h3>
          </div>

          <div class="divide-y divide-slate-800/80">
            @for (m of members(); track m.id) {
              <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-slate-800 text-slate-200 font-bold text-xs flex items-center justify-center border border-slate-700">
                    {{ m.user?.firstName?.charAt(0) ?? m.user?.email?.charAt(0) ?? 'U' }}
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-white">
                      {{ m.user?.firstName ? (m.user?.firstName + ' ' + (m.user?.lastName ?? '')) : m.user?.email }}
                    </div>
                    <div class="text-[10px] text-slate-400 font-mono">{{ m.user?.email }}</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3">
                  <select
                    [value]="m.role"
                    (change)="onRoleChange(m.userId, $event)"
                    class="px-2 py-1 bg-slate-950 border border-slate-800 rounded-lg text-[11px] text-slate-300 font-medium focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="OWNER">Owner</option>
                    <option value="ADMIN">Admin</option>
                    <option value="MEMBER">Member</option>
                    <option value="GUEST">Guest</option>
                  </select>

                  <button
                    type="button"
                    (click)="onRemoveMember(m.userId)"
                    class="p-1 rounded text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                    title="Remove member"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            } @empty {
              <div class="py-6 text-center text-xs text-slate-500">No members loaded</div>
            }
          </div>
        </div>

        <!-- Quick Access Workspaces Link -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Workspaces</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Workspaces partition this organization's projects, boards, and team workflows.
          </p>
          <a
            routerLink="/workspaces"
            class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <span>Manage Workspaces</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    }

    <!-- Invite Member Modal -->
    <app-organization-invite-dialog
      [isOpen]="isInviteOpen()"
      [isSubmitting]="isInviting()"
      (submitInvite)="onInviteSubmit($event)"
      (cancel)="closeInviteModal()"
    ></app-organization-invite-dialog>
  `,
})
export class OrganizationDetailPageComponent implements OnInit {
  private readonly orgApi = inject(OrganizationApiService);
  private readonly orgState = inject(OrganizationState);

  readonly id = input.required<string>();

  readonly org = this.orgState.selectedOrgDetails;
  readonly members = this.orgState.members;
  readonly isInviteOpen = signal<boolean>(false);
  readonly isInviting = signal<boolean>(false);

  ngOnInit(): void {
    this.loadOrgDetails();
    this.loadMembers();
  }

  loadOrgDetails(): void {
    this.orgApi.getOrganizationById(this.id()).subscribe({
      next: (res) => this.orgState.setSelectedOrgDetails(res.data),
      error: (err) => this.orgState.setError(err.message),
    });
  }

  loadMembers(): void {
    this.orgApi.getMembers(this.id()).subscribe({
      next: (res) => this.orgState.setMembers(res.data),
      error: (err) => this.orgState.setError(err.message),
    });
  }

  openInviteModal(): void {
    this.isInviteOpen.set(true);
  }

  closeInviteModal(): void {
    this.isInviteOpen.set(false);
  }

  onInviteSubmit(req: { email: string; role: OrgRole }): void {
    this.isInviting.set(true);
    this.orgApi.inviteMember(this.id(), req).subscribe({
      next: (res) => {
        this.orgState.setMembers([...this.members(), res.data]);
        this.isInviting.set(false);
        this.closeInviteModal();
      },
      error: (err) => {
        this.orgState.setError(err.message);
        this.isInviting.set(false);
      },
    });
  }

  onRoleChange(userId: string, event: Event): void {
    const role = (event.target as HTMLSelectElement).value as OrgRole;
    this.orgApi.updateMemberRole(this.id(), userId, { role }).subscribe({
      next: () => this.loadMembers(),
      error: (err) => this.orgState.setError(err.message),
    });
  }

  onRemoveMember(userId: string): void {
    if (confirm('Are you sure you want to remove this member from the organization?')) {
      this.orgApi.removeMember(this.id(), userId).subscribe({
        next: () => this.loadMembers(),
        error: (err) => this.orgState.setError(err.message),
      });
    }
  }
}
