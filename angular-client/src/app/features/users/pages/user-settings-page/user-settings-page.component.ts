import { Component, OnInit, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PageHeaderComponent } from '@layout/components/page-header/page-header.component';
import { UserApiService } from '../../services/user-api.service';
import { UserState } from '../../state/user.state';

@Component({
  selector: 'app-user-settings-page',
  standalone: true,
  imports: [PageHeaderComponent, ReactiveFormsModule],
  template: `
    <app-page-header
      title="Account Settings"
      subtitle="Update your personal details, biography, avatar, and regional preferences."
    ></app-page-header>

    <div class="max-w-2xl space-y-8">
      <!-- Profile Form Card -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">Personal Details</h3>

        <form [formGroup]="form" (ngSubmit)="onSaveProfile()" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="usr-first-name" class="block text-xs font-medium text-slate-300 mb-1">First Name</label>
              <input
                id="usr-first-name"
                type="text"
                formControlName="firstName"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
            <div>
              <label for="usr-last-name" class="block text-xs font-medium text-slate-300 mb-1">Last Name</label>
              <input
                id="usr-last-name"
                type="text"
                formControlName="lastName"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

          <div>
            <label for="usr-title" class="block text-xs font-medium text-slate-300 mb-1">Job Title</label>
            <input
              id="usr-title"
              type="text"
              formControlName="title"
              placeholder="e.g. Senior Full-Stack Engineer"
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label for="usr-bio" class="block text-xs font-medium text-slate-300 mb-1">Biography</label>
            <textarea
              id="usr-bio"
              formControlName="bio"
              rows="3"
              placeholder="Tell your team about your role and background..."
              class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="usr-location" class="block text-xs font-medium text-slate-300 mb-1">Location</label>
              <input
                id="usr-location"
                type="text"
                formControlName="location"
                placeholder="e.g. San Francisco, CA"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
            <div>
              <label for="usr-timezone" class="block text-xs font-medium text-slate-300 mb-1">Timezone</label>
              <input
                id="usr-timezone"
                type="text"
                formControlName="timezone"
                placeholder="e.g. UTC-8 (PST)"
                class="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

          <div class="pt-4 flex items-center justify-end">
            <button
              type="submit"
              [disabled]="form.invalid || isSaving()"
              class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/20"
            >
              {{ isSaving() ? 'Saving Settings...' : 'Save Settings' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Avatar Upload / URL Card -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 class="text-sm font-bold text-white border-b border-slate-800 pb-3">Avatar Profile Picture</h3>
        <div>
          <label for="usr-avatar-url" class="block text-xs font-medium text-slate-300 mb-1">Avatar Image URL</label>
          <div class="flex items-center space-x-3">
            <input
              id="usr-avatar-url"
              type="url"
              [value]="avatarUrl()"
              (input)="onAvatarInput($event)"
              placeholder="https://example.com/avatar.png"
              class="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <button
              type="button"
              (click)="onSaveAvatar()"
              [disabled]="!avatarUrl() || isSavingAvatar()"
              class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-xs font-medium transition-colors shrink-0"
            >
              {{ isSavingAvatar() ? 'Updating...' : 'Update Avatar' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class UserSettingsPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly userApi = inject(UserApiService);
  private readonly userState = inject(UserState);

  readonly isSaving = signal<boolean>(false);
  readonly isSavingAvatar = signal<boolean>(false);
  readonly avatarUrl = signal<string>('');

  readonly form = this.fb.group({
    firstName: [''],
    lastName: [''],
    title: [''],
    bio: [''],
    location: [''],
    timezone: [''],
  });

  ngOnInit(): void {
    this.userApi.getMyProfile().subscribe({
      next: (res) => {
        const p = res.data;
        this.userState.setProfile(p);
        this.form.patchValue({
          firstName: p.firstName ?? '',
          lastName: p.lastName ?? '',
          title: p.title ?? '',
          bio: p.bio ?? '',
          location: p.location ?? '',
          timezone: p.timezone ?? '',
        });
        if (p.avatarUrl) {
          this.avatarUrl.set(p.avatarUrl);
        }
      },
    });
  }

  onSaveProfile(): void {
    if (this.form.valid) {
      this.isSaving.set(true);
      const val = this.form.value;
      this.userApi.updateMyProfile({
        firstName: val.firstName || undefined,
        lastName: val.lastName || undefined,
        title: val.title || undefined,
        bio: val.bio || undefined,
        location: val.location || undefined,
        timezone: val.timezone || undefined,
      }).subscribe({
        next: (res) => {
          this.userState.setProfile(res.data);
          this.isSaving.set(false);
        },
        error: (err) => {
          this.userState.setError(err.message);
          this.isSaving.set(false);
        },
      });
    }
  }

  onAvatarInput(event: Event): void {
    this.avatarUrl.set((event.target as HTMLInputElement).value);
  }

  onSaveAvatar(): void {
    if (this.avatarUrl()) {
      this.isSavingAvatar.set(true);
      this.userApi.updateAvatar({ avatarUrl: this.avatarUrl() }).subscribe({
        next: (res) => {
          this.userState.setProfile(res.data);
          this.isSavingAvatar.set(false);
        },
        error: (err) => {
          this.userState.setError(err.message);
          this.isSavingAvatar.set(false);
        },
      });
    }
  }
}
