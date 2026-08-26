import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NavigationSection } from '../../models/navigation.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <aside
      [class]="collapsed() ? 'w-20' : 'w-64'"
      class="bg-slate-900/90 border-r border-slate-800 flex flex-col justify-between transition-all duration-300 z-20 shrink-0 h-[calc(100vh-4rem)] sticky top-16"
    >
      <div class="overflow-y-auto p-3 space-y-6">
        @for (section of navigationSections; track section.title) {
          <div>
            @if (!collapsed()) {
              <h4 class="px-3 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                {{ section.title }}
              </h4>
            }
            <nav class="space-y-1">
              @for (item of section.items; track item.id) {
                <a
                  [routerLink]="item.route"
                  routerLinkActive="bg-indigo-600/90 text-white shadow-md shadow-indigo-600/20 font-semibold"
                  [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
                  class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all group relative"
                  [title]="collapsed() ? item.title : ''"
                >
                  <lucide-icon [name]="item.icon || 'circle'" class="w-4 h-4 shrink-0 text-slate-400 group-hover:text-white"></lucide-icon>
                  @if (!collapsed()) {
                    <span class="truncate">{{ item.title }}</span>
                    @if (item.badge) {
                      <span class="ml-auto text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-700 text-slate-300">
                        {{ item.badge }}
                      </span>
                    }
                  }
                </a>
              }
            </nav>
          </div>
        }
      </div>

      <div class="p-3 border-t border-slate-800 flex justify-between items-center">
        <button
          (click)="toggleCollapse()"
          class="w-full p-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white text-xs flex items-center justify-center gap-2 transition-colors"
        >
          <lucide-icon [name]="collapsed() ? 'chevron-right' : 'chevron-left'" class="w-4 h-4"></lucide-icon>
          @if (!collapsed()) {
            <span>Collapse Menu</span>
          }
        </button>
      </div>
    </aside>
  `,
})
export class SidebarComponent {
  collapsed = signal(false);

  toggleCollapse(): void {
    this.collapsed.update((v) => !v);
  }

  readonly navigationSections: NavigationSection[] = [
    {
      title: 'CORE PLATFORM',
      items: [
        { id: 'overview', title: 'Dashboard Overview', route: '/dashboard', icon: 'layout-dashboard' },
        { id: 'organizations', title: 'Organizations', route: '/organizations', icon: 'building' },
        { id: 'workspaces', title: 'Workspaces', route: '/workspaces', icon: 'boxes' },
        { id: 'teams', title: 'Teams & Capacity', route: '/teams', icon: 'users' },
      ],
    },
    {
      title: 'AGILE WORKSPACE',
      items: [
        { id: 'projects', title: 'Projects', route: '/projects', icon: 'folder-kanban' },
        { id: 'boards', title: 'Agile Boards', route: '/boards', icon: 'kanban' },
        { id: 'tasks', title: 'Task Issues', route: '/tasks', icon: 'check-square' },
        { id: 'sprints', title: 'Sprint Planning', route: '/sprints', icon: 'zap' },
        { id: 'comments', title: 'Discussions', route: '/comments', icon: 'message-square' },
      ],
    },
    {
      title: 'COLLABORATION & CONTENT',
      items: [
        { id: 'documents', title: 'Wiki Documents', route: '/documents', icon: 'file-text' },
        { id: 'files', title: 'File Attachments', route: '/files', icon: 'paperclip' },
        { id: 'notifications', title: 'Notifications', route: '/notifications', icon: 'bell', badge: '3' },
      ],
    },
    {
      title: 'ANALYTICS & INSIGHTS',
      items: [
        { id: 'time-tracking', title: 'Time Tracking', route: '/time-tracking', icon: 'clock' },
        { id: 'reports', title: 'Sprint Reports', route: '/reports', icon: 'bar-chart-3' },
        { id: 'search', title: 'Global Search', route: '/search', icon: 'search' },
        { id: 'audit', title: 'Audit Logs', route: '/audit', icon: 'shield-check' },
      ],
    },
    {
      title: 'INTELLIGENCE & SYSTEM',
      items: [
        { id: 'automation', title: 'Workflow Rules', route: '/automation', icon: 'workflow' },
        { id: 'ai', title: 'AI Copilot', route: '/ai', icon: 'bot', badge: 'GPT-4' },
        { id: 'billing', title: 'Billing & Plans', route: '/billing', icon: 'credit-card' },
        { id: 'settings', title: 'System Settings', route: '/settings', icon: 'settings' },
      ],
    },
  ];
}
