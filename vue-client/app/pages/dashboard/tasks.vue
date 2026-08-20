<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  Kanban,
  Plus,
  Clock,
  CheckCircle2,
  X,
  Search
} from 'lucide-vue-next';

definePageMeta({
  layout: 'dashboard'
});

interface Task {
  id: string;
  code: string;
  title: string;
  column: 'backlog' | 'in_progress' | 'review' | 'done';
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  assignee: string;
  storyPoints: number;
}

const tasks = ref<Task[]>([
  { id: '1', code: 'AUTH-101', title: 'Implement Fastify JWT Refresh Cookie', column: 'backlog', priority: 'HIGH', assignee: 'TJ', storyPoints: 5 },
  { id: '2', code: 'NEST-202', title: 'Passport Strategy & Swagger Decorators', column: 'in_progress', priority: 'HIGH', assignee: 'AI', storyPoints: 8 },
  { id: '3', code: 'NUXT-301', title: 'Nuxt 3 Composition API & Dashboard Layout', column: 'in_progress', priority: 'MEDIUM', assignee: 'DEV', storyPoints: 3 },
  { id: '4', code: 'EXPRESS-404', title: 'RabbitMQ Domain Event Queue Handler', column: 'review', priority: 'MEDIUM', assignee: 'TJ', storyPoints: 5 },
  { id: '5', code: 'AUTH-100', title: 'Prisma Schema Database Models', column: 'done', priority: 'LOW', assignee: 'AI', storyPoints: 2 }
]);

const showAddModal = ref(false);
const newTitle = ref('');
const newPriority = ref<'HIGH' | 'MEDIUM' | 'LOW'>('MEDIUM');
const newPoints = ref(3);
const searchTerm = ref('');

const moveTask = (taskId: string, targetCol: Task['column']) => {
  tasks.value = tasks.value.map((t) => (t.id === taskId ? { ...t, column: targetCol } : t));
};

const handleAddTask = () => {
  if (!newTitle.value) return;

  const newTask: Task = {
    id: `task_${Date.now()}`,
    code: `BOARD-${Math.floor(100 + Math.random() * 900)}`,
    title: newTitle.value,
    column: 'backlog',
    priority: newPriority.value,
    assignee: 'TJ',
    storyPoints: newPoints.value
  };

  tasks.value.push(newTask);
  showAddModal.value = false;
  newTitle.value = '';
};

const filteredTasks = computed(() => {
  return tasks.value.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    t.code.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const getPriorityBadge = (p: Task['priority']) => {
  if (p === 'HIGH') return 'bg-red-500/10 text-red-400 border-red-500/20';
  if (p === 'MEDIUM') return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
};
</script>

<template>
  <div className="space-y-6 text-left max-w-7xl mx-auto">
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
          <Kanban className="w-6 h-6 text-indigo-400" /> Sprint 42 — Kanban Board
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">Drag or advance tasks across agile lifecycle stages.</p>
      </div>

      <button
        @click="showAddModal = true"
        className="gradient-glow inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-lg shadow-indigo-600/20 hover:scale-105 transition-all"
      >
        <Plus className="w-4 h-4" />
        <span>New Task Issue</span>
      </button>
    </div>

    <div className="relative w-full sm:w-72">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Filter board by task name..."
        className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none"
      />
      <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
    </div>

    <!-- Kanban Grid -->
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      <!-- Backlog -->
      <div className="glass-panel p-4 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Backlog</span>
          <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800 text-slate-400">
            {{ filteredTasks.filter((t) => t.column === 'backlog').length }}
          </span>
        </div>
        <div className="space-y-3">
          <div v-for="t in filteredTasks.filter((t) => t.column === 'backlog')" :key="t.id" className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">{{ t.code }}</span>
              <span :class="['text-[10px] font-mono px-2 py-0.5 rounded border', getPriorityBadge(t.priority)]">{{ t.priority }}</span>
            </div>
            <p className="text-xs font-medium text-white">{{ t.title }}</p>
            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Points: {{ t.storyPoints }}</span>
              <button @click="moveTask(t.id, 'in_progress')" className="text-indigo-400 hover:underline">Start →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- In Progress -->
      <div className="glass-panel p-4 rounded-3xl border border-indigo-500/20 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-indigo-500/30">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">In Progress</span>
          <span className="px-2 py-0.5 text-xs font-mono rounded bg-indigo-500/20 text-indigo-300">
            {{ filteredTasks.filter((t) => t.column === 'in_progress').length }}
          </span>
        </div>
        <div className="space-y-3">
          <div v-for="t in filteredTasks.filter((t) => t.column === 'in_progress')" :key="t.id" className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">{{ t.code }}</span>
              <span :class="['text-[10px] font-mono px-2 py-0.5 rounded border', getPriorityBadge(t.priority)]">{{ t.priority }}</span>
            </div>
            <p className="text-xs font-medium text-white">{{ t.title }}</p>
            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Assignee: {{ t.assignee }}</span>
              <button @click="moveTask(t.id, 'review')" className="text-purple-400 hover:underline">Review →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Review -->
      <div className="glass-panel p-4 rounded-3xl border border-purple-500/20 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-purple-500/30">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Review</span>
          <span className="px-2 py-0.5 text-xs font-mono rounded bg-purple-500/20 text-purple-300">
            {{ filteredTasks.filter((t) => t.column === 'review').length }}
          </span>
        </div>
        <div className="space-y-3">
          <div v-for="t in filteredTasks.filter((t) => t.column === 'review')" :key="t.id" className="p-4 bg-slate-950 rounded-2xl border border-purple-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">{{ t.code }}</span>
              <span :class="['text-[10px] font-mono px-2 py-0.5 rounded border', getPriorityBadge(t.priority)]">{{ t.priority }}</span>
            </div>
            <p className="text-xs font-medium text-white">{{ t.title }}</p>
            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span>Points: {{ t.storyPoints }}</span>
              <button @click="moveTask(t.id, 'done')" className="text-emerald-400 hover:underline">Approve →</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Done -->
      <div className="glass-panel p-4 rounded-3xl border border-emerald-500/20 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-emerald-500/30">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Done</span>
          <span className="px-2 py-0.5 text-xs font-mono rounded bg-emerald-500/20 text-emerald-300">
            {{ filteredTasks.filter((t) => t.column === 'done').length }}
          </span>
        </div>
        <div className="space-y-3">
          <div v-for="t in filteredTasks.filter((t) => t.column === 'done')" :key="t.id" className="p-4 bg-slate-950 rounded-2xl border border-emerald-500/30 opacity-80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">{{ t.code }}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-xs font-medium text-slate-300 line-through">{{ t.title }}</p>
          </div>
        </div>
      </div>

    </div>

    <!-- Modal -->
    <div v-if="showAddModal" className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel max-w-md w-full p-6 rounded-3xl border border-slate-800 text-left">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
          <h3 className="text-base font-bold text-white">Create New Task Issue</h3>
          <button @click="showAddModal = false" className="text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
        </div>

        <form @submit.prevent="handleAddTask" className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Issue Title</label>
            <input type="text" required v-model="newTitle" placeholder="Issue title..." className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Priority</label>
              <select v-model="newPriority" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none">
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Story Points</label>
              <input type="number" min="1" max="13" v-model="newPoints" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none" />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button type="button" @click="showAddModal = false" className="px-4 py-2 text-xs text-slate-400">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold">Create Issue</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
