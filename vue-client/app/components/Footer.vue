<script setup lang="ts">
import {
  LayoutDashboard,
  Heart,
  Server,
  Terminal,
  ShieldCheck,
  Code2,
  Globe,
  Share2
} from 'lucide-vue-next';
</script>

<template>
  <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 text-left">
        
        <!-- Brand Col -->
        <div className="md:col-span-2 space-y-4">
          <NuxtLink to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              BoardPilot <span className="gradient-text">AI</span>
            </span>
          </NuxtLink>
          <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
            Enterprise agile project management platform reference architecture implemented in Vue 3 & Nuxt 3 showcasing Express, NestJS, and Fastify backend engines.
          </p>
          
          <!-- Tech Badges -->
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
              <Server className="w-3 h-3 text-indigo-400" /> Express.js
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-purple-300">
              <Terminal className="w-3 h-3 text-purple-400" /> NestJS
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-pink-300">
              <ShieldCheck className="w-3 h-3 text-pink-400" /> Fastify
            </span>
          </div>
        </div>

        <!-- Quick Links -->
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Navigation</h4>
          <ul className="space-y-2.5 text-xs">
            <li><NuxtLink to="/" className="hover:text-white transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/about" className="hover:text-white transition-colors">About System</NuxtLink></li>
            <li><NuxtLink to="/contact" className="hover:text-white transition-colors">Contact & Support</NuxtLink></li>
            <li><NuxtLink to="/login" className="hover:text-white transition-colors">Sign In</NuxtLink></li>
            <li><NuxtLink to="/signup" className="hover:text-white transition-colors">Create Account</NuxtLink></li>
          </ul>
        </div>

        <!-- Core Services -->
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Backends</h4>
          <ul className="space-y-2.5 text-xs">
            <li><span className="text-slate-300">Express Microservices</span> <span className="ml-2 text-[10px] text-emerald-400 font-mono">21 Services</span></li>
            <li><span className="text-slate-300">NestJS Auth Server</span> <span className="ml-2 text-[10px] text-indigo-400 font-mono">Swagger API</span></li>
            <li><span className="text-slate-300">Fastify Auth Server</span> <span className="ml-2 text-[10px] text-pink-400 font-mono">Zod / Plugins</span></li>
            <li><span className="text-slate-300">Prisma & MongoDB</span> <span className="ml-2 text-[10px] text-purple-400 font-mono">PostgreSQL</span></li>
          </ul>
        </div>

        <!-- Community & Social -->
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Community</h4>
          <p className="text-xs text-slate-400 leading-normal">
            Explore the polyglot monorepo codebase and Nuxt 3 implementation.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors" aria-label="GitHub">
              <Code2 className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white transition-colors" aria-label="Community">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© 2026 BoardPilot AI. Vue 3 / Nuxt 3 Engine.</p>
        <p className="flex items-center gap-1">
          Engineered with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for high performance & scalability.
        </p>
      </div>
    </div>
  </footer>
</template>
