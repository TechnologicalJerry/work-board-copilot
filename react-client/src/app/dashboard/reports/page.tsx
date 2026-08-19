'use client';

import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Zap,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';

export default function SprintReportsPage() {
  const sprintHistory = [
    { name: 'Sprint 40', committed: 40, completed: 38, rate: '95%' },
    { name: 'Sprint 41', committed: 45, completed: 44, rate: '97%' },
    { name: 'Sprint 42 (Current)', committed: 48, completed: 42, rate: '87.5%' },
  ];

  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-400" /> Sprint Reports & Team Velocity
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">Analytical burndown metrics, capacity utilization, and completion trends.</p>
      </div>

      {/* Top Velocity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400">Average Velocity</span>
          <div className="text-3xl font-extrabold text-white">41.3 <span className="text-xs font-mono text-indigo-400">Points/Sprint</span></div>
          <span className="text-[11px] text-emerald-400 block font-mono">↑ +8.5% improvement</span>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400">Sprint Completion Rate</span>
          <div className="text-3xl font-extrabold text-white">93.1%</div>
          <span className="text-[11px] text-slate-400 block font-mono">124 / 133 Story Points</span>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
          <span className="text-xs text-slate-400">Cycle Time</span>
          <div className="text-3xl font-extrabold text-white">1.8 <span className="text-xs font-mono text-purple-400">Days</span></div>
          <span className="text-[11px] text-slate-400 block font-mono">From In Progress → Done</span>
        </div>
      </div>

      {/* Velocity History Table */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-400" /> Velocity Across Recent Sprints
        </h3>

        <div className="space-y-4">
          {sprintHistory.map((s, idx) => (
            <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-white">{s.name}</span>
                <span className="font-mono text-emerald-400">{s.completed} / {s.committed} Points ({s.rate})</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-2.5 p-0.5 border border-slate-800">
                <div
                  className="bg-gradient-to-r from-purple-500 to-emerald-400 h-full rounded-full transition-all"
                  style={{ width: s.rate }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
