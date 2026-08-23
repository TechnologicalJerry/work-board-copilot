import { ApplicationConfig, ErrorHandler, importProvidersFrom, provideAppInitializer, inject } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';
import { APP_ENVIRONMENT, defaultEnvironment } from '@core/config/app-environment.interface';
import { APP_CONFIG, defaultConfig } from '@core/config/app-config';
import { ErrorHandlerService } from '@core/errors/error-handler.service';
import { apiPrefixInterceptor } from '@core/http/interceptors/api-prefix.interceptor';
import { correlationIdInterceptor } from '@core/http/interceptors/correlation-id.interceptor';
import { tenantContextInterceptor } from '@core/http/interceptors/tenant-context.interceptor';
import { loggingInterceptor } from '@core/http/interceptors/logging.interceptor';
import { authInterceptor } from '@core/http/interceptors/auth.interceptor';
import { errorInterceptor } from '@core/http/interceptors/error.interceptor';
import { AuthService } from './features/auth/services/auth.service';

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
        tenantContextInterceptor,
        loggingInterceptor,
        authInterceptor,
        errorInterceptor,
      ])
    ),
    provideClientHydration(),
    provideAppInitializer(() => inject(AuthService).restoreSession()),
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
