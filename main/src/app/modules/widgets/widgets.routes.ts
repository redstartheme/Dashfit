import { Route } from '@angular/router';
import { CardWidgetComponent } from './card-widget/card-widget.component';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';

export const WIDGET_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'css-grid',
    pathMatch: 'full',
  },
  {
    path: 'card-widget',
    component: CardWidgetComponent,
  },
  {
    path: 'chart-widget',
    component: ChartWidgetComponent,
  },
];
