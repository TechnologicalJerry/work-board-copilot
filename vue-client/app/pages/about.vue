<script setup lang="ts">
import {
  Server,
  Terminal,
  ShieldCheck,
  Cpu,
  Database,
  Workflow,
  ArrowRight,
  Check,
  Globe,
  Lock
} from 'lucide-vue-next';

definePageMeta({
  layout: 'default'
});

const backends = [
  {
    name: 'Express.js Microservices',
    icon: Server,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-600/10 border-indigo-500/30',
    badge: '21 Services Complete',
    desc: 'Built using Clean Architecture, Domain-Driven Design (DDD), and CQRS pattern. Offers modular microservices communicating via RabbitMQ event contracts.',
    features: ['21 Standalone Microservices', 'Clean Architecture / DDD', 'RabbitMQ Event Bus', 'Docker & K8s Manifests']
  },
  {
    name: 'NestJS Auth Server',
    icon: Terminal,
    color: 'text-purple-400',
    bgColor: 'bg-purple-600/10 border-purple-500/30',
    badge: 'Auth Service Ready',
    desc: 'Enterprise module-based dependency injection framework with Passport JWT strategy, class-validator DTOs, and auto-generated OpenAPI Swagger documentation.',
    features: ['Passport JWT & Strategy', 'class-validator DTO Pipes', 'OpenAPI / Swagger UI', 'Global Exception Filters']
  },
  {
    name: 'Fastify Auth Server',
    icon: ShieldCheck,
    color: 'text-pink-400',
    bgColor: 'bg-pink-600/10 border-pink-500/30',
    badge: 'High Speed Ready',
    desc: 'Native Fastify plugin architecture delivering maximum performance, Zod request schemas, `@fastify/jwt`, and HTTP-Only session token rotation.',
    features: ['Extremely Low Overhead', 'Zod Schema Validation', 'Native Fastify Plugins', 'Token Rotation & Cookies']
  }
];
</script>

<template>
  <div className="py-12 sm:py-20 relative text-left">
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
          About Vue 3 & Nuxt Engine
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
          Engineering a <span className="gradient-text">Polyglot Reference</span> Platform
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
          BoardPilot AI is designed to demonstrate how identical domain requirements are implemented across Express, NestJS, and Fastify microservices.
        </p>
      </div>

      <!-- Core Pillars -->
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800">
          <Cpu className="w-8 h-8 text-indigo-400 mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Clean Architecture</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Decoupled domain entities, use cases, and infrastructure adapters.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-slate-800">
          <Workflow className="w-8 h-8 text-purple-400 mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Event-Driven</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Asynchronous RabbitMQ message queues with dead-letter retries.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-slate-800">
          <Lock className="w-8 h-8 text-pink-400 mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Zero-Trust Security</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Token rotation, httpOnly cookies, helmet headers, and audit trails.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-slate-800">
          <Globe className="w-8 h-8 text-emerald-400 mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">Unified API Contract</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Identical REST endpoints and response shapes across backends.</p>
        </div>
      </div>

      <!-- Framework Cards -->
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Framework Implementation Breakdown</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(backend, index) in backends" :key="index" className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div :class="['p-3 rounded-2xl', backend.bgColor]">
                  <component :is="backend.icon" :class="['w-6 h-6', backend.color]" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                  {{ backend.badge }}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{{ backend.name }}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{{ backend.desc }}</p>

              <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
                <div v-for="(feat, i) in backend.features" :key="i" className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{{ feat }}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <NuxtLink
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-white transition-colors"
              >
                <span>Connect Engine</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
