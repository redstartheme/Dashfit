import { Route } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

export const DASHBOARD_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'dashboard1',
    pathMatch: 'full',
  },
  {
    path: 'dashboard1',
    component: Dashboard1Component,
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
  },
  { path: '**', component: Page404Component },
];
