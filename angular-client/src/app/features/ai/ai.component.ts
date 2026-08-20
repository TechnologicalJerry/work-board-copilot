import { Component } from '@angular/core';
import { PageContainerComponent } from '@shared/components/page-container/page-container.component';

@Component({
  selector: 'app-ai-feature',
  standalone: true,
  imports: [PageContainerComponent],
  template: `
    <app-page-container title="AI Copilot Assistant" subtitle="Stage 1 Architecture Placeholder">
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Feature Route: /ai
        </span>
        <h3 class="text-base font-bold text-white">AI Service Domain</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          OpenAI-powered task decomposition, automatic sprint risk analysis, and smart summaries will be implemented in Stage 9.
        </p>
      </div>
    </app-page-container>
  `,
})
export class AiComponent {}
