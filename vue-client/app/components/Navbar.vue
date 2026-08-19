<script setup lang="ts">
import { ref } from 'vue';
import {
  LayoutDashboard,
  Menu,
  X,
  ArrowRight
} from 'lucide-vue-next';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 sm:h-20">
        
        <!-- Brand Logo -->
        <NuxtLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              BoardPilot <span className="gradient-text">AI</span>
            </span>
            <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">Vue 3 / Nuxt Engine</span>
          </div>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            :class="[
              'px-5 py-2 text-sm font-medium rounded-full transition-all duration-200',
              isActive(link.href)
                ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-600/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Desktop Action CTAs -->
        <div className="hidden md:flex items-center gap-3">
          <NuxtLink
            to="/login"
            :class="[
              'px-4 py-2 text-sm font-medium transition-colors',
              isActive('/login') ? 'text-indigo-400 font-semibold' : 'text-slate-300 hover:text-white'
            ]"
          >
            Sign In
          </NuxtLink>
          <NuxtLink
            to="/signup"
            className="gradient-glow inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 rounded-full shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </NuxtLink>
        </div>

        <!-- Mobile Toggle Button -->
        <div className="md:hidden flex items-center">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <X v-if="mobileMenuOpen" className="w-6 h-6" />
            <Menu v-else className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.href"
        :to="link.href"
        @click="mobileMenuOpen = false"
        :class="[
          'block px-4 py-3 text-base font-medium rounded-xl transition-all',
          isActive(link.href)
            ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
        ]"
      >
        {{ link.name }}
      </NuxtLink>
      <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
        <NuxtLink
          to="/login"
          @click="mobileMenuOpen = false"
          className="w-full text-center px-4 py-3 rounded-xl border border-slate-800 text-slate-200 font-medium hover:bg-slate-900"
        >
          Sign In
        </NuxtLink>
        <NuxtLink
          to="/signup"
          @click="mobileMenuOpen = false"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-500/20"
        >
          <span>Get Started Free</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
