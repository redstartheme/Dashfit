import { Route } from '@angular/router';
import { Page404Component } from 'app/modules/sessions/page404/page404.component';
import { StocksComponent } from './stocks/stocks.component';
import { ExpenseComponent } from './expense/expense.component';

export const REPORTS_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'stocks',
    pathMatch: 'full',
  },
  {
    path: 'stocks',
    component: StocksComponent,
  },
  {
    path: 'expense',
    component: ExpenseComponent,
  },
  { path: '**', component: Page404Component },
];
