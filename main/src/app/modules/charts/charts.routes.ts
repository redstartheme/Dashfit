import { Route } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EchartComponent } from './echart/echart.component';
import { ApexchartComponent } from './apexchart/apexchart.component';
import { NgxchartComponent } from './ngxchart/ngxchart.component';
import { GuageComponent } from './guage/guage.component';

export const CHART_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'echart',
    pathMatch: 'full',
  },
  {
    path: 'echart',
    component: EchartComponent,
  },
  {
    path: 'apexchart',
    component: ApexchartComponent,
  },
  {
    path: 'chartjs',
    component: ChartjsComponent,
  },
  {
    path: 'ngxchart',
    component: NgxchartComponent,
  },
  {
    path: 'guage',
    component: GuageComponent,
  },
];
