'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import {
  Kanban,
  Zap,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowRight,
  Server,
  Sparkles,
  Bot,
  Activity,
  Users,
} from 'lucide-react';

export default function DashboardOverviewPage() {
  const { user } = useAuth();

  const metrics = [
    { title: 'Total Active Tasks', value: '142', change: '+12% this sprint', icon: Kanban, color: 'text-indigo-400', bg: 'bg-indigo-600/10 border-indigo-500/20' },
    { title: 'Active Sprints', value: '2', change: 'Sprint 42 & Sprint 43', icon: Zap, color: 'text-purple-400', bg: 'bg-purple-600/10 border-purple-500/20' },
    { title: 'Team Velocity', value: '88%', change: '42 / 48 Story Points', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-600/10 border-emerald-500/20' },
    { title: 'System Health', value: 'Online', change: 'Fastify & NestJS Active', icon: Activity, color: 'text-pink-400', bg: 'bg-pink-600/10 border-pink-500/20' },
  ];

  const recentActivities = [
    { id: 1, text: 'Fastify Auth Server rotated session refresh token', time: '10m ago', type: 'security' },
    { id: 2, text: 'NestJS Passport JWT Guard verified user credentials', time: '25m ago', type: 'auth' },
    { id: 3, text: 'Task AUTH-102 moved to In Progress by Techno Jerry', time: '1h ago', type: 'task' },
    { id: 4, text: 'Sprint 42 burndown updated (85% completion target)', time: '3h ago', type: 'sprint' },
  ];

  return (
    <div className="space-y-8 text-left">
      
      {/* Welcome Hero Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Active Session
            </span>
            <span className="text-xs font-mono text-slate-400">Role: <strong className="text-white">{user.role}</strong></span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Welcome back, <span className="gradient-text">{user.firstName} {user.lastName}</span>!
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
            BoardPilot AI is connected to <strong>Fastify (Port 4000)</strong> & <strong>NestJS (Port 3000)</strong> backend engines.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/tasks"
            className="gradient-glow inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-lg shadow-indigo-600/20 hover:scale-105 transition-all"
          >
            <span>View Board</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, idx) => {
          const IconComp = m.icon;
          return (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{m.title}</span>
                <div className={`p-2.5 rounded-xl border ${m.bg}`}>
                  <IconComp className={`w-5 h-5 ${m.color}`} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">{m.value}</div>
              <span className="text-[11px] text-slate-400 block font-mono">{m.change}</span>
            </div>
          );
        })}
      </div>

      {/* Two Column Section: Sprint Progress & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 Cols: Sprint 42 Status */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-white">Sprint 42 — Progress Gauge</h3>
                <span className="text-xs text-slate-400">Target completion: Aug 25, 2026</span>
              </div>
              <span className="text-xs font-mono px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                87.5% Completed
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800 mb-6">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full rounded-full w-[87.5%] transition-all duration-500" />
            </div>

            {/* Task Column Stats */}
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block">Backlog</span>
                <span className="text-lg font-bold text-white mt-1 block">12</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-indigo-400 block">In Progress</span>
                <span className="text-lg font-bold text-indigo-300 mt-1 block">18</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-purple-400 block">In Review</span>
                <span className="text-lg font-bold text-purple-300 mt-1 block">8</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-emerald-400 block">Done</span>
                <span className="text-lg font-bold text-emerald-300 mt-1 block">42</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Recent Activity Timeline */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-400" /> Recent System Activity
            </h3>
            
            <div className="space-y-3">
              {recentActivities.map((act) => (
                <div key={act.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-start justify-between gap-3 text-xs">
                  <div>
                    <span className="text-slate-200 font-medium block">{act.text}</span>
                    <span className="text-[10px] text-slate-400 block mt-1">{act.time}</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
