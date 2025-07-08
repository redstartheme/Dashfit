import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SettingsInterceptor } from './settings-interceptor';
import { TokenInterceptor } from './token-interceptor';
import { ErrorInterceptor } from './error-interceptor';

export * from './settings-interceptor';
export * from './token-interceptor';
export * from './error-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SettingsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
