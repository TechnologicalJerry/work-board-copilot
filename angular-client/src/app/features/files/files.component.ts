import { Component } from '@angular/core';
import { PageContainerComponent } from '@shared/components/page-container/page-container.component';

@Component({
  selector: 'app-files-feature',
  standalone: true,
  imports: [PageContainerComponent],
  template: `
    <app-page-container title="File Attachments & Storage" subtitle="Stage 1 Architecture Placeholder">
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <span class="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Feature Route: /files
        </span>
        <h3 class="text-base font-bold text-white">File Service Domain</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          File uploads, cloud storage metadata, and attachment management will be implemented in Stage 7.
        </p>
      </div>
    </app-page-container>
  `,
})
export class FilesComponent {}
