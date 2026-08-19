<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  User,
  Mail,
  Lock,
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

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const role = ref('TEAM_MEMBER');
const showPassword = ref(false);
const agreeTerms = ref(true);
const targetServer = ref<'fastify' | 'nest' | 'express'>('fastify');

const loading = ref(false);
const errorMessage = ref<string | null>(null);
const successMessage = ref<string | null>(null);

const serverEndpoints = {
  fastify: 'http://localhost:4000/api/v1/auth/register',
  nest: 'http://localhost:3000/api/v1/auth/register',
  express: 'http://localhost:3001/api/v1/auth/register'
};

const strength = computed(() => {
  const pass = password.value;
  if (!pass) return { score: 0, label: 'None', color: 'bg-slate-800' };
  if (pass.length < 6) return { score: 1, label: 'Weak', color: 'bg-red-500' };
  if (pass.length < 10) return { score: 2, label: 'Fair', color: 'bg-amber-500' };
  return { score: 3, label: 'Strong', color: 'bg-emerald-500' };
});

const handleSubmit = async () => {
  errorMessage.value = null;
  successMessage.value = null;

  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    errorMessage.value = 'Please fill in all required fields.';
    return;
  }

  if (!agreeTerms.value) {
    errorMessage.value = 'You must accept the Terms of Service to create an account.';
    return;
  }

  loading.value = true;

  try {
    const endpoint = serverEndpoints[targetServer.value];
    await $fetch(endpoint, {
      method: 'POST',
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        role: role.value
      }
    });

    successMessage.value = `Account created successfully via ${targetServer.value.toUpperCase()} Auth Server! Redirecting to login...`;
    setTimeout(() => {
      navigateTo('/login');
    }, 1500);
  } catch (err: any) {
    errorMessage.value = err.data?.message || `Unable to connect to ${targetServer.value.toUpperCase()} server. Make sure it is running locally.`;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div className="py-12 sm:py-16 flex items-center justify-center relative min-h-[calc(100vh-160px)]">
    
    <div className="w-full max-w-lg px-4">
      
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
        <h1 className="text-xl font-bold text-white">Create Your Account</h1>
        <p className="text-xs text-slate-400 mt-1">Join BoardPilot AI in Nuxt 3 Engine.</p>
      </div>

      <!-- Card -->
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-left">
        
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

        <div v-if="successMessage" className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{{ successMessage }}</span>
        </div>

        <form @submit.prevent="handleSubmit" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">First Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  v-model="firstName"
                  placeholder="John"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Last Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  v-model="lastName"
                  placeholder="Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email</label>
            <div className="relative">
              <input
                type="email"
                required
                v-model="email"
                placeholder="john@company.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                required
                v-model="password"
                placeholder="At least 8 characters"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <button
                type="button"
                @click="showPassword = !showPassword"
                className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300"
              >
                <EyeOff v-if="showPassword" className="w-4 h-4" />
                <Eye v-else className="w-4 h-4" />
              </button>
            </div>

            <!-- Password Strength Bar -->
            <div v-if="password" className="mt-2 flex items-center justify-between">
              <div className="flex gap-1.5 flex-1 max-w-[160px]">
                <div :class="['h-1.5 flex-1 rounded-full', strength.score >= 1 ? strength.color : 'bg-slate-800']" />
                <div :class="['h-1.5 flex-1 rounded-full', strength.score >= 2 ? strength.color : 'bg-slate-800']" />
                <div :class="['h-1.5 flex-1 rounded-full', strength.score >= 3 ? strength.color : 'bg-slate-800']" />
              </div>
              <span className="text-[11px] text-slate-400">Strength: <strong className="text-white">{{ strength.label }}</strong></span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Primary Role</label>
            <select
              v-model="role"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
            >
              <option value="TEAM_MEMBER">Team Member / Developer</option>
              <option value="PROJECT_MANAGER">Project Manager / Scrum Master</option>
              <option value="ORG_ADMIN">Organization Admin</option>
            </select>
          </div>

          <div className="flex items-center pt-2">
            <input
              id="terms"
              type="checkbox"
              v-model="agreeTerms"
              className="w-4 h-4 rounded bg-slate-950 border-slate-800 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="terms" className="ml-2 text-xs text-slate-400">
              I agree to the Terms of Service and Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            :disabled="loading"
            className="w-full gradient-glow flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all mt-4"
          >
            <span>{{ loading ? 'Creating Account...' : 'Create Account' }}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>

      <p className="text-center text-xs text-slate-400 mt-6">
        Already have an account?{' '}
        <NuxtLink to="/login" className="text-indigo-400 font-semibold hover:underline">
          Sign In Here
        </NuxtLink>
      </p>

    </div>
  </div>
</template>
