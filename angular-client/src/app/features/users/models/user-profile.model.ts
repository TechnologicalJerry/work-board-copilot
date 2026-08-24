export interface UserProfile {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  bio?: string;
  avatarUrl?: string;
  phone?: string;
  location?: string;
  timezone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateUserProfileRequest {
  firstName?: string;
  lastName?: string;
  title?: string;
  bio?: string;
  phone?: string;
  location?: string;
  timezone?: string;
}

export interface UpdateAvatarRequest {
  avatarUrl: string;
}

export interface UserActivityLog {
  id: string;
  userId: string;
  action: string;
  description?: string;
  ipAddress?: string;
  createdAt: string;
}
