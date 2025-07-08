import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { AttendanceCardComponent } from '@shared/components/attendance-card/attendance-card.component';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { NgScrollbar } from 'ngx-scrollbar';

export interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  labels: string[];
}

interface WorkingHistory {
  date: Date;
  arrivalTime: Date;
  departureTime: Date;
  effectiveHours: number;
}

interface LeaveType {
  name: string;
  value: number;
  total: number;
}

@Component({
  selector: 'app-dashboard1',
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    NgApexchartsModule,
    NgScrollbar,
    CdkDrag,
    DatePipe,
    CommonModule,
    MatProgressBarModule,
    CdkDropList,
    DragDropModule,
    AttendanceCardComponent,
  ],
  templateUrl: './dashboard1.component.html',
  styleUrl: './dashboard1.component.scss',
})
export class Dashboard1Component {
  constructor() {
    // Empty constructor
  }
  displayedColumns: string[] = [
    'date',
    'arrivalTime',
    'departureTime',
    'effectiveHours',
  ];

  // Sample data
  dataSource: WorkingHistory[] = [
    {
      date: new Date('2024-10-01'),
      arrivalTime: new Date('2024-10-01T08:00:00'),
      departureTime: new Date('2024-10-01T16:00:00'),
      effectiveHours: 8,
    },
    {
      date: new Date('2024-10-02'),
      arrivalTime: new Date('2024-10-02T09:00:00'),
      departureTime: new Date('2024-10-02T17:00:00'),
      effectiveHours: 8,
    },
    {
      date: new Date('2024-10-03'),
      arrivalTime: new Date('2024-10-03T08:30:00'),
      departureTime: new Date('2024-10-03T17:00:00'),
      effectiveHours: 8.5,
    },
    {
      date: new Date('2024-10-04'),
      arrivalTime: new Date('2024-10-04T07:45:00'),
      departureTime: new Date('2024-10-04T15:45:00'),
      effectiveHours: 8,
    },
    {
      date: new Date('2024-10-05'),
      arrivalTime: new Date('2024-10-05T09:00:00'),
      departureTime: new Date('2024-10-05T13:00:00'),
      effectiveHours: 4,
    },
    {
      date: new Date('2024-10-06'),
      arrivalTime: new Date('2024-10-06T08:00:00'),
      departureTime: new Date('2024-10-06T16:30:00'),
      effectiveHours: 8.5,
    },
    {
      date: new Date('2024-10-07'),
      arrivalTime: new Date('2024-10-07T10:00:00'),
      departureTime: new Date('2024-10-07T18:00:00'),
      effectiveHours: 8,
    },
    {
      date: new Date('2024-10-08'),
      arrivalTime: new Date('2024-10-08T09:15:00'),
      departureTime: new Date('2024-10-08T17:15:00'),
      effectiveHours: 8,
    },
    {
      date: new Date('2024-10-09'),
      arrivalTime: new Date('2024-10-09T08:00:00'),
      departureTime: new Date('2024-10-09T16:00:00'),
      effectiveHours: 8,
    },
    {
      date: new Date('2024-10-10'),
      arrivalTime: new Date('2024-10-10T09:30:00'),
      departureTime: new Date('2024-10-10T17:00:00'),
      effectiveHours: 7.5,
    },
  ];

  leaveTypes: LeaveType[] = [
    {
      name: 'Privilege Leave',
      value: 6,
      total: 10,
    },
    { name: 'Casual Leave', value: 4, total: 10 },
    { name: 'Sick Leave', value: 7, total: 15 },
    { name: 'Personal Leave', value: 2, total: 5 },
    { name: 'Unpaid Leave', value: 3, total: 7 },
    {
      name: 'Maternity Leave',
      value: 2,
      total: 12,
    },
  ];

  holidays = [
    { date: '01 JAN', event: 'New Year Day', daysLeft: 65 },
    { date: '22 APR', event: 'Earth Day', daysLeft: 117 },
    { date: '31 OCT', event: 'Halloween', daysLeft: 334 },
    { date: '14 FEB', event: 'Valentines Day', daysLeft: 110 },
    { date: '25 DEC', event: 'Christmas', daysLeft: 56 },
    { date: '05 JUN', event: 'World Environment Day', daysLeft: 220 },
    { date: '12 AUG', event: 'International Youth Day', daysLeft: 279 },
  ];

  // TODO start
  tasks = [
    {
      id: '1',
      title: 'Check-In Guests',
      done: true,
      priority: 'High',
    },
    {
      id: '2',
      title: 'Handle Guest Inquiries',
      done: false,
      priority: 'High',
    },
    {
      id: '3',
      title: 'Manage Reservations',
      done: false,
      priority: 'Low',
    },
    {
      id: '4',
      title: 'Coordinate with Housekeeping',
      done: true,
      priority: 'Normal',
    },
    {
      id: '5',
      title: 'Public Area Maintenance',
      done: false,
      priority: 'High',
    },
    {
      id: '6',
      title: 'Clean Guest Rooms',
      done: false,
      priority: 'Normal',
    },
    {
      id: '7',
      title: 'Inventory Management',
      done: true,
      priority: 'High',
    },
    {
      id: '8',
      title: 'Report Maintenance Issues',
      done: false,
      priority: 'High',
    },
    {
      id: '9',
      title: 'Serve Food and Drinks',
      done: false,
      priority: 'Low',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  toggle(task: { done: boolean }) {
    task.done = !task.done;
  }
}
