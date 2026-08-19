'use client';

import React from 'react';
import Link from 'next/link';
import {
  Server,
  Terminal,
  ShieldCheck,
  Cpu,
  Database,
  Workflow,
  ArrowRight,
  Check,
  Code2,
  Globe,
  Lock,
} from 'lucide-react';

export default function AboutPage() {
  const backends = [
    {
      name: 'Express.js Microservices',
      icon: Server,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-600/10 border-indigo-500/30',
      badge: '21 Services Complete',
      desc: 'Built using Clean Architecture, Domain-Driven Design (DDD), and CQRS pattern. Offers modular microservices communicating via RabbitMQ event contracts.',
      features: ['21 Standalone Microservices', 'Clean Architecture / DDD', 'RabbitMQ Event Bus', 'Docker & K8s Manifests'],
    },
    {
      name: 'NestJS Auth Server',
      icon: Terminal,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/10 border-purple-500/30',
      badge: 'Auth Service Ready',
      desc: 'Enterprise module-based dependency injection framework with Passport JWT strategy, class-validator DTOs, and auto-generated OpenAPI Swagger documentation.',
      features: ['Passport JWT & Strategy', 'class-validator DTO Pipes', 'OpenAPI / Swagger UI', 'Global Exception Filters'],
    },
    {
      name: 'Fastify Auth Server',
      icon: ShieldCheck,
      color: 'text-pink-400',
      bgColor: 'bg-pink-600/10 border-pink-500/30',
      badge: 'High Speed Ready',
      desc: 'Native Fastify plugin architecture delivering maximum performance, Zod request schemas, `@fastify/jwt`, and HTTP-Only session token rotation.',
      features: ['Extremely Low Overhead', 'Zod Schema Validation', 'Native Fastify Plugins', 'Token Rotation & Cookies'],
    },
  ];

  return (
    <div className="py-12 sm:py-20 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            About System Architecture
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
            Engineering a <span className="gradient-text">Polyglot Reference</span> Platform
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            BoardPilot AI is designed to solve real-world agile management needs while demonstrating how identical domain logic is implemented across modern Node.js framework paradigms.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-left">
            <Cpu className="w-8 h-8 text-indigo-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Clean Architecture</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Decoupled domain entities, use cases, and infrastructure adapters.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-left">
            <Workflow className="w-8 h-8 text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Event-Driven</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Asynchronous RabbitMQ message queues with dead-letter retries.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-left">
            <Lock className="w-8 h-8 text-pink-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Zero-Trust Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Token rotation, httpOnly cookies, helmet headers, and audit trails.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-left">
            <Globe className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">Unified API Contract</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Identical REST endpoints and response shapes across backends.</p>
          </div>
        </div>

        {/* Backend Framework Comparison Section */}
        <div className="mb-20 text-left">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Framework Implementation Breakdown</h2>
            <p className="text-sm text-slate-400 mt-2">Explore the three backend engines powering BoardPilot AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {backends.map((backend, index) => {
              const IconComponent = backend.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${backend.bgColor}`}>
                        <IconComponent className={`w-6 h-6 ${backend.color}`} />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                        {backend.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{backend.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{backend.desc}</p>

                    <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
                      {backend.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/signup"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-white transition-colors"
                    >
                      <span>Connect to {backend.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure Matrix Table */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 text-left mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-400" /> Shared Database & Infrastructure Stack
              </h3>
              <p className="text-xs text-slate-400 mt-1">All three backend engines run on common database and event queues.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Layer</th>
                  <th className="py-3 px-4">Technology</th>
                  <th className="py-3 px-4">Role & Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Relational DB</td>
                  <td className="py-3.5 px-4 font-mono text-indigo-300">PostgreSQL 16 + Prisma ORM</td>
                  <td className="py-3.5 px-4 text-slate-400">Users, Sessions, Organizations, Projects, Sprints, Kanban Tasks</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Document Store</td>
                  <td className="py-3.5 px-4 font-mono text-purple-300">MongoDB 7</td>
                  <td className="py-3.5 px-4 text-slate-400">Rich Documents, Threaded Comments, Notifications, Audit Logs</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Cache & Session</td>
                  <td className="py-3.5 px-4 font-mono text-pink-300">Redis 7</td>
                  <td className="py-3.5 px-4 text-slate-400">Rate Limiting, Session Caching, Real-time WebSocket Relay</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Message Broker</td>
                  <td className="py-3.5 px-4 font-mono text-emerald-300">RabbitMQ 3.13</td>
                  <td className="py-3.5 px-4 text-slate-400">Domain Events (`task.created`, `task.status_changed`, `sprint.completed`)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">AI Engine</td>
                  <td className="py-3.5 px-4 font-mono text-amber-300">OpenAI GPT-4</td>
                  <td className="py-3.5 px-4 text-slate-400">Task Breakdown Generation, Risk Assessment, Executive Summaries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Have Questions? Talk to Engineering</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
