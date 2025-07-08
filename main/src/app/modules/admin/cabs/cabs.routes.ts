import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { CabListComponent } from './cab-list/cab-list.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';

export const CABS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'cab-list',
    pathMatch: 'full',
  },
  {
    path: 'cab-list',
    component: CabListComponent,
  },
  {
    path: 'cab-booking',
    component: CabBookingComponent,
  },
  { path: '**', component: Page404Component },
];
