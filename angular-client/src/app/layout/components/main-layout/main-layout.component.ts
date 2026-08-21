import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
      <app-navbar></app-navbar>

      <div class="flex flex-1 overflow-hidden">
        <app-sidebar></app-sidebar>

        <main class="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-950">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class MainLayoutComponent {}
