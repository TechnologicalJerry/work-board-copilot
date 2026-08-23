import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppShellComponent } from './app-shell.component';
import { OrganizationContextService } from '@core/context/organization-context.service';
import { WorkspaceContextService } from '@core/context/workspace-context.service';
import { NavigationService } from '@core/navigation/navigation.service';
import { AuthService } from '@features/auth/services/auth.service';
import {
  LucideAngularModule,
  LayoutDashboard,
  Kanban,
  Building,
  Boxes,
  Users,
  FolderKanban,
  CheckSquare,
  Zap,
  MessageSquare,
  FileText,
  Paperclip,
  Bell,
  Clock,
  BarChart3,
  Workflow,
  Search,
  Bot,
  CreditCard,
  Settings,
  ChevronRight,
  ChevronLeft,
} from 'lucide-angular';

describe('AppShellComponent', () => {
  let component: AppShellComponent;
  let fixture: ComponentFixture<AppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppShellComponent],
      providers: [
        OrganizationContextService,
        WorkspaceContextService,
        NavigationService,
        AuthService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        importProvidersFrom(
          LucideAngularModule.pick({
            LayoutDashboard,
            Kanban,
            Building,
            Boxes,
            Users,
            FolderKanban,
            CheckSquare,
            Zap,
            MessageSquare,
            FileText,
            Paperclip,
            Bell,
            Clock,
            BarChart3,
            Workflow,
            Search,
            Bot,
            CreditCard,
            Settings,
            ChevronRight,
            ChevronLeft,
          })
        ),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the application shell component', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('header')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('aside')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('main')).toBeTruthy();
  });
});
