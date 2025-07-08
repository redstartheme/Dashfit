import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';

export const EMP_LEAVES_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'leave-request',
    pathMatch: 'full',
  },
  {
    path: 'leave-request',
    component: LeaveRequestComponent,
  },
  {
    path: 'leave-balance',
    component: LeaveBalanceComponent,
  },
  { path: '**', component: Page404Component },
];
