import { Component } from '@angular/core';
import { PageContainerComponent } from '@shared/components/page-container/page-container.component';

@Component({
  selector: 'app-workspaces-feature',
  standalone: true,
  imports: [PageContainerComponent],
  template: `
    <app-page-container title="Workspaces Scoping" subtitle="Stage 1 Architecture Placeholder">
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Feature Route: /workspaces
        </span>
        <h3 class="text-base font-bold text-white">Workspace Service Domain</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Workspace creation, workspace switching, environment scoping, and workspace level permissions will be implemented in Stage 5.
        </p>
      </div>
    </app-page-container>
  `,
})
export class WorkspacesComponent {}
