<script setup lang="ts">
import { ref } from 'vue';
import {
  Server,
  Key,
  Bell,
  CheckCircle2,
  Copy
} from 'lucide-vue-next';

definePageMeta({
  layout: 'dashboard'
});

const activeBackend = ref<'fastify' | 'nest' | 'express'>('fastify');
const apiKey = ref('bp_live_8917240192840192840192840192');
const slackWebhook = ref('https://hooks.slack.com/services/T00/B00/XXXX');
const emailAlerts = ref(true);
const savedMsg = ref(false);

const handleSave = () => {
  savedMsg.value = true;
  setTimeout(() => (savedMsg.value = false), 2500);
};

const handleCopyKey = () => {
  if (import.meta.client) {
    navigator.clipboard.writeText(apiKey.value);
    alert('API Key copied to clipboard!');
  }
};
</script>

<template>
  <div className="space-y-8 text-left max-w-5xl mx-auto">
    
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">System & Engine Settings</h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">Configure active microservice backend endpoints and integration keys.</p>
      </div>
      <button
        @click="handleSave"
        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all"
      >
        Save Settings
      </button>
    </div>

    <div v-if="savedMsg" className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 shrink-0" />
      <span>System settings saved successfully!</span>
    </div>

    <!-- Backend Switcher -->
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
      <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
        <Server className="w-4 h-4 text-indigo-400" /> Primary Backend Framework Target
      </h3>
      <p className="text-xs text-slate-400 mb-6">Select which backend server engine the Nuxt 3 dashboard connects to.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          @click="activeBackend = 'fastify'"
          :class="[
            'p-5 rounded-2xl border cursor-pointer transition-all',
            activeBackend === 'fastify' ? 'bg-pink-600/10 border-pink-500/50 shadow-lg shadow-pink-600/10' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          ]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white">Fastify Server</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300">Port 4000</span>
          </div>
          <p className="text-xs text-slate-400">High speed, Zod schemas, Fastify Plugins.</p>
        </div>

        <div
          @click="activeBackend = 'nest'"
          :class="[
            'p-5 rounded-2xl border cursor-pointer transition-all',
            activeBackend === 'nest' ? 'bg-indigo-600/10 border-indigo-500/50 shadow-lg shadow-indigo-600/10' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          ]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white">NestJS Server</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Port 3000</span>
          </div>
          <p className="text-xs text-slate-400">Passport JWT, DTO Pipes, Swagger UI.</p>
        </div>

        <div
          @click="activeBackend = 'express'"
          :class="[
            'p-5 rounded-2xl border cursor-pointer transition-all',
            activeBackend === 'express' ? 'bg-purple-600/10 border-purple-500/50 shadow-lg shadow-purple-600/10' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
          ]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white">Express Server</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Port 3001</span>
          </div>
          <p className="text-xs text-slate-400">21 Standalone microservices, RabbitMQ.</p>
        </div>
      </div>
    </div>

    <!-- API Key -->
    <div className="glass-panel p-6 rounded-3xl border border-slate-800">
      <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
        <Key className="w-4 h-4 text-purple-400" /> API Access Tokens
      </h3>

      <div className="flex items-center gap-3">
        <input
          type="text"
          readonly
          v-model="apiKey"
          className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300 focus:outline-none"
        />
        <button
          @click="handleCopyKey"
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-1.5"
        >
          <Copy className="w-3.5 h-3.5" /> Copy
        </button>
      </div>
    </div>

    <!-- Notifications -->
    <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
      <h3 className="text-base font-bold text-white flex items-center gap-2">
        <Bell className="w-4 h-4 text-pink-400" /> Notifications & Webhooks
      </h3>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1.5">Slack Webhook URL</label>
        <input
          type="text"
          v-model="slackWebhook"
          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
        />
      </div>
    </div>

  </div>
</template>
