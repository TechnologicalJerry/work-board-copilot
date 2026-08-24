import { Component, OnInit, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { TeamApiService } from '../../services/team-api.service';
import { TeamState } from '../../state/team.state';

@Component({
  selector: 'app-team-detail-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    @if (team(); as t) {
      <app-page-header
        [title]="t.name"
        [subtitle]="t.description || 'Team Capacity and Member Assignments'"
      >
        <div class="flex items-center space-x-3">
          <button
            type="button"
            (click)="onDeleteTeam()"
            class="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-medium text-xs border border-rose-500/20 transition-colors"
          >
            Delete Team
          </button>
        </div>
      </app-page-header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Team Details & Capacity -->
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Team Overview</h3>
          <div class="space-y-3 text-xs">
            <div class="flex justify-between text-slate-400">
              <span>Weekly Capacity:</span>
              <span class="font-bold text-white">{{ t.capacity ?? 160 }} Hours</span>
            </div>
            <div class="flex justify-between text-slate-400">
              <span>Members Count:</span>
              <span class="font-bold text-white">{{ members().length }}</span>
            </div>
          </div>
        </div>

        <!-- Members List -->
        <div class="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white">Team Members ({{ members().length }})</h3>

          <div class="divide-y divide-slate-800/80">
            @for (m of members(); track m.id) {
              <div class="py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 rounded-full bg-slate-800 text-indigo-400 font-bold text-xs flex items-center justify-center border border-slate-700">
                    {{ m.user?.firstName?.charAt(0) ?? m.user?.email?.charAt(0) ?? 'T' }}
                  </div>
                  <div>
                    <div class="text-xs font-semibold text-white">
                      {{ m.user?.firstName ? (m.user?.firstName + ' ' + (m.user?.lastName ?? '')) : m.user?.email }}
                    </div>
                    <div class="text-[10px] text-slate-400 font-mono">{{ m.user?.email }}</div>
                  </div>
                </div>

                <div class="flex items-center space-x-3 text-xs">
                  <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300">
                    {{ m.role }}
                  </span>
                  @if (m.capacity) {
                    <span class="text-slate-400">{{ m.capacity }} hrs/wk</span>
                  }
                  <button
                    type="button"
                    (click)="onRemoveMember(m.userId)"
                    class="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            } @empty {
              <div class="py-6 text-center text-xs text-slate-500">No members in this team</div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class TeamDetailPageComponent implements OnInit {
  private readonly teamApi = inject(TeamApiService);
  private readonly teamState = inject(TeamState);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  readonly team = this.teamState.selectedTeamDetails;
  readonly members = this.teamState.members;

  ngOnInit(): void {
    this.teamApi.getTeamById(this.id()).subscribe({
      next: (res) => this.teamState.setSelectedTeamDetails(res.data),
    });
  }

  onRemoveMember(userId: string): void {
    if (confirm('Remove member from team?')) {
      this.teamApi.removeMember(this.id(), userId).subscribe({
        next: () => {
          this.teamState.setMembers(this.members().filter((m) => m.userId !== userId));
        },
      });
    }
  }

  onDeleteTeam(): void {
    if (confirm('Delete this team?')) {
      this.teamApi.deleteTeam(this.id()).subscribe({
        next: () => {
          this.teamState.removeTeam(this.id());
          this.router.navigate(['/teams']);
        },
      });
    }
  }
}
