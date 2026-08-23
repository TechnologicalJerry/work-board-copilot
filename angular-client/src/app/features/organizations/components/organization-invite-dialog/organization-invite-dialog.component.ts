import { Component, input, output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { InviteMemberRequest, OrgRole } from '../../models/organization.model';

@Component({
  selector: 'app-organization-invite-dialog',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h3 class="text-base font-bold text-white">Invite Organization Member</h3>
            <button
              type="button"
              (click)="onCancel()"
              class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="p-6 space-y-4">
            <div>
              <label for="invite-email" class="block text-xs font-medium text-slate-300 mb-1">
                Email Address <span class="text-rose-400">*</span>
              </label>
              <input
                id="invite-email"
                type="email"
                formControlName="email"
                placeholder="colleague@company.com"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              @if (form.controls.email.touched && form.controls.email.invalid) {
                <p class="text-[11px] text-rose-400 mt-1">Please enter a valid email address.</p>
              }
            </div>

            <div>
              <label for="invite-role" class="block text-xs font-medium text-slate-300 mb-1">Organization Role</label>
              <select
                id="invite-role"
                formControlName="role"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              >
                <option value="MEMBER">Member</option>
                <option value="ADMIN">Admin</option>
                <option value="GUEST">Guest</option>
              </select>
            </div>

            <div class="pt-4 flex items-center justify-end space-x-3 border-t border-slate-800">
              <button
                type="button"
                (click)="onCancel()"
                class="px-4 py-2 rounded-xl text-xs text-slate-300 hover:bg-slate-800 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="form.invalid || isSubmitting()"
                class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
              >
                {{ isSubmitting() ? 'Inviting...' : 'Send Invitation' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    }
  `,
})
export class OrganizationInviteDialogComponent {
  private readonly fb = inject(FormBuilder);

  readonly isOpen = input.required<boolean>();
  readonly isSubmitting = input<boolean>(false);

  readonly submitInvite = output<InviteMemberRequest>();
  readonly cancel = output<void>();

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    role: ['MEMBER' as OrgRole, [Validators.required]],
  });

  onSubmit(): void {
    if (this.form.valid) {
      const val = this.form.value;
      this.submitInvite.emit({
        email: val.email!,
        role: val.role as OrgRole,
      });
      this.form.reset({ role: 'MEMBER' });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
