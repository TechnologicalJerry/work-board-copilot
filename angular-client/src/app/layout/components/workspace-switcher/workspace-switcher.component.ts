import { Component, inject, signal } from '@angular/core';
import { WorkspaceContextService, WorkspaceContext } from '@core/context/workspace-context.service';

@Component({
  selector: 'app-workspace-switcher',
  standalone: true,
  template: `
    <div class="relative inline-block text-left">
      <button
        type="button"
        (click)="toggleOpen()"
        aria-haspopup="listbox"
        [attr.aria-expanded]="isOpen()"
        class="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 text-xs font-medium text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      >
        <div class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>
        <span class="truncate max-w-[130px] font-semibold">{{ currentWorkspace()?.name ?? 'Select Workspace' }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200" [class.rotate-180]="isOpen()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      @if (isOpen()) {
        <div class="fixed inset-0 z-40" (click)="close()"></div>

        <div class="absolute left-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl z-50 py-1.5 divide-y divide-slate-800/60">
          <div class="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-500">
            Workspaces
          </div>
          <div class="py-1" role="listbox">
            @for (ws of availableWorkspaces(); track ws.id) {
              <button
                type="button"
                (click)="selectWorkspace(ws)"
                class="w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800/80 transition-colors"
                [class.text-emerald-400]="ws.id === currentWorkspace()?.id"
                [class.bg-emerald-500/10]="ws.id === currentWorkspace()?.id"
                [class.text-slate-300]="ws.id !== currentWorkspace()?.id"
              >
                <div class="flex items-center space-x-2.5 truncate">
                  <div class="w-2 h-2 rounded-full bg-slate-500 shrink-0" [class.bg-emerald-400]="ws.id === currentWorkspace()?.id"></div>
                  <span class="truncate font-medium">{{ ws.name }}</span>
                </div>
                @if (ws.id === currentWorkspace()?.id) {
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                }
              </button>
            } @empty {
              <div class="px-3 py-2 text-xs text-slate-500">No workspaces available</div>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class WorkspaceSwitcherComponent {
  private readonly workspaceContext = inject(WorkspaceContextService);

  readonly isOpen = signal<boolean>(false);
  readonly currentWorkspace = this.workspaceContext.currentWorkspace;
  readonly availableWorkspaces = this.workspaceContext.availableWorkspaces;

  toggleOpen(): void {
    this.isOpen.update((open) => !open);
  }

  close(): void {
    this.isOpen.set(false);
  }

  selectWorkspace(ws: WorkspaceContext): void {
    this.workspaceContext.setWorkspace(ws);
    this.close();
  }
}
