import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { RoomCleaningComponent } from './room-cleaning/room-cleaning.component';
import { LaundryServiceComponent } from './laundry-services/laundry-services.component';

export const HOUSEKEEPING_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'room-cleaning',
    pathMatch: 'full',
  },
  {
    path: 'room-cleaning',
    component: RoomCleaningComponent,
  },
  {
    path: 'laundry-services',
    component: LaundryServiceComponent,
  },
  { path: '**', component: Page404Component },
];
