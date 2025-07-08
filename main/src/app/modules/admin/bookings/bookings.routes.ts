import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { CancelledBookingsComponent } from './cancel-bookings/cancel-bookings.component';

export const BOOKINGS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'all-bookings',
    pathMatch: 'full',
  },
  {
    path: 'all-bookings',
    component: AllBookingsComponent,
  },
  {
    path: 'add-booking',
    component: AddBookingComponent,
  },
  {
    path: 'edit-booking',
    component: EditBookingComponent,
  },
  {
    path: 'cancel-bookings',
    component: CancelledBookingsComponent,
  },
  { path: '**', component: Page404Component },
];
