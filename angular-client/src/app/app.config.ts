import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { APP_ENVIRONMENT, defaultEnvironment } from '@core/config/app-environment.interface';
import { GlobalErrorHandlerService } from '@core/errors/global-error-handler.service';
import { apiPrefixInterceptor } from '@core/interceptors/api-prefix.interceptor';
import { errorInterceptor } from '@core/interceptors/error.interceptor';

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
  Sparkles,
  Server,
  ChevronRight,
  ChevronLeft,
  Circle,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([apiPrefixInterceptor, errorInterceptor])),
    provideClientHydration(),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    { provide: APP_ENVIRONMENT, useValue: defaultEnvironment },
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
        Sparkles,
        Server,
        ChevronRight,
        ChevronLeft,
        Circle,
      })
    ),
  ],
};
