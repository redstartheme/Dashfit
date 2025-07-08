import { Route } from '@angular/router';
import { CssGridComponent } from './css-grid/css-grid.component';
import { CssHelpersComponent } from './css-helpers/css-helpers.component';

export const UTILITIES_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'css-grid',
    pathMatch: 'full',
  },
  {
    path: 'css-grid',
    component: CssGridComponent,
  },
  {
    path: 'css-helpers',
    component: CssHelpersComponent,
  },
];
