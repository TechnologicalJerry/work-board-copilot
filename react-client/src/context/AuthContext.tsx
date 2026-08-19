'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'ORG_ADMIN' | 'TEAM_MEMBER' | 'PROJECT_MANAGER';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

interface AuthContextType {
  user: UserProfile;
  setRole: (role: UserRole) => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  logout: () => void;
}

const defaultUser: UserProfile = {
  id: 'usr_101',
  firstName: 'Techno',
  lastName: 'Jerry',
  email: 'jerry@boardpilot.ai',
  role: 'ORG_ADMIN', // Default to Admin so user sees all components initially
};

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  setRole: () => {},
  updateProfile: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') as UserRole;
    if (savedRole) {
      setUser((prev) => ({ ...prev, role: savedRole }));
    }
  }, []);

  const handleSetRole = (role: UserRole) => {
    localStorage.setItem('userRole', role);
    setUser((prev) => ({ ...prev, role }));
  };

  const handleUpdateProfile = (data: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setRole: handleSetRole,
        updateProfile: handleUpdateProfile,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
