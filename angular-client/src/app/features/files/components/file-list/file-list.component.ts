import { Component, input, output } from '@angular/core';
import { FileItem } from '../../models/file.model';

@Component({
  selector: 'app-file-list',
  standalone: true,
  template: `
    <div class="space-y-3">
      <div class="flex items-center justify-between border-b border-slate-800 pb-2">
        <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
          Attachments ({{ files().length }})
        </h4>
      </div>

      <div class="divide-y divide-slate-800/80 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        @for (f of files(); track f.id) {
          <div class="p-3.5 flex items-center justify-between hover:bg-slate-800/40 transition-colors">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </div>
              <div>
                <div class="text-xs font-semibold text-white hover:text-indigo-400 transition-colors">
                  {{ f.originalName }}
                </div>
                <div class="text-[10px] text-slate-500 font-mono">
                  {{ formatSize(f.size) }} • {{ f.mimeType }}
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-2">
              <button
                type="button"
                (click)="onDownload(f.id)"
                class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors"
              >
                Download
              </button>

              <button
                type="button"
                (click)="onDelete(f.id)"
                class="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                aria-label="Delete attachment"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        } @empty {
          <div class="p-6 text-center text-xs text-slate-500">
            No file attachments added yet.
          </div>
        }
      </div>
    </div>
  `,
})
export class FileListComponent {
  readonly files = input.required<FileItem[]>();

  readonly downloadFile = output<string>();
  readonly deleteFile = output<string>();

  formatSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  onDownload(id: string): void {
    this.downloadFile.emit(id);
  }

  onDelete(id: string): void {
    if (confirm('Delete this file attachment?')) {
      this.deleteFile.emit(id);
    }
  }
}
