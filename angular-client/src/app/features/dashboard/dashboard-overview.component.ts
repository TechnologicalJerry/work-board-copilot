import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '@core/services/config.service';
import { PageContainerComponent } from '@shared/components/page-container/page-container.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [RouterLink, PageContainerComponent, ButtonComponent, LucideAngularModule],
  template: `
    <app-page-container title="System Dashboard Overview" subtitle="Angular 22 Enterprise Architecture & Microservice Gateway Status">
      <div actions>
        <app-button variant="primary" size="sm">
          <span>System Status: Stage 1 Complete</span>
        </app-button>
      </div>

      <div class="space-y-8">
        <!-- Hero Architecture Card -->
        <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 relative overflow-hidden">
          <div class="max-w-3xl space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
              <lucide-icon name="sparkles" class="w-3.5 h-3.5"></lucide-icon> Angular 22 Signals Architecture
            </span>
            <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Work Board Copilot <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Frontend Foundation</span>
            </h2>
            <p class="text-sm text-slate-300 leading-relaxed">
              Stage 1 Foundation & Architecture initialized with standalone components, lazy-loaded domain routes for 21 backend microservices, Angular Signals state management, and Tailwind CSS design system.
            </p>
          </div>
        </div>

        <!-- Microservices Connection Matrix Grid -->
        <div>
          <h3 class="text-base font-bold text-white mb-4 flex items-center gap-2">
            <lucide-icon name="server" class="w-4 h-4 text-indigo-400"></lucide-icon>
            Lazy-Loaded Microservice Feature Boundaries (19 Modules)
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            @for (feature of featureCards; track feature.title) {
              <a
                [routerLink]="feature.route"
                class="p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-all group"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-indigo-400 group-hover:scale-110 transition-transform">
                    <lucide-icon [name]="feature.icon" class="w-5 h-5"></lucide-icon>
                  </div>
                  <span class="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {{ feature.route }}
                  </span>
                </div>
                <h4 class="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{{ feature.title }}</h4>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">{{ feature.description }}</p>
              </a>
            }
          </div>
        </div>
      </div>
    </app-page-container>
  `,
})
export class DashboardOverviewComponent {
  protected readonly config = inject(ConfigService);

  readonly featureCards = [
    { title: 'Organizations', route: '/organizations', icon: 'building', description: 'Multi-tenant organization settings & subscriptions.' },
    { title: 'Workspaces', route: '/workspaces', icon: 'boxes', description: 'Workspace boundaries & environment configurations.' },
    { title: 'Teams & Capacity', route: '/teams', icon: 'users', description: 'Team allocations, roles, and velocity tracking.' },
    { title: 'Projects', route: '/projects', icon: 'folder-kanban', description: 'Project methodologies, templates, and specs.' },
    { title: 'Agile Boards', route: '/boards', icon: 'kanban', description: 'Interactive Scrum & Kanban board layouts.' },
    { title: 'Task Issues', route: '/tasks', icon: 'check-square', description: 'Task lifecycles, WIP limits, and story points.' },
    { title: 'Sprint Planning', route: '/sprints', icon: 'zap', description: 'Sprint backlog grooming & burndown metrics.' },
    { title: 'Discussions', route: '/comments', icon: 'message-square', description: 'Real-time task comments and @mentions.' },
    { title: 'Wiki Documents', route: '/documents', icon: 'file-text', description: 'Collaborative spec documentation base.' },
    { title: 'File Attachments', route: '/files', icon: 'paperclip', description: 'Asset uploads and cloud storage metadata.' },
    { title: 'Notifications', route: '/notifications', icon: 'bell', description: 'Push notifications and webhook alerts.' },
    { title: 'Time Tracking', route: '/time-tracking', icon: 'clock', description: 'Worklog logging and time estimates.' },
    { title: 'Sprint Reports', route: '/reports', icon: 'bar-chart-3', description: 'Cumulative flow and burndown analytics.' },
    { title: 'Workflow Rules', route: '/automation', icon: 'workflow', description: 'Trigger-action automated workflows.' },
    { title: 'Global Search', route: '/search', icon: 'search', description: 'Cross-service search index querying.' },
    { title: 'AI Copilot', route: '/ai', icon: 'bot', description: 'OpenAI auto-summaries and sprint predictions.' },
    { title: 'Billing & Plans', route: '/billing', icon: 'credit-card', description: 'Subscription tiers & usage metering.' },
    { title: 'System Settings', route: '/settings', icon: 'settings', description: 'Global app configurations and API keys.' },
  ];
}
