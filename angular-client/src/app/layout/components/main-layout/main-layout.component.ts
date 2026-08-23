import { Component } from '@angular/core';
import { AppShellComponent } from '../app-shell/app-shell.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [AppShellComponent],
  template: `<app-shell></app-shell>`,
})
export class MainLayoutComponent {}
