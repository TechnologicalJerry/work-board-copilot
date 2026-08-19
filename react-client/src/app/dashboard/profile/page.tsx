'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import {
  User,
  Mail,
  ShieldCheck,
  KeyRound,
  CheckCircle2,
  Laptop,
  Smartphone,
  Trash2,
  Save,
} from 'lucide-react';

export default function UserProfilePage() {
  const { user, updateProfile } = useAuth();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ firstName, lastName, email });
    setSuccessMsg('Profile information updated successfully!');
    setTimeout(() => setSuccessMsg(null), 2500);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) return;
    setSuccessMsg('Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setTimeout(() => setSuccessMsg(null), 2500);
  };

  return (
    <div className="space-y-8 text-left max-w-5xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">User Profile & Account</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">Manage your personal information, role, and security settings.</p>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* User Card Top Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 font-extrabold text-white text-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
          {user.firstName[0]}
          {user.lastName[0]}
        </div>
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-xl font-bold text-white">{user.firstName} {user.lastName}</h2>
          <span className="text-xs text-slate-400 block">{user.email}</span>
          <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> {user.role}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              Account Active
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Personal Details Form */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <User className="w-4 h-4 text-indigo-400" /> Personal Details
          </h3>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">First Name</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Last Name</label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4" /> Save Profile Changes
            </button>
          </form>
        </div>

        {/* Change Password Form */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-purple-400" /> Security & Password
          </h3>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">New Password</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" /> Update Password
            </button>
          </form>
        </div>

      </div>

      {/* Active Sessions Table */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <h3 className="text-base font-bold text-white mb-4">Active Auth Sessions</h3>
        
        <div className="space-y-3">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600/10 text-indigo-400 rounded-lg">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Windows PC — Chrome 124</span>
                <span className="text-[10px] text-slate-400 block font-mono">192.168.1.42 • Active Session (Current)</span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Current Device
            </span>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-600/10 text-purple-400 rounded-lg">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">iPhone 15 Pro — Safari Mobile</span>
                <span className="text-[10px] text-slate-400 block font-mono">172.56.21.90 • 2 hours ago</span>
              </div>
            </div>
            <button
              onClick={() => alert('Session revoked in database.')}
              className="text-xs text-red-400 hover:text-red-300 font-medium flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Revoke
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
