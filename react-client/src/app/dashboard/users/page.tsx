'use client';

import React, { useState } from 'react';
import { useAuth, UserRole } from '../../../context/AuthContext';
import {
  Users,
  ShieldAlert,
  Search,
  Filter,
  UserPlus,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  MoreVertical,
  X,
  Plus,
  Lock,
} from 'lucide-react';

interface MockUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: 'ACTIVE' | 'SUSPENDED' | 'PENDING';
  lastLogin: string;
}

export default function UserManagementPage() {
  const { user, setRole } = useAuth();
  const isAdmin = user.role === 'ORG_ADMIN';

  // Initial mock users list for admin management
  const [usersList, setUsersList] = useState<MockUser[]>([
    { id: 'usr_1', firstName: 'Techno', lastName: 'Jerry', email: 'jerry@boardpilot.ai', role: 'ORG_ADMIN', status: 'ACTIVE', lastLogin: '2 mins ago' },
    { id: 'usr_2', firstName: 'Alice', lastName: 'Smith', email: 'alice@company.com', role: 'PROJECT_MANAGER', status: 'ACTIVE', lastLogin: '1 hour ago' },
    { id: 'usr_3', firstName: 'Bob', lastName: 'Johnson', email: 'bob@company.com', role: 'TEAM_MEMBER', status: 'ACTIVE', lastLogin: 'Yesterday' },
    { id: 'usr_4', firstName: 'Carol', lastName: 'Danvers', email: 'carol@company.com', role: 'TEAM_MEMBER', status: 'SUSPENDED', lastLogin: '3 days ago' },
    { id: 'usr_5', firstName: 'Dave', lastName: 'Wilson', email: 'dave@company.com', role: 'TEAM_MEMBER', status: 'PENDING', lastLogin: 'Never' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('ALL');
  const [showAddModal, setShowAddModal] = useState(false);

  // New user form modal state
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newRole, setNewRole] = useState<UserRole>('TEAM_MEMBER');

  // Handle role change for user
  const handleRoleChange = (userId: string, newRole: UserRole) => {
    setUsersList((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
    );
  };

  // Handle status toggle (Activate / Suspend)
  const handleToggleStatus = (userId: string) => {
    setUsersList((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          const updatedStatus = u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
          return { ...u, status: updatedStatus };
        }
        return u;
      })
    );
  };

  // Add new user
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFirstName || !newLastName || !newEmail) return;

    const newUser: MockUser = {
      id: `usr_${Date.now()}`,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      role: newRole,
      status: 'ACTIVE',
      lastLogin: 'Just now',
    };

    setUsersList([newUser, ...usersList]);
    setShowAddModal(false);
    setNewFirstName('');
    setNewLastName('');
    setNewEmail('');
  };

  // Filtered users
  const filteredUsers = usersList.filter((u) => {
    const matchesSearch =
      u.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === 'ALL' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  // -------------------------------------------------------------
  // RBAC GUARD CHECK: IF NOT ADMIN, RENDER ACCESS DENIED BANNER
  // -------------------------------------------------------------
  if (!isAdmin) {
    return (
      <div className="py-12 flex items-center justify-center text-left">
        <div className="max-w-xl w-full glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[11px] font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 uppercase tracking-wider">
              RBAC Permission Restricted
            </span>
            <h1 className="text-2xl font-bold text-white mt-3">Access Denied — Admin Role Required</h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              The User Management Directory is strictly restricted to accounts with the <strong className="text-white">`ORG_ADMIN`</strong> role. Your current logged-in role is <strong className="text-indigo-400">`{user.role}`</strong>.
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-white block">💡 Demo RBAC Role Switcher:</span>
            <p className="text-xs text-slate-400">
              Click the <strong>"Admin Role"</strong> toggle in the top header navigation bar to switch your role to <strong className="text-purple-300">ORG_ADMIN</strong> and unlock full user management features.
            </p>
            <button
              onClick={() => setRole('ORG_ADMIN')}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" /> Switch to Admin Role Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // ADMIN VIEW: FULL INTERACTIVE USER MANAGEMENT DIRECTORY
  // -------------------------------------------------------------
  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">User Management Directory</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono">
              Admin Only
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Manage organization team members, assign RBAC roles, and control active user access.</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="gradient-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 hover:scale-105 transition-all"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add New Member</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search member name or email..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
        </div>

        {/* Role Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-slate-400">Role:</span>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
          >
            <option value="ALL">All Roles ({usersList.length})</option>
            <option value="ORG_ADMIN">Admin (ORG_ADMIN)</option>
            <option value="PROJECT_MANAGER">Project Manager</option>
            <option value="TEAM_MEMBER">Team Member</option>
          </select>
        </div>

      </div>

      {/* User Table */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Member Name</th>
                <th className="py-4 px-6">Email Address</th>
                <th className="py-4 px-6">Assigned Role (RBAC)</th>
                <th className="py-4 px-6">Access Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500 text-xs">
                    No members match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-900/40 transition-colors">
                    
                    {/* User Name & Avatar */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 font-bold text-white text-xs flex items-center justify-center shrink-0">
                          {u.firstName[0]}
                          {u.lastName[0]}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">
                            {u.firstName} {u.lastName}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono">Last active {u.lastLogin}</span>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="py-4 px-6 font-mono text-slate-300">{u.email}</td>

                    {/* Dynamic Role Change Selector */}
                    <td className="py-4 px-6">
                      <select
                        value={u.role}
                        onChange={(e) => handleRoleChange(u.id, e.target.value as UserRole)}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-medium text-purple-300 focus:outline-none focus:border-purple-500"
                      >
                        <option value="ORG_ADMIN">ORG_ADMIN</option>
                        <option value="PROJECT_MANAGER">PROJECT_MANAGER</option>
                        <option value="TEAM_MEMBER">TEAM_MEMBER</option>
                      </select>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-6">
                      {u.status === 'ACTIVE' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                          <CheckCircle2 className="w-3 h-3" /> Active
                        </span>
                      )}
                      {u.status === 'SUSPENDED' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[11px] font-medium">
                          <XCircle className="w-3 h-3" /> Suspended
                        </span>
                      )}
                      {u.status === 'PENDING' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-medium">
                          Pending Verification
                        </span>
                      )}
                    </td>

                    {/* Action Toggle */}
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleToggleStatus(u.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                          u.status === 'ACTIVE'
                            ? 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                        }`}
                      >
                        {u.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
                      </button>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel max-w-md w-full p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-purple-400" /> Add Team Member
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white bg-slate-950 border border-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                    placeholder="Sarah"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    placeholder="Connor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="sarah@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Assigned Role</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as UserRole)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
                >
                  <option value="TEAM_MEMBER">TEAM_MEMBER</option>
                  <option value="PROJECT_MANAGER">PROJECT_MANAGER</option>
                  <option value="ORG_ADMIN">ORG_ADMIN</option>
                </select>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-950 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20"
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
