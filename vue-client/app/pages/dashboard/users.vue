<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuth, type UserRole } from '~/composables/useAuth';
import {
  Users,
  Search,
  Filter,
  UserPlus,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  X,
  Lock
} from 'lucide-vue-next';

definePageMeta({
  layout: 'dashboard'
});

const { user, setRole } = useAuth();
const isAdmin = computed(() => user.value.role === 'ORG_ADMIN');

interface MockUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  status: 'ACTIVE' | 'SUSPENDED' | 'PENDING';
  lastLogin: string;
}

const usersList = ref<MockUser[]>([
  { id: 'usr_1', firstName: 'Techno', lastName: 'Jerry', email: 'jerry@boardpilot.ai', role: 'ORG_ADMIN', status: 'ACTIVE', lastLogin: '2 mins ago' },
  { id: 'usr_2', firstName: 'Alice', lastName: 'Smith', email: 'alice@company.com', role: 'PROJECT_MANAGER', status: 'ACTIVE', lastLogin: '1 hour ago' },
  { id: 'usr_3', firstName: 'Bob', lastName: 'Johnson', email: 'bob@company.com', role: 'TEAM_MEMBER', status: 'ACTIVE', lastLogin: 'Yesterday' },
  { id: 'usr_4', firstName: 'Carol', lastName: 'Danvers', email: 'carol@company.com', role: 'TEAM_MEMBER', status: 'SUSPENDED', lastLogin: '3 days ago' },
  { id: 'usr_5', firstName: 'Dave', lastName: 'Wilson', email: 'dave@company.com', role: 'TEAM_MEMBER', status: 'PENDING', lastLogin: 'Never' }
]);

const searchTerm = ref('');
const roleFilter = ref('ALL');
const showAddModal = ref(false);

const newFirstName = ref('');
const newLastName = ref('');
const newEmail = ref('');
const newRole = ref<UserRole>('TEAM_MEMBER');

const handleRoleChange = (userId: string, targetRole: UserRole) => {
  usersList.value = usersList.value.map((u) => (u.id === userId ? { ...u, role: targetRole } : u));
};

const handleToggleStatus = (userId: string) => {
  usersList.value = usersList.value.map((u) => {
    if (u.id === userId) {
      return { ...u, status: u.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE' };
    }
    return u;
  });
};

const handleAddUser = () => {
  if (!newFirstName.value || !newLastName.value || !newEmail.value) return;

  const newUser: MockUser = {
    id: `usr_${Date.now()}`,
    firstName: newFirstName.value,
    lastName: newLastName.value,
    email: newEmail.value,
    role: newRole.value,
    status: 'ACTIVE',
    lastLogin: 'Just now'
  };

  usersList.value = [newUser, ...usersList.value];
  showAddModal.value = false;
  newFirstName.value = '';
  newLastName.value = '';
  newEmail.value = '';
};

const filteredUsers = computed(() => {
  return usersList.value.filter((u) => {
    const matchesSearch =
      u.firstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      u.lastName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.value.toLowerCase());
    
    const matchesRole = roleFilter.value === 'ALL' || u.role === roleFilter.value;
    return matchesSearch && matchesRole;
  });
});
</script>

<template>
  <div>
    <!-- RBAC GUARD: ACCESS DENIED BANNER IF NOT ADMIN -->
    <div v-if="!isAdmin" className="py-12 flex items-center justify-center text-left">
      <div className="max-w-xl w-full glass-panel p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <Lock className="w-8 h-8" />
        </div>

        <div>
          <span className="text-[11px] font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 uppercase tracking-wider">
            RBAC Permission Restricted
          </span>
          <h1 className="text-2xl font-bold text-white mt-3">Access Denied — Admin Role Required</h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            The User Management Directory is strictly restricted to accounts with the <strong className="text-white">`ORG_ADMIN`</strong> role. Your current logged-in role is <strong className="text-indigo-400">`{{ user.role }}`</strong>.
          </p>
        </div>

        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
          <span className="text-xs font-semibold text-white block">💡 Demo RBAC Role Switcher:</span>
          <p className="text-xs text-slate-400">
            Click the <strong>"Admin Role"</strong> toggle in the top header navigation bar to switch your role to <strong className="text-purple-300">ORG_ADMIN</strong> and unlock full user management features.
          </p>
          <button
            @click="setRole('ORG_ADMIN')"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ShieldCheck className="w-4 h-4" /> Switch to Admin Role Now
          </button>
        </div>
      </div>
    </div>

    <!-- ADMIN VIEW: FULL USER MANAGEMENT DIRECTORY -->
    <div v-else className="space-y-8 text-left max-w-7xl mx-auto">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">User Management Directory</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono">
              Admin Only
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Manage team members, assign RBAC roles, and control active user access.</p>
        </div>

        <button
          @click="showAddModal = true"
          className="gradient-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 hover:scale-105 transition-all"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add New Member</span>
        </button>
      </div>

      <!-- Filters -->
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search member name or email..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-slate-400">Role:</span>
          <select
            v-model="roleFilter"
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none"
          >
            <option value="ALL">All Roles ({{ usersList.length }})</option>
            <option value="ORG_ADMIN">Admin (ORG_ADMIN)</option>
            <option value="PROJECT_MANAGER">Project Manager</option>
            <option value="TEAM_MEMBER">Team Member</option>
          </select>
        </div>
      </div>

      <!-- Table -->
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 uppercase font-mono text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-4 px-6">Member Name</th>
                <th className="py-4 px-6">Email Address</th>
                <th className="py-4 px-6">Assigned Role (RBAC)</th>
                <th className="py-4 px-6">Access Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              <tr v-for="u in filteredUsers" :key="u.id" className="hover:bg-slate-900/40 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 font-bold text-white text-xs flex items-center justify-center shrink-0">
                      {{ u.firstName[0] }}{{ u.lastName[0] }}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{{ u.firstName }} {{ u.lastName }}</span>
                      <span className="text-[10px] text-slate-400 block font-mono">Last active {{ u.lastLogin }}</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 font-mono text-slate-300">{{ u.email }}</td>
                <td className="py-4 px-6">
                  <select
                    :value="u.role"
                    @change="(e: any) => handleRoleChange(u.id, e.target.value as UserRole)"
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono font-medium text-purple-300 focus:outline-none"
                  >
                    <option value="ORG_ADMIN">ORG_ADMIN</option>
                    <option value="PROJECT_MANAGER">PROJECT_MANAGER</option>
                    <option value="TEAM_MEMBER">TEAM_MEMBER</option>
                  </select>
                </td>
                <td className="py-4 px-6">
                  <span v-if="u.status === 'ACTIVE'" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Active
                  </span>
                  <span v-else-if="u.status === 'SUSPENDED'" className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-[11px] font-medium">
                    <XCircle className="w-3 h-3" /> Suspended
                  </span>
                  <span v-else className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-medium">
                    Pending Verification
                  </span>
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    @click="handleToggleStatus(u.id)"
                    :class="[
                      'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors',
                      u.status === 'ACTIVE' ? 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                    ]"
                  >
                    {{ u.status === 'ACTIVE' ? 'Suspend' : 'Activate' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Add Member Modal -->
      <div v-if="showAddModal" className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
        <div className="glass-panel max-w-md w-full p-6 rounded-3xl border border-slate-800 text-left">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-purple-400" /> Add Team Member
            </h3>
            <button @click="showAddModal = false" className="p-1 text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
          </div>

          <form @submit.prevent="handleAddUser" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">First Name</label>
                <input type="text" required v-model="newFirstName" placeholder="Sarah" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Last Name</label>
                <input type="text" required v-model="newLastName" placeholder="Connor" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
              <input type="email" required v-model="newEmail" placeholder="sarah@company.com" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none" />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Role</label>
              <select v-model="newRole" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none">
                <option value="TEAM_MEMBER">TEAM_MEMBER</option>
                <option value="PROJECT_MANAGER">PROJECT_MANAGER</option>
                <option value="ORG_ADMIN">ORG_ADMIN</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button type="button" @click="showAddModal = false" className="px-4 py-2 text-xs text-slate-400">Cancel</button>
              <button type="submit" className="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold">Add Member</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
