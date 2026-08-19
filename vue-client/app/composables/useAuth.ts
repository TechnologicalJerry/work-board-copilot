export type UserRole = 'ORG_ADMIN' | 'TEAM_MEMBER' | 'PROJECT_MANAGER';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

export function useAuth() {
  const user = useState<UserProfile>('user', () => ({
    id: 'usr_101',
    firstName: 'Techno',
    lastName: 'Jerry',
    email: 'jerry@boardpilot.ai',
    role: 'ORG_ADMIN'
  }));

  const setRole = (role: UserRole) => {
    user.value.role = role;
    if (import.meta.client) {
      localStorage.setItem('userRole', role);
    }
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    user.value = { ...user.value, ...data };
  };

  const logout = () => {
    if (import.meta.client) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userRole');
      navigateTo('/login');
    }
  };

  return {
    user,
    setRole,
    updateProfile,
    logout
  };
}
