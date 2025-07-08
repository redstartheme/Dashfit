import { Route } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ColumnReorderComponent } from './column-reorder/column-reorder.component';
import { ExpandableRowsComponent } from './expandable-rows/expandable-rows.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SortingComponent } from './sorting/sorting.component';
export const TEBLES_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  {
    path: 'basic',
    component: BasicComponent,
  },
  {
    path: 'filter',
    component: FilterTableComponent,
  },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  {
    path: 'sorting',
    component: SortingComponent,
  },
  {
    path: 'expandable',
    component: ExpandableRowsComponent,
  },
  {
    path: 'column-reorder',
    component: ColumnReorderComponent,
  },
];
