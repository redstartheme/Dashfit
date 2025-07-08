import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';

export const DEPAERMENTS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'all-departments',
    pathMatch: 'full',
  },
  {
    path: 'all-departments',
    component: AllDepartmentsComponent,
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent,
  },
  {
    path: 'edit-department',
    component: EditDepartmentComponent,
  },
  { path: '**', component: Page404Component },
];
