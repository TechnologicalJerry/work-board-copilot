import { Team, CreateTeamInput, UpdateTeamInput, TeamWithMemberCount } from '../entities/Team';
import { PaginatedResult, PaginationOptions } from '@boardpilot/types';

export interface TeamFilter {
  organizationId?: string;
  workspaceId?: string;
  search?: string;
  isPrivate?: boolean;
}

export interface ITeamRepository {
  create(input: CreateTeamInput & { slug: string; updatedBy: string }): Promise<Team>;
  findById(id: string): Promise<TeamWithMemberCount | null>;
  findBySlug(organizationId: string, slug: string): Promise<Team | null>;
  findMany(filter: TeamFilter, options: PaginationOptions): Promise<PaginatedResult<TeamWithMemberCount>>;
  update(id: string, input: UpdateTeamInput): Promise<Team>;
  softDelete(id: string, deletedBy: string): Promise<Team>;
  exists(id: string): Promise<boolean>;
}
