import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { LeaveRequestComponent } from './leave-requests/leave-requests.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { LeaveTypeComponent } from './leave-types/leave-types.component';

export const LEAVE_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'leave-requests',
    pathMatch: 'full',
  },
  {
    path: 'leave-requests',
    component: LeaveRequestComponent,
  },
  {
    path: 'leave-balance',
    component: LeaveBalanceComponent,
  },
  {
    path: 'leave-types',
    component: LeaveTypeComponent,
  },
  { path: '**', component: Page404Component },
];
