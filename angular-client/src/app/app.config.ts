import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { APP_ENVIRONMENT, defaultEnvironment } from '@core/config/app-environment.interface';
import { APP_CONFIG, defaultConfig } from '@core/config/app-config';
import { ErrorHandlerService } from '@core/errors/error-handler.service';
import { apiPrefixInterceptor } from '@core/http/interceptors/api-prefix.interceptor';
import { correlationIdInterceptor } from '@core/http/interceptors/correlation-id.interceptor';
import { loggingInterceptor } from '@core/http/interceptors/logging.interceptor';
import { authPlaceholderInterceptor } from '@core/http/interceptors/auth-placeholder.interceptor';
import { errorInterceptor } from '@core/http/interceptors/error.interceptor';

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
    provideHttpClient(
      withInterceptors([
        apiPrefixInterceptor,
        correlationIdInterceptor,
        loggingInterceptor,
        authPlaceholderInterceptor,
        errorInterceptor,
      ])
    ),
    provideClientHydration(),
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    { provide: APP_CONFIG, useValue: defaultConfig },
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
