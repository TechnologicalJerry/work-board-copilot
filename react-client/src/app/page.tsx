'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Kanban,
  Zap,
  ShieldCheck,
  Bot,
  BarChart3,
  Layers,
  CheckCircle2,
  Server,
  Code2,
  ChevronRight,
  Clock,
  UserCheck,
} from 'lucide-react';

export default function HomePage() {
  const [activeServer, setActiveServer] = useState<'fastify' | 'nest' | 'express'>('fastify');

  const serverDetails = {
    fastify: {
      name: 'Fastify Auth Server',
      port: '4000',
      tag: 'High Performance & Zod Validation',
      endpoint: '/api/v1/auth/login',
      latency: '8ms',
      status: 'Online & Verified',
    },
    nest: {
      name: 'NestJS Auth Server',
      port: '3000',
      tag: 'Passport JWT & OpenAPI Swagger',
      endpoint: '/api/v1/auth/login',
      latency: '14ms',
      status: 'Online & Verified',
    },
    express: {
      name: 'Express Microservices',
      port: '3001',
      tag: '21 Clean Microservices Architecture',
      endpoint: '/api/v1/identity/login',
      latency: '18ms',
      status: 'Online & Verified',
    },
  };

  const currentServer = serverDetails[activeServer];

  return (
    <div className="relative overflow-hidden pt-8 pb-20">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-8 shadow-lg shadow-indigo-500/10">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Polyglot Monorepo — Express, NestJS & Fastify Backends</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none max-w-5xl mx-auto">
          Manage Agile Projects with <span className="gradient-text">AI Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          BoardPilot AI is the Next-Gen Agile Platform. Experience identical enterprise domain microservices implemented in <strong>Express</strong>, <strong>NestJS</strong>, and <strong>Fastify</strong>.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto gradient-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-2xl transition-all"
          >
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span>Explore Monorepo Architecture</span>
          </Link>
        </div>

        {/* Interactive Kanban Board Preview Mockup */}
        <div className="mt-16 max-w-6xl mx-auto glass-panel rounded-3xl p-4 sm:p-6 border border-slate-800/80 shadow-2xl shadow-indigo-950/50">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">Sprint 42 — Kanban Board</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Real-time Sync
              </span>
            </div>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            
            {/* Column 1: Backlog */}
            <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Backlog</span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800 text-slate-400">3</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 hover:border-indigo-500/40 transition-colors">
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 mb-2">AUTH-102</span>
                  <p className="text-xs font-medium text-white leading-snug">Implement Refresh Token Rotation in Fastify</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 2h</span>
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">TJ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: In Progress */}
            <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">In Progress</span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-indigo-500/20 text-indigo-300">2</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-indigo-500/30 shadow-md shadow-indigo-500/10">
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 mb-2">NEST-204</span>
                  <p className="text-xs font-medium text-white leading-snug">Setup NestJS Passport JWT Guard & Swagger</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-amber-400"><Zap className="w-3 h-3" /> High</span>
                    <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] font-bold flex items-center justify-center">AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Code Review */}
            <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Review</span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-purple-500/20 text-purple-300">1</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800">
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 mb-2">EXPRESS-88</span>
                  <p className="text-xs font-medium text-white leading-snug">RabbitMQ Domain Event Bus for Task Status</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><UserCheck className="w-3 h-3 text-emerald-400" /> Approved</span>
                    <span className="w-5 h-5 rounded-full bg-pink-600 text-white text-[10px] font-bold flex items-center justify-center">DEV</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Done */}
            <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Completed</span>
                <span className="px-2 py-0.5 text-xs font-mono rounded bg-emerald-500/20 text-emerald-300">4</span>
              </div>
              <div className="space-y-3">
                <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 opacity-80">
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 mb-2">REACT-01</span>
                  <p className="text-xs font-medium text-slate-300 line-through">React 19 Next.js App Router Setup</p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-emerald-400">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Done</span>
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Backend Microservice Switcher Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 text-left">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Live Backend Integration</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Multi-Framework Architecture Switcher</h2>
            </div>
            
            {/* Server Tabs */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => setActiveServer('fastify')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeServer === 'fastify'
                    ? 'bg-pink-600 text-white shadow-lg shadow-pink-600/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fastify Auth
              </button>
              <button
                onClick={() => setActiveServer('nest')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeServer === 'nest'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                NestJS Auth
              </button>
              <button
                onClick={() => setActiveServer('express')}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeServer === 'express'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Express Microservices
              </button>
            </div>
          </div>

          {/* Active Server Info Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block mb-1">Target Service</span>
              <p className="text-base font-semibold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-400" /> {currentServer.name}
              </p>
              <span className="text-xs text-indigo-300 font-mono mt-1 block">{currentServer.tag}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-1">Auth API Endpoint</span>
              <p className="text-sm font-mono text-pink-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 inline-block">
                POST {currentServer.endpoint}
              </p>
              <span className="text-xs text-slate-400 block mt-1">Port: {currentServer.port}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block mb-1">Service Status</span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400">{currentServer.status}</span>
              </div>
              <span className="text-xs text-slate-400 block mt-1 font-mono">Response Latency: {currentServer.latency}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Built for <span className="gradient-text">High-Scale</span> Agile Teams
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Everything you need to plan, track, and ship software efficiently across enterprise microservice stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Kanban className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Agile Boards & Sprints</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Drag-and-drop Kanban boards, WIP limits, velocity tracking, backlog grooming, and burndown analytics.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">AI Assistant Copilot</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              OpenAI-powered task decomposition, automatic sprint risk analysis, and smart issue summary generation.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              JWT Access Tokens, HTTP-only cookie refresh rotation, 7-level RBAC role hierarchy, and immutable audit logs.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Polyglot Microservices</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Standalone backend implementations in Express, NestJS, and Fastify sharing PostgreSQL, MongoDB & Redis schemas.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Event-Driven Engine</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              RabbitMQ message broker dispatching status change events, webhooks, Slack notifications, and search indexing.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="glass-card p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Workload distribution charts, cycle time reporting, capacity planning, and automated Stripe billing limits.
            </p>
          </div>

        </div>
      </section>

      {/* Stats Counter Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-4xl sm:text-5xl font-extrabold text-white gradient-text">21+</span>
            <span className="text-xs text-slate-400 block mt-2 font-medium">Microservices</span>
          </div>
          <div>
            <span className="text-4xl sm:text-5xl font-extrabold text-white gradient-text">3</span>
            <span className="text-xs text-slate-400 block mt-2 font-medium">Server Frameworks</span>
          </div>
          <div>
            <span className="text-4xl sm:text-5xl font-extrabold text-white gradient-text">99.99%</span>
            <span className="text-xs text-slate-400 block mt-2 font-medium">Uptime Guarantee</span>
          </div>
          <div>
            <span className="text-4xl sm:text-5xl font-extrabold text-white gradient-text">100k+</span>
            <span className="text-xs text-slate-400 block mt-2 font-medium">Tasks Managed</span>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-indigo-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Ready to Build Next-Gen Sprints?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Experience BoardPilot AI today with Fastify, NestJS, and Express backend implementations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="gradient-glow px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all"
            >
              Create Free Account
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-2xl hover:text-white transition-colors"
            >
              Contact Engineering Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
