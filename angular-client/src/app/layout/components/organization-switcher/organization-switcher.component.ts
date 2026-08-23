import { Component, inject, signal } from '@angular/core';
import { OrganizationContextService, OrganizationContext } from '@core/context/organization-context.service';

@Component({
  selector: 'app-organization-switcher',
  standalone: true,
  template: `
    <div class="relative inline-block text-left">
      <button
        type="button"
        (click)="toggleOpen()"
        aria-haspopup="listbox"
        [attr.aria-expanded]="isOpen()"
        class="flex items-center space-x-2.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 text-xs font-medium text-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
      >
        <div class="w-5 h-5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-[10px] shrink-0">
          {{ currentOrg()?.name?.charAt(0) ?? 'O' }}
        </div>
        <span class="truncate max-w-[130px] font-semibold">{{ currentOrg()?.name ?? 'Select Org' }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400 shrink-0 transition-transform duration-200" [class.rotate-180]="isOpen()" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      @if (isOpen()) {
        <div class="fixed inset-0 z-40" (click)="close()"></div>

        <div class="absolute left-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl z-50 py-1.5 divide-y divide-slate-800/60">
          <div class="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-500">
            Organizations
          </div>
          <div class="py-1" role="listbox">
            @for (org of availableOrgs(); track org.id) {
              <button
                type="button"
                (click)="selectOrg(org)"
                class="w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800/80 transition-colors"
                [class.text-indigo-400]="org.id === currentOrg()?.id"
                [class.bg-indigo-500/10]="org.id === currentOrg()?.id"
                [class.text-slate-300]="org.id !== currentOrg()?.id"
              >
                <div class="flex items-center space-x-2.5 truncate">
                  <div class="w-5 h-5 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center font-semibold text-[10px]">
                    {{ org.name.charAt(0) }}
                  </div>
                  <span class="truncate font-medium">{{ org.name }}</span>
                </div>
                @if (org.id === currentOrg()?.id) {
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                }
              </button>
            }
          </div>
        </div>
      }
    </div>
  `,
})
export class OrganizationSwitcherComponent {
  private readonly orgContext = inject(OrganizationContextService);

  readonly isOpen = signal<boolean>(false);
  readonly currentOrg = this.orgContext.currentOrganization;
  readonly availableOrgs = this.orgContext.availableOrganizations;

  toggleOpen(): void {
    this.isOpen.update((open) => !open);
  }

  close(): void {
    this.isOpen.set(false);
  }

  selectOrg(org: OrganizationContext): void {
    this.orgContext.setOrganization(org);
    this.close();
  }
}
