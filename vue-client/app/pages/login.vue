<script setup lang="ts">
import { ref } from 'vue';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Server,
  LayoutDashboard
} from 'lucide-vue-next';

definePageMeta({
  layout: 'default'
});

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);
const targetServer = ref<'fastify' | 'nest' | 'express'>('fastify');

const loading = ref(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

const serverEndpoints = {
  fastify: 'http://localhost:4000/api/v1/auth/login',
  nest: 'http://localhost:3000/api/v1/auth/login',
  express: 'http://localhost:3001/api/v1/auth/login'
};

const handleSubmit = async () => {
  errorMessage.value = null;
  successMessage.value = null;

  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter both email and password.';
    return;
  }

  loading.value = true;

  try {
    const endpoint = serverEndpoints[targetServer.value];
    const data: any = await $fetch(endpoint, {
      method: 'POST',
      body: { email: email.value, password: password.value }
    });

    successMessage.value = `Login successful via ${targetServer.value.toUpperCase()} Auth Server! Redirecting to Dashboard...`;
    if (data.accessToken && import.meta.client) {
      localStorage.setItem('accessToken', data.accessToken);
    }
    setTimeout(() => {
      navigateTo('/dashboard');
    }, 1000);
  } catch (err: any) {
    errorMessage.value = err.data?.message || `Unable to reach ${targetServer.value.toUpperCase()} server. Make sure it is running locally.`;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div className="py-12 sm:py-16 flex items-center justify-center relative min-h-[calc(100vh-160px)]">
    
    <!-- Ambient Glow -->
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />

    <div className="w-full max-w-md px-4">
      
      <div className="text-center mb-8">
        <NuxtLink to="/" className="inline-flex items-center gap-3 group mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            BoardPilot <span className="gradient-text">AI</span>
          </span>
        </NuxtLink>
        <h1 className="text-xl font-bold text-white">Sign In to Your Account</h1>
        <p className="text-xs text-slate-400 mt-1">Select a backend auth server and enter your credentials.</p>
      </div>

      <!-- Card -->
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-left">
        
        <!-- Target Backend Server Selector -->
        <div className="mb-6">
          <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Server className="w-3.5 h-3.5 text-indigo-400" /> Target Backend Server
          </label>
          <div className="grid grid-cols-3 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              @click="targetServer = 'fastify'"
              :class="[
                'py-1.5 text-xs font-semibold rounded-lg transition-all',
                targetServer === 'fastify' ? 'bg-pink-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              ]"
            >
              Fastify (4000)
            </button>
            <button
              type="button"
              @click="targetServer = 'nest'"
              :class="[
                'py-1.5 text-xs font-semibold rounded-lg transition-all',
                targetServer === 'nest' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              ]"
            >
              NestJS (3000)
            </button>
            <button
              type="button"
              @click="targetServer = 'express'"
              :class="[
                'py-1.5 text-xs font-semibold rounded-lg transition-all',
                targetServer === 'express' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              ]"
            >
              Express (3001)
            </button>
          </div>
        </div>

        <!-- Feedback Messages -->
        <div v-if="errorMessage" className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{{ errorMessage }}</span>
        </div>

        <div v-if="successMessage" className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <input
                type="email"
                required
                v-model="email"
                placeholder="user@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-slate-300">Password</label>
              <NuxtLink to="/forgot-password" className="text-xs text-indigo-400 hover:underline">
                Forgot password?
              </NuxtLink>
            </div>
            <div className="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                required
                v-model="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <button
                type="button"
                @click="showPassword = !showPassword"
                className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300"
              >
                <EyeOff v-if="showPassword" className="w-4 h-4" />
                <Eye v-else className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              v-model="rememberMe"
              className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 text-xs text-slate-400">
              Remember this device
            </label>
          </div>

          <button
            type="submit"
            :disabled="loading"
            className="w-full gradient-glow flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all"
          >
            <span>{{ loading ? 'Authenticating...' : 'Sign In' }}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        Don't have an account?{' '}
        <NuxtLink to="/signup" className="text-indigo-400 font-semibold hover:underline">
          Create an Account Free
        </NuxtLink>
      </p>

    </div>
  </div>
</template>
