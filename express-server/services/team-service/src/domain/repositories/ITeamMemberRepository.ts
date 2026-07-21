import { TeamMember, CreateTeamMemberInput, UpdateTeamMemberInput } from '../entities/TeamMember';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';

export interface ITeamMemberRepository {
  create(input: CreateTeamMemberInput): Promise<TeamMember>;
  findById(id: string): Promise<TeamMember | null>;
  findByTeamAndUser(teamId: string, userId: string): Promise<TeamMember | null>;
  findManyByTeam(teamId: string, options: PaginationOptions): Promise<PaginatedResult<TeamMember>>;
  findAllByTeam(teamId: string): Promise<TeamMember[]>;
  update(teamId: string, userId: string, input: UpdateTeamMemberInput): Promise<TeamMember>;
  remove(teamId: string, userId: string): Promise<void>;
  countByTeam(teamId: string): Promise<number>;
}
