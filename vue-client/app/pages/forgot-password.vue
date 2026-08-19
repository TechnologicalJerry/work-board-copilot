<script setup lang="ts">
import { ref } from 'vue';
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Server,
  LayoutDashboard,
  KeyRound,
  RefreshCw
} from 'lucide-vue-next';

definePageMeta({
  layout: 'default'
});

const email = ref('');
const step = ref<1 | 2>(1);
const targetServer = ref<'fastify' | 'nest' | 'express'>('fastify');

const loading = ref(false);
const errorMessage = ref<string | null>(null);
const countdown = ref(0);

const serverEndpoints = {
  fastify: 'http://localhost:4000/api/v1/auth/forgot-password',
  nest: 'http://localhost:3000/api/v1/auth/forgot-password',
  express: 'http://localhost:3001/api/v1/auth/forgot-password'
};

const startCountdown = () => {
  countdown.value = 30;
  const interval = setInterval(() => {
    if (countdown.value <= 1) {
      clearInterval(interval);
      countdown.value = 0;
    } else {
      countdown.value -= 1;
    }
  }, 1000);
};

const handleResend = () => {
  if (countdown.value === 0) {
    startCountdown();
  }
};

const handleSubmit = async () => {
  errorMessage.value = null;

  if (!email.value) {
    errorMessage.value = 'Please enter your email address.';
    return;
  }

  loading.value = true;

  try {
    const endpoint = serverEndpoints[targetServer.value];
    await $fetch(endpoint, {
      method: 'POST',
      body: { email: email.value }
    });

    step.value = 2;
    startCountdown();
  } catch (err: any) {
    step.value = 2;
    startCountdown();
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div className="py-12 sm:py-16 flex items-center justify-center relative min-h-[calc(100vh-160px)]">
    
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
        <h1 className="text-xl font-bold text-white">Reset Your Password</h1>
        <p className="text-xs text-slate-400 mt-1">We will send a reset token link to your registered email.</p>
      </div>

      <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-left">
        
        <div v-if="step === 1">
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

          <div v-if="errorMessage" className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{{ errorMessage }}</span>
          </div>

          <form @submit.prevent="handleSubmit" className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Registered Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  v-model="email"
                  placeholder="user@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              :disabled="loading"
              className="w-full gradient-glow flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all"
            >
              <span>{{ loading ? 'Sending Instructions...' : 'Send Reset Link' }}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div v-else className="text-center py-4 space-y-4">
          <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-indigo-400 mx-auto">
            <KeyRound className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">Check Your Inbox</h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
            If an account with <strong>{{ email }}</strong> exists, password reset instructions have been dispatched via {{ targetServer.toUpperCase() }} Auth Server.
          </p>

          <div className="pt-2">
            <button
              type="button"
              :disabled="countdown > 0"
              @click="handleResend"
              :class="[
                'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all',
                countdown > 0
                  ? 'bg-slate-950 text-slate-500 border-slate-900 cursor-not-allowed'
                  : 'bg-slate-900 text-indigo-400 border-slate-800 hover:bg-slate-800'
              ]"
            >
              <RefreshCw :class="['w-3.5 h-3.5', countdown > 0 ? 'animate-spin' : '']" />
              <span>{{ countdown > 0 ? `Resend email in ${countdown}s` : 'Resend Email' }}</span>
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
          <NuxtLink to="/login" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Sign In</span>
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>
