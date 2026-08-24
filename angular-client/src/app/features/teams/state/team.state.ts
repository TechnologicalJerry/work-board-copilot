import { Injectable, computed, signal } from '@angular/core';
import { Team, TeamMember } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamState {
  private readonly teamsSignal = signal<Team[]>([]);
  private readonly selectedTeamDetailsSignal = signal<Team | null>(null);
  private readonly membersSignal = signal<TeamMember[]>([]);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of teams list */
  readonly teams = this.teamsSignal.asReadonly();

  /** Signal of currently loaded team details */
  readonly selectedTeamDetails = this.selectedTeamDetailsSignal.asReadonly();

  /** Signal of members for active team */
  readonly members = this.membersSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Team count */
  readonly teamCount = computed(() => this.teamsSignal().length);

  setTeams(teams: Team[]): void {
    this.teamsSignal.set(teams);
  }

  setSelectedTeamDetails(team: Team | null): void {
    this.selectedTeamDetailsSignal.set(team);
  }

  setMembers(members: TeamMember[]): void {
    this.membersSignal.set(members);
  }

  addTeam(team: Team): void {
    this.teamsSignal.update((current) => [team, ...current]);
  }

  updateTeam(updated: Team): void {
    this.teamsSignal.update((current) =>
      current.map((t) => (t.id === updated.id ? { ...t, ...updated } : t))
    );
    if (this.selectedTeamDetailsSignal()?.id === updated.id) {
      this.selectedTeamDetailsSignal.set(updated);
    }
  }

  removeTeam(id: string): void {
    this.teamsSignal.update((current) => current.filter((t) => t.id !== id));
    if (this.selectedTeamDetailsSignal()?.id === id) {
      this.selectedTeamDetailsSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
