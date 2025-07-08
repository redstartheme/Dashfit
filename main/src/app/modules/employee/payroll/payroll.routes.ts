import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { SalaryComponent } from './salary/salary.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

export const EMP_PAYROLL_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'salary',
    pathMatch: 'full',
  },
  {
    path: 'salary',
    component: SalaryComponent,
  },
  {
    path: 'bank-details',
    component: BankDetailsComponent,
  },
  { path: '**', component: Page404Component },
];
