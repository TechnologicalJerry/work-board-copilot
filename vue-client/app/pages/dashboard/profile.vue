<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import {
  User,
  ShieldCheck,
  KeyRound,
  CheckCircle2,
  Laptop,
  Smartphone,
  Trash2,
  Save
} from 'lucide-vue-next';

definePageMeta({
  layout: 'dashboard'
});

const { user, updateProfile } = useAuth();

const firstName = ref(user.value.firstName);
const lastName = ref(user.value.lastName);
const email = ref(user.value.email);
const currentPassword = ref('');
const newPassword = ref('');
const successMsg = ref<string | null>(null);

const handleSaveProfile = () => {
  updateProfile({ firstName: firstName.value, lastName: lastName.value, email: email.value });
  successMsg.value = 'Profile information updated successfully!';
  setTimeout(() => (successMsg.value = null), 2500);
};

const handlePasswordChange = () => {
  if (!currentPassword.value || !newPassword.value) return;
  successMsg.value = 'Password updated successfully!';
  currentPassword.value = '';
  newPassword.value = '';
  setTimeout(() => (successMsg.value = null), 2500);
};
</script>

<template>
  <div className="space-y-8 text-left max-w-5xl mx-auto">
    
    <div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white">User Profile & Account</h1>
      <p className="text-xs sm:text-sm text-slate-400 mt-1">Manage your personal information, role, and security settings.</p>
    </div>

    <div v-if="successMsg" className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 shrink-0" />
      <span>{{ successMsg }}</span>
    </div>

    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 font-extrabold text-white text-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
        {{ user.firstName[0] }}{{ user.lastName[0] }}
      </div>
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="text-xl font-bold text-white">{{ user.firstName }} {{ user.lastName }}</h2>
        <span className="text-xs text-slate-400 block">{{ user.email }}</span>
        <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
          <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> {{ user.role }}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            Account Active
          </span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-400" /> Personal Details
        </h3>
        <form @submit.prevent="handleSaveProfile" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">First Name</label>
              <input
                type="text"
                required
                v-model="firstName"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">Last Name</label>
              <input
                type="text"
                required
                v-model="lastName"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
            <input
              type="email"
              required
              v-model="email"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Save className="w-4 h-4" /> Save Profile Changes
          </button>
        </form>
      </div>

      <div className="glass-panel p-6 rounded-3xl border border-slate-800">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-purple-400" /> Security & Password
        </h3>
        <form @submit.prevent="handlePasswordChange" className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">Current Password</label>
            <input
              type="password"
              required
              v-model="currentPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">New Password</label>
            <input
              type="password"
              required
              v-model="newPassword"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <ShieldCheck className="w-4 h-4" /> Update Password
          </button>
        </form>
      </div>

    </div>

  </div>
</template>
