import { PaginatedResult, PaginationOptions } from '@boardpilot/types';
import { ProjectMember, AddMemberInput, UpdateMemberInput } from '../entities/ProjectMember';

export interface IProjectMemberRepository {
  add(input: AddMemberInput): Promise<ProjectMember>;
  findById(id: string): Promise<ProjectMember | null>;
  findByProjectAndUser(projectId: string, userId: string): Promise<ProjectMember | null>;
  findAll(projectId: string, options: PaginationOptions): Promise<PaginatedResult<ProjectMember>>;
  update(projectId: string, userId: string, input: UpdateMemberInput): Promise<ProjectMember>;
  remove(projectId: string, userId: string): Promise<void>;
  countByProject(projectId: string): Promise<number>;
}
