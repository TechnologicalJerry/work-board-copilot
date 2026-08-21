import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigService } from '@core/services/config.service';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <header class="h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      <div class="flex items-center gap-3">
        <a routerLink="/" class="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <lucide-icon name="kanban" class="w-4 h-4 text-indigo-400"></lucide-icon>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-white tracking-tight text-base flex items-center gap-1">
              Work Board <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Copilot</span>
            </span>
            <span class="text-[10px] font-mono text-slate-400">Angular 22 Architecture</span>
          </div>
        </a>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs text-slate-400">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-mono">Gateway: {{ config.apiGatewayUrl() }}</span>
        </div>

        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 font-bold text-white text-xs flex items-center justify-center">
          WB
        </div>
      </div>
    </header>
  `,
})
export class NavbarComponent {
  protected readonly config = inject(ConfigService);
}
