'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Kanban,
  BarChart3,
  User,
  Settings,
  Users,
  LogOut,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  UserCheck,
  ShieldAlert,
  Sparkles,
  Server,
} from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, setRole, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const isAdmin = user.role === 'ORG_ADMIN';

  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Tasks & Kanban', href: '/dashboard/tasks', icon: Kanban },
    { name: 'Sprint Reports', href: '/dashboard/reports', icon: BarChart3 },
    { name: 'User Profile', href: '/dashboard/profile', icon: User },
    { name: 'System Settings', href: '/dashboard/settings', icon: Settings },
    {
      name: 'User Management',
      href: '/dashboard/users',
      icon: Users,
      badge: 'Admin Only',
      adminOnly: true,
    },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* LEFT SIDEBAR NAVIGATION */}
      <aside
        className={`${
          collapsed ? 'w-20' : 'w-64'
        } transition-all duration-300 bg-slate-900/90 border-r border-slate-800 flex flex-col justify-between z-30 relative shrink-0`}
      >
        <div>
          {/* Sidebar Header Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
            <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <LayoutDashboard className="w-4.5 h-4.5 text-indigo-400" />
                </div>
              </div>
              {!collapsed && (
                <span className="font-bold text-white tracking-tight text-base whitespace-nowrap">
                  BoardPilot <span className="gradient-text">AI</span>
                </span>
              )}
            </Link>

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Toggle Sidebar"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={collapsed ? item.name : undefined}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all relative ${
                    active
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-slate-400'}`} />
                  
                  {!collapsed && (
                    <div className="flex items-center justify-between w-full">
                      <span className="truncate">{item.name}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                            isAdmin
                              ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                              : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}

                  {collapsed && item.adminOnly && (
                    <span className="w-2 h-2 rounded-full bg-purple-400 absolute top-2 right-2" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="p-3 border-t border-slate-800 space-y-2">
          {!collapsed ? (
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 font-bold text-white text-xs flex items-center justify-center shrink-0">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </div>
                <div className="truncate">
                  <span className="text-xs font-bold text-white block truncate">
                    {user.firstName} {user.lastName}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 block truncate">{user.role}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-full bg-indigo-600 font-bold text-white text-xs flex items-center justify-center">
                {user.firstName[0]}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* MAIN DASHBOARD CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP DASHBOARD HEADER */}
        <header className="h-16 bg-slate-900/60 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between shrink-0">
          
          {/* Left: Search Bar */}
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search tasks, sprints, members, or documents..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
            </div>
          </div>

          {/* Right: Role Switcher & User Control */}
          <div className="flex items-center gap-4">
            
            {/* Live RBAC Role Switcher Toggle */}
            <div className="hidden sm:flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <span className="text-[10px] font-mono text-slate-400 pl-2 uppercase">Demo RBAC:</span>
              <button
                onClick={() => setRole('ORG_ADMIN')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  isAdmin
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Admin Role
              </button>
              <button
                onClick={() => setRole('TEAM_MEMBER')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  !isAdmin
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" /> User Role
              </button>
            </div>

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800 relative transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-pink-500 absolute top-1.5 right-1.5 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-pink-500 absolute top-1.5 right-1.5" />
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-4 z-50 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-white">Notifications</span>
                    <span className="text-[10px] font-mono bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded">3 New</span>
                  </div>
                  <div className="space-y-3 pt-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="text-xs font-semibold text-white block">New Task Assigned</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">AUTH-102 assigned by System Administrator.</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                      <span className="text-xs font-semibold text-purple-300 block">Sprint 42 Started</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">Velocity target set to 45 story points.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-red-400 border border-slate-800 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>

          </div>

        </header>

        {/* DASHBOARD PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950">
          {children}
        </main>

      </div>

    </div>
  );
}
