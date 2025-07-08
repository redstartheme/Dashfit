import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AllStaffsComponent } from './all-staffs/all-staffs.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';

export const STAFFS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'all-staffs',
    pathMatch: 'full',
  },
  {
    path: 'all-staffs',
    component: AllStaffsComponent,
  },
  {
    path: 'add-staff',
    component: AddStaffComponent,
  },
  {
    path: 'edit-staff',
    component: EditStaffComponent,
  },
  {
    path: 'staff-profile',
    component: StaffProfileComponent,
  },
  { path: '**', component: Page404Component },
];
