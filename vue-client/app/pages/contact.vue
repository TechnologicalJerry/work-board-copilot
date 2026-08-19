<script setup lang="ts">
import { ref } from 'vue';
import {
  Mail,
  MessageSquare,
  Building,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock
} from 'lucide-vue-next';

definePageMeta({
  layout: 'default'
});

const formSubmitted = ref(false);
const loading = ref(false);

const formData = ref({
  name: '',
  email: '',
  category: 'architecture',
  message: ''
});

const openFaq = ref<number | null>(0);

const faqs = [
  {
    q: 'How do I choose between Express, NestJS, and Fastify backends?',
    a: 'All three backends share identical database models and REST endpoints. You can run Express for full microservice separation, NestJS for modular DI with Swagger, or Fastify for ultra-low latency.'
  },
  {
    q: 'Are the authentication APIs compatible across servers?',
    a: 'Yes! All servers expose POST /api/v1/auth/login, POST /api/v1/auth/refresh, POST /api/v1/auth/logout, and GET /api/v1/auth/me returning the exact same payload structures.'
  },
  {
    q: 'How does session token rotation work in BoardPilot AI?',
    a: 'Upon login, a JWT Access Token is issued alongside a secure Refresh Token stored in a database Session table. Refresh tokens are automatically rotated upon each refresh call to prevent replay attacks.'
  }
];

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    formSubmitted.value = true;
  }, 800);
};
</script>

<template>
  <div className="py-12 sm:py-20 relative text-left">
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
          Contact & Support
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-4 tracking-tight">
          We'd Love to <span className="gradient-text">Hear From You</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-300">
          Have questions about the Nuxt monorepo integration or microservice endpoints? Get in touch with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 relative">
            
            <div v-if="formSubmitted" className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you for reaching out, <strong>{{ formData.name }}</strong>. We will respond to {{ formData.email }}.
              </p>
              <button
                @click="formSubmitted = false; formData = { name: '', email: '', category: 'architecture', message: '' }"
                className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white border border-slate-800 transition-colors"
              >
                Send Another Message
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">Send Us a Message</h2>
                <p className="text-xs text-slate-400">Fill out the form below and we will respond within 24 hours.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    v-model="formData.name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    v-model="formData.email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">Inquiry Category</label>
                <select
                  v-model="formData.category"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none"
                >
                  <option value="architecture">Monorepo Architecture Questions</option>
                  <option value="fastify">Fastify / NestJS Auth Server Support</option>
                  <option value="enterprise">Enterprise License & Deployment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  required
                  rows="5"
                  v-model="formData.message"
                  placeholder="Describe your inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                :disabled="loading"
                className="w-full gradient-glow flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:opacity-95 transition-all"
              >
                <span>{{ loading ? 'Sending...' : 'Submit Message' }}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
            <div className="p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-xl text-indigo-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Engineering Support</h3>
              <a href="mailto:support@boardpilot.ai" className="text-xs font-mono text-indigo-400 hover:underline mt-2 block">
                support@boardpilot.ai
              </a>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
            <div className="p-3 bg-purple-600/10 border border-purple-500/20 rounded-xl text-purple-400">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Enterprise Sales</h3>
              <a href="mailto:sales@boardpilot.ai" className="text-xs font-mono text-purple-400 hover:underline mt-2 block">
                sales@boardpilot.ai
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- FAQs -->
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-400" /> Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <button
              @click="openFaq = openFaq === index ? null : index"
              className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm text-white hover:bg-slate-900/50"
            >
              <span>{{ faq.q }}</span>
              <ChevronUp v-if="openFaq === index" className="w-4 h-4 text-indigo-400" />
              <ChevronDown v-else className="w-4 h-4 text-slate-400" />
            </button>
            <div v-if="openFaq === index" className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
