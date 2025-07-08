import { Route } from '@angular/router';
import { PermissionsRoleSwitchingComponent } from './role-switching/role-switching.component';
import { PermissionsRouteGuardComponent } from './route-guard/route-guard.component';
import { PermissionsTestComponent } from './test/test.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

export const PERMISSIONS_ROUTE: Route[] = [
  { path: 'role-switching', component: PermissionsRoleSwitchingComponent },
  {
    path: 'route-guard',
    component: PermissionsRouteGuardComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        redirectTo: '/dashboard',
      },
    },
  },
  {
    path: 'test',
    component: PermissionsTestComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'ADMIN',
        redirectTo: '/dashboard',
      },
    },
  },
];
