export type TeamRole = 'LEAD' | 'MEMBER' | 'VIEWER';

export interface TeamMember {
  id: string;
  teamId: string;
  userId: string;
  role: TeamRole;
  availability: number;
  addedBy: string;
  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTeamMemberInput {
  teamId: string;
  userId: string;
  role?: TeamRole;
  availability?: number;
  addedBy: string;
}

export interface UpdateTeamMemberInput {
  role?: TeamRole;
  availability?: number;
}

export interface CapacityReport {
  teamId: string;
  teamName: string;
  totalCapacity: number;
  usedCapacity: number;
  availableCapacity: number;
  memberCount: number;
  members: Array<{
    userId: string;
    role: TeamRole;
    availability: number;
    usedCapacity: number;
  }>;
}
