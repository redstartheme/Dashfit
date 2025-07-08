import { Route } from '@angular/router';
import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@layout/auth-layout/auth-layout.component';
import { AuthGuard } from '@core/guard/auth.guard';
import { TaskComponent } from './task/task.component';
import { Page403Component } from './sessions/page403/page403.component';
import { Page404Component } from './sessions/page404/page404.component';
import { Page500Component } from './sessions/page500/page500.component';
import { ChatComponent } from './chat/chat.component';
import { SupportComponent } from './support/support.component';
import { EmpAttendanceComponent } from './employee/emp-attendance/emp-attendance.component';
import { ShiftComponent } from './employee/shift/shift.component';
import { Role } from '@core/models/role';

export const APP_ROUTE: Route[] = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      // Admin menu start
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'occupancy',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/occupancy/occupancy.routes').then(
            (m) => m.OCCUPANCY_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'bookings',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/bookings/bookings.routes').then(
            (m) => m.BOOKINGS_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'rooms',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/rooms/rooms.routes').then(
            (m) => m.ROOMS_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'staffs',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/staffs/staffs.routes').then(
            (m) => m.STAFFS_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'leaves',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/leaves/leaves.routes').then(
            (m) => m.LEAVE_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'departments',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/departments/departments.routes').then(
            (m) => m.DEPAERMENTS_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'cabs',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/cabs/cabs.routes').then((m) => m.CABS_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'reports',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/reports/reports.routes').then(
            (m) => m.REPORTS_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'housekeeping',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/housekeeping/housekeeping.routes').then(
            (m) => m.HOUSEKEEPING_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'permissions',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/admin/permissions/permissions.routes').then(
            (m) => m.PERMISSIONS_ROUTE
          ),
        data: {
          role: [Role.Admin],
        },
      },
      // Admin menu end
      // employee menu start
      {
        path: 'emp_dashboard',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/employee/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTE
          ),
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: 'attendance',
        canActivate: [AuthGuard],
        component: EmpAttendanceComponent,
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: 'emp-leaves',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/employee/emp-leaves/emp-leaves.routes').then(
            (m) => m.EMP_LEAVES_ROUTE
          ),
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: 'payroll',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../modules/employee/payroll/payroll.routes').then(
            (m) => m.EMP_PAYROLL_ROUTE
          ),
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: 'shift',
        canActivate: [AuthGuard],
        component: ShiftComponent,
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      // employee menu end
      {
        path: 'utilities',
        loadChildren: () =>
          import('./utilities/utilities.routes').then((m) => m.UTILITIES_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'chat',
        component: ChatComponent,
      },
      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.routes').then((m) => m.EMAIL_ROUTE),
      },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'material',
        loadChildren: () =>
          import('./material/material.routes').then((m) => m.MATERIAL_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./forms/forms.routes').then((m) => m.FORMS_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./tables/tables.routes').then((m) => m.TEBLES_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./charts/charts.routes').then((m) => m.CHART_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.routes').then((m) => m.CALENDAR_ROUTE),
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: 'task',
        component: TaskComponent,
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./widgets/widgets.routes').then((m) => m.WIDGET_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.routes').then((m) => m.PROFILE_ROUTE),
        data: {
          role: [Role.Admin],
        },
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./contacts/contacts.routes').then((m) => m.CONTACTS_ROUTE),
        data: {
          role: [Role.Admin, Role.Employee],
        },
      },
      {
        path: '403',
        component: Page403Component,
      },
      {
        path: '404',
        component: Page404Component,
      },
      {
        path: '500',
        component: Page500Component,
      },
    ],
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./sessions/sessions.routes').then((m) => m.SESSION_ROUTE),
  },
  { path: '**', redirectTo: '404' },
];
